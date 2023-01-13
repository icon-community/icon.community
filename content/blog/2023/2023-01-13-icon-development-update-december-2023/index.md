---
title: ICON Development Update – December 2022
date: 2023-01-13
description: In December, the ICON team continued making progress on BTP, ICON Bridge and ICON 2.0. In this article, we’ll share tasks completed and development milestones for January.
slug: icon-development-update-december-2022
---

In December, the ICON team continued making progress on BTP, ICON Bridge and ICON 2.0. In this article, we’ll share tasks completed and development milestones for January. 

Next week, a strategy update will be published in which we further elaborate on the 2023 strategy for the ICON Network as a cross-chain hub.

## BTP Architecture/Product

There have been significant improvements in documentation and end-to-end testing demos over the last month. E2e testing demos have proven useful for community developers and we look forward to seeing how it’s used. Additionally, initial implementations of the BMV for BSC and ETH2 have begun. This will be an iterative process as we test the verification process for both ETH2 blocks and BSC blocks. 

In the current state of BTP implementation, we have confidence in the non-ICON BMVs that will verify ICON’s BTP blocks. This has been written in Solidity and is now part of the e2e testing demo. This could create a trustless ICON → other chain connection, while sending a message to ICON from another chain would still be ICON Bridge-style verification. Making the other chain → ICON trustless is the stage of the process we are at.

As mentioned in the previous update, testing the verification process is of the utmost importance. Any bug in this process could put all apps using BTP at risk, therefore this will be the most important aspect of BTP implementation.

### Last Month

- Finished [IIP52](https://github.com/icon-project/IIPs/pull/55) to specify the xCall protocol (still in PR, but work is completed)
- Finished [IIP25](https://github.com/icon-project/IIPs/pull/58) to specify BTP 2.0 (still in PR, but work is completed)
- Wrote more [documentation](https://github.com/icon-project/IIPs/pull/58) on how to manage BTP networks on the ICON Network
- Added more scenarios to the [e2e testing demo](https://github.com/icon-project/btp/tree/896eea19e683118361a6cd00baf20725f5d05393/e2edemo) for BTP 2.0
- Completed initial research and began initial implementations of the BMV for BSC and ETH2
- Completed [documentation](https://github.com/icon-project/goloop/blob/master/doc/btp2_extension.md) on BTP blocks
- Began refactoring the Relay components to be more modular

### Next Month

- Review initial implementations of the BSC and ETH2 BMVs, provide feedback to engineers, then continue implementations and testing
- Finalize the refactored Relay components and apply them to BSC and ETH2 implementations
- Put together an itemized list of milestones for greater transparency into progress of BTP

## Interoperability Integrations
The team has made the ICON Bridge integration GitHub public, with integration teams moving to a monthly release schedule for releases (published [here](https://github.com/icon-project/icon-bridge/releases/tag/v0.0.10)) and progress reports (published [here](https://github.com/icon-project/grants-program/tree/main/progress-reports/icon-bridge)). 

As integration updates are submitted to GitHub, we release a separate report summarizing what has been accomplished and what is scheduled to happen next. The last integration update [here](https://icon.community/blog/2022/icon-integration-update-october-2022/) is from the month October. Nonetheless, the next integration update will drop shortly.

## ICON updates
### Last Month
* Released [v1.3.1](https://github.com/icon-project/goloop/releases/tag/v1.3.1) on mainnet, all validators updated to v1.3.1
* Submitted and applied [Revision 20](https://main.tracker.solidwallet.io/proposal/0x1f53e4dbcf1fafea1a7f46ee427142c6a9035b359fa2e9f47804c9066d999b60) Network Proposal to fix Goloop issue [#123](https://github.com/icon-project/goloop/issues/123)
* Released [v1.3.2](https://github.com/icon-project/goloop/releases/tag/v1.3.2) on mainnet: adding unit tests, removing Python EE (execution environment) dependency, refactoring Goloop source code to use MissingTransactionInfo Rosetta APIs
* Made continuous improvement of the Execution Environment (EE) reservation algorithm - When using multiple EE Instances, distribution logic is required to request Query (Estimate/Call) and Execution (Block Verify).
### Next Month
* Adding unit tests and increasing code coverage 
* Continue refactoring Goloop source codes incrementally 

## ImmuneFi Bug Bounties
[ICON Foundation](https://icon.foundation/) has partnered with ImmuneFi to host a [bug bounty program](https://icon.community/blog/2022/icon-foundation-partners-with-immunefi-for-bug-bounty-program/). The program covers vulnerabilities related to smart contracts, Goloop (the ICON main network node software) and the [ICON tracker](https://tracker.icon.community/). This month saw no awarded bug bounties.

Visit the ImmuneFi bug bounty portal [here](https://immunefi.com/bounty/icon/).
