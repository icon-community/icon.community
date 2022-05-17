---
title: "What is ICON?"
date: 2022-03-07
slug: icon
description: ICON is an open-source layer 1 delegated proof-of-stake (DPoS) blockchain and smart contract platform focused on connecting unique blockchains and their respective communities.
---

ICON is an open-source layer 1 delegated proof-of-stake (DPoS) blockchain and smart contract platform focused on connecting unique blockchains and their respective communities. ICON’s Blockchain Transmission Protocol (BTP) is a trustless and chain-agnostic interoperability solution that supports generic smart contract calls between connected blockchains. ICON offers a unique high-performance smart contract execution environment powered by the Java Virtual Machine (JVM) that is ideal for developing minimal-latency cross-chain dApps. The ICON blockchain is governed by validators elected through the network’s ICX staking and delegation mechanism.

In this article, we’ll explore the ICON network, its related technologies and architecture, the role of ICX, notable DeFi and NFT dApps, and more.

## ICX and Economics of the ICON Network

The ICON network uses delegated proof-of-stake (DPoS) consensus to incentivize validators to validate transactions and produce blocks. Compared to proof-of-work (PoW) which relies on power-hungry and expensive GPUs or ASICs to secure the network, and proof-of-stake (PoS), which requires stakers to set up a node or participate in a third-party staking pool, DPoS networks are much more energy-efficient and do not require individual stakers to set up and maintain nodes.

ICX is the cryptocurrency that powers and governs the ICON network. ICX has a variety of use cases including transaction fee payments, collateralization on DeFi platforms, and P2P value transfer. In this section, we’ll focus on the role of ICX within ICON’s economic and governance model.

DPoS blockchains like ICON rely on distributed validators, or nodes, to process transactions and produce blocks. An ICON validator is an entity that configures a server to connect to other validators on the network with the goal of forming consensus and producing blocks. The costs of running a validator node depends on various factors such as blockchain architecture, block time, block size, and more. In the case of ICON, running a high-quality validator operation can cost upwards of $1,000/month. With this in mind, it’s easy to see why blockchains need to incentivize validators – rational actors are not going to spend $1,000/month to run a node if there is no profit to be made.

### ICON Incentives Scoring System (IISS)

The economics of the ICON blockchain is governed by the “ICON Incentives Scoring System” (IISS), which issues and allocates ICX to different “buckets” in accordance with parameters agreed upon by ICON validators. At this time, IISS manages the minting of 3,000,000 ICX for allocation to four buckets:

* Voters - 77%
* Validators - 13%
* Contribution Proposal System - 10%
* BTP Relays 0%

Let’s first take a look at the incentive mechanisms that influence the relationships between the ICON network, voters, and validators. Generally speaking, ICON’s incentive model operates with the following assumptions in mind:

The network wants to maximize decentralization and stake. Stake is locked up capital (ICX) that yields rewards for entities acting in the best interests of the network.
Validators want to provide block production services and earn enough ICX rewards to make a profit.
Voters want to support validators while earning rewards to subsidize the opportunity cost of locking up ICX.

The ICON network maximizes decentralization and stake through three built-in mechanisms – a variable staking reward rate for voters, an unstaking period, and a bond requirement for validators.

### Variable Staking Reward Rate

As we mentioned earlier, IISS issues 3 million ICX per month and allocates 77% (2,310,000 ICX)  to voters. On ICON, the ICX staking reward rate depends on two factors – the percentage of issuance allocated to voters (currently 77%) and the total amount of ICX staked.

Consider the following scenario:

* A voter has staked 100,000 ICX.
* The percentage of ICX issuance allocated for voters is 77% or 2,310,000 ICX.
* The total amount of staked ICX is 380 million ICX.

In this scenario, the staking reward can be calculated like so:

(100,000 / 380,000,000) * 2,310,000 = 607.89 ICX/month

In this scenario, 607.89 ICX/month 100,000 staked ICX works out to a staking reward rate of 7.29% APY. If the total amount of staked ICX were to increase, the reward rate would decrease. Similarly, if the total amount of staked ICX were to decrease, the reward rate would increase to attract more stakers.

### Variable Unstaking Period

Voters receive staking rewards because staking and delegating ICX is not a risk-free proposition. When ICX is staked, it becomes illiquid and cannot be freely transferred and sold. Thus, staking ICX involves giving up the ability to sell ICX in response to market volatility, and staking rewards are designed to subsidize this risk to a certain degree.

