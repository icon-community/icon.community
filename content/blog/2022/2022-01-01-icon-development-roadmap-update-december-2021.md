---
title: "ICON Development Roadmap Update — December 2021"
date: 2022-01-01
slug: icon-development-roadmap-update-december-2021-952fb051734d
description:
---

## ICON Development Roadmap Update — December 2021

### IISS 3.1, Java SCORE, BTP, and more.

![](https://cdn-images-1.medium.com/max/800/1*_M4Fl4rhcFwQHo0ko0j1WQ.jpeg)In December, the ICON network was upgraded to ICON 2.1 – a major upgrade that included Revision Proposals 14, 15, and 16. ICON 2.1 includes a variety of new developments including IISS 3.1, bonded delegation, bond slashing, Fee 3.0, Java SCORE, and more. We also made significant progress on BTP and Nexus integrations. Read more about our progress in December below.

## IISS 3.1

With the passing of the Revision 14 network proposal, IISS 3.1 was successfully activated on the ICON mainnet. IISS (ICON Incentives Scoring System) controls the calculation of I-Score rewards for network participants (voters, P-Reps, etc.) on the ICON network.

Overall, IISS 3.1 makes ICX issuance more predictable via targeted inflation pools (P-Reps, relays, CPS, and voters), and the initial implementation of IISS 3.1 has a lower inflation rate (~3.99%) than that of ICON 1.0.

### Bonded Delegation

In IISS 3.1, P-Rep rank is no longer strictly determined by delegation. Instead, **bonded delegation** is the metric that determines a P-Rep’s rank. In order to receive 100% of their reward, P-Reps must post 5% of their delegation as a bond. For example, if a P-Rep has 1,000,000 votes, they must commit 50,000 ICX as a bond in order to receive their full reward.

### Slashing

Under certain conditions, a P-Rep’s bond can be slashed (slashing does not apply for voters). For example, if a P-Rep experiences significant downtime or misses a network proposal vote, they’ll receive a 10% slash on their bond. Since slashing is a new development that was introduced in ICON 2.0, the current slashing rate has been set to 0%. Over time, the slashing rate will be increased to 10% as ICON 2.0 matures and stabilizes.

## Fee 3.0

Fee 3.0 is the ICON network’s updated fee policy. It features an overall increase in runtime costs to a level that is more appropriate. In addition to generating more ICX transaction fees, Fee 3.0 also reduces the likelihood of bad actors spamming the network. Fee 3.0 also includes cheaper SCORE deploy and update costs, as well as a new 25 step cost for database get calls.

## Java SCORE

With the passing of the Revision 15 network proposal, Java SCORE (ICON’s smart contract execution environment) support was officially activated on the ICON mainnet. Compared to Python SCORE in ICON 1.0, Java SCORE in ICON 2.0 brings a number of improvements:

* Java smart contracts do not need to go through an audit process prior to deployment. This enables developers to deploy contracts faster and more seamlessly.
* Java SCORE supports SCORE Factory, a feature that allows a SCORE to deploy another SCORE.

**IMPORTANT: With Java SCORE support in full swing, we will be deprecating support for Python SCORE in the future. We will release more information about the deprecation strategy and timeline in the coming weeks.**

## **BTP and Nexus**

### Moonriver

We migrated from the multi-token standard (IRC31, ERC1155) to the base token standard(IRC2, ERC20) for MoonRiver. This will allow us to work directly with existing dApps on ICON and MoonRiver. We also addressed inconsistent synchronization between BMVs and BMRs, fixed a problem with unstable socket connections, updated to the latest Moonriver runtime, and fixed the max block update per segment to avoid a max gas limit error.

### Binance Smart Chain (BSC)

We completed the BSC integration on the Nexus portal, and solved all requests from BSC to finalize a pull request. Currently, we are awaiting a BSC hard fork before deploying to production for final testing.

### NEAR Protocol

We successfully deployed a local NEAR node, connected to NEAR wallet, and started integration of NEAR into the Nexus portal. We also made progress on the transaction, mint/burn, and relayer registration indexers for NEAR.

## ICON 2.0 and BTP Targets in January

In January, our core focus will be activating ICON 2.2 – this upgrade will be the last step in finalizing the transition from ICON 1.0 to ICON 2.0. As part of this upgrade, we will be looking to increase the number of Main P-Reps from 22 to 25. ICON 2.2 will also include a new Governance SCORE written in Java, and the contract owner will be changed to the Governance SCORE itself.

For BTP, we will aim to complete the items below in January:

* Begin research on gas reduction under a trustless bridge model
* Deploy token migration contracts to MoonRiver testnet and ICON’s Berlin testnet for testing.
* Deploy contracts to Moonriver and ICON mainnet if gas consumption problem is successfully resolved.
* Complete NEAR integration into the Nexus portal.
* More partner integrations (TBA)
* Starting dApp-to-dApp integrations to showcase real-world use cases for cross-chain transfers.

## Join the ICON Community

For more information about ICON, [join the official ICON Discord](https://discord.gg/gMCCdbjVf9) and [subscribe to our newsletter](https://mailchi.mp/icon.foundation/icon-20).

