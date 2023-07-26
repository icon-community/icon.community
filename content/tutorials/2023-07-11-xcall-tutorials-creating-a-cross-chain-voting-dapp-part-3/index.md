---
title: "xCall tutorial part 3: Integrating rollback functionality in the cross chain voting dApp."
date: 2023-07-24
author: espanicon
slug: x-call-tutorial-part-3-integrating-rollback-functionality
description: xcall tutorial part 3, integrating rollback into the cross chain voting dApp.
draft: false
tags:
- java
- smart contract
- solidity
- xcall
---
## Introduction

In the first two parts of this series about creating a cross chain voting dApp we created the Java and Solidity smart contracts, executed the deployment and created the nodejs scripts to interact with the contracts.

Currently the overall logic of the dApp implements a one-way communication process, users can cast vote in the origin chain (ICON) and the destination chain (Sepolia) keeps and updated tally of the votes.

In this tutorial we are going to modify the smart contracts to add a rollback functionality and implement a two-way communication system.

The source code for the project can be found in the following github repo:

https://github.com/icon-community/crosschain-voting-dapp-with-rollback

## Refactoring the smart contracts

To showcase the rollback functionality we are going to add a cap to the amount of votes that can be casted in our dApp, this voting cap will be defined in the destination chain and once the voting limit is reached a `revert` will be raised in the transaction to trigger the rollback and notify the origin chain that the tally of votes has reached its limit. The overview of the dApp logic is as follow:

* User casts a vote in the origin chain either using the `voteYes()` or `voteNo()` method.
* Tally of votes in the origin chain is updated, it increases by one for `countOfYes` variable if the `voteYes()` method is called or it increases the `countOfNo` variable if the `voteNo()` method is called.
* The dApp contract in the origin chain invokes the `sendCallMessage` method of the xCall contract in the origin chain, the rollback param will either be a byte representation of the string `voteYesRollback` or the string `voteNoRollback` to identify the type of vote that was cast.
* The destination chain receives the message, if the total vote cap has been reached it triggers a `revert` and executes a rollback, if the total vote cap has not been reached it updates the interal tally of the votes.

The following is the updated Java smart contract:

```java
package app;

import score.Address;
import score.Context;
import score.VarDB;
import score.annotation.EventLog;
import score.annotation.External;
import score.annotation.Optional;
import score.annotation.Payable;
import scorex.util.HashMap;

import java.math.BigInteger;
import java.util.Map;

public class VotingDapp {
    private final VarDB<BigInteger> countOfYes = Context.newVarDB("yes", BigInteger.class);
    private final VarDB<BigInteger> countOfNo = Context.newVarDB("no", BigInteger.class);
    private final VarDB<String> destinationBtpAddress = Context.newVarDB("btpAddress", String.class);
    private final VarDB<Address> xcallContractAddress = Context.newVarDB("xcall", Address.class);

    private static final String ROLLBACK_YES = "voteYesRollback";
    private static final String PAYLOAD_YES = "voteYes";
    private static final String ROLLBACK_NO = "voteNoRollback";
    private static final String PAYLOAD_NO = "voteNo";

    private final VarDB<String> rollbackYes = Context.newVarDB(ROLLBACK_YES, String.class);
    private final VarDB<String> payloadYes = Context.newVarDB(PAYLOAD_YES, String.class);
    private final VarDB<String> rollbackNo = Context.newVarDB(ROLLBACK_NO, String.class);
    private final VarDB<String> payloadNo = Context.newVarDB(PAYLOAD_NO, String.class);

    public VotingDapp(Address _sourceXCallContract, String _destinationBtpAddress) {
        this.destinationBtpAddress.set(_destinationBtpAddress);
        this.xcallContractAddress.set(_sourceXCallContract);
        this.countOfNo.set(BigInteger.ZERO);
        this.countOfYes.set(BigInteger.ZERO);
        this.payloadYes.set(PAYLOAD_YES);
        this.payloadNo.set(PAYLOAD_NO);
        this.rollbackYes.set(ROLLBACK_YES);
        this.rollbackNo.set(ROLLBACK_NO);
    }

    private BigInteger _sendCallMessage(byte[] _data, @Optional byte[] _rollback) {
        Address xcallSourceAddress = this.xcallContractAddress.get();
        String _to = this.destinationBtpAddress.get();
        return Context.call(BigInteger.class, Context.getValue(), xcallSourceAddress, "sendCallMessage", _to, _data, _rollback);
    }

    @Payable
    @External
    public void voteYes() {
        // Increase local count of Yes votes
        BigInteger sum = this.countOfYes.get().add(BigInteger.ONE);
        this.countOfYes.set(sum);

        // // make call to xcall
        byte[] bytePayload = this.payloadYes.get().getBytes();
        byte[] byteRollback = this.rollbackYes.get().getBytes();

        BigInteger id = _sendCallMessage(bytePayload, byteRollback);
        Context.println("sendCallMessage Response:" + id);
    }

    @Payable
    @External
    public void voteNo() {
        // Increase local count of No votes
        BigInteger sum = this.countOfNo.get().add(BigInteger.ONE);
        this.countOfNo.set(sum);

        // make call to xcall
        byte[] bytePayload = this.payloadNo.get().getBytes();
        byte[] byteRollback = this.rollbackNo.get().getBytes();

        BigInteger id = _sendCallMessage(bytePayload, byteRollback);
        Context.println("sendCallMessage Response:" + id);
    }

    @External(readonly = true)
    public Map<String, BigInteger> getVotes() {
        Map<String, BigInteger> votesMap = new HashMap<>();
        votesMap.put("yes", this.countOfYes.get());
        votesMap.put("no", this.countOfNo.get());
        return votesMap;
    }

    @External(readonly = true)
    public String getDestinationBtpAddress() {
        return this.destinationBtpAddress.get();
    }

    @External(readonly = true)
    public Address getXCallContractAddress() {
        return this.xcallContractAddress.get();
    }

    @Payable
    @External
    public void handleCallMessage(String _from, byte[] _data) {
        Address caller = Context.getCaller();
        String payload = new String(_data);
        Address xcallSourceAddress = this.xcallContractAddress.get();
        Context.println("handleCallMessage payload:" + payload);
        // If the caller is the xcall contract, then update the local count
        if (caller.equals(xcallSourceAddress)) {
            if (payload.equals(this.rollbackYes.get())) {
                BigInteger sum = this.countOfYes.get().subtract(BigInteger.ONE);
                this.countOfYes.set(sum);
            } else if (payload.equals(this.rollbackNo.get())) {
                BigInteger sum = this.countOfNo.get().subtract(BigInteger.ONE);
                this.countOfNo.set(sum);
            } else {
                Context.revert("Invalid payload for rollback");
            }
        } else {
            Context.revert("Unauthorized caller");
        }
        RollbackDataReceived(_from, _data);
    }

    @EventLog
    public void RollbackDataReceived(String _from, byte[] _rollback) {}
}
```