To unstake ICX, there is an “unstaking period” that lasts between 5-20 days and is dynamically calculated based on the total amount of ICX staked. As staked supply increases, the duration of the unstaking period gets shorter. This makes sense because the purpose of the unstaking period is to act as a safety and security buffer for the ICON network because DPoS networks derive security from staked capital. Enforcing a longer unstaking period as staked supply decreases gives the network more buffer time to attract new stakers.

### Bond Requirement For Validators

Like many blockchain networks, ICON enforces a bond requirement for validators. At this time, ICON’s bond requirement is 5%, which means validators must stake and bond 5% of their total delegation to receive 100% of their validator rewards. For example, a validator with 5 million ICX in delegation needs to stake and bond 250,000 ICX to maximize earnings.

The bond requirement aids in decentralization because it makes it more difficult and expensive for a single entity to operate multiple validator nodes. Without a bond requirement, an entity could simply set up multiple nodes and pay the 2,000 ICX validator registration fee for each node. With the bond requirement, the entity would have to pay the registration fee AND lock up 5% of their total delegation.

### ICON Economics in a Nutshell

As you can see, the ICON blockchain has all the necessary economics and game theory in place to incentivize stakeholders to act in the best interests of the network. Validators and stakers are attracted to ICON because it offers a decentralized computing platform for running applications.

Validators are chosen by stakers, and rewarded by the blockchain for producing blocks – but only if they post a slashable bond. Stakers help secure the network by committing stake and choosing high-quality validators in exchange for rewards from the network. This complex system of checks and balances helps ensure a sustainable future for ICON.

## The Contribution Proposal System

The [Contribution Proposal System (CPS)](/learn/cps/) is a decentralized grant program operated by a subset of ICON validators. The CPS switches between two “periods” on a biweekly basis. During the application period, applicants can submit new proposals and progress reports. Following the application period, the voting period is when validators review and vote on proposals and progress reports.

To apply to the CPS, an applicant must prepare a proposal and submit it with an on-chain transaction during the application period (there is no need to go through additional KYC procedures). After a proposal is submitted, it needs to be sponsored by an ICON validator who must commit an ICX bond equivalent to 10% of the requested funding amount. Once a proposal has been sponsored, it is moved to the voting queue for validators.

During the voting period, ICON validators review and vote on proposals and progress reports. Approvals require a 67% consensus among validators – this ensures a decentralized and transparent experience for applicants and grantseekers. If a new proposal is approved, the applicant must submit a progress report during the next application period to receive funding. For approved progress reports, funding is automatically distributed at the end of the voting period.

The CPS is funded by a percentage of the network’s monthly ICX issuance (currently 10%). Every month, 300,000 ICX is automatically converted to the bnUSD stablecoin and made available to teams looking to contribute to ICON. This means the CPS is self-sustainable and not reliant on capital injection by external investors. Furthermore, by managing grant distributions in bnUSD, the Contribution Proposal System is able to offer builders a predictable stream of income that is unaffected by market volatility.

## Interoperability on ICON

The ICON ecosystem has two related interoperability solutions – BTP and ICON Bridge. BTP is fully trustless and uses on-chain light clients for cross-chain message verification, while ICON Bridge relies on a trusted operator for verifying and relaying messages.

### Blockchain Transmission Protocol (BTP)

As part of its 2.0 upgrade, ICON added support for [Blockchain Transmission Protocol (BTP)](/learn/btp/) – a decentralized and trustless interoperability solution that utilizes light clients – contracts that maintain block state – for verification of cross-chain messages. To pass messages between blockchains, BTP relies on incentivized and community-operated relays to ensure decentralization.

Unlike interoperability solutions that rely on relays to verify and pass messages, BTP relays only pass messages. Thus, relays do not factor into BTP’s security model, and only contribute to network liveness and reliability. With this design, BTP is able to maintain a fully trustless environment that doesn’t rely on third party oracles or custodians.

BTP also supports generic smart contract calls, which means it can be used for a variety of use cases beyond cross-chain token transfers. BTP allows a smart contract on a source blockchain to call any smart contract on a destination blockchain. For example, a cross-chain arbitrage dApp powered by BTP can execute an AMM swap on Blockchain A, while executing the reverse swap on Blockchain B.

### ICON Bridge

[ICON Bridge](/learn/icon-bridge/) shares a similar architecture to BTP, with the major difference being its message verification and relay layer. Since BTP uses on-chain light clients for message verification, integrating new blockchains into the BTP ecosystem may require a hard fork to add support for specific hashing algorithms. Thus, deployment of BTP is reliant upon hard fork schedules of individual blockchains.

