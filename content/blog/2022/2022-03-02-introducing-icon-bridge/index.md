---
title: Introducing ICON Bridge
subtitle: The first step in a two-phase BTP launch strategy.
date: 2022-03-02
slug: introducing-icon-bridge-f8d3f2d93bf8
description: 
---

In the BTP section of our most recent Development Roadmap Update, we shared that we had come across an unforeseen obstacle: unsustainably high gas consumption fees incurred when executing BMV contracts.

Since first encountering this challenge, we have explored various alternative design solutions and have expanded the BTP development team to tackle this issue head on.

In addition, we have decided to implement a phased approach to interoperability by introducing ICON Bridge–an early iteration of BTP that maintains most of BTP’s key technical features–as an interim bridging solution as BTP development continues in the background.

We are looking to have all internal testing of ICON Bridge done by the end of March. We will be following up with regular roadmap updates outlining any changes.

## The Gas Consumption Issue

The BTP Message Verifier Contract (BMV) is the most revolutionary aspect of BTP’s technology. It is the mechanism that allows smart contracts–rather than trusted validators–to verify cross-chain transactions.

The BMV is essentially a live, miniature copy of the source blockchain that exists on the destination blockchain. For example, the BMV on Moonriver is a live copy of the ICON blockchain, and vice versa. The Relays are responsible for updating these copy blockchains, to ensure they are up to date and mirror the original chain. As you can imagine, this requires constant updating, as each blockchain produces new blocks at least every few seconds.

This is where the gas fee issue arises. Keeping the BMV contracts updated has proven to be prohibitively expensive, with each BMV contract requiring an extreme amount of gas fees to remain up-to-date.

In response to this issue, ICON has received more support from ICONLOOP, shifting a number of skilled ICONLOOP team members to focus solely on BTP. The amount of brainpower dedicated to building and launching BTP is now the highest that it has ever been. Accordingly, a number of potential solutions to the gas issue are already well under review, the BTP team is fully confident that a fix will be implemented.

In the meantime, we will launch the current iteration of BTP–which we are calling ICON Bridge–to jumpstart interoperability. In lieu of the BMV contract, ICON will serve as the sole Relay operator that will pass messages and verify transactions between chains. This rollout will resemble ICON’s role as the sole validator of the ICON blockchain prior to decentralization in 2019.

## ICON Bridge

ICON Bridge leverages BTP’s core building blocks and offers a bridging product that can be utilized by ICON dApps and other ICON Ecosystem projects, as well as projects in connected ecosystems. ICON Bridge will therefore serve the community’s bridging needs as we continue to build the final iteration of BTP in the background.

Like BTP, ICON Bridge is chain-agnostic and able to interconnect any blockchain that supports smart contracts. It will function in a comparable manner to many other popular cross-chain bridges throughout the industry. Those who have utilized bridges on other popular chains should feel just as comfortable using ICON Bridge.

ICON Bridge will offer a glimpse of what to expect once BTP is live: integrations between Moonriver Network, Binance Smart Chain, and NEAR and the implementation of the originally proposed auction system for BTP that will aggregate cross-chain transaction fees into the FAS (Fee Aggregation SCORE).

A key feature to note is that ICON Bridge will not require other chains to hard fork to implement the bridge, thereby providing a fairly straightforward integration path. We anticipate this will lead to increased adoption from various chains, connections that will ultimately transfer to BTP.

ICON Bridge will be sent for audit as soon as it launches. Auditing can take one to two months, so early adopters will bear the risk of using ICON Bridge without a formal audit. While the product is awaiting an external audit, we want to emphasize that ICON Bridge has been through a thorough internal code review by our talented development team.

Once a formal audit of the ICON Bridge is completed, ICON’s Interoperability Incentive Fund will be used to push adoption and growth of ICON’s interconnected ecosystem by incentivizing liquidity pools on cross-chain dApps and funding integrations to ICON Bridge. Check out our [200M Interoperability Incentive Fund announcement](https://medium.com/helloiconworld/icon-commits-200m-to-cryptos-first-ever-interoperability-incentive-fund-155550671fd), to get a better idea of the incentivization scope.

## BTP Development

Work on BTP continues across the board and its development can be divided into two main aspects:

* BTP Product & Infrastructure
* BTP Partner Integrations

The first aspect of BTP Product & Infrastructure covers transaction infrastructure and important smart contract elements such as the much discussed BTP Message Verifier Contract. ICON’s technical partner, ICONLOOP, will now be working on all BTP Product & Infrastructure issues, as well as future iterations of BTP.

BTP Partner Integrations are being implemented by ICON ecosystem teams such as ICONDAO, Web3Labs, and HugoByte to name a few. These teams work on building the integration contracts with partners such as Moonbeam Network, Binance Smart Chain, and NEAR Protocol. Many of these integrations are in the final testing stages for implementation on the ICON Bridge.

## Summary

At the beginning of February, the ICON community was made aware of an unanticipated stumbling block that developers encountered while building BTP: unsustainably high incurrence of gas fees when executing the BMV contract.

More ICONLOOP developers have been assigned to the BTP team to solve the design challenge.

In the meantime, ICON Bridge, built on BTP’s core building blocks, will serve as an interim bridging solution for dApps and users eager to leverage the opportunities enabled by cross-chain token transfers to integrated networks.

We are looking to have all internal testing of ICON Bridge done by the end of March and we will be following up with regular roadmap updates outlining any changes.

Auditing can take one to two months, so early adopters will bear the risk of using ICON Bridge without a formal audit.

Incentive funds will be used to push adoption and growth of ICON’s interconnected ecosystem. Refer to our [previous announcement for the 200M Interoperability Incentive Fund](https://medium.com/helloiconworld/icon-commits-200m-to-cryptos-first-ever-interoperability-incentive-fund-155550671fd) to get a better idea of the incentivization scope.

ICON’s technical partner ICONLOOP will now be working on all BTP Product & Infrastructure, as well as future iterations of BTP. Accordingly, a number of potential solutions to the gas issue are currently being worked on, with full confidence that a fix will be implemented.

Many of our BTP partner integrations are wrapping up final testing on ICON Bridge.