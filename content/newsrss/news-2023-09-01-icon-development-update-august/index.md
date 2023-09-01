---
title: ICON Development Update – August 2023
date: 2023-09-01
description:  We are excited to announce that our IBC integrations have successfully gone live on testnets. This significant milestone marks a crucial step forward in our development journey. 
slug: icon-development-update-august-2023
canonicalURL: "https://icon.community/blog/2023/icon-development-update-august-2023/"
---

The month of August has been particularly eventful! We are excited to announce that our IBC integrations have successfully gone live on testnets. This significant milestone marks a crucial step forward in our development journey. In this update, we unveil our plans for the upcoming mainnet release of both Archway and Neutron. Additionally, we will look into the roadmap for our dedicated xCall integrations team.

---

## xCall Architecture / Product

Parameta continues to optimise the relays and contracts for BTP, particularly on the BSC side due to all the recent updates that chain has gone through. They have also been working on an expanded tooling set for xCall in the form of an SDK and a tracker, finally they continue to work on the IISS 4.0 changes. 

### Last Month

- [BTP blocks testing](https://www.notion.so/BTP-blocks-testing-on-Berlin-testnet-dd55ff14b0dc46e28feecc9bebbb187b?pvs=21) on Berlin testnet - ongoing/ monitoring -Done
- Ongoing BSC and ETH relay testing and debugging - Done
- Ongoing BSC and ETH BMV testing and debugging - Done
- Ongoing Relay refactoring - Done
- Support Incentivised testnet - Ongoing
- Wrap up development on xCall SDK - alpha version complete

### Next Month

- Activate BTP blocks on Lisbon and test.
- Plan to activate BTP blocks on mainnet - this will required all validators to [register public keys.](https://docs.icon.community/getting-started/how-to-run-a-validator-node/register-prep-node-public-key) A separate update will be shared about this.
- Build out client library for xCall SDK
- Work on revisions for xCall SDK
- Commence testing on xCall SDK
- Development has commenced on a BTP tracker - this is dependent on the xCall SDK specifications

{{< img src="btp-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## xCall Integrations

This August was a pivotal period in our roadmap, and we're getting ready to bring these integrations live on the mainnet by the final week of September. However, this advancement hinges on **the activation of BTP blocks on the mainnet**, a significant task which is also scheduled for completion in September.

We are deep into the planning stages of the next phase for xCall, mapping out its chain expansion and the next features that will be incorporated. We'd like to emphasize that these plans are still in their nascent stages and may undergo changes. Rest assured, we are committed to keeping our community updated on any developments!

### Interoperable Solutions on the Horizon:

**Layer Zero**:

- Target Chains: Ethereum, Binance Smart Chain, Avalanche, Arbitrum, and Optimism.

**Wormhole**:

- Target Chains: Avalanche, Arbitrum, Optimism, Base, and Sui.

Our initial strategy is to deploy xCall across all the aforementioned blockchains. During this phase, the interoperability protocols enabled  by xCall won't be directly connected to the ICON blockchain. However, [xCall usage in general burns ICX](https://www.xcall.dev/explanations/fees#burning-fees-and-impact-to-icx-tokenomics). 

Without direct connections to the ICON blockchain, these deployments are a lot faster to build. And once the number of xCall accessible blockchains has increased, we can research potential ways of connecting the underlying interoperability protocols (LayerZero/Wormhole) to the ICON blockchain on a native level.

At the same time, our team has also embarked on plans to interconnect ICON with a broader array of IBC chains. Our next integration focus in this journey is Composable Finance.

For more detailed information on the monthly progress of our IBC integrations, we invite you to explore our latest report available at the following link:

https://github.com/icon-project/grants-program/tree/main/progress-reports/ibc-integration

With our IBC integrations now live on Archway and Neutron testnets, here are all the things we accomplished in the month of August for IBC:

- IBC relay and IBC integrations repos documentation has been updated
- Neutron live on testnet
- Internal audit has been completed for IBC core contracts and xCall contracts.
- Large number of discovery pieces have been in progress for xCall

**September** 

- Work on all the issues identified via internal audits
- Deploy fixes and IBC integrations for Archway and Neutron on Lisbon
- Retest everything on Lisbon
- Deploy IBC integrations to mainnet in the last week of September - note this is dependent on BTP blocks being activated on ICON mainnet.
- Planning has already commenced the next set of interoperable protocols xCall will be integrated with.

Milestone boards for both IBC and BTP integrations are published here:

- [IBC Integrations Milestones](https://www.notion.so/66221606c1464911be07c4ae73813578?pvs=21).
- [BTP Integrations Milestones](https://www.notion.so/78dbe0023a0144ba9c53db9558ac7cf5?pvs=21)

{{< img src="icon-ibc-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## ICON Blockchain

- Continuing the ICON Validator Support Program
- Continue development of IISS 4.0 - expected initial version for testing by the end of November.
- Goloop v1.3.9 - Performance enhancements

## Documentation updates

Find the latest update from the Dev relations team [here](https://github.com/icon-project/grants-program/blob/main/progress-reports/developer-relations/developer-relations-support-progress-report-jul-2023.md)
