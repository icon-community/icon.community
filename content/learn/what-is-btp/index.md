---
title: What is BTP?
date: 2022-03-01
description: Blockchain Transmission Protocol (BTP) is ICON’s chain-agnostic, scalable, and secure interoperability protocol.
slug: btp
---

Blockchain Transmission Protocol (BTP) is ICON’s chain-agnostic, scalable, and secure interoperability protocol. BTP’s chain-agnostic design allows it to be integrated with any smart contract-enabled blockchain. Unlike traditional bridging solutions that rely on handpicked validators to relay cross-chain messages and custody funds, BTP uses a more secure model with fully-decentralized incentivized relayers and on-chain verification of messages. In this article, you’ll learn about ICON’s BTP technology, and how it can be applied to real-world use cases.

## Use Cases for BTP

Before we dive into how BTP works on a technical level, let’s quickly walk through three potential use cases for BTP to set the tone.

### Cross-Chain Token Transfers

The most common interoperability use case is transferring tokens from one blockchain to another. Cross-chain bridge contracts typically work by burning tokens on the source chain and minting the equivalent amount of tokens on the destination chain. With BTP, users will be able to transfer tokens across any connected chains without the need for chain-specific bridges between each pair of chains.
### Cross-Chain Arbitrage

Unlike most of the current bridging solutions which only support cross-chain token swaps, future iterations of BTP will also support more generic messaging features like cross-chain smart contract calls. This means a smart contract running on ICON will be able to interact with smart contracts running on [Binance Smart Chain](https://binance.com), [Moonbeam](https://moonbeam.network), and more. This makes BTP an attractive solution for building a decentralized cross-chain arbitrage trading platform that is able to fetch market quotes and execute orders across multiple chains.

### Cross-Chain “NFT-as-Identity”

The metaverse is the next big narrative in crypto, and “NFT-as-identity” will play a huge role in the metaverse space over the next few years. Prominent NFT projects like [Bored Ape Yacht Club (BAYC)](https://boredapeyachtclub.com) have gone beyond being “just art” or “just collectibles”. A Bored Ape NFT also doubles as membership card that grants access to members-only benefits in the physical world — this is an example of using an on-chain NFT as an identity verification tool.

NFT as identity will carry over to the metaverse as well. As the sector expands, it’s possible we’ll see multiple flavors of metaverses — some of which may rely on different blockchains to power in-world economies. In this scenario, BTP could be used to verify identities and even ownership of tokenized items across multichain metaverses.

For example, BAYC NFTs could be adapted to 3D models for use as in-world characters by their respective owners in the metaverse. Since BAYC NFTs are native to Ethereum, it would be challenging to use a BAYC NFT as an identity in a multiverse running on another blockchain. Since BTP supports communication beyond basic token swaps, more complex use cases like cross-chain verification of NFT ownership can play a huge role in the metaverse.

## How BTP Works

Now that we have walked through a few examples of how BTP can be used, let’s take a closer look at how it works on a technical level. BTP is powered by smart contracts deployed on all connected chains, along with external community-run relayer nodes that pass messages between chains.

BTP Smart Contracts

In order for a blockchain to integrate with BTP, it must deploy the three smart contracts below.

* The Message Center Contract (BMC) keeps track of BTP messages for a given chain.
* The Verifier Contract (BMV) verifies messages sent to a chain’s BMC from external relayers.
* The Service Contract (BSH) contains application-specific logic that is executed in response to messages received from the BMC.

### What is a BTP Relayer?

Without shipping companies like UPS and Fedex, online shopping wouldn’t exist. After all, packages don’t deliver themselves. The same concept applies to BTP, where relayers are responsible for delivering messages across blockchains.

If you’re familiar with blockchain lingo, a BTP relayer is similar to a node — it’s an always-online server that provides a necessary service for the blockchain in exchange for a reward paid in ICX. In BTP, a relayer node is responsible for relaying messages between BMCs on the source and destination chains.

Even though a relayer is technically a middleman, its function is very different from traditional cross-chain bridge operators that also act as custodians. When transferring from Ethereum to Avalanche using the Avalanche Bridge, custody of bridged funds is secured a multi-signature contract operated by four “wardens”. While Avalanche Bridge has proven to be a useful bridging solution thus far, its design relies on trusted bridge operators.

Unlike traditional bridges which rely on handpicked bridge operators, a BTP relayer can be set up by anyone. Furthermore, BTP relayers do not verify cross-chain transactions or custody funds. Instead, relayers only pass messages between chains, and funds are secured on the source and destination chains. This means with BTP, there is no need to trust relayers to move assets across chains because they only contribute to network liveness and reliability — not security.

### BTP Token Transfer Example

Let’s walk through an example of how BTP can be used to facilitate a token transfer from Moonbeam to Binance Smart Chain — two chains within the BTP Ecosystem.

* Moonbeam’s BSH locks the user’s tokens on the Moonbeam blockchain.
* A BTP relayer passes a message containing the token transfer data from Moonbeam’s BMC to ICON’s BMC.
* ICON’s BMC passes the message to its BMV for verification. To do this, ICON’s BMV reproduces Moonbeam’s consensus protocol to validate the transaction signatures present in the message.
* Once the message is validated, ICON’s BMC sends a message to Binance Smart Chain’s BMC via a BTP relayer.
* Binance Smart Chain’s BMC passes the message to its BMV, which validates the message by reproducing ICON’s consensus mechanism locally.
* Once the message is validated, Binance Smart Chain’s BSH initiates a token mint for the equivalent amount of tokens that were locked up on Moonbeam.

## The Advantages of BTP

### BTP is Chain-Agnostic and Scalable

BTP is chain-agnostic, which means it can be integrated with any blockchain that supports smart contracts. In fact, as of this writing, chains such as Binance Smart Chain, NEAR, Harmony, Algorand, and Moonbeam are all in the process of integrating BTP into their respective ecosystems.

### BTP is Easy to Integrate

Compared to many other cross-chain solutions, BTP’s chain-agnostic design gives it two main advantages — ease of integration and scalability.

Cosmos and Polkadot are two top-tier projects that are also innovating in the interoperability space. Cosmos’ Inter-Blockchain Communication Protocol (IBC) allows Cosmos SDK blockchains to connect with each other. Similarly, the Polkadot Relay Chain allows for communication between Polkadot parachains (blockchains within the Polkadot ecosystem).

Unlike Cosmos’ and Polkadot’s interoperability solutions, ICON’s BTP doesn’t require connected blockchains to be built with a specific SDK or architecture. Going back to the digital nation analogy, inter-ecosystem interoperability (e.g. Cosmos and Polkadot) can be thought of as connections between different industries within a nation, while a chain-agnostic solution like BTP is more akin to connections between different industries across nations.

At this point, you may be wondering which bridging solution (chain-specific or chain-agnostic) is better. As with many things in life, the answer to this question isn’t so simple because there are advantages and disadvantages to both models. Chain-specific interoperability like Cosmos IBC allows dApp developers to quickly add cross-chain communication as a feature if they choose to build within the Cosmos ecosystem. On the other hand, there may be situations where a dApp needs to interact with another blockchain ecosystem.

As the blockchain industry expands, we believe inter-ecosystem and cross-ecosystem interoperability will both flourish, and we’re already starting to see examples of how these two models can co-exist — Moonbeam (Polkadot parachain) and Moonriver (Kusama parachain) are two of BTP’s initial integrations.

> BTP is a general purpose bridge that is chain-agnostic, trustless and decentralized. We’re aiming to connect beyond chain specific bridges or ecosystem focused like EVM or Tendermint. Any blockchain with smart contracts will be able to incorporate BTP and integrate to the entire ecosystem. — 2infiniti, BTP Working Group

### Scalable Bridging Between Blockchains

As an early adopter of DeFi and other crypto products, it’s common to use many different bridging solutions to jump between different ecosystems. For example, there is a Terra-Ethereum bridge and a Avalanche-Ethereum bridge. But, what if a user wanted to go directly from Terra to Avalanche without having to go through a costly transfer from Ethereum? Unfortunately, that’s not possible at the moment because both bridges are unique bi-directional bridges that are not aware of each other as parts of a monolithic bridging protocol.

With BTP, connected chains will be able to perform cross-chain transfers and communicate with each other without having to go through a third-party chain or provider. Taking the example above, if Avalanche and Terra were connected to BTP, users would be able to transfer assets directly from Avalanche to Terra without going through a common third party.

Removing the need for explicit connections between chains makes cross-chain bridging much more scalable. Imagine if you wanted to connect 100 different blockchains together. With BTP, each chain would only need a single integration with ICON to connect to the other 99 chains!
BTP is Secure and Decentralized

Security and decentralization are two of BTP’s primary advantages. As we mentioned earlier, many bridges rely on handpicked operators to custody user funds and perform the necessary locking, minting, and burning of tokens for cross-chain transfers. Similar to how DeFi can only thrive with decentralized stablecoins, we also believe cross-chain interoperability requires fully trustless and decentralized bridges (not trusted or trust-minimized bridges).

BTP’s novel architecture allows it to be both secure and decentralized. Since verification and application logic reside directly on the source chain, destination chain, and ICON, BTP is as secure as the participating chains themselves. BTP’s secure nature also applies to custody of funds. Unlike traditional bridge operators which custody funds in a multi-signature contract, BTP locks up funds directly on the source and destination chains

In many traditional bridging solutions, the party that relays messages between chains is also in charge of verifying messages. This makes it near impossible for traditional bridging solutions to expand beyond a small set of handpicked bridge operators.

In BTP, the burden of verifying messages is not placed on relayers, which means there is no conflict of interest between security and decentralization. BTP relayers only contribute to liveness and can be operated by anyone. Furthermore, since relayers are incentivized by network issuance, they present yet another way to be rewarded for contributing to the ICON ecosystem.

## How to Join the BTP Ecosystem

We envision a future where BTP seamlessly facilitates cross-chain messaging and transfers for billions of users around the world. We are currently working with BTP partners like Binance Smart Chain, NEAR Protocol, Harmony, Algorand, and more to fulfill this vision. If you’re interested in joining the BTP ecosystem, please [reach out to us on the official ICON Discord](https://discord.com/invite/BvWzx9nZgv).

## Summary

ICON’s BTP brings cross-chain interoperability to the next level. By utilizing on-chain smart contracts and community-run message relayers, BTP is able to facilitate cross-chain communication in a novel and fully-decentralized way that doesn’t leave custody of funds to a small set of handpicked bridge operators.

> The vision for BTP is to be prepared for anything. 3 years ago, nobody imagined what interoperability would be used for, now there’s a focus on DeFi. What’s next? We don’t need an answer, we just need a flexible, secure and decentralized interoperability solution, and that’s what BTP is. — Min Kim, ICON Foundation

The future of blockchain is undoubtedly multi-chain, which means cross-chain bridges will be of utmost importance in the coming years. We believe that BTP will be one of the leaders for cross-chain communication, and we look forward to working with our ecosystem partners and community to build a brighter and more interconnected future.