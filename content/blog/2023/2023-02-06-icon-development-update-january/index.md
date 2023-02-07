---
title: ICON Development Update – January 2023
date: 2023-02-06
description: Work on the xCall service integration into IBC has commenced. In this article, we share tasks completed and development milestones for February.
slug: icon-development-update-january-2023
---

In January, the ICON team continued making progress on BTP and ICON 2.0. Work on the xCall service integration into IBC has commenced. In this article, we share tasks completed and development milestones for February.

## BTP Architecture/ Product

This month, we'd like to share our [BTP 2.0 Milestones](https://iconfoundation.notion.site/BTP-Milestones-78dbe0023a0144ba9c53db9558ac7cf5) with our community. What stands out is that, as the BTP 2.0 protocol is being built, the team is also developing two key integrations: BSC and ETH 2.0.

Going forward, these updates will refer to the cards on the BTP milestone board so we can track their progress.

In January, the team successfully developed the BMV component for BSC and ETH 2.0. Now, they will focus on testing these.

### Last Month

**BSC & ETH**

- Shared new relay interface design with engineers to review and begin implementing
- The initial development of BMV has been completed for BSC and ETH 2.0
- BTP milestones have been [created](https://www.notion.so/BTP-Milestones-78dbe0023a0144ba9c53db9558ac7cf5).

### Next Month

**BSC & ETH**

- Begin [Unit testing ETH 2.0](https://www.notion.so/Unit-Test-BMV-for-ETH-2-0-eb52eafdbc0e496596fbd27d5c5ecdc9) BMV implementation.
- Begin [Unit testing BMV](https://www.notion.so/Unit-Test-BMV-for-BSC-5950cab5c9a145c9821240d20782ab5f) implementation for BSC
- Deploy BSC integration on local [ICON & BSC instance](https://www.notion.so/Deploy-BSC-integration-on-local-ICON-BSC-instance-2a9e98e7d6a24a158d4481bf6bc3d9ff)
- Start [integration testing](https://www.notion.so/Test-BSC-integration-on-local-ICON-BSC-instances-1b4241a97347447aaf626031ea46f07c) of the implementation of BSC BMV
- Continue working on [Relay Refactoring](https://www.notion.so/Relay-refactoring-c484ac1c038242baa11da5b15d91a226)
- Continue developing [relay implementation for ETH 2.0](https://www.notion.so/Develop-relay-for-ETH-2-0-3ee0ee535e28408eaf8698bfc01e1500)
- Continue developing [relay implementation for BSC](https://www.notion.so/Develop-relay-for-BSC-3a21bf06b7ff450ab91046c9187658d3)

**[BTP 2.0 code refactoring](https://www.notion.so/BTP-2-0-code-refactoring-337aa608385449aca6656cbc065a4419)**

- Splitting the source code into several repos:
    - Java
    - Solidity
    - Relayer-common

**Challenges**

Eth 2.0 has not finalised its API specs for calling data proofs from the chain, which impacts finalising the the interface for the relay. Our team is closely monitoring waiting for the Ethereum team to finish these API’s

## Integrations

iBriz and Hygobyte have commenced work on the IBC integrations of the xCall service, as mentioned in the [ICON 2022 Recap & 2023 Outlook](https://icon.community/blog/2023/icon-2022-recap-and-2023-outlook/). 

> In 2023, we will continue adapting to an evolving interoperability landscape by expanding use cases for xCall, a standard for generic cross-chain messaging, to interoperability protocols beyond BTP - ICON 2022 Recap & 2023 Outlook.

Monthly reports will soon get published [here](https://github.com/icon-project/grants-program/tree/main/progress-reports/ibc-integration).

In February we aim to publish a milestone board, similar to the BTP milestones, for the IBC integrations work.

## ICON 2.0 updates

### Last Month

- Improved [code coverage](https://app.codecov.io/gh/icon-project/goloop/tree/master)
- Mainnet citizen node updated to [v1.3.2](https://github.com/icon-project/goloop/releases/tag/v1.3.2)
- Released Goloop [v1.3.3](https://github.com/icon-project/goloop/releases/tag/v1.3.3) to fix sporadic node crash issue
    - Goloop [#133](https://github.com/icon-project/goloop/issues/133)
- Goloop [v1.3.3](https://github.com/icon-project/goloop/releases/tag/v1.3.3) released on mainnet
    - Refactored and added unit tests for scoreAPI package
    - All testnets (BerlinNet, LisbonNet, SejongNet) updated to v1.3.3
    - Released on mainnet, mainnet citizen updated to v1.3.3

### Next Month

- Adding unit tests and improving code coverage