---
title: "ICON (ICX) Tokenomics"
date: 2022-02-02
slug: icon-icx-tokenomics-a6d269c8908
description: ICON tokenomics have been improved with IISS 3.1. Let’s take a look at some of the changes implemented as part of IISS 3.1 and how they compare to the old model.
---

ICON (ICX) Tokenomics have been improved with IISS 3.1. Recently, ICON P-Reps unanimously passed [Network Proposal #14](https://tracker.icon.foundation/proposal/0x6121aa4e693bd7e747760e55dda07fdb954d858d0f7936088a1296da0cff0a99), which implemented IISS 3.1, a new and more sustainable tokenomic framework for the ICX token and ecosystem.

Let’s take a look at some of the changes implemented as part of IISS 3.1 and how they compare to the old model.

### **Inflation**

Previously, inflation was set not by design but by the combination of the amount of rewards issued to those staking ICX and the rewards issued to block producers (P-Reps). There was no hard cap on inflation rate, and it would fluctuate based on the variables that influenced the formula that calculated P-Rep and staker rewards.

Under the new IISS 3.1, inflation is hard set at only 3.99% annually. There are four categories that can claim a share of that inflation: voters (those who stake ICX), block producers (P-Reps), the CPS Fund, and Relays (to be implemented with the launch of BTP).

### **Staking Rewards**

Similar to the prior versions of IISS, each user’s share of the ICX staking rewards was calculated based on the overall percentage of the network that was staked. This same model exists; however, the total amount of ICX available for rewards is now lower (in order to reduce inflation).

Typically, the reward rate for ICX stakers was in the range of 10–12% per year. Under the new model, the annual reward rate is currently around 6–7%.

If 100% of the network is staked, the reward rate would be 3.06%, while if only 1% of the network was staked, the reward rate would be 306.46%.

Overall, 77% of the total ICX inflation is currently allocated to go toward those who stake ICX.

### **Block Rewards (P-Reps)**

Under the new IISS 3.1, 13% of the inflation is allocated to P-Reps, the block producers of the ICON network.

The amount of ICX earned by each P-Rep is calculated using a few variables. Primary among them is the overall vote share received by a P-Rep. The more votes they receive from those staking ICX, the more rewards.

However, in order to receive 100% of the rewards they are eligible to receive, they must put up a bond equivalent to 5% of their vote share. So if a P-Rep is receiving a vote share of 1,000,000 ICX from those who are staking, they are required to deposit 50,000 ICX in order to receive their full reward amount. If they are unable to post the full bond, they will receive a reduced percentage of the rewards they would otherwise be eligible to receive.

The bonding mechanism is an important one as it ensures that P-Reps truly have “skin in the game.” If a P-Rep fails to reliably produce blocks for an extended period of time, or if they act maliciously toward the network, their bond could be slashed, depriving them of their deposit and also reducing or removing their ability to earn rewards.

### **CPS Funding**

One of the unique features of the ICON ecosystem is the Contribution Proposal System, a decentralized grant fund controlled by ICON’s P-Reps.

Individuals or teams who have ideas for projects or initiatives that seek to build upon or expand the ICON ecosystem are eligible to propose a project and seek funding. If the proposal is deemed acceptable by an adequate number of P-Reps, the teams receive the funding as requested.

Under IISS 3.1, the CPS fund is eligible to receive 10% of the inflation. Based on current inflation figures, this is about 300,000 ICX per month, all of which is dedicated toward growing the ICON ecosystem.

### **Relays**

Relays play an important role within the architecture of the Blockchain Transmission Protocol (BTP), ICON’s unique interoperability solution. To learn more about BTP and the role Relays play, be sure to [read this article](https://medium.com/helloiconworld/what-is-btp-b1affe6b3bbf#888d).

Until BTP launches, there is no reward allocation for Relays. Once live, P-Reps will work to decide a proper inflation allocation for Relays, while also adjusting reward levels for the other categories to accommodate the Relays. Details on becoming a Relay will also be unveiled in the future.

### **Summary**

To summarize, here is the current breakdown of the allocation of inflation:

**Block Producers -** Allocation: 13.0% | Monthly ICX: 390,000.00

**Relays -** Allocation: 0.0% | Monthly ICX: 0.00

**CPS -** Allocation: 10.0% | Monthly ICX: 300,000.00

**Voters -** Allocation: 77.0% | Monthly ICX: 2,310,000.00

**Sum - Allocation: 100.0% | Monthly ICX**: **3,000,000.00**

It should also be noted that, under the new fee model, transaction fees collected throughout the network will be used to fund the inflation described above. In other words, if the network reaches a point where 3,000,000 ICX are burned per month, inflation will be 0 ICX, as network fees will have paid for the entirety of that month’s inflation.

As mentioned, these numbers can be adjusted by P-Reps depending on the needs of the network. For a full breakdown of all IISS 3.1 calculations, be sure to view [this spreadsheet](https://docs.google.com/spreadsheets/d/1jh9QF5lhP9mdNDDrlbKfButaScVTeUHwFwzoa-Mfgdk/edit#gid=783852509).

