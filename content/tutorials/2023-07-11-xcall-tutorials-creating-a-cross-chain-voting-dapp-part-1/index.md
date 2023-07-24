---
title: "xCall tutorial part 1: Creating a cross chain voting dapp."
date: 2023-07-11
author: espanicon
slug: x-call-tutorial-part-1-creating-a-cross-chain-voting-dapp
description: xcall tutorial part 1, creating a cross chain voting dapp. Developing the smart contracts
draft: false
tags:
- java
- smart contract
- solidity
- xcall
---
## Introduction

xCall is a standard interface to make permission-less calls between different blockchain networks. Each network that ICON is interoperable with has an xCall contract address that dApps can call to transfer data across chains.

In this tutorial we are going to create a cross chain voting dapp which is comprised of:
 * A smart contract on the source chain (ICON) written in Java.
 * A smart contract on the destination chain (Ethereum) written in Solidity.
 * A nodejs script that will deploy the contracts and interact with them via RPC calls.


The crosschain voting dApp we are creating for this tutorial allows users (wallets on the origin chain) to cast a simple vote of 'yes' or 'no' by calling one of two methods named 'voteYes' and 'voteNo' on the contract thats deployed on the origin chain, this will trigger a crosschain message using xCall that will send the votes to the destination chain and we will keep a ledger of the votes that has been casted on both chains.

The entire code for this tutorial (java contract, solidity contract and js scripts) can be found in the following repo:
* https://github.com/icon-community/crosschain-voting-dapp

The folder structure of the project is shown in the following section. The project has a `contracts` folder which inside has a `jvm` and a `solidity` folder which hosts the Java and Solidity contracts and at the root of the project we have the main file `index.js` which hosts the logic to interact with the contracts and the xCall interface.

```bash
tree -I 'node_modules|build|local|test|bin|gradle'
.
├── config.js
├── contracts
│   ├── jvm
│   │   ├── build.gradle
│   │   ├── gradlew
│   │   ├── gradlew.bat
│   │   ├── settings.gradle
│   │   └── VotingDapp
│   │       ├── build.gradle
│   │       └── src
│   │           └── main
│   │               ├── java
│   │               │   └── app
│   │               │       ├── RollbackData.java
│   │               │       ├── VotingDapp.java
│   │               │       └── XCallProxy.java
│   │               └── resources
│   └── solidity
│       ├── contracts
│       │   ├── interfaces
│       │   │   ├── ICallServiceReceiver.sol
│       │   │   └── ICallService.sol
│       │   └── VotingDapp.sol
│       └── migrations
│           └── 1_voting_dapp.js
├── deployments.json
├── index.js
├── lib.js
├── package.json
├── package-lock.json
├── README.md
├── truffle-config.js
└── xcallAbi.json
```

## Java smart contract

The smart contract on the origin chain in our setup is written in Java and for this example it will be deployed on the Berlin Testnet of the ICON Network.

For setting up the Java development environment you can follow the instructions in the following tutorial:
* https://icon.community/tutorials/java-tutorial-part-1-setting-development-environment-and-writing-smart-contract/

The implementation of the smart contract will have two public (payable) methods called `voteYes()` and `voteNo()` which will trigger the crosschain transaction.

These methods will internally call the private method `_sendCallMessage(byte[] _data, @Optional byte[] _rollback)`.

The `_sendCallMessage` method in our Java contract will invoke the `sendCallMessage` method of the xCall contract on the origin chain to initiate the crosschain transfer.

An internal tally of the votes that has been casted will be saved in two variables (BigInteger) that are named `countOfYes` and `countOfNo` and are initiated with a value of zero at the moment of deployment.

The contract will have a `readonly` method called `getVotes()` that will return the current state of the votes which should be the same both on the destination and origin chains.

During the deployment of this contract we are going to provide the address of the xcall contract on the origin chain and the btp address of the solidity contract on the destination chain which should be deployed first.


The following is the entire contract written in Java, the code can be found in the `./contracts/jvm/VotingDapp/src/main/java/app/VotingDapp.java` file.

```java
package app;

import foundation.icon.score.client.ScoreClient;
import score.Address;
import score.Context;
import score.DictDB;
import score.UserRevertedException;
import score.VarDB;
import score.annotation.EventLog;
import score.annotation.External;
import score.annotation.Optional;
import score.annotation.Payable;
import scorex.util.HashMap;

import java.math.BigInteger;
import java.util.Map;

@ScoreClient
public class VotingDapp {
    private final VarDB<BigInteger> countOfYes = Context.newVarDB("yes", BigInteger.class);
    private final VarDB<BigInteger> countOfNo = Context.newVarDB("no", BigInteger.class);
    private final VarDB<String> destinationBtpAddress = Context.newVarDB("btpAddress", String.class);
    private final VarDB<Address> xcallContractAddress = Context.newVarDB("xcall", Address.class);

    public VotingDapp(Address _sourceXCallContract, String _destinationBtpAddress) {
        this.destinationBtpAddress.set(_destinationBtpAddress);
        this.xcallContractAddress.set(_sourceXCallContract);
        this.countOfNo.set(BigInteger.ZERO);
        this.countOfYes.set(BigInteger.ZERO);
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

        // make call to xcall
        byte[] _rollback = null;
        String payload = "voteYes";
        byte[] bytePayload = payload.getBytes();

        BigInteger id = _sendCallMessage(bytePayload, _rollback);
        Context.println("sendCallMessage Response:" + id);
    }

    @Payable
    @External
    public void voteNo() {
        // Increase local count of No votes
        BigInteger sum = this.countOfNo.get().add(BigInteger.ONE);
        this.countOfNo.set(sum);

        // make call to xcall
        byte[] _rollback = null;
        String payload = "voteNo";
        byte[] bytePayload = payload.getBytes();

        BigInteger id = _sendCallMessage(bytePayload, _rollback);
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

    @External
    public void handleCallMessage(String _from, byte[] _data) {
    }
}

```