To address this inefficiency, ICON Bridge replaces BTP’s on-chain light client message verification with a trusted bridge operator – a design that is similar to existing traditional bridging solutions. ICON Bridge, while not as decentralized as BTP, allows for blockchain integrations at a more rapid pace because it doesn’t require blockchains to hard fork. ICON Bridge allows users to take advantage of cross-chain experiences while BTP support is formalized.

### Interoperability Incentive Program

ICON’s [Interoperability Incentive Program](/interoperability-incentive-program/) is a 200 million ICX fund dedicated to development of cross-chain applications and infrastructure that utilize ICON’s BTP and ICON Bridge technologies. The Interoperability Incentive Program seeks to distribute 80 million ICX to BTP-enabled products and 120 million ICX for cross-chain use cases over a period of five years.

## ICON For Developers

With its unique technical architecture and vibrant developer community, ICON is a great option for building decentralized applications. ICON’s fast two-second block time (with finality) lets developers build responsive dApps that don’t leave users waiting around for block confirmations. ICON also supports a variety of programming languages with SDKs in JavaScript, Java, and Python. Let’s take a closer look at what makes ICON a unique blockchain platform for developers.

### Java Smart Contracts and JVM

Unlike Ethereum and EVM-based blockchains that use the Solidity programming language for smart contract development, smart contracts on ICON are written in Java and executed within [Goloop’s Java Virtual Machine (JVM) environment](https://github.com/icon-project/goloop/tree/master/javaee). While Java is not a common programming language for smart contract development, it was specifically chosen by ICON for its popularity in enterprise environments.

### Token Standards on ICON

Similar to Ethereum, ICON has a variety of extensible blockchain token standards that allow developers to quickly bootstrap decentralized applications.

* [IRC-2](https://github.com/icon-project/IIPs/blob/master/IIPS/iip-2.md) – A token standard for issuing fungible tokens (based on ERC-20).
* [IRC-3](https://github.com/icon2infiniti/Samples/tree/master/IRC3) – A token standard for issuing non-fungible tokens (based on ERC-721).
* [IRC-16](https://github.com/icon2infiniti/Samples/tree/master/IRC16) – A token standard for tokenizing physical assets such as real estate.
* [IRC-31](https://github.com/icon-project/IIPs/issues/31) – A token standard for issuing multiple token types in a single contract (based on ERC-1155).

### Identity Management with Magic

ICON is compatible with [Magic SDK](https://magic.link/docs/advanced/blockchains/icon) for blockchain identity management. Magic is a service that lets developers create dApp login experiences that use email-based passwordless authentication instead of traditional blockchain wallets. With Magic, users can log in to dApps via a link sent to their email address, and transaction signing is automatically handled in the background by Magic. While this may seem contradictory to the blockchain philosophy of “not your keys, not your coins”, passwordless authentication services like Magic are key to making dApps more accessible for mainstream users.

## dApps on ICON

The ICON ecosystem has its share of innovative and user-friendly dApps in DeFi, NFTs, and more. In this section, we’ll take a closer look at four of ICON’s most prominent dApps.

### Balanced

{{< img src="balanced-dapp.jpg" alt="Mint the bnUSD stablecoin and swap assets on Balanced." caption="Mint the bnUSD stablecoin and swap assets on Balanced." >}}

[Balanced](https://balanced.network) is a community-governed DeFi platform that lets users leverage ICX and mint bnUSD, an algorithmic stablecoin. On Balanced, users deposit ICX, which is then converted to Staked ICX (sICX) – a liquid staking token which accrues staking reward value automatically. With sICX as collateral, users can mint bnUSD up to the maximum supported LTV.

In addition to stablecoin minting, Balanced also features an AMM-style DEX where users can swap between supported assets. Liquidity on the Balanced DEX is derived from liquidity pools, some of which are incentivized by BALN token rewards.

### Omm

{{< img src="omm-dapp.jpg" alt="Lend and borrow assets on the Omm money market." caption="Lend and borrow assets on the Omm money market." >}}

[Omm](https://omm.finance), short for “Open Money Market”, is a variable interest rate DeFi lending and borrowing platform. On Omm, users can deposit a variety of ICON-based assets to borrow against while earning additional rewards in the OMM token. Compared to Balanced which offers zero interest bnUSD minting and a lower LTV, Omm features variable interest rates and a higher LTV.

### Optimus

{{< img src="optimus-dapp.jpg" alt="Maximize and optimize yield farming rewards with Optimus." caption="Maximize and optimize yield farming rewards with Optimus." >}}

[Optimus](https://optimus.finance) is a yield optimization platform that employs automated strategies designed to maximize rewards for users while minimizing risk. Optimus strategies leverage other DeFi protocols like Balanced and Omm in the background.

For example, staking the OMM token on Omm generates claimable staking rewards every block. Thus, to maximize OMM staking rewards, a user would have to claim and compound rewards frequently. Optimus makes this easier by offering an “OMM Staking Strategy” which automatically claims and compounds OMM to maximize staking rewards.

### Craft

{{< img src="craft-dapp.jpg" alt="Mint, buy, and sell NFTs on Craft, the community-owned NFT marketplace." caption="Mint, buy, and sell NFTs on Craft, the community-owned NFT marketplace." >}}

[Craft](https://craft.network) is ICON’s premier NFT marketplace. As a community-owned marketplace, Craft distributes a percentage of collected fees to holders of the CFT token. Craft features a rich variety of NFT collections including [GangstaBet](https://gangstabet.io), [Tamashi](https://studiomirai.io), PinkPunks, RagePups, and more.

## Enterprise Adoption of ICON

Compared to other L1 public blockchains, one of ICON’s main differentiators is its strong traction in the South Korean enterprise, government, and academic sectors.

[Zzeung](https://www.iconloop.com/en/zzeung/) is a decentralized identity (DID) application developed by ICONLOOP that is currently in use by citizens of South Korea on a daily basis. Zzeung uses both private purpose-specific blockchains and the ICON public chain to verify user identity for a variety of use cases.

In the recent past, Zzeung was used to facilitate COVID-19 contact tracing on Jeju Island, as well as vaccine certificate issuance in South Korea. In the financial sector, Shinhan Bank – the second largest commercial bank in South Korea – is using Zzeung to aid with KYC compliance for customers.

ICONLOOP’s [broof](https://broof.io) service has also seen significant adoption in the South Korean academic sector. Broof is a certificate issuance platform, which enables institutions and other registered users to issue tamper-proof certificates. POSTECH, South Korea’s premier higher education institution for science and technology, has used broof to issue diplomas for graduating students. Broof has also been adopted by SaraminHR, South Korea’s leading job board, to reduce application fraud.

## ICE and SNOW Ecosystem

One of ICON’s perceived disadvantages is its lack of EVM compatibility. In order to be EVM-compatible, a blockchain needs to support Solidity smart contracts written for Ethereum. In the case of ICON, smart contracts are written in Java and executed in a Java Virtual Machine (JVM) environment – a fundamentally different design that gives up EVM compatibility in favor of ease of integration with enterprises and institutions where Java is often the language of choice.

However, to address the issue of EVM compatibility, ICON bootstrapped a secondary blockchain ecosystem which consists of two blockchains – [ICE and SNOW](https://icenetwork.io). ICE is dubbed as “an extension network and EVM-compatible application of the ICON ecosystem built with Substrate SDK”.

The goal of ICE is to launch an EVM-compatible Polkadot parachain with first-class support for ICON’s BTP and ICON Bridge interoperability solutions. For Solidity developers, ICE will offer a comfortable and familiar environment for writing and deploying smart contracts. As a Polkadot parachain that also supports BTP, ICE will also be able to communicate with other parachains via the Polkadot Relay Chain, as well as external chains via BTP. For developers looking to work with cutting edge technologies and economic designs, the SNOW canary network running on Kusama will offer an economically-incentivized playground for real-world experimentation.

## Where to Buy ICON (ICX)
ICX is available on a variety of centralized and decentralized exchanges including:

* [Balanced](https://app.balanced.network/trade)
* [Binance](https://www.binance.com/en/trade/ICX_USDT)
* [Binance US](https://binance.us/en/trade/pro/ICX_USD)
* [Bithumb](https://en.bithumb.com/trade/order/ICX_KRW)
* [FTX (Futures)](https://ftx.com/trade/ICX-PERP)
* [Huobi Global](https://www.huobi.com/en-us/exchange/icx_usdt/)
* [Kraken](https://trade.kraken.com/charts/KRAKEN:ICX-USD)
* [Upbit](https://upbit.com/exchange?code=CRIX.UPBIT.KRW-ICX)

## Summary

Since its inception in 2017, the ICON ecosystem has evolved from an idea to a truly global and decentralized network that powers a variety of innovative and permissionless applications. In the coming years, ICON’s Blockchain Transmission Protocol (BTP) will play a key role in connecting different blockchain ecosystems to enable more efficient and meaningful transfer of value between otherwise disconnected economies.
