---
title: ICON Development Roadmap Update — January 2022
date: 2022-02-03
slug: icon-development-update-january-2022
description: ICON Development Roadmap Update for the month of January, 2022. Including changes to ICON 2.0, CPS and BTP Roadmap communication.
---

## ICON 2.0
There are a number of ICON 2.0 upgrades and revisions that are in the pipeline and have been making their way through the Berlin and Lisbon testnets. Following the completion of testing, they will be pushed to ICON 2.0 Mainnet. Among the changes include:

* Increasing the main P-Rep count from 22 to 25
* Funding the Contribution Proposal System (CPS) via ICX inflation, in accordance with IISS 3.1
* Implementing the penalty for missing a Network Proposal vote

To see the complete list of changes, and to track the progress of the upgrade progress, please click here. We encourage all P-Reps and developers to utilize this chart to understand upgrade timelines and deployments.

{{< img src="icon-2-roadmap.png" alt="ICON 2.0 Roadmap" caption="ICON 2.0 Roadmap" >}}

Once these upgrades are live and the upgrades to ICON 2.0 have been implemented, internal resources will shift from ICON 2.0 to the development of future iterations of Blockchain Transmission Protocol (BTP) architecture.

## BTP
We recognize that the community is eagerly anticipating the launch of BTP, and we’ll be striving to provide as much transparency as possible into the process.As part of this approach, we also intend to release a detailed BTP roadmap in the near future, similar to the roadmap that has been released for the ICE & SNOW ecosystem.

Here’s what we’ve accomplished since our December update:

* Deployed BTP Nexus to testnet. Added ERC20 token standard for Moonriver integration to Nexus
* Deployed BTP smart contracts to ICON Berlin and Moonriver Moonbase testnets
* End-to-end testing token transfers between ICON and Moonriver on testnet
* Got approval from 1 of 3 reviewers for BSC hard fork. We still need approval from 2 more reviewers for our [hard fork request](https://github.com/binance-chain/bsc/pull/357).
* Integrated Bazel for modular BTP smart contract deployment

We did run into some unexpected challenges within the past month as well:

* The Verifier contract — the one responsible for verifying the messages sent to the Message Center by Relays — generates extremely high gas consumption. We are in the process of working on a resolution to this issue, which may include a beta version of BTP to launch first while the BMV is optimized for gas consumption. The team is continuing to evaluate the best next steps for both security and usability of BTP, especially in light of recent attacks on other similar services across the industry.
* Bazel — the tool used for building and testing our code — is having difficulty understanding if the BMR (Relay) has been started. The result is that deployment of BTP smart contracts on NEAR testnet has been delayed. This has also impacted NEAR integration to Nexus portal.
* Unanticipated downtime and finality issues with Moonbeam, which have generated obstacles to BTP testing.

Here’s what we’re working on this month:

* Notifying Bazel when the BMR (Relay) initiates. Once this is completed, we can commence NEAR integration with the Nexus portal.
* We will be conducting end-to-end testing of the NEAR & ICX token transfers.
* Resume monitoring any issues with testnet token transfers on Moonbeam
* Begin monitoring any issues with testnet token transfers on NEAR
* Deploying ICX & Moonbeam BTP smart contracts to mainnet for testing the cost of operation (gas fees) in a non-testnet environment. This process should hopefully provide more clarity on how to address the high gas fees mentioned previously.
* Continue researching solutions to the gas cost issues of the BMV
* Continue discussing and specifying BTP 2.0, which aims to create a permanent solution of gas fees, remove the necessity for other networks to hard fork, and allows BTP to be more flexible in the services it supports.

Additionally, many have been inquiring about the status of the hard fork on Binance Smart Chain (BSC) that is required to enable BTP.

We continue to await a response from the BSC team on this [hard fork request](https://github.com/binance-chain/bsc/pull/357). One reviewer approved, we are still waiting on 2 more.

Fortunately, we have architected a solution for BTP 2.0 (a future iteration of BTP) that will not require hard forks from target chains. This involves utilizing a new virtualized block data layer for the blockchains that are connected and registered to the ICON Message Center Contract (BMC). With this virtualized block data layer, we can validate signatures using any hashing function, making ICON’s block data representation agnostic

## CPS
We have also released a milestone list for CPS this can be viewed [here](https://iconfoundation.notion.site/CPS-Roadmap-4b618689b5974565aaf57e9227cab4d7).