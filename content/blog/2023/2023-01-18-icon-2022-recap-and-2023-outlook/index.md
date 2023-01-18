---
title: ICON 2022 Recap & 2023 Outlook
date: 2023-01-18
description: As we kick off the new year, we would like to share some reflections on the past year and details regarding our strategic focus for 2023.
slug: icon-2022-recap-and-2023-outlook
---

Happy New Year, ICON Community Members! 

As we kick off the new year, we would like to share some reflections on the past year and details regarding our strategic focus for 2023.

While 2022 kicked off with [a setback on BTP development](https://icon.community/blog/2022/icon-development-roadmap-update-february-2022-a31844765b6/), we turned things around with the launch of ICON Bridge (which has also just recently completed its [audit](https://icon.community/assets/FYEO-security-assessment-of-ICON-Bridge-Blockchain-Transmission-Protocol-BTP.pdf)), progress on [open-source development](https://github.com/icon-project/icon-bridge), and teams such as Craft, Balanced, and Havah starting to test BTP applications alongside continued BTP development.

In 2023, we will continue adapting to an evolving interoperability landscape by expanding use cases for xCall, a standard for generic cross-chain messaging, to interoperability protocols beyond BTP.  

If you would like to skip to plans for 2023, jump right ahead to [here](#2023-what-to-expect). Otherwise, let’s take a step back to review 2022 in more depth before moving on.

## 2022: A Year in Review 
One of the hardest pills to swallow in 2022 was yet another delay in BTP development. Just when we thought that BTP launch was in reach, the development team discovered, during the final stages of testing before deploying to mainnet, that the [gas fee estimates for cross-chain transfers were too high](https://icon.community/blog/2022/icon-development-roadmap-update-february-2022-a31844765b6/) to launch BTP for commercial use. As a result, [ICON Bridge](https://icon.community/blog/2022/introducing-icon-bridge-f8d3f2d93bf8/) was presented as an interim solution, which would maintain most of BTP’s key technical features while [centrally validating](https://icon.community/learn/icon-bridge/) messages to bypass high gas fee issues until the completion of BTP.

While the unexpected change of course caused more delays than the team would have liked, ICON Bridge launched with integrations to BSC and the open publication of [standards](https://github.com/icon-project/icon-bridge) that would allow interested third parties to integrate ICON Bridge to their own products while also structuring the codebase. This was in line with the team’s broader initiative to push [open-source development](https://build.icon.foundation/) by requiring all developers building ICON core protocols including [BTP](https://github.com/icon-project/btp) and [ICON Bridge](https://github.com/icon-project/icon-bridge) to publicly make available the codebase and related [progress reports](https://github.com/icon-project/grants-program/tree/main/progress-reports/icon-bridge). 

Beyond the launch of ICON Bridge, 2022 was an eventful year in which we celebrated the following:

* BSC and SNOW were integrated into ICON bridge. The valuable [FYEO Audit](https://icon.community/blog/2022/fyeo-x-icon-partnership/) for Solidity, CMD/GO and Java-based contracts has completed as well.
* ICON Bridge infrastructure was used to support [cross-chain NFT minting between ICON and Harmony](https://icon.community/blog/2022/wonderland-to-support-cross-chain-nft-minting-between-icon-and-harmony-with-icon-bridge/)
* BTP 2.0: ICONLOOP have worked through all the issues previously encountered with the BTP 1.0 architecture. BTP 2.0 is currently being built out.
* [Tracker upgrade](https://icon.community/blog/2022/new-year-new-tracker-geometry-labs-rolls-out-updates-for-icon-blockchain-tracker-b616cc2b155e/): A lot of work was done to build critical infrastructure enabling teams to tap into API’s and pull data from the blockchain.
* ICON held a three-day workshop with its partners at [Korea Blockchain Week](https://twitter.com/helloiconworld/status/1564308209195573248?s=20&t=n_9OnD4JTRefHn8mz_m0KQ) and later featured at the [W3N conference](https://twitter.com/web3narva/status/1602597009910910976?s=20&t=n_9OnD4JTRefHn8mz_m0KQ).
* Online content and presence received a boost. The ICON Network handle has established a broad content portfolio with updated accounts across [Twitter](https://twitter.com/helloiconworld), [YouTube](https://www.youtube.com/channel/UCI7Z_1sTKN-kCVgFD2a0GXQ), [Reddit](https://www.reddit.com/r/helloicon/) and [CoinMarketCap](https://coinmarketcap.com/community/profile/ICONNetwork). The [ICON Blog](https://icon.community/blog/) was brought back in from Medium and a well-filled [ICON Learn](https://icon.community/learn/) section was launched to give outside researchers an instant overview of ICON’s [tokenomics](https://icon.community/learn/icon-icx-tokenomics-a6d269c8908/), [governance](https://icon.community/learn/icon-governance/) and [technology](https://icon.community/learn/icon/).
* The [Immunifi Bug Bounty Program](https://icon.community/blog/2022/icon-foundation-partners-with-immunefi-for-bug-bounty-program/) was launched for the ICON blockchain, in order to ensure we are doing everything we can to make sure ICON is secure.
* Technical Community focus - This has been a considerable focus with work being put into fostering the right culture for an open-sourced development environment. The introduction of * * [RFPs](https://build.icon.foundation/grants) from the ICON Foundation, along with [community special interest groups](https://github.com/icon-project/community).
* With the [parachain auction success](https://icenetwork.io/blog/2022/snow-wins-parachain-slot/) of the SNOW Network, ICON community members became eligible to claim their [airdrop](https://icenetwork.io/blog/2022/claim-your-snow-airdrop/).

## 2023: What to Expect

### Cross-Chain Hub Strategy
As ICONLOOP continues bringing BTP closer to completion, the team will be exploring use cases that extend the application of the xCall feature beyond BTP. In 2023, ICON will push for wider adoption of ICON interoperability standards in the industry by supporting not only BTP but also other interoperability protocols such as IBC, Optimistic Rollups and Zero Knowledge Proofs. We would achieve this by providing xCall services via the aforementioned protocols.

By broadening ICON’s interoperability offerings, ICON will be better positioned to cater to the diverse needs of a broader user base, improving its chances for survival in an ever evolving interoperability landscape while offering flexible security assumptions for application developers.

### Wait, but what is xCall and how will it allow ICON to support other interoperability solutions? 
[xCall](https://icon.community/glossary/xcall-service/) is a key feature of BTP and ICON’s unique standard for generic cross-chain messaging between heterogeneous blockchains. Teams and dApps are already [using the xCall service](https://twitter.com/craftdotnetwork/status/1612461610735652867?s=20) with BTP on ICON testnets. Besides using xCall with BTP, the xCall service can be implemented to work with other interoperability protocols as well. The ICON Network becomes a more attractive cross-chain hub when the xCall service supports multiple protocols, each with their own pros and cons, offering maximum flexibility to developers.

Our first area of focus will be integrating the xCall service into IBC, together with the iBriz and HugoByte development teams. Fortunately, IBC is a well-specified protocol with detailed guides already created on how to build new implementations. Our integration teams are working through the planning stages of the xCall-IBC implementation build. Once the planning has been completed and mapped out, a clear list of development milestones will be shared.

## Value to ICON
Identical to the way that the xCall service on BTP [charges fees](https://icon.community/blog/2022/blockchain-transmission-protocol-btp-an-overview/), the xCall service on other interoperability solutions will also charge fees. Fees are always paid for on the origin blockchain. This means that cross-chain data with transaction fee estimations gets collected in advance and displayed + paid for in the origin blockchain’s currency. These fees will be used to serve two purposes:

* Reward relay node operators for their part in the cross-chain transaction
* Purchase ICX from the market and burn it

In the past, the accumulation of xCall fees would have been reliant on the widespread adoption and usage of the BTP interoperability protocol. By becoming a cross-chain hub with multiple interoperability protocols implemented, the xCall service can operate on more than one interoperability protocol. 
A broader availability of the xCall service will increase its usage and attractiveness to teams who are looking to build out secure dApps with cross-chain use-cases.

## BTP
BTP development continues to move along with full force, with [Craft](https://twitter.com/_helloelise/status/1615042603333914652?s=20&t=8EShjErOdC8sTCuxnMbiZg) and [Havah](https://docs.havah.io/havah/guide/faq/technical-questions) testing BTP real-world use. Once BTP is ready, we will focus all resources on building out further integrations. 

One of the things to remember is that BTP is an entirely new standard of cross-chain bridging that has never been built before for which original research is being conducted in parallel to development. It’s as if ICONLOOP is writing the manual on how to build something while also building it in parallel. As with all research, unforeseen obstacles are unavoidable. Yet, the ICON team is confident that just as we have already done in 2022, we will be able to meet and rise above any challenges to continue building towards an interoperable future.  

Onwards and upwards!

## Q&A Video
Click play on the video below to watch Eye on ICON Fez and David ask their most pressing questions about what to expect in 2023. [Scott Smiley](https://www.youtube.com/watch?v=WVuzpD_lSAM), co-founder at [Lydia Labs](https://lydialabs.xyz/), answers them all! 

{{< youtube TYLk4nomfx8 >}}

### ICON Discord
For further information, questions and discussion join the [ICON Discord](https://icon.community/icondiscord) today!

{{< img src="icondiscord.jpg" alt="Join the conversation on Discord" caption="" >}}