To compile the contract in java we move into the `./contracts/jvm/` folder and execute the commands `./gradlew b` and `./gradlew op` to compile and optimize the compiled file for deployment.

```bash
cd contracts/jvm
./gradlew b
./gradlew op
```

## Solidity smart contract

The smart contract on the destination chain is written in solidity and will be deployed in the Sepolia testnet for Ethereum. The source file for the contract can be found in the `./contracts/solidity/contracts/VotingDapp.sol` file.

The implementation of this smart contracts is comprised of a `struct` variable named `Votes` that will have two `BigInteger` params named `countOfYes` and `countOfNo` that will serve as counters for the amount of "yes" and "no" votes and a variable of type `Address` named `callSvc` that will be setup to the contract address of the xCall contract on Sepolia, this will ensure that only the xCall contract is allowed to modify the tally of votes. These variables are initiated in the constructor, the vote counters start with a value of zero and the `callSvc` variable is setup during deployment.

We have a public function called `getVotes()` that returns the current state of the votes and two internal functions named `addYesVote()` and `addNoVote()` that are called by the `handleCallMessage(string calldata _from, bytes calldata _data)` method of our solidity contract.

The `handleCallMessage` method is a requirement to interact with xCall, once a message is received on the destination chain it is required by the user to sign a transaction calling the `executeCall` method of the xCall contract to initiate the last step of a cross chain message with xCall, this transaction will allow the xCall contract  to pass onto our solidity contract the cross chain message and we then handle the logic in our solidity contract in the destination chain, in our specific case, depending on the payload (the message being send) we either increase the votes in the tally for "yes" or the "no" votes.


The following is the entire contract written in Solidity, the code can be found in the `./contracts/solidity/contracts/VotingDapp.sol` file.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ICallService.sol";
import "./interfaces/ICallServiceReceiver.sol";

contract VotingDapp is ICallServiceReceiver {
  struct Votes {
    uint256 countOfYes;
    uint256 countOfNo;
  }

  Votes public votes;
  address private callSvc;
  uint256 private lastId;
  struct RollbackData {
      uint256 id;
      bytes rollback;
      uint256 ssn;
  }
  mapping(uint256 => RollbackData) private rollbacks;

  constructor(address _callService) {
    votes.countOfYes = 0;
    votes.countOfNo = 0;
    callSvc = _callService;
  }

  function getVotes() public view returns (uint256, uint256) {
    return (votes.countOfYes, votes.countOfNo);
  }

  function addYesVote() internal {
    votes.countOfYes++;
  }

  function addNoVote() internal {
    votes.countOfNo++;
  }

  modifier onlyCallService() {
      require(msg.sender == callSvc, "OnlyCallService");
      _;
  }

  function getCallService() public view returns (address) {
      return callSvc;
  }

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
     @dev Only called from the Call Message Service.
     @param _from The BTP address of the caller on the source chain
     @param _data The calldata delivered from the caller
   */
  function handleCallMessage(
      string calldata _from,
      bytes calldata _data
  ) external override onlyCallService {
      string memory msgData = string(_data);
      emit MessageReceived(_from, _data, msgData);
      if (compareTo("revertMessage", msgData)) {
          revert("revertFromDApp");
      }
      if (compareTo("voteYes", msgData)) {
          addYesVote();
      } else if (compareTo("voteNo", msgData)) {
          addNoVote();
      }
  }

  event MessageReceived(
      string _from,
      bytes _data,
      string msgData
  );
}
```
To compile the Solidity contract we simply run the command `npm run compile-solidity`.

This command internally triggers the command `npx truffle compile` to utilize truffle to compile the Solidity contract.

The `truffle-config.js` configuration file has the following setup that allows truffle to fetch the solidity contract from the `contracts/solidity` folder.

```bash
module.exports = {
  contracts_directory: "./contracts/solidity/contracts",
  contracts_build_directory: "./contracts/solidity/build",
  migrations_directory: "./contracts/solidity/migrations",
  ...
}
```

The compiled Solidity contract can be found in the `./contracts/solidity/build/` folder.

## Conclusion

In this first part of this tutorial serie we went over the introduction of the sample cross chain voting dapp that interacts with xCall, explained the Java and Solidity smarts contracts that will be deployed  to the Berlin testnet and Sepolia testnet for ICON and Ethereum.

We will continue in the next tutorial with the process for deployments of these smarts contracts in their specific chains and how to interact with them once they have been deployed.

## Further Resources
* Smart contracts in the official docs: https://docs.icon.community/icon-stack/smart-contracts
* Java score examples: https://github.com/icon-project/java-score-examples
* Javaee scorex: https://github.com/icon-project/javaee-scorex
* javaee api docs: https://www.javadoc.io/doc/foundation.icon/javaee-api/latest/index.html
