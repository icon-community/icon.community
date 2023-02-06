---
title: ICON Development Update – January 2023
date: 2023-02-06
description: In January, the ICON team continued making progress on BTP and ICON 2.0. Work on the xCall service integration into IBC has commenced. In this article, we share tasks completed and development milestones for February.
slug: icon-development-update-january-2023
---

In January, the ICON team continued making progress on BTP and ICON 2.0. Work on the xCall service integration into IBC has commenced. In this article, we share tasks completed and development milestones for February.

## BTP Architecture/ Product

This month, we'd like to share our BTP 2.0 Milestones with our community. What stands out is that, as the BTP 2.0 protocol is being built, the team is also developing two key integrations: BSC and ETH 2.0.

Going forward, these updates will refer to the cards on the BTP milestone board so we can track their progress.

In January, the team successfully developed the BMV component for BSC and ETH 2.0. Now, they will focus on testing these.

### Last Month

**BSC & ETH**

- Shared new relay interface design with engineers to review and begin implementing
- The initial development of BMV has been completed for BSC and ETH 2.0
- BTP milestones have been created.

### Next Month

**BSC & ETH**

- Begin Unit testing ETH 2.0 BMV implementation
- Begin Unit testing BMV implementation for BSC
- Deploy BSC integration on local ICON & BSC instance
- Start integration testing of the implementation of BSC BMV
- Continue working on Relay Refactoring
- Continue developing relay implementation for ETH 2.0
- Continue developing relay implementation for BSC

**BTP 2.0 code refactoring**

- Splitting the source code into several repos:
    - Java
    - Solidity
    - Relayer-common

**Challenges**

Eth 2.0 has not finalised its API specs for calling data proofs from the chain, which impacts finalising the the interface for the relay. Our team is closely monitoring waiting for the Ethereum team to finish these API’s

## Integrations

iBriz and Hygobyte have commenced work on the IBC integrations of the xCall service, as mentioned in the [ICON 2022 Recap & 2023 Outlook](https://icon.community/blog/2023/icon-2022-recap-and-2023-outlook/). 

> In 2023, we will continue adapting to an evolving interoperability landscape by expanding use cases for xCall, a standard for generic cross-chain messaging, to interoperability protocols beyond BTP - ICON 2022 Recap & 2023 Outlook.

Monthly reports will soon get published.

In February we aim to publish a milestone board, similar to the BTP milestones, for the IBC integrations work.

## ICON 2.0 updates

### Last Month

- Improved [code coverage](https://app.codecov.io/gh/icon-project/goloop/tree/master)
- Mainnet citizen node updated to v1.3.2
- Released Goloop v1.3.3 to fix sporadic node crash issue
    - Goloop #133
- Goloop v1.3.3 released on mainnet
    - Refactored and added unit tests for scoreAPI package
    - All testnets (BerlinNet, LisbonNet, SejongNet) updated to v1.3.3
    - Released on mainnet, mainnet citizen updated to v1.3.3

### Next Month

- Adding unit tests and improving code coverage