---
title: "BTP Tutorial: Setting Up BTP Locally For Testing"
date: 2023-05-02
author: espanicon
slug: btp-tutorial-setting-up-btp-locally-for-testing
description: BTP Tutorial for setting up BTP locally for testing
draft: false
tags:
- BTP
- smart contract
- hardhat
- local network
---
Blockchain Transmission Protocol (BTP) is ICON’s chain-agnostic, scalable, and secure interoperability protocol. BTP’s chain-agnostic design allows it to be integrated with any smart contract-enabled blockchain. Unlike traditional bridging solutions that rely on handpicked validators to relay cross-chain messages and custody funds, BTP uses a more secure model with fully-decentralized incentivized relays and on-chain verification of messages.

In this article, you’ll learn how to setup a local environment for testing BTP and creating dapps that can interact with BTP in this local setup.

## Installation

The first step in this process is to clone the BTP repository to a local folder and install the required dependencies.

```bash
$ git clone https://github.com/icon-project/btp2.git --recurse-submodules
$ cd btp2
$ make relay
```
After installing the main repository for BTP, move into the `e2edemo` subfolder.
```bash
$ cd e2edemo
```

To run the demo, the following software are needed in your computer:
* Node.js 18 (LTS) [[Download](https://nodejs.org/en/download/)]
* Docker & Docker compose V2 [[Download](https://docs.docker.com/compose/install/)]
* OpenJDK 11 or above [[Download](https://adoptium.net/)]
* jq [[Download](https://github.com/stedolan/jq)]
* go [[Download](https://go.dev/doc/install)]

Once you verified all the required programs are installed locally, run `npm install` inside the `e2edemo` folder to install all the required dependencies.
```bash
$ npm install
```
A new directory named `node_modules` will be created in the current working directory.

## Setup local ICON Network

The following procedure will create and setup a local ICON Network. To Enable BTP block feature on the local network the following steps are required:
* Registering node as PRep.
* Decentralizing the network.
* Upgrading revision to 21.

To facilitate this process a set of scripts are available.

The first command that we need to run is the following:
```bash
make start-nodes
```

Now we run the following command to setup the local network:
```bash
make setup-node
```
A set of commands will be executed and in the end it will be stopped with the following message
```bash
Error: ICON: need to wait until the next term for decentralization
```
It is necessary to wait until the next term in the local network for the changes to be applied, by default this period is 100 blocks (see `termPeriod` in `./docker/icon/config/icon_config.json`)

You can continue to run the `make setup-node` command and it will reply with the current block height of the network:
```bash
$ make setup-node
>>> Setup ICON node
{
  blockHeight: '0x15',
  preps: [],
  totalDelegated: '0x0',
  totalPower: '0x0'
}
Error: ICON: need to wait until the next term for decentralization
```
Once the term period has passed and you run the `make setup-node` command it will reply with the success messages of the process to decentralize the network and enable the BTP block feature.
```bash
$ make setup-node
>>> Setup ICON node
{
  blockHeight: '0xe4',
  preps: [
    {
      address: 'hxb6b5791be0b5ef67063b3c10b840fb81514db2fd',
      delegated: '0x1682f0ed68b9bede00000',
      name: 'node_hxb6b5791be0b5ef67063b3c10b840fb81514db2fd',
      power: '0x1682f0ed68b9bede00000'
    }
  ],
  totalDelegated: '0x1682f0ed68b9bede00000',
  totalPower: '0x1682f0ed68b9bede00000'
}
ICON: revision: 20
ICON: Set revision to 21
... pending
... executing
ICON: pubkey: undefined
ICON: register PRep node publicKey
... pending
... executing
ICON: node setup completed
```

## Build and deploy contracts

After setting up the local ICON network now we can build and deploy all the smart contracts on both chains (ICON and EVM chain via hardhat).

To build all contracts, run the following command:
```bash
$ make build-all
```
This command will compile both java and Solidity contracts and generates artifacts for later deployment, if no build errors were found you can deploy all contracts using the following command.
```bash
make deploy-all
```
If no errors are shown during the execution process all the contracts are successfully deployed and linked on both the ICON and hardhat chains.

A file named `deployments.json` was generated at the root folder containing all the information needed to interact with the relays (contract addresses, network addresses, etc).

## Run demo dapp

Once the process of setting up the networks and deploying the contracts has concluded we can now run a demo dapp that comes with the repository to see the BTP in action.

To be able to run this demo dapp we need to have both networks up, we can check this by running the following command:
```bash
$ $ docker ps
CONTAINER ID   IMAGE                         COMMAND                  CREATED          STATUS          PORTS                                                                                            NAMES
dbda3dc9cb91   iconloop/goloop-icon:v1.3.5   "/entrypoint /bin/sh…"   23 minutes ago   Up 23 minutes   0.0.0.0:7080->7080/tcp, :::7080->7080/tcp, 0.0.0.0:9080->9080/tcp, :::9080->9080/tcp, 8080/tcp   icon-node
20b7e59a90ea   trufflesuite/ganache:v7.5.0   "node /app/dist/node…"   6 days ago       Up 23 minutes   0.0.0.0:8545->8545/tcp, :::8545->8545/tcp                                                        docker-ganache-1
```
We also need to run the relayer and the demo dapp script, so for this next step two terminal windows are necessary, in the first terminal window run the following command to start the relayer:
```bash
$ ./relay.sh
```
On the second terminal run the following command to execute the demo dapp script and test the BTP functionality.
```bash
make run-demo
```
## Resources
* BTP Github repository: [https://github.com/icon-project/btp2](https://github.com/icon-project/btp2)
* BTP documentation: [https://docs.icon.community/cross-chain-communication/blockchain-transmission-protocol-btp](https://docs.icon.community/cross-chain-communication/blockchain-transmission-protocol-btp)
* BTP Litepaper: [https://icon.community/assets/btp-litepaper.pdf](https://icon.community/assets/btp-litepaper.pdf)
* ICON BTP Standard: [https://github.com/icon-project/IIPs/blob/master/IIPS/iip-25.md](https://github.com/icon-project/IIPs/blob/master/IIPS/iip-25.md)
* ICON BTP Fee Gathering Standard: [https://github.com/icon-project/IIPs/blob/master/IIPS/iip-35.md](https://github.com/icon-project/IIPs/blob/master/IIPS/iip-35.md)
* ICON BTP Message Fragmentation Standard: [https://github.com/icon-project/IIPs/blob/master/IIPS/iip-40.md](https://github.com/icon-project/IIPs/blob/master/IIPS/iip-40.md)
* ICON BTP Arbitrary Call Service Standard: [https://github.com/icon-project/IIPs/blob/master/IIPS/iip-52.md](https://github.com/icon-project/IIPs/blob/master/IIPS/iip-52.md)
