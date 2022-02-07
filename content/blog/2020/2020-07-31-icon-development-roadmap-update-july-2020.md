---
title: "ICON Development Roadmap Update — July 2020"
date: 2020-07-31
slug: icon-development-roadmap-update-july-2020-256e576d5058
description:
---

## ICON Development Roadmap Update — July 2020

![](https://cdn-images-1.medium.com/max/800/1*HOLzyBiIeKVdfF_52eepJw.png)Governance Features, Network Update, SCORE Audit Tool and NFT Standard

Greetings ICONists,

It was another eventful and exciting month for the ICON project. We announced a noteworthy partnership, a network update and the release of a SCORE audit tool for smart contract developers. Additionally, in the background, we continue to prepare for a major release that we will be sharing information on in the coming weeks. We look forward to providing these details very soon!

In the meantime, please find the main highlights for the month of July below.

## 1. Governance Features Update

ICON Team has released a new update to the Euljiro, Yeouido, and Pagoda Testnets and we’re planning to release a new update to the Mainnet on August 3rd. The update has been delayed slightly due to some technical issues, however, we should release it on the schedule noted above.

Regarding this update, we prepared a quick guide for the new features below, so if you want to try these features ahead of the Mainnet update, please access the Euljiro, Yeouido, and Pagoda Testnet.

## How to try?

### Stake and Delegate in SCORE (system SCORE inter-call function)

**How to use:**

* <https://github.com/icon-project/documentation/blob/update-score-inter-call/score/writing-score.md#interfacesystemscore>

**Example:**

* <https://github.com/icon-project/icon-service/blob/release/1.7.0/tests/integrate_test/samples/sample_internal_call_scores/sample_system_score_intercall/sample_system_score_intercall.py>

### P-Rep Private Key Dualization

* Set nodeAddress using preptools first and replace owner keystore/pw with nodeAddress keystore/pw in docker-compose and then restart your docker.
* Preptools has been updated to support this new feature. Now all P-Reps are able to register a new “nodeAddress” on your P-Rep node so that you can split your node key to the owner’s address and node address. So the owner’s address is used to get the block reward and governance, and node address is used for block production and validation. Please check out the GitHub (https://github.com/icon-project/preptools/blob/master/README.md#setprep) and add a new “nodeAddress” using “setPRep” method via preptools. (If you are not registered as a P-Rep yet, please use the “registerPRep”)
* P-Rep no longer needs to keep their owner keystore file into their docker-compose. Please put the “nodeAddress” keystore file in your docker-compose and restart your docker.

### Multiple Unstaking Requests

* Test the Multiple Unstaking Requests feature via T-Bears. Check out this doc (https://github.com/icon-project/t-bears#tbears-sendtx) and try staking and unstaking several times using “setStake” method. You can find an example below:

![](https://cdn-images-1.medium.com/max/800/1*Rrs_g-GwpFgmAxk7DUXxjQ.png)### Extension of the number of delegation slots

* Test the “setDelegation” function via T-Bears. Check out this doc (https://github.com/icon-project/t-bears#tbears-sendtx) and try the delegation method. System will allow you to vote up to 100 P-Reps. You can find an example below:

![](https://cdn-images-1.medium.com/max/800/1*TAJ4rQorOQ55YsmPCHgVwg.png)![](https://cdn-images-1.medium.com/max/800/1*XcxTJd_dI-8HVqWgvYp8IA.png)### i\_rep Proposal

* P-Reps are able to submit the i\_rep Proposal to change the i\_rep value on the network.
* Check out this doc to learn how to use the i\_rep Proposal (https://github.com/icon-project/governance/tree/release-1.1.0#registerproposal)

## 2. Step Price Error and Post Mortem

UTC 24th July 2:22:04 AM (at block height 21,789,395), the ICON Foundation submitted a Step Price Proposal (https://tracker.icon.foundation/proposal/0x9d6b1e74442ad55fda517fc05d3046e91db52dbda54dabc77d0cf1a76f2278f6) to adjust the step price to 12,500,000,000 loop (0.00000000125 ICX). However, at block height 21,809,081, the proposal was passed and the step price changed to 1,258,425,417,728 loop (0.000001258425417728 ICX).

This problem was resolved and we shared this post mortem on the community forum (https://forum.icon.community/t/post-mortem-on-the-step-price-increase-proposal/1112). Also, we reimbursed all the transaction fees. Please refer to blog post here.(https://medium.com/@helloiconworld/icon-foundation-transaction-fee-reimbursement-f5c7f0d91cd)

## 3. Band Protocol Integration

We were happy to announce our partnership with Band Protocol, a leading oracle provider. Band Protocol has already integrated into the ICON Network so that developers are able to use their oracle solution. Additionally, we released a technical document for Band Protocol Integration on the icondev.io. More details can be found here:

<https://www.icondev.io/docs/band-protocol>

## 4. Introducing SCORE Audit System

ICON Foundation announced the ICON SCORE Audit System. We strongly recommend all developers who want to develop SCORE on the ICON Network to use this audit system before they deploy their SCORE on the network. Please refer to the release below for more details.

<https://medium.com/helloiconworld/introducing-score-audit-system-bf5f1310c137>

## 5. ICON IRC-3 Token Standard

IRC-3 covers the broad features of NFT use cases, including ownership representation of digital or physical assets, and consignment to third party operators for token transfers. The standard can be found on the [ICON Non-Fungible Token Standard](https://github.com/icon-project/IIPs/blob/master/IIPS/iip-3.md) IIP page, including its specifications and a sample SCORE implementation. A community-driven [NFT group](https://t.me/joinchat/GCwj4xySLdbX9LaNsllT6w) was also formed during on of the recent ICON developer calls, where interested community members can gather to collaborate and build around the NFT technology.

<https://medium.com/helloiconworld/icon-irc-3-token-standard-non-fungible-token-standard-4ea2d41cf884>

Thank you,

ICON Foundation

\_\_\_\_\_\_

ICON official community

Homepage : [https://icon.foundation](https://icon.foundation/)

Medium (ENG) : <https://medium.com/helloiconworld>

Brunch (KOR) : <https://brunch.co.kr/@helloiconworld>

KakaoTalk (KOR) : <https://open.kakao.com/o/gMAFhdS>

Telegram (ENG) : <https://t.me/hello_iconworld>

Telegram (KOR) : <https://t.me/iconkorea>

Facebook : <https://www.facebook.com/helloicon/>

Reddit : <https://www.reddit.com/r/helloicon/>

Twitter (Foundation) : <https://twitter.com/helloiconworld>

Twitter (Republic) : <https://twitter.com/IconRepublic>

F.A.Q Portal : <https://helloiconworld.freshdesk.com/support/home>

Contact : hello@icon.foundation

