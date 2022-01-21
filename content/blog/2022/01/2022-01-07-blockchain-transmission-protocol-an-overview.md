---
title: "Blockchain Transmission Protocol (BTP): An Overview"
date: 2022-01-07
author: Brian Li
slug: blockchain-transmission-protocol-btp-an-overview
description: "Blockchain Transmission Protocol (BTP) is ICON’s cross-chain interoperability solution. ICON’s BTP facilitates the transfer of information between connected blockchains."
featured_image: "20220107_BLOCKCHAIN-TRANSMISSION-PROTOCOL.jpg"
---

Blockchain Transmission Protocol (BTP) is ICON’s cross-chain interoperability solution. ICON’s BTP facilitates the transfer of information between connected blockchains. In practice, BTP will allow users to move tokens, NFTs, messages, and more across BTP-enabled chains.

> Blockchain Transmission Protocol (BTP) is chain-agnostic, scalable, and secure.

Blockchain Transmission Protocol (BTP) is chain-agnostic, scalable, and secure. BTP’s chain-agnostic design allows it to be integrated with any smart contract-enabled blockchain. Unlike traditional bridging solutions that rely on handpicked validators to relay cross-chain messages and custody funds, BTP uses a more secure model with fully-decentralized incentivized relayers and on-chain verification of messages.

## How is BTP Different From Other Interoperability Solutions?

The form of interoperability that other solutions offer is often within their own ecosystem (at least at the current stage), while ICON’s BTP is more about connecting different ecosystems who have their own unique architectures. We like to say that BTP is chain-agnostic and able to interconnect any blockchain that supports smart contracts.

## Which Chains Have BTP Integrations?

A growing number of blockchains are implementing BTP smart contracts. Here’s a list of future connected partners:

- ICE Blockchain
- Moonriver Blockchain
- Moonbeam Blockchain
- Algorand Blockchain
- Binance Smart Chain
- Harmony Protocol
- NEAR Protocol

As this list grows longer, the incentive to join the BTP program becomes larger. This network effect is what will drive BTP adoption and ICON transaction growth. Every new blockchain that joins BTP, gives itself access to all the previously connected blockchains, this is valuable.

## How hard is it for new chains to integrate? What are the steps you can take to get started?

Joining BTP requires the implementation of a set of three smart contracts. These are named as follows:

- Service Handler
- Message Center
- Message Verifier

These smart contracts form the pillars of BTP’s functionality, yet they don’t require equal efforts to implement.
The Service Handler and the Message Center contracts can be re-applied to similar blockchains. This means that Ethereum compatible blockchains, for example, can all use the same codebase (think ICE Blockchain, Binance Smart Chain, Harmony Protocol).

The Message Verifier is unique to each blockchains and requires time and attention from both the joining blockchain and ICON developers.

## What about private bridges between chains? Why is it beneficial for them to look at BTP adoption?

Private bridges rely on two-way traffic between two blockchains. Implementing BTP smart contracts and joining the broader BTP ecosystem is a win-win for any such blockchain that has private bridges in place.

Imagine a set of real-life bridges, connecting multiple cities in both directions. Often, you’ll have to visit one city, only to move through it in order to get to your final destination.. Next, envision a wide circular BTP ring-road which connects all cities together. You are now able to speed directly to your destination without having to exit the road and visiting other cities. BTP brings:

No congestion; adding an additional means of (data) transportation puts less pressure on formerly popularized private bridges

Extra transfer capabilities; BTP transfers are not limited to listed tokens, but offer the infrastructure to send out NFT’s or other types of messages as well

Use-cases for new projects; with the addition of BTP, new and improved routes across blockchains open up. This allows for new ideas and use-cases to arise! Inter-blockchain projects will find new ways to complement each other.

## How much does it cost in Fees to use BTP?

Accurate fee calculation is one of the biggest challenges in interoperable blockchain architecture. Transaction fee projections are common to be mere expectations, as opposed to indisputable final amounts.

With BTP, fees are always paid for on the origin blockchain. This means that cross-chain data with transaction fee estimations gets collected in advance and displayed + paid for in the origin blockchain’s currency.

As BTP will facilitate a range of differing transaction types (tokens, NFTs, price-feeds), the complexity of the transaction will determine the final fee estimation. With cross-chain transactions, the fee-climates on both origin- and destination blockchains will also play a part in this estimation.

## What are relays?

Relays are nodes who continuously listen for BTP Message Center broadcasts. These broadcasts contain all the details necessary in order to execute a cross-chain transaction. The BTP Message Center contract on the origin blockchain will broadcast all the transaction details outward, after which any relay will know which other blockchain to look for and communicate the data onward into the right direction.

Note that before the details are communicated onwards to the destination blockchain, a verification will happen on ICON blockchain. This is what makes BTP both secure and reliable.
