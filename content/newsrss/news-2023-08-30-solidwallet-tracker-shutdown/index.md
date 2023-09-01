---
title: Solidwallet Tracker API Shutdown
date: 2023-08-30
description: We hereby inform you that the solidwallet.io tracker API will cease its operations on Sep 25 20:00 (EST) | Sep 26 09:00 (KST)
slug: solidwallet-tracker-shutdown
canonicalURL: "https://icon.community/blog/2023/solidwallet-tracker-shutdown/"
---

We hereby inform you that the solidwallet.io tracker API will cease its operations on

**Sep 25 20:00 (EST)**

**Sep 26 09:00 (KST)**

Below are the domains to be terminated:
* main.tracker.solidwallet.io
* lisbon.tracker.solidwallet.io
* berlin.tracker.solidwallet.io

Services affected by termination include:
* tracker.icon.foundation/v3 (Remove redirect)
* tracker.icon.community/v3 (Remove redirect)

The solidwallet.io APIs below are also scheduled to be shut down.

```
/v3/address/claimIScoreList
/v3/address/info
/v3/address/internalTxList
/v3/address/list
/v3/address/tokenTxList
/v3/address/txList
/v3/address/txListForWallet
/v3/block/info
/v3/block/list
/v3/block/txList
/v3/contract/eventLogList
/v3/contract/info
/v3/contract/list
/v3/contract/txList
/v3/iiss/delegate/list
/v3/iiss/prep/list
/v3/iiss/prep/repJson
/v3/main/mainInfo
/v3/main/summary
/v3/main/txCountIn24h
/v3/token/holders
/v3/token/summary
/v3/token/txList
/v3/transaction/eventLogList
/v3/transaction/internalTxList
/v3/transaction/recentTx
/v3/transaction/txDetail
```

For your tracking and API needs, we advise transitioning to [tracker.icon.community](https://tracker.icon.community/). We appreciate your understanding and cooperation on this matter.

For any questions or troubleshooting support, please join the #dev_support channel on [ICON Discord](https://discord.gg/qwsknc4utD). To report bugs or to make product- related suggestions, you can submit a request directly through the [Tracker GitHub](https://github.com/sudoblockio/icon-tracker).

For developers, please reference the following APIs docs:

**Mainnet**
* tracker.icon.community/api/v1/docs
* tracker.icon.community/api/v1/contracts/docs
* tracker.icon.community/api/v1/governance/docs

**Berlin** 
* tracker.berlin.icon.community/api/v1/docs
* tracker.berlin.icon.community/api/v1/contracts/docs

**Lisbon**
* tracker.lisbon.icon.community/api/v1/docs
* tracker.lisbon.icon.community/api/v1/contracts/docs

Thank you for your continued support.

