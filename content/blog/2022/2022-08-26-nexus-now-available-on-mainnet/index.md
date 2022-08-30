---
title: Nexus Beta Now Available on Mainnet
date: 2022-08-29
slug: nexus-beta-now-available-on-mainnet
description: We're excited to announce that Nexus is now live on the ICON mainnet with support for BNB Smart
draft: true
---

We’re excited to announce that [Nexus](https://nexusportal.io) is now live on mainnet. Nexus is a frontend application that provides users with an easy-to-use interface to send cross-chain token transfers via ICON Bridge. Nexus currently supports two blockchains – ICON and BNB Smart Chain (BSC). In this article, we’ll provide an overview of Nexus, and how to use it to perform transfer assets across chains.

To use Nexus, you’ll need to set up wallets on both ICON and BSC. We recommend using the Hana wallet for ICON, and MetaMask for BSC.

* Click [here](https://icon.community/blog/2022/icon-wallet/) to read more about how to set up a Hana wallet for ICON.
* Click [here](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain) to learn how to configure MetaMask for BNB Smart Chain.

## Supported Assets on Nexus

At launch, Nexus will support the assets below on ICON and BSC:

### Contract Addresses on ICON (Assets)

* sICX - `cx2609b924e33ef00b648a409245c7ea394c467824`
* bnUSD - `cx88fd7df7ddff82f7cc735c871dc519838cb235bb`
* BNB - `cx077807f2322aeb42ea19a1fcc0c9f3d3f35e1461`
* BUSD - `cxb49d82c46be6b61cab62aaf9824b597c6cf8a25d`
* USDT - `cx8e4d9b4164618f796d493a8154f1f17ad75f11bb`
* USDC - `cx532e4235f9004c233604c1be98ca839cd777d58c`
* BTCB - `cx5b5a03cb525a1845d0af3a872d525b18a810acb0`
* ETH - `cx288d13e1b63563459a2ac6179f237711f6851cb5`
* BMC - `cx23a91ee3dd290486a9113a6a42429825d813de53`
* BTS - `cxcef70e92b89f2d8191a0582de966280358713c32`

### Contract Addresses on BSC

* BUSD - `0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56`
* USDT - `0x55d398326f99059fF775485246999027B3197955`
* USDC - `0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d`
* BTCB - `0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c`
* ETH - `0x2170Ed0880ac9A755fd29B2688956BD959F933F8`
* ICX - `0x9b7b6A964f8870699Ae74744941663D257b0ec1f`
* sICX - `0x33acDF0Fe57C531095F6bf5a992bF5aA81c94Acf`
* bnUSD - `0xa804D2e9221057099eF331AE1c0D6616cC27d770`
* BMCManagement - `0xe221e50fbe2Ba54b1898b4c02F66bf9598fbD1dB`
* BMCPeriphery - `0x034AaDE86BF402F023Aa17E5725fABC4ab9E9798`
* BTSCore - `0x7A4341Af4995884546Bcf7e09eB98beD3eD26D28`
* BTSPeriphery - `0x556CA2d717d366A448c118D14e94a744b3c6578c`

## How to Import Tokens in Hana

In order to see BSC-based assets like BNB and BUSD in your Hana wallet, you’ll need to import the token contracts. To do this, click on the gear icon in the Hana menu bar, and click “Manage Tokens”.

{{< img src="manage-tokens-in-hana-wallet.jpg" alt="Manage tokens in the Hana wallet." caption="Manage tokens in the Hana wallet." >}}

Click the “+” icon in the upper right corner, and input the details for the token you want to add. For this example, we’ll add the BNB IRC-2 token to Hana. Once you input the contract address, Hana should automatically query the ICON blockchain and populate the remaining fields with the correct information.

* Contract Address: `cx077807f2322aeb42ea19a1fcc0c9f3d3f35e1461` (referenced above)
* Token Name: btp-0x38.bsc-BNB
* Token Symbol: BNB
* Decimals: 18

{{< img src="add-bnb-token-in-hana-wallet.jpg" alt="Add the BNB token to the Hana wallet." caption="Add the BNB token to the Hana wallet." >}}

After adding the custom token, you’ll be able to see the token balance in your Hana wallet.

## How to Import Tokens in MetaMask
In order to see ICON-based assets like ICX and bnUSD in your BSC-configured MetaMask wallet, you’ll need to import the token contracts. To do this, click “Import Tokens” on the MetaMask UI.

{{< img src="import-tokens-in-metamask.jpg" alt="Import tokens in MetaMask." caption="Import tokens in MetaMask." >}}

For this example, we’ll add the ICX BEP-20 token to MetaMask. Once you input the contract address, MetaMask should automatically query the BSC blockchain and populate the remaining fields with the correct information.

* Contract Address: `0x9b7b6A964f8870699Ae74744941663D257b0ec1f`
* Token Symbol: ICX
* Token Decimal: 18

{{< img src="import-icx-bep20-tokens-in-metamask.jpg" alt="Import the ICX BEP-20 token in MetaMask." caption="Import the ICX BEP-20 token in MetaMask." >}}

Click the “Add Custom Token” to finish the import process. At this point, you’ll be able to see BEP-20 ICX in MetaMask.

## How to Make a Cross-Chain Transfer With Nexus

Disclaimer: Nexus is currently in beta, so please use it at your own risk. Click [here](https://testnet.nexusportal.io/terms-of-use) to view the full terms of use.

### How to Transfer ICX from ICON to BSC

Click “Connect a Wallet” in the top right corner, and select “ICON Wallet”.

{{< img src="connect-an-icon-wallet.jpg" alt="Connect an ICON wallet." caption="Connect an ICON wallet." >}}

On the “Transfer” page, select ICX for the asset to transfer and “Binance Smart Chain” as the destination chain.

{{< img src="transfer-icx-from-icon-to-bsc.jpg" alt="Transfer ICX from ICON to BSC." caption="Transfer ICX from ICON to BSC." >}}

Next, input the amount of ICX you’d like to transfer, provide your BSC address from MetaMask, and click the “Transfer” button.

{{< img src="transfer-icx-from-icon-to-bsc-confirm.jpg" alt="Transfer ICX from ICON to BSC." caption="Transfer ICX from ICON to BSC." >}}

Ensure the transfer details are correct, and press the “Approve” button to broadcast the transaction.

{{< img src="transfer-icx-from-icon-to-bsc-review.jpg" alt="Transfer ICX from ICON to BSC." caption="Transfer ICX from ICON to BSC." >}}

Once the transaction has been broadcasted, it will be visible in the transfer details section of Nexus. Clicking on the transaction hash will bring you to a page on the ICON tracker where the transaction details can be viewed.

{{< img src="cross-chain-transfer-details.jpg" alt="Cross-chain transfer details." caption="Cross-chain transfer details." >}}

At this point, the transferred ICX should be viewable in your MetaMask wallet as well.

{{< img src="bridged-icx-to-metamask.jpg" alt="Bridged ICX (ICON to BSC) in MetaMask." caption="Bridged ICX (ICON to BSC) in MetaMask." >}}

### How to Transfer BNB from BSC to ICON
Let’s make another transfer! This time, we’ll move BNB from BSC to ICON. To get started, click “Connect a Wallet” on the Nexus portal and select MetaMask.

{{< img src="connect-a-metamask-wallet.jpg" alt="Connect a MetaMask wallet." caption="Connect a MetaMask wallet." >}}

On the “Transfer” page, select BNB for the asset to transfer and “ICON” as the destination chain.

{{< img src="transfer-bnb-from-bsc-to-icon.jpg" alt="Transfer BNB from BSC to ICON." caption="Transfer BNB from BSC to ICON." >}}

Next, input the amount of BNB you’d like to transfer, provide your ICX address from MetaMask, and click the “Transfer” button.

{{< img src="transfer-bnb-from-bsc-to-icon-confirm.jpg" alt="Transfer BNB from BSC to ICON." caption="Transfer BNB from BSC to ICON." >}}

Finally, review the transaction details and click “Approve” to broadcast the transaction.

{{< img src="transfer-bnb-from-bsc-to-icon-review.jpg" alt="Transfer BNB from BSC to ICON." caption="Transfer BNB from BSC to ICON." >}}

Once the transaction has gone through (usually within a minute), the BNB will be visible in your Hana wallet.

{{< img src="bnb-in-hana-wallet.jpg" alt="BNB in the Hana wallet." caption="BNB in the Hana wallet." >}}

## How to Submit Bug Reports for Nexus

As an open-source project, the Nexus codebase is fully transparent and can be viewed anytime on the [icon-project/Nexus GitHub repo](https://github.com/icon-project/Nexus). If you come across any bugs while using Nexus, we encourage you to **submit an issue directly on GitHub** – this helps streamline the bug fixing process for the Nexus developers. If you’re unsure about how to raise an issue on GitHub, [check out this guide](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) to learn more.

## Summary

The launch of Nexus on mainnet is a major milestone for interoperability on ICON. Starting today, dApps like Balanced, PancakeSwap, Omm, and more will be able to leverage ICON Bridge for cross-chain DeFi between ICON and BSC in a production setting. Over the coming months, we will continue refining the Nexus user interface and integratingworking with the ICON Bridge team to support additional blockchains for cross-chain token transfers. If you have any questions or comments about Nexus, feel free to [start a discussion on the ICON Discord](https://discord.com/invite/7a75Hf3cFm).