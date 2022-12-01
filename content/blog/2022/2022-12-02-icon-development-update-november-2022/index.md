---
title: ICON Development Update – November 2022
date: 2022-12-01
description: In November, the ICON team continued making progress on BTP, ICON Bridge and ICON 2.0. In this article, we’ll share tasks completed and development milestones for December.
slug: icon-development-update-november-2022
draft: true
---

In November, the ICON team continued making progress on BTP, ICON Bridge and ICON 2.0. In this article, we’ll share tasks completed and development milestones for December.

## BTP Architecture/Product
At this point in development there are three key focus areas: end to end testing of all BTP components, BMV-related research of target blockchains, and proper documentation of the BTP protocol to enable outside parties to integrate. 

Given all the attacks on similar products, research into properly verifying consensus of target chains for the [BMV](https://icon.community/glossary/btp-message-validator/) is of the utmost importance. Even after such research, fully audited code by a 3rd party will further increase confidence levels.

### Last 30 days
* Began work on [IIPs](https://icon.community/glossary/icon-improvement-proposals/) to more clearly specify the BTP Protocol
* Decided not to remove the fee structure from IIP52, as most implementations will use it
* Completed implementation of fee handling for routed messages
* Completed Solidity source code for the fee handling of the [xCall service](https://icon.community/glossary/xcall-service/)

### Next 30 days
* Continue working on IIPs for the BTP Protocol. This will include upgrades to IIP25, IIP52, and additional IIPs for each component of the protocol
* Working on end-to-end testing between an ICON environment and local BSC environment
* Continuing to research ETH2 and BSC consensus mechanisms for proper BMV implementation
* Begin working on a new BTP 2.0 github repo to better organize new documentation and code

## Interoperability Integrations
The team has made the ICON Bridge integration github public, with integration teams moving to a monthly release schedule for releases (published [here](https://github.com/icon-project/icon-bridge/releases/tag/v0.0.10)) and progress reports (published [here](https://github.com/icon-project/grants-program/tree/main/progress-reports/icon-bridge)). 

Once these updates are submitted, we will release a separate report summarizing what has been accomplished and what is planned for next month. Check out the last Integration Update [here](https://icon.community/blog/2022/icon-integration-update-october-2022/).

## ICON 2.0
In November the BerlinNet reset on testnet was completed and all related bugs were resolved. The mainnet update of the BTP 2.0 module will occur in the next 30 days. All code releases are linked in the updates below and accessible to the public.

### Last 30 days
Nov 1st week
* Merged branches into master branch and increased timeout for coverage tests
* BerlinNet reset was done Nov 2nd but found bugs in Governance2
* Released [v1.3.0-rc.1](https://github.com/icon-project/goloop/releases/tag/v1.3.0-rc.1), tested compatibility with previous releases on new BerlinNet
* Released [v1.3.0-rc.2](https://github.com/icon-project/goloop/releases/tag/v1.3.0-rc.2): fixed validator election bug
* Released [v1.3.0-rc.3](https://github.com/icon-project/goloop/releases/tag/v1.3.0-rc.3): updated to Go version
Nov 2nd week
* Debugging BerlinNet upgrade
* Old BerlinNet was deleted
* Successfully updated New BerlinNet to [v1.3.0](https://github.com/icon-project/goloop/releases/tag/v1.3.0)
* Updated LisbonNet, SejongNet to v1.3.0
* Solved Goloop issue [#126](https://github.com/icon-project/goloop/issues/126)
Nov 3rd/4th week
* LisbonNet, SejongNet update with latest tag [v1.3](https://github.com/icon-project/goloop/releases/tag/v1.3.0).
* Postponed MainNet update to [v1.3.0](https://github.com/icon-project/goloop/releases/tag/v1.3.0) this Wednesday KST but ran into bugs
* [SkipTransaction](https://tracker.lisbon.icon.community/transaction/0xa1d9e1c1a6fa391029b5836a5a6239b32307d9bb50b03381520dda87736af0cb) error occurred on LisbonNet
* Released [v1.3.1](https://github.com/icon-project/goloop/releases/tag/v1.3.1) patch to fix the issue in Java Execution Environment on ListbonNet
* Updated BerlinNet, SejongNet, LisbonNet to v1.3.1

### Next 30 days
* Updating MainNet to v.1.3.1
* Submitting Revision 20
