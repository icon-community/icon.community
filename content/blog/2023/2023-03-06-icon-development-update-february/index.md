---
title: ICON Development Update – February 2023
date: 2023-03-06
description: In February, the team started testing BTP across local instances. Alongside the BTP milestones board, we can now also take a first look at the milestone board for IBC integrations.
slug: icon-development-update-february-2023
---

In February, the team started testing BTP across local instances. Alongside the BTP milestones board, we can now also take a first look at the milestone board for IBC integrations. In this article, we share tasks completed and development milestones for March.

------

## BTP Architecture/ Product

In this month the team started testing BTP across local instances on ICON, BSC and ETH 2. They identified an issue with the xCall messages, which was analyzed and fixed. The corresponding updates have been pushed to [IIP-52](https://github.com/icon-project/IIPs/blob/master/IIPS/iip-52.md). Subsequently, the end to end demo will get updated with these fixes in early March. The team in March is focused on the various deployments to testnets and continuous testing of these all components. 

### Last Month

- Begin [Unit testing ETH 2.0](https://www.notion.so/Unit-Test-BMV-for-ETH-2-0-eb52eafdbc0e496596fbd27d5c5ecdc9) BMV implementation. - Still ongoing
- Begin [Unit testing BMV](https://www.notion.so/Unit-Test-BMV-for-BSC-5950cab5c9a145c9821240d20782ab5f) implementation for BSC - Completed
- Deploy BSC integration on local [ICON & BSC instance](https://www.notion.so/Deploy-BSC-integration-on-local-ICON-BSC-instance-2a9e98e7d6a24a158d4481bf6bc3d9ff) - Completed
- Start [integration testing](https://www.notion.so/Test-BSC-integration-on-local-ICON-BSC-instances-1b4241a97347447aaf626031ea46f07c) of the implementation of BSC BMV - Still ongoing
- Continue working on [Relay refactoring](https://www.notion.so/Relay-Code-refactoring-58ca74796eb34f7386dbece11319a657) - Completed
- Continue developing [relay implementation for ETH 2.0](https://www.notion.so/Develop-relay-for-ETH-2-0-3ee0ee535e28408eaf8698bfc01e1500) - Still ongoing
- Continue developing [relay implementation for BSC](https://www.notion.so/Develop-relay-for-BSC-3a21bf06b7ff450ab91046c9187658d3) - Completed
- Bug identified in the xcall service with a fix developed, tested and implemented.
- Built custom API to get proof data from ETH 2

### Next Month

# BSC & ETH

- Continue [Unit testing ETH 2.0](https://www.notion.so/Unit-Test-BMV-for-ETH-2-0-eb52eafdbc0e496596fbd27d5c5ecdc9) BMV implementation
- Continue [integration testing](https://www.notion.so/Test-BSC-integration-on-local-ICON-BSC-instances-1b4241a97347447aaf626031ea46f07c) of the implementation of BSC BMV
- Continue developing [relay implementation for ETH 2.0](https://www.notion.so/Develop-relay-for-ETH-2-0-3ee0ee535e28408eaf8698bfc01e1500) - with the team building a custom API they can now continue this work.
- Commence [testing relay implementation for BSC](https://www.notion.so/Unit-Test-relay-implementation-for-BSC-5c26696670894328a0ddcc48a75331ee)
- Deploy new [ICON testnet and connect to BSC testnet](https://www.notion.so/Deploy-new-ICON-testnet-and-connect-to-BSC-testnet-b8f5a255991d49feac7138a7148c1097)
- Commence end to end testing on new ICON testnet connected to BSC testnet

# [BTP 2.0 code refactoring](https://www.notion.so/BTP-2-0-337aa608385449aca6656cbc065a4419)

- Splitting the source code into several repos
    - Java - Still ongoing
    - Solidity - Still ongoing
    - Relayer-common - Done

### Challenges

As we get to the stage of deploying BTP to its respective testnets, we expect to face minor issues due to the general nature of testnets. This is nothing major however its a valid risk to take into account as we move forward. 

{{< img src="btp-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## Integrations

Ibriz and Hygobyte have commenced work on the IBC integrations with their monthly reports being published [here](https://github.com/icon-project/grants-program/tree/main/progress-reports/ibc-integration).

Alongside the [BTP milestones board](https://www.notion.so/BTP-Milestones-78dbe0023a0144ba9c53db9558ac7cf5), we can now also take a first look at the [milestone board](https://www.notion.so/IBC-Integrations-Milestones-66221606c1464911be07c4ae73813578) for IBC integrations. Visitors can expect a few more elements to be added to it during the month of March. 

Finally, keep an eye out for development updates on the topic of IBC integrations in the Ecosystem Insights series that has recently launched on the [ICON Network YouTube channel](https://www.youtube.com/channel/UCI7Z_1sTKN-kCVgFD2a0GXQ). The next episode is scheduled to drop this week!

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