---
title: Nexus Beta Now Available on Lisbon Tesnet
date: 2022-08-08
slug: nexus-beta-now-available-on-lisbon-testnet
description: We're excited to announce that Nexus is now live on ICON's Lisbon testnet!
---

We’re excited to announce that [Nexus](https://testnet.nexusportal.io) is now live on ICON’s Lisbon testnet. Nexus is a frontend application that provides users with an easy-to-use interface to send cross-chain token transfers via ICON Bridge. Nexus currently supports two blockchains – ICON and BNB Smart Chain (BSC). In this article, we’ll provide an overview of Nexus, and how to use it to perform transfer assets across chains.

## How to Get Testnet ICX and BNB

In order to use Nexus, you’ll need to acquire testnet ICX and BNB. If you already have some in your wallets, feel free to skip to the next section.

### How to Get Testnet ICX

Testnet ICX for ICON’s Lisbon testnet can be requested from [ICONOsphere’s Testnet Faucet](https://faucet.iconosphere.io/). Once you’re on the faucet page, select “Lisbon (0x2)” in the network dropdown and provide your ICX address. Press the “Send Me Test ICX” button, and you should receive 2001 testnet ICX within a few minutes.

{{< img src="iconosphere-icx-testnet-faucet.jpg" alt="Get testnet ICX on ICONOsphere’s testnet faucet." caption="Get testnet ICX on ICONOsphere’s testnet faucet." >}}

### How to Get Testnet BNB

Testnet BNB can be requested from the [BNB Smart Chain Faucet](https://testnet.binance.org/faucet-smart). Once you’re on the webpage, input your BSC address, click on “Give Me BNB”, and select “0.5 BNBs”. The testnet BNB should be in your wallet within a few minutes.

## How to Configure Wallets for Nexus

Before using Nexus, you’ll need to configure your wallets to work with testnet – this involves setting the each wallet’s network to testnet and adding token contracts.

Disclaimer: Nexus is currently in beta, so please use it at your own risk. Click [here](https://testnet.nexusportal.io/terms-of-use) to view the full terms of use.

### How to Configure Hana Wallet for ICON

On Hana, click on the menu icon and click on the network dropdown next to “My Wallet”.

{{< img src="hana-change-network.jpg" alt="Switch to testnet on Hana." caption="Switch to testnet on Hana." >}}

Click the “Show More” button in the ICON section, and select “Lisbon Testnet”.

{{< img src="hana-lisbon-testnet.jpg" alt="Select the Lisbon testnet on ICON." caption="Select the Lisbon testnet on ICON." >}}

Next, you’ll need to add the BNB IRC-2 token (a token that represents BNB on ICON) to your Hana wallet. To do this, click on the gear icon in the menu bar, and click on “Manage Tokens”.

{{< img src="hana-manage-tokens.jpg" alt="Manage tokens in Hana wallet." caption="Manage tokens in Hana wallet." >}}

Click the + icon to the right of “Manage Tokens”.

{{< img src="hana-add-token.jpg" alt="Add a token in Hana wallet." caption="Add a token in Hana wallet." >}}

Input the following details to add the BNB token on ICON:

* Contract Address - cx54d90a0fcbbc1ab702fd8344f9896a44cbe85a73
* Token Name: BNB
* Token Symbol: BNB
* Decimals: 18

### How to Configure MetaMask for BNB Smart Chain

We recommend using Hana Wallet for ICON, and MetaMask for BNB Smart Chain. To switch to testnet for BSC on MetaMask, please follow the [official guide from Binance](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain). After configuring MetaMask for testnet, you’ll need to add the ICX BEP-20 token (a token that represents ICX on BSC) to MetaMask.

To do this, first click on “Import Tokens” in MetaMask.

Input the following details to add BEP-20 ICX to MetaMask:

* Token Contract Address: 0x967Ed5BD7802126DF414f80B73Bb16c17f0eF52E
* Token Symbol: ICX
* Token Decimal: 18

{{< img src="metamask-import-tokens.jpg" alt="Import tokens in MetaMask." caption="Import tokens in MetaMask." >}}

## How to Make a Cross-Chain Transfer With Nexus

We recommend reading the rest of this guide to get familiar with Nexus, but if you prefer to watch a video, feel free to check out [Cryptosetups’ video tutorial](https://www.youtube.com/watch?v=Gmgndb6cMxQ) on how to use Nexus as well. Now that your wallets are configured, it’s time to get them connected with Nexus. To do this, visit the Nexus Portal, and click “Connect a Wallet” in the upper right corner.

### How to Transfer ICX from ICON to BSC

For the first transfer, we’ll send ICX from ICON to BSC, so select “ICON Wallet” in the “Connect a Wallet” modal.

{{< img src="nexus-connect-icon-wallet.jpg" alt="Connect an ICON wallet in Nexus." caption="Connect an ICON wallet in Nexus." >}}

On the “Transfer” page, select ICX for the asset to transfer and “Binance Smart Chain” as the destination chain.

{{< img src="nexus-transfer-icon-to-bsc.jpg" alt="Transfer ICX from ICON to BSC." caption="Transfer ICX from ICON to BSC." >}}

Next, input the amount of ICX you’d like to transfer, provide your BSC address from MetaMask, and click the “Transfer” button.

{{< img src="nexus-transfer-icon-to-bsc-review.jpg" alt="Review Nexus transfer." caption="Review Nexus transfer." >}}

Ensure the transfer details are correct, and press the “Approve” button to broadcast the transaction.

{{< img src="nexus-transfer-icon-to-bsc-confirm.jpg" alt="Confirm Nexus transfer." caption="Confirm Nexus transfer." >}}

Once the transaction has been broadcasted, it will be visible in the transfer details section of Nexus. Clicking on the transaction hash will bring you to a page on the ICON tracker where the transaction details can be viewed.

{{< img src="nexus-transfer-icon-to-bsc-details.jpg" alt="Nexus transaction details." caption="Nexus transaction details." >}}

At this point, the transferred ICX should be viewable in your MetaMask wallet as well.

{{< img src="icx-in-metamask.jpg" alt="Bridged ICX in MetaMask." caption="ICX in MetaMask." >}}

### How to Transfer BNB from BSC to ICON

Let’s make another transfer! This time, we’ll move BNB from BSC to ICON. To get started, click “Connect a Wallet” on the Nexus portal and select MetaMask.

{{< img src="nexus-connect-metamask-wallet.jpg" alt="Connect a MetaMask in Nexus." caption="Connect a MetaMask in Nexus." >}}

On the “Transfer” page, select BNB for the asset to transfer and “ICON” as the destination chain.

{{< img src="nexus-transfer-bsc-to-icon.jpg" alt="Transfer BNB from BSC to ICON." caption="Transfer BNB from BSC to ICON." >}}

Next, input the amount of BNB you’d like to transfer, provide your ICX address from MetaMask, and click the “Transfer” button.

{{< img src="nexus-transfer-bsc-to-icon-review.jpg" alt="Review Nexus transfer." caption="Review Nexus transfer." >}}

Finally, review the transaction details and click “Approve” to broadcast the transaction.

{{< img src="nexus-transfer-bsc-to-icon-confirm.jpg" alt="Confirm Nexus transfer." caption="Confirm Nexus transfer." >}}

Once the transaction has gone through (usually within a minute), the BNB will be visible in your Hana wallet.

{{< img src="bnb-in-hana.jpg" alt="BNB in the Hana wallet." caption="BNB in the Hana wallet." >}}

## Supported Assets

At this time, Nexus supports the following assets:

### Assets on ICON

* sICX: cx71a4629507997d069eb3b0023cdf99419f790d9d
* bnUSD: cx26ad29e85087ade6dc3418a17275f5e99851abf1
* ETH: cxa86504ccff5a2e759b180650b2fba53975ac2484
* BNB: cxbfe1004c4eb9094e59f157e9cdfeefc6bf004955
* BUSD: cx43f55441db4e2d24e1781020465b212ec7627e68
* USDT: cx8c53539b68d2634607be11b323a33ec3392aac1b
* USDC: cx7cb84e3da09e51c61aca5b7bb8a1f70b4e4af31a
* BTCB: cx1a7b11239a1e78132eb87c27b9efde3258cfe461

### Assets on BSC

* BUSD: 0x001bA2DF00bB5BCA9E184dB9B1FaCDB58c22F48A
* USDT: 0x7f661A255e4dbeDF3795957b35A3F1EdB4F0C7eC
* USDC: 0x1d44Ee3867FF08C23e016dF8B3c0e23ca127550C
* BTCB: 0x466B9c44771de5529D201fCCb6f7511B62Cb1A13
* ETH: 0xA849E49271A97F782142D6c759F395e42F1e3Fe9
* ICX: 0x890E000C8771e0A3D855b9768219Ac733e04509b
* sICX: 0x83462D89C3563FbC0BAa4523aD49e4Cfef6657C9
* bnUSD: 0x5e1E7c2E24FE558907Bdd6D56432D4843055891F

## How to Submit Bug Reports for Nexus

As an open-source project, the Nexus codebase is fully transparent and can be viewed anytime on the [icon-project/Nexus GitHub repo](https://github.com/icon-project/Nexus). If you come across any bugs while using Nexus, we encourage you to **submit an issue directly on GitHub** – this helps streamline the bug fixing process for the Nexus developers. If you’re unsure about how to raise an issue on GitHub, [check out this guide](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) to learn more.

## Summary
The launch of Nexus on public testnet is a major milestone for interoperability on ICON. Starting today, users will be able to start getting familiar with how to perform cross-chain transfers between ICON and BNB Smart Chain. We will be closely monitoring the status of Nexus and ICON Bridge on testnet over the coming weeks.

If no major issues are identified, we are targeting a launch for Nexus on mainnet by the end of August. As always, we will keep the community informed about developments related to Nexus. If you have any questions about how to use Nexus on testnet, please feel free to [start a discussion on the ICON Discord](https://discord.com/invite/7a75Hf3cFm).