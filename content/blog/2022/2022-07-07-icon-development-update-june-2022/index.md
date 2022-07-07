---
title: ICON Development Update – June 2022
date: 2022-07-07
description: In June, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge.
slug: icon-development-update-june-2022
---

In June, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge. In this article, we’ll share what we worked on in June, and what our core focuses will be for July.

## ICON 2.0

* Goloop received several updates ([v1.2.7](https://github.com/icon-project/goloop/releases/tag/v1.2.7), [v1.2.8](https://github.com/icon-project/goloop/releases/tag/v1.2.8), [v1.2.9](https://github.com/icon-project/goloop/releases/tag/v1.2.9), and [v1.2.10](https://github.com/icon-project/goloop/releases/tag/v1.2.10)) with bug fixes and improvements.
* ICON Foundation submitted the [Revision 19 proposal](https://main.tracker.solidwallet.io/proposal/0xce1cd28129fd6787b099baac5e18b0786a2bcab1a5c5b6eb4484073509176467) for activating Revision 18 and 19 features. **As a reminder, Sub Validators that rotate into block production are also expected to vote on network proposals. If you operate an ICON node, we recommend paying attention to network proposals to ensure you don't miss a vote.**
* Submitting a network proposal now requires a fee of 100 ICX.
* Improved fee processing framework.
* Fixed fee discrepancy under certain JaveEE conditions.
* Fixed bugs in state synchronization logic.

## Blockchain Transmission Protocol (BTP)

### BTP Architecture

In June, we made significant progress on the architectural design of BTP:

* Completed the reference implementation for the Arbitrary Call Service (xCall), which can be found [here](https://github.com/icon-project/btp/tree/iconloop-v2/javascore/xcall). With this specification, developers can deploy their own [BTP components](https://github.com/icon-project/btp) to use the ACS, or build with the specification in preparation for the official xCall implementation on ICON Bridge and BTP.
* Implemented a basic fee structure for the Arbitrary Call Service.
* Implemented a core Goloop server for performing integration tests for BTP 2.0.
* Worked on implementation for Solidity and Java Message Verifiers for BTP blocks.
* Worked on implementation for Message Verifier whitelist.

## BTP Integrations

Last month, WonderGame launched its NFT sale, which used a custom implementation of ICON Bridge to perform cross-chain minting between ICON and Harmony. Following a successful launch campaign and sale, Harmony's Horizon Bridge was exploited for approximately $100 million worth of crypto assets. While this exploit has no impact on ICON Bridge or BTP directly, it has caused ripple effects across the entire Harmony ecosystem from the core team, to validators, to the community. As a result, we have decided to hold off on launching ICON Bridge on Harmony for the time being.

Over the next month, we will be shifting our development focus to BNB Smart Chain as the first integration for ICON Bridge. Our team is also in the process of streamlining the software development life cycle for ICON Bridge integrations.

### NEAR Protocol

After completing additional testing for the relay message dropping issue, we determined that NEAR Protocol is not compatible with the current iteration of BTP. Our team has pivoted to supporting NEAR Protocol via ICON Bridge for the time being with planned support for BTP 2.0 in the future.

## ICON Bridge

## BNB Smart Chain

As part of our re-prioritization process, we shifted our focus for ICON Bridge to BNB Smart Chain.

### Harmony

We are monitoring the outcome of Harmony’s Horizon Bridge exploit to determine if it is appropriate to launch the ICON Bridge to Harmony at this time.

## Next Month’s Focus

In July, we will focus on the following areas:

### BTP Product

* Complete implementation of the Solidity and Java Message Verifiers for testing BTP blocks
* Complete implementation of the Message Verifier whitelist.
* Complete implementation of Relay changes for BTP 2.0
* Write unit tests for new BTP components (Message Verifiers, Message Brokers, Relay components, etc.).
* Execute unit tests for new BTP components.
* Begin writing integration tests for all components.
* Improve the fee structure of the Arbitrary Call Service to account for Relayer fees versus BTP protocol fees.

### BTP & ICON Bridge

* Continue streamlining the development process for BTP and ICON Bridge integrations.
* Finalize the ICON Bridge integration with BNB Smart Chain.
* Add a module for NEAR Protocol to the ICON Bridge relay.
* Start testing asset transfers between ICON and NEAR Protocol on ICON Bridge.

We are excited to continue working on bringing BTP and ICON Bridge to life in July. To stay up to date with the latest developments, be sure to [subscribe to our newsletter](https://foundation.us15.list-manage.com/subscribe?u=d8b1e5594bd92c54dc0c7141c&id=fbc02bbf32) and [join us on Discord](https://discord.com/invite/7a75Hf3cFm)!

