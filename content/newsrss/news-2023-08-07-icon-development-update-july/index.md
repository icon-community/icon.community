---
title: ICON Development Update – July 2023
date: 2023-08-07
description: Throughout the month of July, our team at has been working on numerous updates to BTP contracts and our relays. In a significant development, we have transitioned BSC into a trustless state, similar to our connection with Ethereum.
slug: icon-development-update-july-2023
canonicalURL: "https://icon.community/blog/2023/icon-development-update-july-2023/"
---

Throughout the month of July, our team has been working on numerous updates to BTP contracts and our relays. In a significant development, we have transitioned BSC into a trustless state, similar to our connection with Ethereum. This transition was a crucial step in preparing everything for the ongoing incentivised testnet. In addition, we have released a new version of Goloop, and we continue to make headway on the IISS 4.0 changes.

Excitingly, we have more news on the IBC integration front. As you may recall from our update last month, we've slated an official Testnet launch for the 14th of August. We recommend you also take a peek at the xCall integration section of the update - there's a pleasant surprise waiting for you. Each step forward brings us closer to realizing our vision, and we eagerly anticipate sharing more of our progress and developments in the months ahead!

---

## xCall Architecture / Product

Last month, our team achieved notable milestones in blockchain testing, relay debugging, and contract upgrades. We've also successfully launched the BTP network status dashboard. In the coming month, our focus is to support the Incentivised testnet and progress the xCall SDK towards testing.

xCall SDK is a backend service that will help application developers more easily display relevant information about cross-chain transactions to users of their app. It significantly simplifies the frontend development experience by abstracting away much of the complicated components of executing and tracking xCall messages.

### Last Month

- [BTP blocks testing](https://www.notion.so/dd55ff14b0dc46e28feecc9bebbb187b?pvs=21) on Berlin testnet - ongoing/ monitoring
- Ongoing BSC and ETH relay testing and debugging
- Ongoing BSC and ETH BMV testing and debugging
- Ongoing Relay refactoring
- Worked on the BSC plato upgrade. - Done
- Implement fixes that have been worked on after focus testing has been completed - Done
- Continue working on enabling [trustless bridging BSC testnet to ICON](https://www.notion.so/5ee229d9017746c5b5ec1d0fc07321c6?pvs=21) - to be completed mid July - Done
- Update all Solidity contracts so that they can be upgradable - Done
- Build BTP network status dashboard - [Done](https://testnet.btp2.24x365.online/)
- Deploying updates to Havah BTP integration - Done

### Next Month

- Support Incentivised testnet
- Wrap up development on xCall SDK and commence testing and review phase
- Commence testing on xCall SDK

{{< img src="btp-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## xCall Integrations

As noted above and in our last month's development update, we had targeted a testnet deployment for the 14th of August. However, thanks to phenomenal work by our development  partners, Venture23, we're thrilled to announce that we've successfully deployed to ICON's Berlin testnet and Archway's testnet a full month ahead of schedule!

Throughout this month, our team has been refactoring the IBC core contracts, optimizing the Relay code, and testing everything on their testnets. As we move into August, a significant portion of our focus will be channelled towards improving documentation and the general presentation of our repository. In addition, we're preparing to initiate a comprehensive internal review process, set to commence in mid-August.

To clarify our current status, ICON is now connected via IBC to Archway testnets, which means anyone can start building now. The contract addresses are located in the [wiki](https://github.com/icon-project/IBC-Integration/wiki/IBC-Integration-SCORE-Addresses) of the IBC integrations repo.

But that's not all - keep the 14th of August circled on your calendars! On this date, we aim to deploy our IBC Neutron integration to the respective testnets. All in all, August promises to be a monumental month for our IBC integrations, so stay tuned for more updates!

For more detailed information on the monthly progress of our IBC integrations, we invite you to explore our latest report available at the following link:

https://github.com/icon-project/grants-program/tree/main/progress-reports/ibc-integration

Milestone boards for both IBC and BTP integrations are published here:

- [IBC Integrations Milestones](https://www.notion.so/66221606c1464911be07c4ae73813578?pvs=21).
- [BTP Integrations Milestones](https://www.notion.so/78dbe0023a0144ba9c53db9558ac7cf5?pvs=21)

{{< img src="icon-ibc-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## ICON Blockchain

### Last Month

- Continued ICON Validator Support Program
- Released Goloop v1.3.8 on Mainnet
    - https://github.com/icon-project/goloop/releases/tag/v1.3.8
- Commenced development of  IISS 4.0
- Sejong testnet shutdown - Done

### Next Month

- Continuing the ICON Validator Support Program
- Continue development of IISS 4.0
- Goloop v1.3.9

## **Documentation updates**

Find the latest update from the Dev relations team [here](https://github.com/icon-project/grants-program/blob/main/progress-reports/developer-relations/developer-relations-support-progress-report-jun-2023.md)
