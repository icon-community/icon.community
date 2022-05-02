---
title: ICON Development Update – April 2022
date: 2022-04-30
description: In April, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge.
slug: icon-development-update-april-2022
---

In April, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge. In this article, we’ll share what we worked on in April, and what our core focuses will be for May.

## ICON 2.0

* Goloop v1.2.4 was released on mainnet.
* Governance2 SCORE was released to mainnet. This update to the network’s governance SCORE introduced a new proposal format that supports multiple proposals in a transaction, added an applyProposal method, and enhanced parameter handling on SCORE updates.
* Approved and activated the “CPS Network SCORE Designation” proposal, which allocate a portion of ICX issuance to the CPS treasury.
* Updated the preptools Python package to [v1.3.0](https://github.com/icon-project/preptools/releases/tag/v1.3.0).

## Blockchain Transmission Protocol (BTP)

### BTP Product

In April, we made significant progress on the architectural design of BTP:

* We outlined all tasks related to BTP development and delegated workloads to dedicated development teams.
* We completed an initial design for the BTP fee system, which uses a fixed fee that is determined when a call is made to the Arbitrary Call Service. In the future, our goal is to upgrade the system to support variable fees based on data size.
* Design enhancements for BTP block design in Goloop have been made, and are currently being reviewed.
* We started writing a BTP Lite Paper.

## BTP Integrations

Progress was made on BTP partner integrations as well:

### Algorand

* The Message Broker contract on the Algorand side is close to completion, and we made significant progress on the Service Handler contract.

## ICON Bridge

* BNB Smart Chain and Harmony integrations were finished, and we are now performing additional testing and monitoring as we prepare for launch.

## Next Month’s Focus

In May, we will focus on the following areas:

### ICON 2.0
* Release network updates in accordance with BTP 2.0 development as needed.

### BTP Product

* Finish and publish the BTP Lite Paper.
* Finalize the specification for the Arbitrary Call Service.
* Finalize BTP block design.
* Finish the design process for Goloop server and module APIs to support BTP relays.

### BTP Integrations

* Continue working on Message Broker and Service Handler contracts.

### ICON Bridge

* Continue testing BNB Smart Chain and Harmony integrations and prepare for launch.

We are excited to continue working on bringing BTP and ICON Bridge to life in May. To stay up to date with the latest developments, be sure to [subscribe to our newsletter](https://foundation.us15.list-manage.com/subscribe?u=d8b1e5594bd92c54dc0c7141c&id=fbc02bbf32) and [join us on Discord](https://discord.com/invite/7a75Hf3cFm)!