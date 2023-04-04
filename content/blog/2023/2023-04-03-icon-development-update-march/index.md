---
title: ICON Development Update – March 2023
date: 2023-04-03
description: In March, the team has activated BTP blocks on the Berlin testnet. BTP contracts have been deployed on ICON Berlin testnet, BSC testnet and ETH Sepolia. 
slug: icon-development-update-february-2023
---

In March, the team has activated BTP blocks on the Berlin testnet. BTP contracts have been deployed on ICON Berlin testnet, BSC testnet and ETH Sepolia.  In this article, we share tasks completed and development milestones for April.

------

## BTP Architecture/ Product

It has been a busy month of March, with the team making great progress. BTP blocks have been activated on the Berlin testnet! BTP contracts have been deployed on ICON Berlin testnet, BSC testnet, and ETH Sepolia.

Now, it's time for our team to continue testing, identifying improvements, fixing bugs, and improving the relay and BMV components.

This is also the perfect time for other teams to explore how they can adopt BTP's xcall to enable new functionality on their applications. They can help identify any missing tools or documentation that would assist in onboarding teams to adopt the technology.

More information on the testnet incentivisation plans will follow shortly.

### Last Month

- Continue [Unit testing ETH 2.0](https://www.notion.so/eb52eafdbc0e496596fbd27d5c5ecdc9) BMV implementation - Done
- Continue developing [relay implementation for ETH 2.0](https://www.notion.so/3ee0ee535e28408eaf8698bfc01e1500) - with the team building a custom API they can now continue this work. - Done
- [Unit Test relay](https://www.notion.so/f88cddd9133346908a6a3ae2e10ec7d0) implementation for ETH 2.0 - Done
- Deploy integration on [local ICON & ETH 2.0 instance](https://www.notion.so/Deploy-ETH-2-0-integration-on-local-ICON-ETH-2-0-instance-a5557ff37ded457ea7a76659aa6790ac) - Done
- Test integration on [local ICON & ETH 2.0 instances](https://www.notion.so/3de4168cb55f442fba8d9689a4aee1bd) - Done
- [Deploy and test Local](https://www.notion.so/d5aa750d86334cffb7666d69c17a5ba5) ICON instance with ETH Sepolia testnet - Done
- [Deploy integration to new ICON testnet and connect to eth Sepolia testnet](https://www.notion.so/38bd5777c2484ad0b48161dcc7741536) - Done
- [Unit Test relay implementation for BSC](https://www.notion.so/5c26696670894328a0ddcc48a75331ee) - Done
- Continue [integration testing](https://www.notion.so/1b4241a97347447aaf626031ea46f07c) of the implementation of BSC BMV - Done
- Commence [testing relay implementation for BSC](https://www.notion.so/5c26696670894328a0ddcc48a75331ee) - Done
- Deploy new [ICON testnet and connect to BSC testnet](https://www.notion.so/b8f5a255991d49feac7138a7148c1097) - Done
- [Commence end-to-end testing](https://www.notion.so/ab2e979b62fd43deb031ba3125f99e6a) on new ICON testnet connected to BSC testnet -Done
- [Network proposal](https://www.notion.so/aa95c574bcb046d18f02811667d89f3e) on Berlin testnet to activate BTP Blocks - Done

### Next Month

# BSC & ETH

- Start [BTP blocks testing](https://www.notion.so/dd55ff14b0dc46e28feecc9bebbb187b) on Berlin testnet
- Deploy [BSC integration to ICON (berlin) & BSC testnet](https://www.notion.so/1a5121eb34ab4c96a88a3ac6736df413)
- Start [End to end testing](https://www.notion.so/10fc5892f3e8497493a02ad2ff32e909) on ICON (berlin) & BSC testnet
- [Deploy integration to ICON Berlin & ETH Sepolia testnet](https://www.notion.so/662a73d06c544979aa3d5feb6800d947)
- [End to end testing for ICON Berlin testnet & eth Sepolia testnet](https://www.notion.so/fe184f9a2f244a70af320b211bf1cbaf)
- Ongoing BSC and Eth relay testing and debugging
- Ongoing BSC and ETH BMV testing and debugging

# [BTP 2.0 code refactoring](https://www.notion.so/BTP-2-0-337aa608385449aca6656cbc065a4419)

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

- Released v1.3.3 on mainnet after monitoring SejongNet, BerlinNet, LisbonNet
- Fixed LisbonNet tracker update issue (errors in the tracker DB)
- Fixed Mainnet citizen node panic event occurred in the last week of February
- Improved code coverage (current coverage is about 43%)
- Fixed JavaEE (Java Execution Environment) shutdown issue caused by wrong API format via bug bounty

### Next Month

- IISS monetary policy change planning: commission model, jail time, minimum-wage
- Devising ICONex deprecation planning with the community
- Incrementally improving Goloop code coverage
- Improving P-rep tool (Validator tool)

### Documentation updates

Find the latest update from the Dev relations team [here](https://github.com/icon-project/grants-program/blob/main/progress-reports/developer-relations/developer-relations-support-progress-report-feb-2023.md)