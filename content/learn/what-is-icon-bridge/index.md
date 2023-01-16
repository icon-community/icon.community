---
title: What is ICON Bridge?
date: 2022-03-02
slug: icon-bridge
description: ICON Bridge is an early iteration of ICON’s cutting-edge interoperability product, BTP, which allows cross-chain transfers and integration with any blockchain that supports smart contracts.
---

* *07/09/22: Audit information updated to reflect [July Development Update](https://icon.community/blog/2022/icon-development-update-july-2022/)*
* *01/16/23: Download the [FYEO Security Assessment of ICON Bridge Blockchain Transmission Protocol (BTP)](https://icon.community/assets/FYEO-security-assessment-of-ICON-Bridge-Blockchain-Transmission-Protocol-BTP.pdf)*

ICON Bridge is an early iteration of ICON’s cutting-edge interoperability product, BTP, which allows cross-chain transfers and integration with any blockchain that supports smart contracts.

With ICON Bridge, we are fast-tracking ICON interoperability to meet community and developer demand. While ICON’s flagship interoperability product BTP continues getting built, ICON Bridge immediately opens up cross-chain activity and development opportunities.

## Why ICON Bridge?

Due to [high gas consumption fee issues](/blog/2022/introducing-icon-bridge-f8d3f2d93bf8/) encountered during BTP development, ICON decided to implement a phased approach to interoperability by introducing ICON Bridge–an early iteration of BTP that maintains most of BTP’s key technical features–as an interim bridging solution as BTP development continues in the background.

## ICON Bridge vs. BTP

The BTP Message Verifier Contract (Light Client) is the most revolutionary aspect of BTP’s technology. It is the mechanism that allows smart contracts–rather than trusted validators–to verify cross-chain transactions.

The Light Client is essentially a live, miniature copy of the source blockchain that exists on the destination blockchain. For example, the Light Client on Moonriver is a live copy of the ICON blockchain, and vice versa. The Relays are responsible for updating these copy blockchains, to ensure they are up to date and mirror the original chain. As you can imagine, this requires constant updating, as each blockchain produces new blocks at least every few seconds.

{{< img src="icon-bridge-comparison-chart-updated.jpg" alt="A comparison chart showcasing the differences between ICON Bridge and BTP." >}}

This is where the gas fee issue arises. Keeping the Light Client contracts updated has proven to be prohibitively expensive, with each Light Client contract requiring an extreme amount of gas fees to remain up-to-date.

In response to this issue, ICON has received more support from ICONLOOP, shifting a number of skilled ICONLOOP team members to focus solely on BTP. The amount of brainpower dedicated to building and launching BTP is now the highest that it has ever been. Accordingly, a number of potential solutions to the gas issue are already well under review, the BTP team is fully confident that a fix will be implemented.

In the meantime, we will launch the current iteration of BTP–which we are calling ICON Bridge–to jumpstart interoperability. In lieu of the Light Client contract, ICON will serve as the sole Relay operator that will pass messages and verify transactions between chains. This rollout will resemble ICON’s role as the sole validator of the ICON blockchain prior to decentralization in 2019.
