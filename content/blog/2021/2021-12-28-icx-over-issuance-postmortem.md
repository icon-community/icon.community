---
title: "ICX Over-Issuance Postmortem"
date: 2021-12-28
slug: icx-over-issuance-postmortem-e634cfbda85b
description:
---

## ICX Over-Issuance Postmortem

### An update on the ICX Over-issuance bug, and how we fixed it with Revision 16.

On December 23, 14:23 (KST), the ICON team discovered an over-issuance of ICX at Block Height 43,866,323 (the first block after activation of IISS 3.1). The over-issuance was caused by a bug in ICON 2.0’s ICX issuance module. As a result, approximately 3 million ICX was issued in one day instead of one month. With the help of P-Reps, we were able to quickly resolve the issue with the passing of the Revision 16 network proposal on December 25.

**IMPORTANT: This incident only impacts the ICX treasury and DOES NOT impact holders, voters, or P-Reps. Since ICX reward claiming relies on I-Score conversion, the additional ICX cannot be claimed from the treasury and will not impact circulating supply.**

![](https://cdn-images-1.medium.com/max/800/1*bqY101n5KPu0WRssu99fzQ.jpeg)## The Problem

The ICON team discovered the over-issuance issue in [this base transaction](https://tracker.icon.foundation/transaction/0x1d6593a104aec6551285c6b60b82cc1ee4cb3cb2e3afd7488e27961974a4824c). In this transaction, an issuance of ~69.57 ICX (0x3c585f50e0100aec9 converted to an integer) was observed. On ICON, a term consists of 43,120 blocks. Thus 69.57 ICX of issuance per block resulted in ~2,999,858 ICX (69.57 ICX * 43,120 blocks) minted in a single term. The normal issuance rate for is ~2.31 ICX per block or ~99,814 per term.

## The Solution

The over-issuance bug was patched in [v1.1.3 of Goloop](https://github.com/icon-project/goloop/commit/57422c7d5b496366bbb06f9542c5f0f54b9c8031) on the same day. Afterward, we submitted the Revision 16 network proposal to activate the updated code on December 24. On December 25, Revision 16 was approved, and the issue was solved at [Block Height 43,952,563](https://tracker.icon.foundation/transaction/0xda4669e185bb255c40a044492fa06a2ef0dd265fc1cefcd28c8e09cc94e89a93).

With the v1.1.3 update in place, ICON’s ICX issuance module will regulate the ICX total supply back to normal over time. To accomplish this, the module will save the margin between the over-issued ICX and the reward calculator’s reward amount per block. The module will then use the margin to revise the ICX issued per block, which will gradually bring the ICX supply back to expected levels over a period of ~58 days.

## Prevention

In order to prevent similar errors, the ICON team will be setting up stricter QA review processes such as implementing additional monitoring tools to detect critical issues on testnets, increasing observation periods on testnets before mainnet deployments, and strengthening test automation processes.

