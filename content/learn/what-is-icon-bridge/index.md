---
title: What is ICON Bridge?
date: 2022-03-02
slug: icon-bridge
description: ICON Bridge is an early iteration of ICON’s cutting-edge interoperability product, BTP, which allows cross-chain transfers and integration with any blockchain that supports smart contracts.
---

ICON Bridge is an early iteration of ICON’s cutting-edge interoperability product, BTP, which allows cross-chain transfers and integration with any blockchain that supports smart contracts.

With ICON Bridge, we are fast-tracking ICON interoperability to meet community and developer demand. While ICON’s flagship interoperability product BTP continues getting built, ICON Bridge immediately opens up cross-chain activity and development opportunities.

ICON Bridge is currently being audited by Slowmist. However, an unaudited version will be released for those in the ICON community eager to start using ICON Bridge as auditing occurs. Click here to read the original announcement on ICON Bridge.

## Why ICON Bridge?

Due to [high gas consumption fee issues](/blog/2022/introducing-icon-bridge-f8d3f2d93bf8/) encountered during BTP development, ICON decided to implement a phased approach to interoperability by introducing ICON Bridge–an early iteration of BTP that maintains most of BTP’s key technical features–as an interim bridging solution as BTP development continues in the background.

## ICON Bridge vs. BTP

The BTP Message Verifier Contract (BMV) is the most revolutionary aspect of BTP’s technology. It is the mechanism that allows smart contracts–rather than trusted validators–to verify cross-chain transactions.

The BMV is essentially a live, miniature copy of the source blockchain that exists on the destination blockchain. For example, the BMV on Moonriver is a live copy of the ICON blockchain, and vice versa. The Relays are responsible for updating these copy blockchains, to ensure they are up to date and mirror the original chain. As you can imagine, this requires constant updating, as each blockchain produces new blocks at least every few seconds.

{{< img src="icon-bridge-comparison-chart.jpg" alt="A comparison chart showcasing the differences between ICON Bridge and BTP." >}}

This is where the gas fee issue arises. Keeping the BMV contracts updated has proven to be prohibitively expensive, with each BMV contract requiring an extreme amount of gas fees to remain up-to-date.

In response to this issue, ICON has received more support from ICONLOOP, shifting a number of skilled ICONLOOP team members to focus solely on BTP. The amount of brainpower dedicated to building and launching BTP is now the highest that it has ever been. Accordingly, a number of potential solutions to the gas issue are already well under review, the BTP team is fully confident that a fix will be implemented.

In the meantime, we will launch the current iteration of BTP–which we are calling ICON Bridge–to jumpstart interoperability. In lieu of the BMV contract, ICON will serve as the sole Relay operator that will pass messages and verify transactions between chains. This rollout will resemble ICON’s role as the sole validator of the ICON blockchain prior to decentralization in 2019.
