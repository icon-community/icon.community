---
title: "xCall tutorial part 2: Deploying and interacting with a cross chain voting dapp."
date: 2023-07-11
author: espanicon
slug: x-call-tutorial-part-2-deploying-and-interacting-with-a-cross-chain-voting-dapp
description: xcall tutorial part 2, creating a cross chain voting dapp. Deploying and interacting with the contracts
draft: false
tags:
- java
- smart contract
- solidity
- xcall
---
## Introduction

In the first part of this series about creating a cross chain voting dApp that interacts with xCall we went over the process of setting up the project and detailing the code logic in our Java and Solidity smart contracts.

In this second part we will be deploying the smart contracts into their respective chains (Berlin testnet for the Java contract and Sepolia testnet for the solidity contract) and then we will interact with these contracts by casting a vote from the origin chain (Berlin) which will interact with xCall to send a cross chain message into the Sepolia testnet to our Solidity smart contract  to keep a tally of the votes on both chains.

## Deploying the smart contracts

Once the contracts have been compiled the nodejs scripts handles the deployment of the smart contracts into their respective chains by first checking if a `deployments.json` file has been previously created at the root of the project folder, once that file has been created, consecutive runs of the main `index.js` file will bypass the deployment process.

### Deploying the Solidity contract on Sepolia

The Solidity contract is the first one to be deployed, the logic for the deployment can be seen in the following function inside the `./lib.js` file:

```js
/*
 * deployEvm - deploys the dapp contract on the EVM chain
 * @returns {string} - the address of the deployed contract
 * @throws {Error} - if there is an error deploying the contract
 */
async function deployEvm() {
  try {
    console.log("\n # Deploying contract on EVM chain...");
    const { abi, bytecode } = getDappContract();
    const contract = new EVM_SERVICE.eth.Contract(abi);
    // contract.options.data = bytecode;
    const deployTx = contract.deploy({
      data: bytecode,
      arguments: [XCALL_SECONDARY]
    });
    const deployedContract = await deployTx
      .send({
        from: EVM_WALLET.address,
        gas: await deployTx.estimateGas()
      })
      .once("transactionHash", txHash => {
        console.log("Mining deployment transaction...");
        console.log("txHash", txHash);
      });

    return deployedContract.options.address;
  } catch (e) {
    console.log(e);
    throw new Error("Error deploying contract on EVM chain");
  }
}
```
### Deploying the Java contract on Berlin

For the deployment of the ICON contract we use the ICON Javascript SDK to sign the deployment transaction and we provide the address of the xCall contract on the origin chain and the BTP address of the already deployed solidity contract on the destination chain as params.

```js
/*
 * deployIconContract - deploys the contract on ICON
 * @param {object} params - the params for the Icon contract
 * @returns {object} - the result of the transaction
 * @throws {Error} - if there is an error deploying the contract
 */
async function deployIconContract(params) {
  try {
    const content = getIconContractByteCode();
    const payload = new IconBuilder.DeployTransactionBuilder()
      .contentType("application/java")
      .content(`0x${content}`)
      .params(params)
      .from(ICON_WALLET.getAddress())
      .to(contract.icon.chain)
      .nid(NID)
      .version(3)
      .timestamp(new Date().getTime() * 1000)
      .stepLimit(IconConverter.toBigNumber(2500000000))
      .build();

    const signedTx = new SignedTransaction(payload, ICON_WALLET);
    return await ICON_SERVICE.sendTransaction(signedTx).execute();
  } catch (e) {
    console.log("error deploying contract", e);
    throw new Error("Error deploying contract");
  }
}
```

## Interacting with the cross chain dApp

To interact with xCall we need to first understand the cycle of a cross chain message using xCall.

* Invoke `sendCallMessage` method of the xCall contract on the origin chain.
* Wait and fetch the `callMessageSent` event on the origin chain and the `CallMessage` event on the destination chain.
* Invoke the `executeCall` method of the xCall contract on the destination chain.
* Wait and fetch the `CallExecuted` event on the destination chain.

For the case of our cross chain voting dApp we first sign a transaction calling either the `voteYes()` or `voteNo()` method of our Java smart contract in the origin chain.

These methods internally invoke the `_sendCallMessage(byte[] _data, @Optional byte[] _rollback)` method in the Java contract with an specific payload to cast a vote for "yes" or a vote for "no".

