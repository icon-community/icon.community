---
title: ICON Development Update – March 2022
date: 2022-03-31
description: In March, the ICON team made significant progress on ICON 2.0, BTP architecture, BTP integrations, and ICON Bridge.
slug: icon-development-update-march-2022
---

In March, the ICON team made significant progress on ICON 2.0, BTP architecture, BTP integrations, and ICON Bridge. In this article, we’ll share what we worked on in March, and what our core focuses will be for April.

## ICON 2.0

The ICON core developers primarily focused on migrating the Governance SCORE to Java. During the Java migration, we experienced a few issues with the implementation of network proposals. After a series of internal discussions, we are looking to break down the submission of network proposals into a two-step process:

1. Approval or rejection of a network proposal.
2. A transaction to enact the proposal if approved.

The team also worked on updating ICON-related tools and services over the past few weeks:

* The ICONex Chrome extension has been updated to Version 2.0.1. The update contains fixes for ICX bonding and unbonding, as well as unstaking and step price. We’ve also updated the ICON tracker domain from tracker.icon.foundation to tracker.icon.community.
* The [preptools Python package](https://pypi.org/project/preptools/) has been updated to work with the new Governance SCORE design – this includes the addition of a new `applyProposal` command.

## Blockchain Transmission Protocol (BTP)

### BTP Product

In March, we made significant progress on the architectural design of BTP:

* We finalized the design plan for BTP 2.0. On top of the existing BTP architecture (Message Broker, Light Client, Service Handler), we will implement an additional “Arbitrary Call Service” contract. The Arbitrary Call Service offers a framework for making generic cross-chain smart contract calls, which provides developers with the flexibility to make unique and complex cross-chain dApps that are not bound by the limitations of a purpose-built bridging service.
* **To lower non-ICON Light Client costs**, we’ve decided to implement the concept of “BTP Blocks”. A BTP Block is a block that contains BTP messages. Instead of having to process every single block to determine whether non-ICON Light Clients have to be updated, Relays will only have to watch for and process BTP Blocks. We expect this feature to reduce the costs of running a BTP Relay significantly because it ensures gas is only spent processing blocks that contain BTP messages. We are currently working on the technical specification for BTP Blocks, and will proceed to implementation once the specification has been mapped out.
* **To lower ICON-based Light Client costs**, we’ve decided to implement whitelisted Light Client contracts that will charge zero ICX fees for successful updates. These whitelisted contracts will still calculate step costs so we can track potential economic or resource inefficiencies, but will not charge ICX fees for Light Client updates.

We also made a number of internal knowledge and logistical improvements to the BTP workflow:

* Implemented project management processes for BTP 2.0 development using Zenhub. All open issues are viewable on the [public BTP GitHub repository](https://github.com/icon-project/btp/issues).
* Performed competitive landscape analysis on major interoperability solutions.
* Met with all integration teams to answer questions, gather feedback on future plans, and brainstorm enhancements.
* Started planning work for repository management moving forward. The current method of maintaining a separate GitHub branch for each integration is difficult to track and scale, so we are working on coming up with an improved process to allow for a more streamlined workflow.
Specified deliverables for BTP 2.0, including a BTP token standard for fungible and non-fungible tokens.

### BTP Integrations

Progress was made on BTP partner integrations as well:

#### Harmony

* Deployed BTP smart contracts to the Harmony testnet.

#### Algorand

* The pull request for adding the SHA3-256 hashing algorithm (required for BTP) has been accepted.
* Started work on Algorand’s Message Broker.
* Began work on ICON relayer.

#### NEAR Protocol

* Conducted ICX to NEAR transfers on testnet.
* Improved build processes on NEAR.
* Continued work on NEAR Light Client on ICON.

## ICON Bridge

We’ve also made progress on ICON Bridge integrations with our BTP partners. At this time, we are testing the ICON Bridge backend on BNB Smart Chain, and have started the ICON Bridge integration on Harmony.

## Next Month’s Focus
In April, we will focus on the following areas:

### ICON 2.0

* Prepare a network proposal for implementing CPS funding through ICX issuance.

### BTP Product

* Specify individual development tasks for the Arbitrary Call Service contract.
* Finalize the fee system for the Arbitrary Call Service contract.
* Specify core blockchain development tasks for BTP 2.0 development.
* Continue BTP competitive landscape analysis.

### BTP Integrations

* Finish Algorand Message Center and Service Handler contracts.
* Conduct gas cost estimation and BTP integration on testnet for NEAR Protocol.

### ICON Bridge

* Finalize ICON Bridge integration on BNB Smart Chain.
* Continue ICON Bridge integration on Harmony.

We are excited to continue working on bringing BTP and ICON Bridge to life in April. To stay up to date with the latest developments, be sure to [subscribe to our newsletter](https://foundation.us15.list-manage.com/subscribe?u=d8b1e5594bd92c54dc0c7141c&id=fbc02bbf32) and [join us on Discord](https://discord.com/invite/7a75Hf3cFm)!


