---
title: ICON Development Update – October 2022
date: 2022-11-10
description: In October, the ICON team continued making progress on BTP and ICON 2.0.
slug: icon-development-update-october-2022
---

In October, the ICON team continued making progress on BTP, ICON Bridge and ICON 2.0. In this article, we’ll share tasks completed and development milestones for November.

### BTP Architecture

Considerable progress has been made on the source code for Goloop and its respective BTP components. Next month will see a shift from design and implementation to documentation. For example, the team will develop more detailed IIPs to increase integration efficiency.

# Last 30 Days

* Finalized design for handling relay fees for routed messages and began implementation
* Updated state sync for BTP Blocks 
* Added event logs to BTP messages for easier tracking
* Submitted xCall specification ([IIP52](https://github.com/icon-project/IIPs/pull/55)) with specifications and is under review
* Merged changes to support BTP Blocks and Verifier Whitelist into master branch – preparing for testnet deployment
* Researched [bridge attack on BSC](https://www.nansen.ai/research/bnb-chains-cross-chain-bridge-exploit-explained) and considered how it could be prevented for BTP
* Completed source code for the Message Verifier for BTP Blocks
* Drafted source code for the [Relay for BSC](https://github.com/icon-project/btp/tree/iconloop-v2/chain/bsc) 

# Next 30 Days

* Begin working with integration teams on documentation like more detailed IIPs, test cases, and demos 
* Modify IIP52 to remove the fee structure, since it can be a module added/removed from xCall 
* Continue implementation of relay fee handling in the Message Broker
* Complete Solidity source code for the fee handling of the xCall service

### Interoperability Integrations

As you may know, the ICON development team has doubled down on open sourcing ICON Bridge development and integration. The team has made the ICON Bridge integration github public, with integration teams moving to a monthly release schedule for releases (published [here](https://github.com/icon-project/icon-bridge/releases/tag/v0.0.10)) and progress reports (published [here](https://github.com/icon-project/grants-program/tree/main/progress-reports/icon-bridge)). Once these updates are submitted, we will release a separate report summarizing what has been accomplished and what is planned for next month.

### ICON 2.0
In October we upgraded all Testnets to allow for the BTP2 code merge and progressed on both GoLoop upgrades and Rosetta API integrations. We also identified a bug on the GoLoop engine and began fix preparations.

# Last 30 Days ICON Blockchain

* Bug ([#123](https://github.com/icon-project/goloop/issues/123)) was found on Goloop engine. Solved issue, with patch scheduled for release after BerlinNet reset and pending Network proposal.
* All testnets (BerlinNet, LisbonNet, SejongNet) updated to [v1.2.14](https://github.com/icon-project/goloop/releases/tag/v1.2.14)
* MainNet Citizen, ICON_Foundation, ICONLOOP, ICONFi Validators updated to v1.2.14 on October 26th KST
* BTP2 code merge to master branch completed
* Berlin reset/upgrade completed Nov 2nd 
* New proposal type Chain SCORE developed and will be applied post-BerlinNet reset

# Last 30 Days Rosetta

* Completed Ubuntu-based image Docker file (found [here](https://github.com/icon-project/rosetta-icon/blob/main/Dockerfile)) and completed Ubuntu-based Docker image mainnet sync.
* Repo for Rosetta implementation found [here](https://github.com/icon-project/rosetta-icon) 
* Completed ICON Rosetta Readiness checklist 
* Added the custom-made function (downloading MainNet Backup DB), and checking with Coinbase team whether this should be applied now or later

# Next 30 Days ICON

* Increase timeout for coverage tests 
* Pass CI testing and finish the code merge into master branch 
* New proposal type Chain SCORE will be applied