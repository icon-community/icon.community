---
title: ICON Development Update – May 2022
date: 2022-06-02
description: In May, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge.
slug: icon-development-update-may-2022
---

In May, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge. In this article, we’ll share what we worked on in May, and what our core focuses will be for June.

## ICON 2.0

* Goloop v1.2.5 was released on mainnet. This update fixed a treasury management bug in fee sharing, 
* Goloop v1.2.6 was released on mainnet. This update fixed a bug in the `icx_getTotalSupply` API and CLI.

## Blockchain Transmission Protocol (BTP)

### BTP Product

In May, we made significant progress on the architectural design of BTP:

* Published the [BTP Light Paper](/assets/btp-light-paper.pdf)
* Finalized the Arbitrary Call Service specification.
* Finalized the BTP block specification.
* Implemented an alpha version of a local Goloop node for testing BTP features.
* Began design planning for a Relay module to relay BTP blocks to Message Verifiers on other networks.

## BTP Integrations

Progress was made on BTP partner integrations as well:

### Algorand

* We implemented message transfers from Algorand to the ICON relay without verification.

### NEAR Protocol

* We deployed a NEAR BTP integration on testnet. During the testing process, we discovered an issue that caused relay messages to drop. We are currently working on investigating and solving this issue.

## ICON Bridge

## Binance Smart Chain

* We performed end-to-end testing for the BNB Smart Chain integration, and resolved a few error cases that were discovered during testing. We added additional functionality to the BSC service handler for Nexus. A lot of BSC development also applied to Harmony.

### Harmony

* In May, we prepared the launch of ICON Bridge with Wonderland. However, we ran into network stability issues during the expected launch date and were not able to resolve these stability issues in time for the expected launch. This was the same date that Harmony upgraded its mainnet. We have resolved many network related issues and pushed back the Wonderland launch to June to ensure stable release. We successfully launched Wonderland on June 2.

## Next Month’s Focus

In June, we will focus on the following areas:

### ICON 2.0

* Submit Revision 18 Network Proposal, which adds a 100 ICX submission fee for future network proposals.
* Maintenance work for ICON 2.3.
* Work on network upgrades as needed, in accordance with BTP development.

### BTP Product

* Finish a proof-of-concept of the Arbitrary Call Service using a BTP-enabled token transfer (example provided in the light paper).
* Begin development of the core Goloop server and module APIs for BTP 2.0.
* Begin development of Solidity and Java Message Verifiers that utilize BTP blocks.
* Begin implementation of the Message Verifier whitelist in Goloop.
* Continue improving the structure of the BTP GitHub repository to enhance workflows between ICONLOOP and integration teams.

### BTP Integrations

* Continue testing BTP message transfer between Algorand and ICON in a local environment. If tests are successful, we will deploy the integration to testnet to conduct further testing.

* Continue investigating the relay message dropping issue on NEAR Protocol, and continue testing. If we are able to perform end-to-end transfers reliably and without message drops, we will conduct a gas cost estimation to determine if we can integrate NEAR using the full on-chain verification solution of BTP.

### ICON Bridge

* Deploy the BNB Smart Chain integration with Nexus frontend to mainnet.

* Launch Harmony integration with Wonderland in early June, followed by Nexus support for Harmony 1-2 weeks later.

We are excited to continue working on bringing BTP and ICON Bridge to life in June. To stay up to date with the latest developments, be sure to [subscribe to our newsletter](https://foundation.us15.list-manage.com/subscribe?u=d8b1e5594bd92c54dc0c7141c&id=fbc02bbf32) and [join us on Discord](https://discord.com/invite/7a75Hf3cFm)!