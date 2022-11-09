---
title: "Interacting with ICON Bridge Contracts (Proxy Contracts) on EVM Blockchains"
date: 2022-11-09
author: espanicon
slug: interacting-with-icon-bridge-contracts-proxy-contracts-on-evm-blockchains
description: Learn how to use ICON Bridge to interact with EVM blockchains from ICON.
canonicalUrl: https://dev.to/espanicon/interacting-with-icon-bridge-contracts-proxy-contracts-on-evm-chains-19fd
tags:
- icon-bridge
- javascript
---

The ICON Network is a decentralized blockchain project from South Korea with the goal of becoming a hub for interconnecting many other blockchains with its [BTP technology](https://medium.com/helloiconworld/blockchain-transmission-protocol-btp-explained-c4d9927ad398), it currently hosts many Dapps (Decentralized Apps) ranging from NFT games and platforms (like [gangstabet](https://gangstabet.io/), [Craft Network](https://craft.network/), [Project Nebula](https://projectnebula.app/), etc) to DeFi platforms (like [Balanced Network](https://balanced.network/), [OMM Finance](https://omm.finance/)and [Optimus Finance](https://optimus.finance/)) and even a fully decentralized casino running entirely on smart contracts ([ICONBet](https://iconbet.io/)).

In this tutorial we will learn to interact with [ICON Bridge](https://medium.com/helloiconworld/introducing-icon-bridge-f8d3f2d93bf8) a chain-agnostic bridge that is able to interconnect any blockchain that supports smart contracts.

## ICON Bridge on EVM Blockchains

Proxy contracts on EVM chains stores the address of the logic contract and delegates all function calls to the logic contract (which holds the business logic) using the _delegatecall_ function. After the call is forwarded to the logic contract, the returned data from the logic contract is retrieved and returned to the user.

As a practical example lets interact with the [BTS contract on the BSC testnet](https://github.com/icon-project/icon-bridge/blob/main/docs/testnet_deployment.json) using javascript (web3.js).

* BTS Proxy Contract: `0x1a2aDf985D6c2700fdAf72A9c1e2b39e3B647F7e`
* BTS Logic Contract: `0xE020d4aD483C7eC90a24d9db502e66564eF9c236`

To interact with the BTS contract is necessary to call the proxy contract directly and the proxy contract will pass the call to the logic contract.

Using web3.js we can do this with the following method call:

{{< highlight javascript >}}
import Web3 from "web3"

const bscTestnetWeb3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545") 
const BTSLogicContractAddress = "0xE020d4aD483C7eC90a24d9db502e66564eF9c236"
const BTSLogicContractABI = null // at this point this data is unkown

// This next line will return in an error because we dont have the ABI const
contractObject = new bscTestnetWeb3.eth.Contract(BTSLogicContractABI, BTSLogicContractAddress)
{{< /highlight >}}

As you can see in the previous code example we still need one variable, the `BTSLogicContractABI` in order to create the contract object that we are going to use to interact with the ICON Bridge using Web3.js.

On EVM chains the ABI data is not available on chain, there are 2 ways to obtain that data:

* Compile the contract yourself and obtain the ABI.
* Fetch the ABI directly from somewhere else. This is generally done using
  trackers in the specific chain you are trying to interact.

For this example you can fetch the ABI data directly from the bscscan tracker
either using the `https` module on `nodejs` or a `fetch` call with js in the
browser. The following is an example of getting the ABI with `curl` from a
shell:

{{< highlight shell >}}
curl "https://api-testnet.bscscan.com/api?module=contract&action=getabi&address=0xE020d4aD483C7eC90a24d9db502e66564eF9c236&format=raw"
{{< /highlight >}}

It's important to notice that we are getting the ABI of the `BTSLogicContract`and not the ABI of the `BTSProxyContract`, as explained previously, the correct ABI with the methods to interact with the ICON Bridge (or any evm proxy contract pattern) are on the logic contract not on the proxy contract, but you have to make the query to the proxy contract because this is the one that will forward this call to the logic contract and handle the proper reply back.

Once we have the proper ABI data we can continue creating the contract object and making the method calls that we wish to make to the BTS proxy contract.

The following is a working example using `nodejs` (is necessary to previously install the `web3` library)

{{< highlight javascript >}}
const https = require("https");
const Web3 = require("web3");

// wrapping everything in an async function to handle the data request
async function asyncRun() {
  const bscTestnetWeb3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
  // ABI and address of both proxy and logic contract
  const BTSProxyContractAddress = "0x1a2aDf985D6c2700fdAf72A9c1e2b39e3B647F7e";
  const BTSLogicContractAddress = "0xE020d4aD483C7eC90a24d9db502e66564eF9c236";
  const BTSProxyContractABI = await asyncABIRequest(BTSProxyContractAddress);
  const BTSLogicContractABI = await asyncABIRequest(BTSLogicContractAddress);

  // Web3 Contract Object of the BTS logic contract
  const contractObject = new bscTestnetWeb3.eth.Contract(
    BTSLogicContractABI,
    BTSLogicContractAddress
);

  // encoding a call to a readonly method named 'getNativeCoinName'
  const getNativeCoinName = contractObject.methods.getNativeCoinName();
  const encodedData = getNativeCoinName.encodeABI();

  // making a readonly call
  const nativeCoinNameCallResponse = await bscTestnetWeb3.eth.call({
    to: BTSProxyContractAddress,
    data: encodedData
  });

  // parsing the hex response into utf8
  const parsedResponse = bscTestnetWeb3.utils.toUtf8( nativeCoinNameCallResponse );
  console.log(parsedResponse); 
}

// Running the async example
asyncRun();

// the following is a function to handle the request asynchronously created only
// to illustrate the example, it works "as is" but doesnt handle many things
// that you should handle when writing production code in an app (timeout, proper
// data on error, etc)
async function asyncABIRequest(contractAddress) { 
  const asyncQuery = new Promise((resolve, reject) => { 
    const ABIRequest = https.request(
      {
        hostname: "api-testnet.bscscan.com",
        path: `/api?module=contract&action=getabi&address=${contractAddress}&format =raw` 
      },
      res => { 
        // process chunked data
        let rawData = "";
        res.on("data", chunk => {
          rawData += chunk; 
          });

        res.on("end", () => {
          try {
            const parsedData = JSON.parse(rawData);
            resolve(parsedData);
          } catch (err) {
            console.log(`error making async query: ${err}`);
            reject(null);
          }
        }
      );
    });

    ABIRequest.on("error", error => {
      console.log(`Error on request: ${error}`);
    });

    ABIRequest.end();

  });

  return await asyncQuery;
}
{{< /highlight >}}