The following code showcase the updated Solidity contract:
```solidity
// contracts/VotingDapp.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title VotingDapp
 * @dev Implements the voting dapp contract.
 */
contract VotingDapp {
  struct Votes {
    uint256 countOfYes;
    uint256 countOfNo;
  }
  Votes public votes;
  address private callSvc;
  int public votesCap = 0;

  /**
     @notice Constructor
     @param _callService The address of the contract that will only be allowed to call the handleCallMessage function
     @param _votesCap The max amount of votes that can be casted
   */
  constructor(address _callService, int _votesCap) {
    votes.countOfYes = 0;
    votes.countOfNo = 0;
    callSvc = _callService;
    votesCap = _votesCap;
  }

  /**
     @notice Returns the votes struct.
     @return The votes struct
   */
  function getVotes() public view returns (uint256, uint256) {
    return (votes.countOfYes, votes.countOfNo);
  }

  /**
     @notice Returns the max amount of votes that can be casted.
     @return The votesCap
   */
  function getVotesCap() public view returns (int) {
    return votesCap;
  }

  /**
     @notice Adds a yes vote to the votes struct.
   */
  function addYesVote() internal {
    if (int(votes.countOfYes +  votes.countOfNo) + 1 > votesCap) {
      revert("VotesCapReached");
    }
    votes.countOfYes++;
  }

  /**
     @notice Adds a no vote to the votes struct.
   */
  function addNoVote() internal {
    if (int(votes.countOfYes +  votes.countOfNo) + 1 > votesCap) {
      revert("VotesCapReached");
    }
    votes.countOfNo++;
  }

  /**
     @notice Modifier that only allows the callSvc to call the function.
   */
  modifier onlyCallService() {
      require(msg.sender == callSvc, "OnlyCallService");
      _;
  }

  /**
     @notice Returns the address of the Call Message Service.
     @dev the callSvc is the only contract that can call the handleCallMessage function.
     @return  The address of the callSvc
   */
  function getCallService() public view returns (address) {
      return callSvc;
  }

  /**
     @notice Compares two strings
     @param _base The first string
     @param _value The second string
     @return True if the strings are equal, false otherwise
   */
  function compareTo(
      string memory _base,
      string memory _value
  ) internal pure returns (bool) {
      if (
          keccak256(abi.encodePacked(_base)) ==
          keccak256(abi.encodePacked(_value))
      ) {
          return true;
      }
      return false;
  }

  /**
     @notice Handles the call message received from the source chain.
     @dev Only calleable from the callSvc which is the xCall contract.
     @param _from The BTP address of the caller on the source chain
     @param _data The calldata delivered from the caller
   */
  function handleCallMessage(
      string calldata _from,
      bytes calldata _data
  ) external {
      string memory msgData = string(_data);
      emit MessageReceived(_from, msgData);
      if (compareTo("voteYes", msgData)) {
          addYesVote();
      } else if (compareTo("voteNo", msgData)) {
          addNoVote();
      } else {
        revert("InvalidMessage");
      }
  }

  /**
     @notice Handles the reply message received from the source chain.
     @dev Only called from the Call Message Service.
     @param _from The BTP address of the caller on the source chain
     @param _msgData The cross chain data sent
   */
  event MessageReceived(
      string _from,
      string _msgData
  );
}

```

## Refactoring the nodejs script to interact with the dApp.

Once the refactoring for the smart contract is finished, the modifications to the nodejs scripts to showcase the rollback scenario is very minimal.