The `_sendCallMessage(byte[] _data, @Optional byte[] _rollback)` method internally calls the `sendCallMessage` method of the xCall contract on the origin chain to initiate the cross chain message process.

After initiating the cross chain message process we procede to wait for the respective `CallMessageSent` and `CallMessage` events on the origin and destination chain which will notify us that the message has been received in the destination chain.

To complete the cross chain message process we invoke the `executeCall` method of the xCall contract on the destination chain by signing a transaction with our wallet in the Sepolia network and finally we wait for the `CallExecuted` event to make sure that the process completed successfully.

To verify that the tally of the votes has been updated in the destination chain we call the `getVotes()` method of our deployed solidity contract which will return the tally of the votes and we can compare and verify that both chains have the same record of votes.

```js
/*
 * Tests
 * @param {Object} contracts
 * @param {string} contracts.primary - ICON contract address
 * @param {string} contracts.secondary - EVM contract address
 * @returns {Promise<void>}
 */
async function tests(contracts) {
  try {
    // vote yes from icon
    const voteYesFromIconResult = await voteYesFromIcon(contracts.primary);
    console.log("\n# vote yes from icon result:", voteYesFromIconResult);

    // get tx result
    const txResult = await getTxResult(voteYesFromIconResult);
    console.log("\n# tx result for calling voteYes:", txResult.txHash);

    // filter call message sent event
    const callMessageSentEvent = await filterCallMessageSentEvent(
      txResult.eventLogs
    );
    console.log("\n# call message sent event:", callMessageSentEvent);

    // parse call message sent event
    const parsedCallMessageSentEvent = await parseCallMessageSentEvent(
      callMessageSentEvent
    );
    console.log(
      "\n# parsed call message sent event:",
      parsedCallMessageSentEvent
    );

    // filter call message event evm
    const callMessageEventEvmFilters = filterCallMessageEventEvm(
      contracts.primary,
      contracts.secondary,
      parsedCallMessageSentEvent._sn
    );
    console.log(
      "\n# call message event evm filters:",
      callMessageEventEvmFilters
    );

    // wait for call message event evm
    const eventsEvm = await waitEventEVM(callMessageEventEvmFilters);
    const messageId = eventsEvm[0].args._reqId;
    const data = eventsEvm[0].args._data;
    console.log("\n# events params:");
    console.log(JSON.stringify(eventsEvm[0].args));

    // invoke execute call on destination chain
    console.log("\n# invoking execute call on destination chain");
    const executeCallTxHash = await executeCallEvm(messageId, data);
    console.log("\n# execute call tx hash:", executeCallTxHash.transactionHash);

    // filter call message event evm
    const callExecutedEventEvmFilters = filterCallExecutedEventEvm(messageId);
    console.log(
      "\n# callExecuted event evm filters:",
      callExecutedEventEvmFilters
    );

    // wait for call executed event evm
    const eventsEvm2 = await waitEventEVM(callExecutedEventEvmFilters);
    console.log("\n# events params:");
    console.log(JSON.stringify(eventsEvm2[0].args));

    // check votes from destination chain
    const votesFromEVM = await getVotesFromEVM(contracts.secondary);
    console.log("\n# votes from EVM:", votesFromEVM);
  } catch (e) {
    console.log("error running tests", e);
  }
}
```

## Conclusion

In this second part of the tutorial we deployed the Java smart contract to the Berlin Testnet of ICON and the Solidity contract to the Sepolia testnet of Ethereum and we interacted with xCall by casting a vote on the origin chain and sending a cross chain message to the destination chain which then allowed us to have a copy of the votes on both chain.

By doing this we learned what xCall is and how it allows us as developers to have cross chain communication between different blockchains.

We invite you to use xCall and give your projects cross chain capabilities and we are excited to see the great projects that xCall can make possible so that we can continue connecting chains in the blockchain space!.

## Further Resources
* Smart contracts in the official docs: https://docs.icon.community/icon-stack/smart-contracts
* Java score examples: https://github.com/icon-project/java-score-examples
* Javaee scorex: https://github.com/icon-project/javaee-scorex
* javaee api docs: https://www.javadoc.io/doc/foundation.icon/javaee-api/latest/index.html
