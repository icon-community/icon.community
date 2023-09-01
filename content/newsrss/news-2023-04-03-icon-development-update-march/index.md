---
title: ICON Development Update – March 2023
date: 2023-04-05
description: In March, the team has activated BTP blocks on the Berlin testnet. BTP contracts, that are currently one-way trustless, have been deployed on ICON Berlin testnet, BSC testnet, and ETH Sepolia. 
slug: icon-development-update-march-2023
canonicalURL: "https://icon.community/blog/2023/icon-development-update-march-2023/"
---

In March, the team has activated BTP blocks on the Berlin testnet. BTP contracts, that are currently one-way trustless, have been deployed on ICON Berlin testnet, BSC testnet, and ETH Sepolia.  In this article, we share tasks completed and development milestones for April.

------

## BTP Architecture/ Product

It has been a busy month of March, with the team making great progress. BTP blocks have been activated on the Berlin testnet! BTP contracts, that are currently one-way trustless, have been deployed on ICON Berlin testnet, BSC testnet, and ETH Sepolia. 

The BTP contracts enable trustless outbound messaging from the ICON blockchain. Inbound messages are currently still making use of trusted relay verification (similar to ICON bridge).

Now, it's time to continue testing, identifying improvements, fixing bugs, and improving the relay and BMV components. After one-way bridging, our team will work towards full trustless bridging with BTP on testnet.

This is also the perfect time for other teams to explore how they can adopt BTP's xCall to enable new functionality on their applications. They can help identify any missing tools or documentation that would assist in onboarding teams to adopt the technology.

More information on the testnet incentivisation plans will follow shortly.

### Last Month

- Continue Unit testing ETH 2.0 BMV implementation - Done
- Continue developing relay implementation for ETH 2.0 - with the team building a custom API they can now continue this work. - Done
- Unit Test relayimplementation for ETH 2.0 - Done
- Deploy integration on local ICON & ETH 2.0 instance - Done
- Test integration on local ICON & ETH 2.0 instances - Done
- Deploy and test Local ICON instance with ETH Sepolia testnet - Done
- Deploy integration to new ICON testnet and connect to eth Sepolia testnet - Done
- Unit Test relay implementation for BSC - Done
- Continue integration testing of the implementation of BSC BMV - Done
- Commence testing relay implementation for BSC - Done
- Deploy new ICON testnet and connect to BSC testnet - Done
- Commence end-to-end testing on new ICON testnet connected to BSC testnet -Done
- Network proposal on Berlin testnet to activate BTP Blocks - Done

### Next Month

# BSC & ETH

- Start BTP blocks testing on Berlin testnet
- Deploy BSC integration to ICON (berlin) & BSC testnet
- Start End to end testing on ICON (berlin) & BSC testnet
- Deploy integration to ICON Berlin & ETH Sepolia testnet
- End to end testing for ICON Berlin testnet & eth Sepolia testnet
- Ongoing BSC and Eth relay testing and debugging
- Ongoing BSC and ETH BMV testing and debugging

# BTP 2.0 code refactoring

- Splitting the source code into several repos
    - Java - Done
    - Solidity - Done
    - Relayer-common - Done

### Challenges

It is worth noting again that as we get to the stage of deploying BTP to its respective testnets, we expect to face minor issues due to the general nature of testnets. This is nothing major however its a valid risk to take into account as we move forward. 

{{< img src="btp-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## Integrations

Ibriz and Hygobyte have continued work on the IBC integrations with their monthly reports being published below:
- [IBC Integrations Milestones](https://iconfoundation.notion.site/IBC-Integrations-Milestones-66221606c1464911be07c4ae73813578).

Parameta continues to work on BTP development and integrations with their monthly report being published below:
- [BTP Integrations Milestones](https://iconfoundation.notion.site/BTP-Milestones-78dbe0023a0144ba9c53db9558ac7cf5)



{{< img src="icon-ibc-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## ICON Blockchain

### Last Month

- Released v1.3.4 on mainnet after monitoring SejongNet, BerlinNet, LisbonNet
    - Resolving Skipped Transaction bugs due to invalid API data
- Current coverage on Goloop master branch: 43.31%
- ICON monetary policy update in progress
- ICON SDK development in progress
    - Wallet extension for Chrome, Block explorer & API
- Added P-rep tool feature and currently code reviewing: subcommand for call method network proposal
    - Enables voting without submitting network proposal
- Updated node monitoring dashboard
    - Removed deprecated items and updated the interface

### Next Month

- Complete code review for new P-rep tool feature
- Improving code coverage, aiming at 45%
- Community sharing about ICON monetary policy update and change
- Improving bug bounty and reporting process
    - Optimizing rewards through diversified pricing tiers
    - Streamlining bug reporting process: GitHub vs. Discord
- Improve node health and evaluate validator productivity