The logic executes the same as the example showcase in [part 2 of this xCall tutorial series](https://icon.community/tutorials/x-call-tutorial-part-2-deploying-and-interacting-with-a-cross-chain-voting-dapp/) but we modify the script to continually keep casting votes until the votes cap is reached and then we execute one more vote to trigger the rollback.

```js
// Previous code
...

/*
 * Tests
 * @param {Object} contracts
 * @param {string} contracts.primary - ICON contract address
 * @param {string} contracts.secondary - EVM contract address
 * @returns {Promise<void>}
 */
async function tests(contracts, rollback = false) {
  try {
    // vote yes from icon
    const voteYesFromIconResult = await voteYesFromIcon(contracts.primary);
    console.log("\n# vote yes from icon result:", voteYesFromIconResult);

    // get tx result
    const txResult = await getTxResult(voteYesFromIconResult);
    console.log("\n# tx result for calling voteYes:", txResult.txHash);

    // filter CallMessageSent event
    const callMessageSentEvent = await filterCallMessageSentEvent(
      txResult.eventLogs
    );
    console.log("\n# CallMessageSent event:", callMessageSentEvent);

    // parse CallMessageSent event
    const parsedCallMessageSentEvent = await parseCallMessageSentEvent(
      callMessageSentEvent
    );
    console.log(
      "\n# parsed CallMessageSent event:",
      parsedCallMessageSentEvent
    );

    // _sn from source
    const snFromSource = parsedCallMessageSentEvent._sn;
    // filter CallMessage event evm
    const callMessageEventEvmFilters = filterCallMessageEventEvm(
      contracts.primary,
      contracts.secondary,
      snFromSource
    );
    console.log(
      "\n# CallMessage event evm filters:",
      callMessageEventEvmFilters
    );

    // wait for CallMessage event evm
    const eventsEvm = await waitEventEVM(callMessageEventEvmFilters);

    // fetch messageId from CallMessage event evm
    const messageId = eventsEvm[0].args._reqId;
    console.log("\n# Message ID:", messageId);

    // fetch data from CallMessage event evm
    const data = eventsEvm[0].args._data;
    console.log("\n# events params:");
    console.log(JSON.stringify(eventsEvm[0].args));

    // invoke execute call on destination chain
    console.log("\n# invoking execute call on destination chain");
    const executeCallTxHash = await executeCallEvm(messageId, data);
    console.log("\n# execute call tx hash:", executeCallTxHash.transactionHash);

    // filter CallExecuted event evm
    const callExecutedEventEvmFilters = filterCallExecutedEventEvm(messageId);
    console.log(
      "\n# callExecuted event evm filters:",
      callExecutedEventEvmFilters
    );

    // wait for CallExecuted event evm
    const eventsEvm2 = await waitEventEVM(callExecutedEventEvmFilters);
    console.log("\n# events params:");
    console.log(JSON.stringify(eventsEvm2[0].args));

    if (rollback) {
      // execute logic with rollback because current votes is equal or grater than votes cap
      // fetch ResponseMessage event on origin chain
      const responseMessageEvent = await waitResponseMessageEventICON(
        snFromSource
      );
      console.log("\n# ResponseMessage  event:", responseMessageEvent);
      // fetch RollbackMessage event on origin chain
      const rollbackMessageEvent = await waitRollbackMessageEventICON(
        snFromSource
      );
      console.log("\n# RollbackMessage  event:", rollbackMessageEvent);
      // fetch votes from origin chain before rollback
      const votesFromICONBeforeRollback = await getVotesFromICON(
        contracts.primary
      );
      console.log(
        "\n# votes from ICON before rollback:",
        votesFromICONBeforeRollback
      );
      // call the payable method executeRollback on the xcall contract of the origin chain
      console.log("\n# invoking executeRollback call on origin chain");
      const executeRollbackTxHash = await executeRollbackICON(
        rollbackMessageEvent.indexed[1]
      );
      // get tx result
      const executeRollbackTxResult = await getTxResult(executeRollbackTxHash);
      console.log(
        "\n# tx result for calling executeRollback:",
        executeRollbackTxResult.txHash
      );
      // fetch votes from origin chain after rollback
      const votesFromICONAfterRollback = await getVotesFromICON(
        contracts.primary
      );
      console.log(
        "\n# votes from ICON after rollback:",
        votesFromICONAfterRollback
      );
      // fetch votes from destination chain after rollback
      const votesFromEVM = await getVotesFromEVM(contracts.secondary);
      console.log("\n# votes from EVM:", votesFromEVM);
    }
  } catch (e) {
    console.log("error running tests", e);
  }
}

/*
 * Main
 * @returns {Promise<void>}
 */
async function main() {
  try {
    // check if contracts have been deployed already
    let contracts = null;
    if (isDeployed()) {
      console.log("\n# using deployed contracts");
      contracts = getDeployments();
    } else {
      console.log("\n# deploying contracts");
      contracts = await deploy();
      saveDeployments(contracts);
    }

    if (contracts !== null) {
      console.log("\n# deployed contracts:", contracts);

      // check votes ledger on destination chain
      const votesFromEVM = await getVotesFromEVM(contracts.secondary);
      const votesCap = await getVotesCapFromEVM(contracts.secondary);
      const votesCapParsed = votesCap.toString();
      console.log("\n# votes cap from EVM:", votesCapParsed);

      const sum = votesFromEVM[0].add(votesFromEVM[1]).toString();
      console.log("\n# votes from EVM:", votesFromEVM);
      console.log("\n# sum of votes from EVM:", sum);

      for (let i = Number(sum); i < Number(votesCapParsed); i++) {
        // vote until votes cap is reached
        await tests(contracts);
      }

      // execute logic with rollback because current votes is equal or grater than votes cap
      await tests(contracts, true);
    }
  } catch (e) {
    console.log("error running main", e);
  }
}

main();

```

## Conclusion

In this third tutorial of the xCall series about creating a cross chain voting dApp we refactored the Java and Solidity smart contracts to implement a rollback scenario by creating a limit in the amount of votes that can be cast.

Once the limit is reached a `revert` is raised in the dApp contract on the destination chain which triggers the rollback on the xCall contract.

In the next tutorial we will explain unit testing for the Java and Solidity smart contracts.

## Further Resources
* Smart contracts in the official docs: https://docs.icon.community/icon-stack/smart-contracts
* Java score examples: https://github.com/icon-project/java-score-examples
* Javaee scorex: https://github.com/icon-project/javaee-scorex
* javaee api docs: https://www.javadoc.io/doc/foundation.icon/javaee-api/latest/index.html
