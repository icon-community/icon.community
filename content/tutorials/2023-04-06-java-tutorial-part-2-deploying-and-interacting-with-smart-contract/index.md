---
title: "Java Tutorial Part 2: Deploying the Smart Contract and Interacting with the Smart Contract Onchain"
date: 2023-04-06
author: espanicon
slug: java-tutorial-part-2-deploying-the-smart-contract-and-interacting-with-the-smart-contract-onchain
description: Java tutorial series part 2 deploying the smart contract and interacting with the smart contract onchain
draft: false
tags:
- java
- smart contract
- gradle
---

## Deploying the smart contract

Deployment of the smart contract on an ICON Network (Mainnet, testnets or local networks) is done using a special contract creation transaction sent to the [contract creation address](https://tracker.icon.community/contract/cx0000000000000000000000000000000000000000).

A deployed contract is assigned an ICON address based on the originating account, timestamp, and if the contract address already exists nonce of the contract creation transaction is also used. Salt can also be used to create address. Salt is the transaction index of the transaction in the block. This address can be used to send funds to the contract or call its functions.

```
// genContractAddr generates new contract address nonce, timestamp, from
data = from(20 bytes) + timestamp (32 bytes) + if exists, nonce (32 bytes)
digest = sha3_256(data)
contract address = digest[len(digest) - 20:] // get last 20bytes
// If there is salt, it would be added to nonce value.
```

Smart contracts are not associated with private keys like External Owned Accounts (EOAs). However, the smart contract deployer address is considered the “owner.” By default, smart contract owners may upgrade or change the owner of the contract.

```json
{
    "jsonrpc": "2.0",
    "method": "icx_sendTransaction",
    "id": 1234,
    "params": {
        "version": "0x3",
        "from": "hxbe258ceb872e08851f1f59694dac2558708ece11",
        "to": "cx0000000000000000000000000000000000000000", // address 0 means SCORE install
        "stepLimit": "0x12345",
        "timestamp": "0x563a6cf330136",
        "nid": "0x3",
        "nonce": "0x1",
        "signature": "VAia7YZ2Ji6igKWzjR2YsGa2m53nKPrfK7uXYW78QLE+ATehAVZPC40szvAiA6NEU5gCYB4c4qaQzqDh2ugcHgA=",
        "dataType": "deploy",
        "data": {
            "contentType": "application/java",
            "content": "0x1867291283973610982301923812873419826abcdef91827319263187263a7326e...", // compressed SCORE data
            "params": {  // parameters to be passed to on_install()
                "name": "ABCToken",
                "symbol": "abc",
                "decimals": "0x12"
            }
        }
    }
}
```

```json
{
    "jsonrpc": "2.0",
    "method": "icx_sendTransaction",
    "id": 1234,
    "params": {
        "version": "0x3",
        "from": "hxbe258ceb872e08851f1f59694dac2558708ece11",
        "to": "cxbe258ceb872e08851f1f59694dac2558708ece11", // previously deployed smart contract address
        "stepLimit": "0x12345",
        "timestamp": "0x563a6cf330136",
        "nid": "0x3",
        "nonce": "0x1",
        "signature": "VAia7YZ2Ji6igKWzjR2YsGa2m53nKPrfK7uXYW78QLE+ATehAVZPC40szvAiA6NEU5gCYB4c4qaQzqDh2ugcHgA=",
        "dataType": "deploy",
        "data": {
            "contentType": "application/java",
            "content": "0x1867291283973610982301923812873419826abcdef91827319263187263a7326e...", // compressed SCORE data
            "params": {  // parameters to be passed to on_install()
                "name": "ABCToken",
                "symbol": "abc",
                "decimals": "0x12"
            }
        }
    }
}
```

Although this means smart contracts by default are mutable, the contract can be written to specify immutability rules. To make a contract immutable, the owner of the contract address has to be changed to a wallet that no one controls. Some ways to do that are by changing the owner to the contract itself provided there is no method in the contract to do self-upgrade. The owner can also be changed to [System contract - cx0000000000000000000000000000000000000000](https://tracker.icon.community/contract/cx0000000000000000000000000000000000000000).

Smart contracts are only executed when they are called by a transaction, either directly or as part of a chain of contract calls. They do not run in the background or parallel, and they are single-threaded.

### Deploying the smart contract on the terminal using goloop CLI

As shown in the previous RPC JSON example for the deployment of the smart contract we need to encode the compiled smart contract (jar file) into a hex string and also sign the RPC JSON with the private key of the wallet that we are going to assign as the owner of the smart contract.
The easiest way to do this in the terminal is with the goloop CLI tool.
The following command can be used to deploy the smart contract with the goloop CLI:

```bash
$ goloop rpc sendtx deploy ./app/build/libs/poll-contract-optimized.jar --uri http://localhost:9080/api/v3 --key_store /path/to/keystore.json --key_password WALLET_PASSWORD --nid 3 --step_limit=20000000000 --content_type application/java
```

### Deploy using icon-sdk-js

We can also deploy the smart contract using the `icon-sdk-js`, for this example we are going to create a `nodejs` script to deploy our smart contract.

Inside our project root folder (`~/poll-contract`) lets create a `nodejs` project and install the `icon-sdk-js` package running the following commands:

```bash
$npm init -y
$npm install --save-dev icon-sdk-js
```

Create an `index.js` file and add the following code in it:

```javascript
const IconService = require("icon-sdk-js");
const fs = require("fs");

const {
  IconWallet,
  IconBuilder,
  SignedTransaction,
  IconConverter,
  HttpProvider,
} = IconService.default;

const { DeployTransactionBuilder } = IconBuilder;

// add the path to the keystore file
const keystorePath = "/path/to/keystore.json";
// add the password of the keystore file
const keystorePWD = "gochain";
// port to the local network
const port = 9080;
// hostname of the local network
const hostname = "localhost";
// url of the local node
const apiNode = `http://${hostname}:${port}/api/v3`;
// select the correct NID depending on the network
// https://docs.icon.community/icon-stack/icon-networks/main-network
const nid = 3;
// instantiate httProvider and iconService
const httpProvider = new HttpProvider(apiNode);
const iconService = new IconService.default(httpProvider);
// path to the compiled contract
const scorePath = "./app/build/libs/poll-contract-optimized.jar";

// Function to deploy the smart contract
function deployContract(keystore, pwd, content) {
  const walletKs = getKeystore(keystore);
  const walletLoaded = IconWallet.loadKeystore(walletKs, pwd);
  // Create tx object for contract deployment
  const txObj = new DeployTransactionBuilder()
    .from(walletLoaded.getAddress())
    .to("cx0000000000000000000000000000000000000000")
    .stepLimit(IconConverter.toBigNumber("2500000000"))
    .nid(IconConverter.toBigNumber(nid))
    .nonce(IconConverter.toBigNumber("1"))
    .version(IconConverter.toBigNumber("3"))
    .timestamp(new Date().getTime() * 1000)
    .contentType("application/java")
    .content(content)
    .build();

  // Sign transaction with wallet
  const signedTx = new SignedTransaction(txObj, walletLoaded);
  return signedTx;
}

// Get keystore from file
function getKeystore(path) {
  const ks = fs.readFileSync(path, "utf-8");
  return ks;
}

async function main() {
  try {
    // Read smart contract and encode into hex string
    const scoreContentInHex = "0x" + fs.readFileSync(scorePath).toString("hex");

    // get signed transaction
    const signedTx = deployContract(keystorePath, keystorePWD, scoreContentInHex);
    console.log(`signed tx: ${JSON.stringify(signedTx.getProperties())}`);

    const tx = await iconService.sendTransaction(signedTx).execute();
    console.log(tx);
  } catch (err) {
    console.log("Unexpected error signing transaction");
    console.log(err);
    return null;
  }
}

main();
```

Execute the file running node `index.js` and your contract will be deployed to the network.

### Post deployment

The RPC call to deploy the contract will return a transaction hash, we need to query the network about the transaction information of that hash to verify that the transaction was processed correctly and get the contract address.
This command will output a transaction hash that we can use to make a readonly call using the `icx_getTransactionResult` method and obtain the contract address:

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"icx_getTransactionByHash","id":121,"params":{"txHash":"0x2cec2d2b0823e73354ac42f93c9126db3572c5043e66a3e8a8e7432911feb48f"}}' http://localhost:9080/api/v3
```

Result of the call:

```json
{
  "jsonrpc": "2.0",
  "result": {
"blockHash": "0xf40ed11bdd98a34bb24e6f59d90c2bdeadd08f2ca0ad6d5bcbd3a189b14fcb45",
"blockHeight": "0x50ef2",
"cumulativeStepUsed": "0x3cfd64f1",
"eventLogs": [],
"logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"scoreAddress": "cx367b34a401e2df975d6d122360e23815e021ce4a",
"status": "0x1",
"stepPrice": "0x2e90edd00",
"stepUsed": "0x3cfd64f1",
"to": "cx0000000000000000000000000000000000000000",
"txHash": "0x2cec2d2b0823e73354ac42f93c9126db3572c5043e66a3e8a8e7432911feb48f",
"txIndex": "0x1"
  },
  "id": 121
}
```

## Interacting with the smart contract on the chain

When interacting with a smart contract a very useful method is the `icx_getScoreApi`. This readonly method will return the contract ABI which is a JSON formatted object that shows the methods of the contract with the inputs needed when calling each method and the resulting outputs after calling a method.

```bash
$ curl -X POST --data '{"jsonrpc":"2.0","method":"icx_getScoreApi","id":121,"params":{"address":"cx62fbf5e0e1eec28282beea38253c068123ddd429"}}' http://localhost:9080/api/v3
```

The result of calling `icx_getScoreApi` to the contract we have just created would be the following:

```json
{
  "jsonrpc": "2.0",
  "result": [
{
   "inputs": [],
   "name": "addVoteYes",
   "outputs": [
     {
       "type": "str"
     }
   ],
   "type": "function"
},
{
   "inputs": [],
   "name": "addVoteNo",
   "outputs": [
     {
       "type": "str"
     }
   ],
   "type": "function"
},
{
   "inputs": [
     {
       "name": "_address",
       "type": "str"
     }
   ],
   "name": "checkVote",
   "outputs": [
     {
       "type": "str"
     }
   ],
   "readonly": "0x1",
   "type": "function"
},
{
   "inputs": [],
   "name": "getVotesResult",
   "outputs": [
     {
       "type": "int"
     }
   ],
   "readonly": "0x1",
   "type": "function"
}
  ],
  "id": 121
}
```

For calling the methods in a smart contract we have 2 main RPC JSON methods to use:
* `icx_call`: for readonly methods ([link](https://docs.icon.community/icon-stack/client-apis/json-rpc-api/v3#icx_call)).
* `icx_sendTransaction`: for write methods. These calls require the RPC json to be signed using the private key. ([link](https://docs.icon.community/icon-stack/client-apis/json-rpc-api/v3#icx_sendtransaction))


## Further Resources
* Smart contracts in the official docs: https://docs.icon.community/icon-stack/smart-contracts
* Java score examples: https://github.com/icon-project/java-score-examples
* Javaee scorex: https://github.com/icon-project/javaee-scorex
* javaee module source: https://github.com/icon-project/goloop/tree/master/javaee/api/src/java/score
* Chain score sample: https://github.com/icon-project/goloop/blob/master/testsuite/java/foundation/icon/test/score/ChainScore.java
* javaee api docs: https://www.javadoc.io/doc/foundation.icon/javaee-api/latest/index.html
* javaee unittest api docs: https://www.javadoc.io/doc/foundation.icon/javaee-unittest/0.9.7/index.html
* javaee unittest source: https://github.com/icon-project/javaee-unittest
