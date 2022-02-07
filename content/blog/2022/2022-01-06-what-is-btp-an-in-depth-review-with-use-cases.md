---
title: "What is BTP? An In-depth Review with Use Cases"
date: 2022-01-06
slug: what-is-btp-b1affe6b3bbf
description:
---

## What is BTP? An In-depth Review with Use Cases

### Learn more about ICON’s decentralized interoperability solution.

![](https://cdn-images-1.medium.com/max/800/1*GxxN-EC1WIhgZtyzIEJoXA.png)Blockchain Transmission Protocol (BTP) is ICON’s chain-agnostic, scalable, and secure interoperability protocol. BTP’s chain-agnostic design allows it to be integrated with any smart contract-enabled blockchain. Unlike traditional bridging solutions that rely on handpicked validators to relay cross-chain messages and custody funds, BTP uses a more secure model with fully-decentralized incentivized relayers and on-chain verification of messages. In this article, you’ll learn about ICON’s BTP technology, and how it can be applied to real-world use cases.

## Table of Contents

* [Digital Nations and Blockchain Interoperability](#7db6)
* [Three Use Cases for BTP](#aa95)
* [Cross-Chain Token Transfers](#361e)
* [Cross-Chain Arbitrage](#3048)
* [Cross-Chain “NFT-as-Identity”](#0c5e)
* [How BTP Works](#3458)
* [BTP Smart Contracts](#7c3e)
* [What is a BTP Relayer?](#888d)
* [BTP Token Transfer Example](#72d2)
* [The Advantages of BTP](#8777)
* [BTP is Chain-Agnostic and Scalable](#5634)
* [Ease of Integration](#105c)
* [Scalable Bridging Between Blockchains](#34d5)
* [BTP is Secure and Decentralized](#1b3c)
* [How to Join the BTP Ecosystem](#1514)
* [Summary](#31a6)

## Digital Nations and Blockchain Interoperability

Before we dive into the nitty-gritty of BTP, let’s first establish why blockchain interoperability is important. Today, there are 195 nations around the world, most of which are interconnected in more ways than one. For example, the open Internet helps people communicate ideas and information across borders and timezones. Similarly, airlines move people across the skies, and cargo ships move goods across the oceans.

The modern world’s interconnectedness plays a huge role in our global economy. Imagine a world without airplanes, transoceanic shipping routes, and a globally-accessible Internet — the world would look very different.

Believe it or not, blockchains and nations have a lot in common. Like nations, blockchains have culture, governance, monetary policies, economic participants, products and services, internal communication protocols, and more. In other words, blockchains are “digital nations” that also benefit from interconnectedness.

While the term “digital nation” isn’t commonly used when describing blockchains, we believe that the intrinsic characteristics of real-world nations are naturally “baked into” blockchains because said characteristics are what influence blockchain developers in their everyday lives.

Let’s dive a little deeper into this idea.

For the most part, blockchain participants (developers, investors, users, etc.) were born into an interconnected world. People 30 and under grew up with the Internet, while people 50 and under grew up with the benefits of global trade (cheaper products, access to exotic foods, etc.). Thus, concepts such as frictionless communication, cross-border trade, and access to global markets in the context of economic environments have become natural expectations in the modern world.

Blockchains are economic environments because they have built-in incentive mechanisms that influence the supply and demand of their native assets. Thus, when building blockchains, it only makes sense for developers to approach it from an existing economic framework guided by concepts that work in the physical world — frictionless communication is good, cross-border trade is good, and access to global markets is good.

A global economic environment that assumes interconnectedness allows individual participants to optimize their respective economies. We see this play out in the real world all the time. Japan is really good at high-quality consumer electronics, China is really good at manufacturing, and Italy is really good at supercars.

The ability to import and export goods is what allows nations around the world to optimize their economies for constant variables such as geographic landscape, cultural preference, access to natural resources, etc. Without the assumption of interconnectedness, countries around the world would be forced to “do everything themselves”.

In the current blockchain industry, we’re seeing the same interconnectedness assumption play out — but in reverse. In the real world, economies optimized and expanded as a result of free trade and cross-border communication. In blockchain, feature-rich cross-chain bridges don’t really exist yet, but developers are building with the assumption that they will exist someday.

Similar to how different nations excel in specific industries, different blockchains have unique value propositions. Projects like Sia and Filecoin are focused on file storage, while Decentraland and The Sandbox are building out the metaverse. Even though the technology to bring cross-chain file storage and cross-chain metaverses to life are still in development (BTP included), developers of these projects are already working under the assumption of eventual interconnectedness — whether they know it or not.

**This is where BTP comes in.**

## Three Use Cases for BTP

Before we dive into how BTP works on a technical level, let’s quickly walk through three potential use cases for BTP to set the tone.

## Cross-Chain Token Transfers

The most common interoperability use case is transferring tokens from one blockchain to another. Cross-chain bridge contracts typically work by burning tokens on the source chain and minting the equivalent amount of tokens on the destination chain. With BTP, users will be able to transfer tokens across any connected chains without the need for chain-specific bridges between each pair of chains.

## Cross-Chain Arbitrage

Unlike most of the current bridging solutions which only support cross-chain token swaps, future iterations of BTP will also support more generic messaging features like cross-chain smart contract calls. This means a smart contract running on ICON will be able to interact with smart contracts running on Binance Smart Chain, Moonbeam, and more. This makes BTP an attractive solution for building a decentralized cross-chain arbitrage trading platform that is able to fetch market quotes and execute orders across multiple chains.

## Cross-Chain “NFT-as-Identity”

The metaverse is the next big narrative in crypto, and “NFT-as-identity” will play a huge role in the metaverse space over the next few years. Prominent NFT projects like Bored Ape Yacht Club (BAYC) have gone beyond being “just art” or “just collectibles”. A Bored Ape NFT also doubles as membership card that grants access to members-only benefits in the physical world — this is an example of using an on-chain NFT as an identity verification tool.

NFT as identity will carry over to the metaverse as well. As the sector expands, it’s possible we’ll see multiple flavors of metaverses — some of which may rely on different blockchains to power in-world economies. In this scenario, BTP could be used to verify identities and even ownership of tokenized items across multichain metaverses.

For example, BAYC NFTs could be adapted to 3D models for use as in-world characters by their respective owners in the metaverse. Since BAYC NFTs are native to Ethereum, it would be challenging to use a BAYC NFT as an identity in a multiverse running on another blockchain. Since BTP supports communication beyond basic token swaps, more complex use cases like cross-chain verification of NFT ownership can play a huge role in the metaverse.

## How BTP Works

Now that walked through a few examples of how BTP can be used, let’s take a closer look at how it works on a technical level. BTP is powered by smart contracts deployed on all connected chains, along with external community-run relayer nodes that pass messages between chains.

## BTP Smart Contracts

In order for a blockchain to integrate with BTP, it must deploy the three smart contracts below.

1. The **Message Center Contract (BMC)** keeps track of BTP messages for a given chain.
2. The **Verifier Contract (BMV)** verifies messages sent to a chain’s BMC from external relayers.
3. The **Service Contract (BSH)** contains application-specific logic that is executed in response to messages received from the BMC.

![](https://cdn-images-1.medium.com/max/800/1*5l8kOe91Kk119GkH7q4Csg.jpeg)## What is a BTP Relayer?

Without shipping companies like UPS and Fedex, online shopping wouldn’t exist. After all, packages don’t deliver themselves. The same concept applies to BTP, where relayers are responsible for delivering messages across blockchains.

If you’re familiar with blockchain lingo, a BTP relayer is similar to a node — it’s an always-online server that provides a necessary service for the blockchain in exchange for a reward paid in ICX. In BTP, a relayer node is responsible for relaying messages between BMCs on the source and destination chains.

Even though a relayer is technically a middleman, its function is very different from traditional cross-chain bridge operators that also act as custodians. When transferring from Ethereum to Avalanche using the Avalanche Bridge, custody of bridged funds is secured a multi-signature contract operated by four “wardens”. While Avalanche Bridge has proven to be a useful bridging solution thus far, its design relies on trusted bridge operators.

Unlike traditional bridges which rely on handpicked bridge operators, a BTP relayer can be set up by anyone. Furthermore, BTP relayers do not verify cross-chain transactions or custody funds. Instead, relayers only pass messages between chains, and funds are secured on the source and destination chains. This means with BTP, there is no need to trust relayers to move assets across chains because they only contribute to network liveness and reliability — not security.

## BTP Token Transfer Example

Let’s walk through an example of how BTP can be used to facilitate a token transfer from Moonbeam to Binance Smart Chain — two chains within the BTP Ecosystem.

1. Moonbeam’s BSH locks the user’s tokens on the Moonbeam blockchain.
2. A BTP relayer passes a message containing the token transfer data from Moonbeam’s BMC to ICON’s BMC.
3. ICON’s BMC passes the message to its BMV for verification. To do this, ICON’s BMV reproduces Moonbeam’s consensus protocol to validate the transaction signatures present in the message.
4. Once the message is validated, ICON’s BMC sends a message to Binance Smart Chain’s BMC via a BTP relayer.
5. Binance Smart Chain’s BMC passes the message to its BMV, which validates the message by reproducing ICON’s consensus mechanism locally.
6. Once the message is validated, Binance Smart Chain’s BSH initiates a token mint for the equivalent amount of tokens that were locked up on Moonbeam.

## The Advantages of BTP

## BTP is Chain-Agnostic and Scalable

BTP is chain-agnostic, which means it can be integrated with any blockchain that supports smart contracts. In fact, as of this writing, chains such as Binance Smart Chain, NEAR, Harmony, Algorand, and Moonbeam are all in the process of integrating BTP into their respective ecosystems.

## Easy of Integration

Compared to many other cross-chain solutions, BTP’s chain-agnostic design gives it two main advantages — ease of integration and scalability.

Cosmos and Polkadot are two top-tier projects that are also innovating in the interoperability space. Cosmos’ Inter-Blockchain Communication Protocol (IBC) allows Cosmos SDK blockchains to connect with each other. Similarly, the Polkadot Relay Chain allows for communication between Polkadot parachains (blockchains within the Polkadot ecosystem).

Unlike Cosmos’ and Polkadot’s interoperability solutions, ICON’s BTP doesn’t require connected blockchains to be built with a specific SDK or architecture. Going back to the digital nation analogy, inter-ecosystem interoperability (e.g. Cosmos and Polkadot) can be thought of as connections between different industries within a nation, while a chain-agnostic solution like BTP is more akin to connections between different industries across nations.

At this point, you may be wondering which bridging solution (chain-specific or chain-agnostic) is better. As with many things in life, the answer to this question isn’t so simple because there are advantages and disadvantages to both models. Chain-specific interoperability like Cosmos IBC allows dApp developers to quickly add cross-chain communication as a feature if they choose to build within the Cosmos ecosystem. On the other hand, there may be situations where a dApp needs to interact with another blockchain ecosystem.

As the blockchain industry expands, we believe inter-ecosystem and cross-ecosystem interoperability will both flourish, and we’re already starting to see examples of how these two models can co-exist — Moonbeam (Polkadot parachain) and Moonriver (Kusama parachain) are two of BTP’s initial integrations.


> *BTP is a general purpose bridge that is chain-agnostic, trustless and decentralized. We’re aiming to connect beyond chain specific bridges or ecosystem focused like EVM or Tendermint. Any blockchain with smart contracts will be able to incorporate BTP and integrate to the entire ecosystem. — 2infiniti, BTP Working Group*

## Scalable Bridging Between Blockchains

As an early adopter of DeFi and other crypto products, it’s common to use many different bridging solutions to jump between different ecosystems. For example, there is a Terra-Ethereum bridge and a Avalanche-Ethereum bridge. But, what if a user wanted to go directly from Terra to Avalanche without having to go through a costly transfer from Ethereum? Unfortunately, that’s not possible at the moment because both bridges are unique bi-directional bridges that are not aware of each other as parts of a monolithic bridging protocol.

With BTP, connected chains will be able to perform cross-chain transfers and communicate with each other without having to go through a third-party chain or provider. Taking the example above, if Avalanche and Terra were connected to BTP, users would be able to transfer assets directly from Avalanche to Terra without going through a common third party.

Removing the need for explicit connections between chains makes cross-chain bridging much more scalable. Imagine if you wanted to connect 100 different blockchains together. With BTP, each chain would only need a single integration with ICON to connect to the other 99 chains!

## BTP is Secure and Decentralized

Security and decentralization are two of BTP’s primary advantages. As we mentioned earlier, many bridges rely on handpicked operators to custody user funds and perform the necessary locking, minting, and burning of tokens for cross-chain transfers. Similar to how DeFi can only thrive with decentralized stablecoins, we also believe cross-chain interoperability requires fully trustless and decentralized bridges (not trusted or trust-minimized bridges).

BTP’s novel architecture allows it to be both secure and decentralized. Since verification and application logic reside directly on the source chain, destination chain, and ICON, BTP is as secure as the participating chains themselves. BTP’s secure nature also applies to custody of funds. Unlike traditional bridge operators which custody funds in a multi-signature contract, BTP locks up funds directly on the source and destination chains

In many traditional bridging solutions, the party that relays messages between chains is also in charge of verifying messages. This makes it near impossible for traditional bridging solutions to expand beyond a small set of handpicked bridge operators.

In BTP, the burden of verifying messages is not placed on relayers, which means there is no conflict of interest between security and decentralization. BTP relayers only contribute to liveness and can be operated by anyone. Furthermore, since relayers are incentivized by network issuance, they present yet another way to be rewarded for contributing to the ICON ecosystem.

## How to Join the BTP Ecosystem

We envision a future where BTP seamlessly facilitates cross-chain messaging and transfers for billions of users around the world. We are currently working with BTP partners like Binance Smart Chain, NEAR Protocol, Harmony, Algorand, and more to fulfill this vision. If you’re interested in joining the BTP ecosystem, please reach out to us on the [official ICON Discord](https://discord.gg/fuJssBjjAg).

## Summary

ICON’s BTP brings cross-chain interoperability to the next level. By utilizing on-chain smart contracts and community-run message relayers, BTP is able to facilitate cross-chain communication in a novel and fully-decentralized way that doesn’t leave custody of funds to a small set of handpicked bridge operators.


> *The vision for BTP is to be prepared for anything. 3 years ago, nobody imagined what interoperability would be used for, now there’s a focus on DeFi. What’s next? We don’t need an answer, we just need a flexible, secure and decentralized interoperability solution, and that’s what BTP is. — Min Kim, ICON Foundation*

The future of blockchain is undoubtedly multi-chain, which means cross-chain bridges will be of utmost importance in the coming years. We believe that BTP will be one of the leaders for cross-chain communication, and we look forward to working with our ecosystem partners and community to build a brighter and more interconnected future.

