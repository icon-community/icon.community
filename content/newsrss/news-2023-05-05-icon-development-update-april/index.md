---
title: ICON Development Update – April 2023
date: 2023-05-05
description: The month of April has been all about testing BTP components in a live testnet environment. During this time, a BSC testnet update required modifications to our relay and BMV contracts. In this article, we share tasks completed and development milestones for May.
slug: icon-development-update-April-2023
canonicalURL: "https://icon.community/blog/2023/icon-development-update-april-2023/"
---

The month of April has been all about testing BTP components in a live testnet environment. During this time, a BSC testnet update required modifications to our relay and BMV contracts. In this article, we share tasks completed and development milestones for May. Work on the IBC integrations of xCall Service continues to be captured in dedicated monthly reports, which are also linked in this article.

------

## xCall Architecture / Product

With BTP being live on Ethereum and BSC testnets our team has been busy using the first month to test all the components of BTP on a live testnet environment, they have already implemented various fixes to improve security and performance. Our team has also been working through the changes shipped to BSC testnet, more details on this can be found in the challenges section below.

### Last Month

- BTP blocks testing on Berlin testnet - ongoing/ monitoring
- End to end testing on ICON (berlin) & BSC testnet - ongoing
- End to end testing for ICON Berlin testnet & ETH Sepolia testnet - ongoing
- Ongoing BSC and ETH relay testing and debugging
- Ongoing BSC and ETH BMV testing and debugging
- Commenced working on Relay and BMV changes for BSC due to changes introduced by the proposed Luban update

### Next Month

- Enabling trustless bridging between ETH Sepolia to ICON
- Update relay and BMV with changes made to the BSC testnet via the Luban update
- Continue working on enabling trustless bridging BSC testnet to ICON
- Start testing with our focused testing group comprised of our ecosystem builders.

### Challenges

As mentioned earlier, BSC has updated its testnet with the proposed Luban hardfork changes. This alters the finality of block times on BSC, which requires us to modify our relay and BMV contracts. Our team has been diligently working on these changes, and we plan to release the updates to testnet by the end of next week.

Changes like these are rare, but when they occur, they are first deployed on testnet to allow teams to make any necessary modifications and test them on testnet to ensure that they are ready to update their protocols when the changes are implemented on mainnet.

{{< img src="btp-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## Integrations

Ibriz and Hygobyte have continued work on the IBC integrations with their monthly progress reports being published below:

- [**https://github.com/icon-project/grants-program/tree/main/progress-reports/ibc-integration**](https://github.com/icon-project/grants-program/tree/main/progress-reports/ibc-integration)

Milestone boards for both IBC and BTP integrations are published here:

- [IBC Integrations Milestones](https://www.notion.so/IBC-Integrations-Milestones-66221606c1464911be07c4ae73813578).
- [BTP Integrations Milestones](https://www.notion.so/BTP-Milestones-78dbe0023a0144ba9c53db9558ac7cf5)

{{< img src="icon-ibc-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## ICON Blockchain

### Last Month

- Released Goloop v1.3.5 on mainnet after monitoring SejongNet, BerlinNet, LisbonNet
    - https://github.com/icon-project/goloop/releases/tag/v1.3.5
    - Improved stack watcher behavior: fixed Java EE (Execution Environment) StackOverflowErrors
    - Improved websocket monitoring: added progress notification feature
- Improved coverage on Goloop master branch: 44.77%
    - [https://app.codecov.io/gh/icon-project/goloop/tree/master](https://app.codecov.io/gh/icon-project/goloop/tree/master)
- Code review of new P-rep tool feature completed: subcommand for call method network proposal
- Improved Goloop ValidatorState: more efficient memory usage and CPU computation regarding snapshot
- Added url parameter to registerValidator API in ChainScore
- zk-Snark
    - https://github.com/icon-project/goloop/pull/148
    - PR regarding zk-Snark support using BN128 (cryptographic mathematical tool for efficient and secure ways to create and verify digital signature)
    - Decided to continue with BLS12-381 as it is more efficient and secure pairing curve
- Released Javaee-scorex v0.5.4: Fixed copy constructor issue of ArrayList
    - https://github.com/icon-project/javaee-scorex/releases/tag/v0.5.4.1
    - https://github.com/icon-project/javaee-scorex/pull/5
- Ongoing implementation planning for ICON monetary policy change: improving reward/penalty system with new features
- Announced ICON Validator Support Program

### Next Month

- Goloop v1.3.6 release planned for May to fix consensus issue
- ICON monetary policy implementation plans and development
- Continuing the ICON Validator Support Program
- Improving bug reporting process
- Improving code coverage

### Documentation updates

Find the latest update from the Dev relations team [here](https://github.com/icon-project/grants-program/blob/main/progress-reports/developer-relations/developer-relations-support-progress-report-mar-2023.md).