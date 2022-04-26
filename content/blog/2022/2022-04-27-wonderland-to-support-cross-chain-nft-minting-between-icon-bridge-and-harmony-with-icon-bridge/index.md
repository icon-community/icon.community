---
title: Wonderland to Support Cross-Chain NFT Minting Between ICON and Harmony With ICON Bridge
subtitle: 
date: 2022-04-26
slug: wonderland-to-support-cross-chain-nft-minting-between-icon-and-harmony-with-icon-bridge
description: Wonderland, the Alice in Wonderland-inspired metaverse game that is currently in development, will use ICON Bridge to facilitate cross-chain NFT minting between ICON and Harmony.
---

[Wonderland](https://wonderland.game), the [ICON CPS-funded](https://cps.icon.community) Alice in Wonderland-inspired metaverse game that is currently in development on the Harmony blockchain, will use ICON Bridge to facilitate cross-chain NFT minting between ICON and Harmony. With ICON Bridge, users will be able to use ICX on the ICON blockchain to mint Wonderland NFTs on Harmony, which are then stored in a Harmony wallet.

## Mint NFTs on Harmony With Native ICX

During the design process for the cross-chain NFT minting experience, the Wonderland team had to choose between two methods – “token transfer” and “message transfer”. The token transfer method is fairly common in crypto, and would require users to first bridge ICX to Harmony before minting NFTs on the Harmony blockchain – this means transaction fees would be paid in ONE (Harmony’s native asset).

To ensure the best possible user experience, the Wonderland team decided to move forward with the message transfer method, which does NOT require users to bridge ICX to Harmony. Instead, users can mint NFTs on Harmony by interacting with a smart contract on ICON and paying mint fees in ICX.

This is possible thanks to ICON Bridge’s generic messaging feature, which allows for complex use **cases beyond basic token transfers**. With generic messaging, blockchains connected to ICON Bridge can perform custom cross-chain smart contract calls. In the case of Wonderland, NFT minting contracts deployed on ICON and Harmony will be able to seamlessly interact with each other via ICON Bridge.

Once the Wonderland minting dApp goes live, users can expect a frictionless experience like so:

1. Connect an ICON wallet (Hana, ICONex, etc.).
2. Connect a Harmony wallet (MetaMask).
3. Specify the number of NFTs to mint.
4. Confirm the minting transaction (paid in ICX) in the ICON wallet.
5. The corresponding number of NFTs are minted as [HRC-721 tokens](https://docs.harmony.one/home/developers/tutorials/deploying-hrc721-nft) on Harmony.

To facilitate cross-chain messaging between ICON and Harmony, Wonderland will run its own Service Handler – smart contracts that reside on the source and destination chains with application-specific logic. In this case, the Wonderland Service Handler contracts deployed on ICON and Harmony will contain application logic such as HRC-721 token minting, refund handling, and even a discounted minting cost for users paying with ICX.

To transfer messages between ICON and Harmony, Wonderland will also be operating temporary relay nodes, which will be swapped out with relays operated by ICON Foundation once generic messaging is supported across all connected chains.

{{< quote text="We’re excited to allow our community to experience the first cross-chain NFT minting between ICON and Harmony. This unlocks a whole new use case - you can use ICX to mint NFTs on other chains beyond ICON. Under the hood, we are using ICON Bridge extensible messaging which has endless possibilities for interoperability. Messaging will allow developers to build a range of complex cross-chain systems around the assets in all the chains connected to ICON." attribution="Wonderland Team" >}}

## Summary

Cross-chain NFT minting is an innovative use case for interoperability, and we are excited to see the application of ICON Bridge for this purpose. With ICON Bridge, Wonderland players will be able to use native ICX to mint NFTs representing in-game characters and items on the Harmony blockchain. In addition to connecting blockchains on a technical level, Wonderland’s usage of ICON Bridge will also allow for more meaningful connections between the ICON and Harmony communities.

To learn more about Wonderland, its origins, how the game works, and how the team will use ICON Bridge for its NFT sale, check out this episode of the Eye on ICON podcast. Wonderland is targeting an early-May launch for its first NFT sale, so be sure to [join their Discord](https://discord.gg/8PmfFRsqJS) and [follow them on Twitter](https://twitter.com/_WonderlandG) to stay up to date with the latest developments.