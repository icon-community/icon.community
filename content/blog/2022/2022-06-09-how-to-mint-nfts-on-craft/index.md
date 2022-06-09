---
title: How to Mint an NFT on Craft
date: 2022-06-08
slug: how-to-mint-nft-on-craft
description: Craft is a community-owned NFT marketplace that runs on the ICON blockchain. In this article, you’ll learn how to mint an NFT and list it for sale on Craft.
draft: true
---

[Craft](https://craft.network) is a community-owned NFT marketplace that runs on the ICON blockchain. You can think of it as ICON's version of OpenSea or Looksrare. On Craft, users can mint, buy, and sell NFTs with minimal fees, while earning rewards in the form of [$CFT](https://craft.network/cft) – "the governance and utility token of the Craft ecosystem". In this article, you'll learn how to mint an NFT and list it for sale on Craft.

## Connect an ICON Wallet

To get started on Craft, you'll first need to connect an ICON wallet. To do so, click on "Connect Wallet" in the top right corner of the Craft interface, at which point you'll be presented with three wallet options – ICONex/Hana, Ledger, and Bridge. For most users, the ICONex/Hana option offers the best balance of convenience (no hardware wallet required) and security (non-custodial). If you don't have a Hana wallet, check out our guide on [how to set one up](/learn/icon-wallet/). For advanced users who prefer to stick to a hardware wallet, Craft supports the Ledger line of hardware wallets. Lastly, Craft also provides an email-based passwordless authentication login option called [Bridge](https://bridgepay.money/) – this is a good option for users who don't want to manage their own private keys.

{{< img src="craft-connect-wallet.jpg" alt="Select a wallet to log in to Craft." caption="Select a wallet to log in to Craft." >}}

After connecting your wallet, you can view your profile by clicking your user avatar.

{{< img src="craft-view-profile.jpg" alt="View your Craft profile." caption="View your Craft profile." >}}

## How to Prepare Your NFT Art

Craft supports a variety of content file formats including GIF, JPEG, JPG, MP3, MP4, PNG, and WEBP. That's right! In addition to static images, Craft also supports audio (MP3) and video files (MP4). However, for the purposes of this tutorial, we'll be focusing on using static images to mint NFTs. Before uploading an image to Craft to mint an NFT, it's important to optimize it to ensure it doesn't take up more space than necessary.

Selecting a file format that suits your image is the best optimization you can make. For example, if your art is composed primarily of computer-generated vector graphics with a small color palette, PNG is often a better choice than JPG. On the other hand, if you're uploading photos captured by a camera, JPG is typically better at maintaining reasonable file sizes. Even though WEBP is technically superior to both JPG and PNG, it hasn't gained much traction as a file format for sharing images. Thus, we recommend sticking with PNG and JPG if possible.

Another optimization you can do is scaling the image appropriately. When it comes to NFTs, it's important to select a resolution that adequately displays all the details in your art. In most cases, 2,000 to 4,000 pixels for the long side of the image should be more than enough. So, if you're working on a source file that's larger than 4,000 pixels wide, be sure to downscale when exporting the final NFT image.

{{< img src="nft-image-optimization-imageoptim.jpg" alt="Optimizing an image with ImageOptim." caption="Optimizing an image with ImageOptim." >}}

Lastly, we recommend running your image through an image optimizer to reduce its file size. Since NFT images are typically encoded into Base64 and uploaded to IPFS, minimizing the storage space required can help speed up future downloads. This is especially important for PNG files which are lossless by design. To optimize images, you can use a desktop app like [ImageOptim](https://imageoptim.com/mac) or an online service like [TinyPNG](https://tinypng.com).

## How to Mint an NFT on Craft

To demonstrate how to mint an NFT on Craft, we've prepared the stunningly rare artwork below – *Portrait of DigitalDave, c.2022*.

{{< img src="nft.png" alt="Portrait of DigitalDave, c.2022" caption="Portrait of DigitalDave, c.2022" >}}

To start the NFT minting process, click the "Craft" button in the menu bar.

{{< img src="craft-mint-nft.jpg" alt="Mint an NFT on Craft." caption="Mint an NFT on Craft." >}}

At this point, you should see the page that's split into four sections – Upload File, Detail Information, List for Sale, and Advanced Options.

{{< img src="craft-mint-nft-options.jpg" alt="NFT minting options on Craft." caption="NFT minting options on Craft." >}}

Let's walk through each of these sections in more detail.

### Upload File

This is where you specify the image or media asset that you want to mint as an NFT.

{{< img src="craft-mint-upload-a-file.jpg" alt="Select your NFT image." caption="Select your NFT image." >}}

### Detail Information

This is where you provide a name and description for your NFT.

{{< img src="craft-mint-detail-information.jpg" alt="Provide a name and description for your NFT." caption="Provide a name and description for your NFT." >}}

### List for Sale

Enabling this option lets you list the NFT (priced in ICX) on the Craft marketplace. In the future, Craft plans to support other cryptocurrencies like bnUSD and CFT for marketplace transactions as well. For our listing, we've set a price of 100 ICX.

{{< img src="craft-mint-list-for-sale.jpg" alt="Price your NFT in ICX." caption="Price your NFT in ICX." >}}

### Advanced Options

This section lets you create a custom collection for the NFT, set a royalty percentage, specify a mint quantity, provide custom attributes, and mint additional counterparts.

{{< img src="craft-mint-advanced-options.jpg" alt="Advanced minting options on Craft." caption="Advanced minting options on Craft." >}}

For our listing, we've selected the "Craft Default" collection. This means the NFT will be housed in Craft's default collection instead of its own unique collection. If you're minting a set of NFTs that share a common theme (e.g. Studio Mirai's Tamashi or Frāmd's Yeti Strong Club), you'll want to create a unique collection or even mint through your own NFT contract which can then be integrated with Craft.

The royalty percentage provides the original creator (you) with a way to earn recurring revenue as secondary market sales occur. In the NFT market, it's common to see a royalty percentage between 10-15%, so we recommend sticking to this range for your first mint. Generally speaking, a higher royalty percentage may reduce secondary sales, while a super low royalty percentage may encourage wash trading tactics.

The "number of copies" setting lets you enforce scarcity of the NFT. Since NFTs are unique non-fungible digital tokens, scarcity can be verified on-chain. In most cases, NFT creators will only mint one copy of an NFT to make it truly unique. However, there are certain situations where it makes sense to increase the mint quantity. For example, if you're using Craft NFTs as passes to access a merch drop, you may want to set the quantity to match the number of physical items in your inventory.

The "custom attributes" section lets you specify additional attributes that will be embedded in the metadata of the NFT. Attributes are useful for describing rarity characteristics. For example, a PFP (profile picture) collection may have attributes like hair color, eye color, body type, glasses, etc.

After you've doublechecked your settings, press the "Craft" button at the bottom of the page to finalize the minting process. Next, you'll be prompted to upload your image to IPFS – a decentralized storage service provider. 

{{< img src="craft-upload-to-ipfs.jpg" alt="Upload your NFT to IPFS." caption="Upload your NFT to IPFS." >}}

After the upload is complete, go through the three remaining steps under "Create Collectible". Clicking each one of these buttons will trigger a transaction signing process in your ICX wallet.

{{< img src="craft-create-collectible.jpg" alt="Finalize your NFT mint." caption="Finalize your NFT mint." >}}

Once the NFT has been minted, you'll see it listed on your profile page!

{{< img src="craft-nft-minted.jpg" alt="A successful NFT mint on Craft." caption="A successful NFT mint on Craft." >}}

## Summary

As you can see, minting an NFT on Craft is very easy and only takes a few minutes of your time. Compared to NFT marketplaces on Ethereum, the Craft marketplace on ICON provides users with a much more affordable minting experience ($50-100 on Ethereum versus $0.01 on ICON for minting an NFT). With such a low barrier to entry, we recommend hopping onto Craft to mint your first NFT if you're even a little interested in the space. If you have any questions about Craft, be sure to join the [official Craft Discord](https://discord.gg/TaG8SfmAVH) and start a discussion today!