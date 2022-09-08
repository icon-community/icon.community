---
title: ICON Development Update – August 2022
date: 2022-09-08
description: In August, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge.
slug: icon-development-update-august-2022
---

In August, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge. In this article, we’ll share what we worked on in August, and what our core focuses will be going into September.

## BTP Architecture

As mentioned in the previous month’s update, our current focus with regard to BTP architecture is integration testing. While performing tests this past month, we discovered several bugs that have since been fixed. We will continue to work on integration tests this month.

There has also been significant progress on the incentive mechanism for operating BTP Relays. In short, the xCall service will charge a fixed fee that will be rewarded to the Relay that successfully processes a BTP message. Anybody will be able to operate a Relay, and Relay operators will compete to process messages and earn fees. The first Relay to process the message will earn the fee.

The next step in this design is ironing out the granular details related to properly rewarding Relays for routed BTP messages. The goal is to include this mechanism in the initial release of BTP. More details on the benefits of operating a Relay will be released closer to deployment.

### Last 30 Days

* Worked on IISS and Goloop upgrades for registering validator public keys.
* Started development of a penalty system associated with IISS changes.
* Designed Relay Network economics and processes.
* Continued integration testing.
* Optimized ICON block data structure for BTP Blocks.
* Updated Solidity BMC with new message structure.
* Completed xCall implementation in Solidity.
* Designed an analytics API for Message Broker and xCall services.

### Next 30 Days

* Begin scoping the reward system for block updates.
* Discuss and resolve issues relating to reward incentives for routed BTP messages.
* Continue running integration tests on edge cases and new features.
* Continue to fix bugs discovered during integration testing.
* Add new features to xCall service based on Relay fee design.

## Interoperability Integrations

In August, we hit a key interoperability milestone with the launch of Nexus with support for ICON and BNB Smart Chain (BSC). With Nexus, users now have access to an intuitive UI for performing cross-chain token transfers between ICON and BSC via ICON Bridge.

While the launch of Nexus is a major step for interoperability on ICON, there is still a lot of work to be done! Over the coming months, we will focus on finalizing BTP 2.0, adding more integrations to the BTP ecosystem, and improving the Nexus user experience.

### Last 30 Days

#### BNB Smart Chain

* Work on improving CI/CD processes is ongoing.
* Deployed the BSC ICON Bridge integration to testnet, and made it available on Nexus.
* Deployed the BSC ICON Bridge integration to mainnet, and made it available on Nexus.
* Started code audits for the BTP integration.

#### NEAR Protocol

* Finished unifying Service Handler for tokens and native coins.
* Continued refactoring the NEAR BTP integration to use ICON Bridge.

### Next 30 Days

#### BNB Smart Chain

* Continue monitoring mainnet release of the BSC integration.
* Improve test coverage.
* Continue code audits.

#### NEAR Protocol

* Test transfers between NEAR and BSC.
* Connect NEAR integration to Nexus on testnet.
* Add blacklist and token limit functionality for mainnet deployment.
* Deploy NEAR integration to mainnet if no significant bugs are discovered on testnet.

#### SNOW

* Start working on SNOW integration after BSC test coverage and documentation has been stabilized.

## ICON 2.0

In August, we made progress on developing a light node for ICON. Compared to a full node which stores the entire blockchain database since the genesis block, a light node stores a subset of data (usually the block headers). In practice, light nodes require much less storage space to operate, and are ideal for use cases that do not require access to a blockchain’s entire transaction history. In addition to work on the ICON light node, we also made progress on Goloop’s Rosetta implementation.

### Last 30 Days

* Fixed light node storage issue.
* Released Goloop v1.2.11 to test light node features.
* Discovered a negative balance bug on the Berlin testnet, and released a patch to fix it on August 12, 2022. We’ve also confirmed that there are no negative balance incidents on mainnet.
* Implemented Rosetta features in Goloop.
* Worked on a “getTrace” API to track movement of assets for Rosetta.
* Finished implementing tracking functions for balance changes for Rosetta.
* Worked on better exception handling for Rosetta.
* Started testing mainnet data sync for Rosetta.

### Next 30 Days

* Continue Rosetta API implementation in Goloop.
* Finalize reset process and announcement for Berlin testnet.