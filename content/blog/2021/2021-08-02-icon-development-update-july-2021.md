---
title: "ICON Development Update — July 2021"
date: 2021-08-02
slug: icon-development-update-july-2021-2fc9275c8252
description: Progress on the ICON 2.0 migration, detailed plans around the ICE blockchain and progress on BTP including the formal announcement of the addition of NEAR to the BTP ecosystem
---

It was another busy month of development as we continued to progress on the ICON 2.0 migration and detailed plans around the ICE blockchain. Additionally, we continued to progress on BTP including the formal announcement of the addition of NEAR to the BTP ecosystem.

We are looking forward to launching these developments shortly. Until then, please refer to the latest progress below.

![](https://cdn-images-1.medium.com/max/800/1*wzRHAPmAkHWVmXQ_vuk9Ug.jpeg)**ICON 2.0**

This month, we provided an update on the development progress, timeline, and path forward for the ICON 2.0 migration. Please see the full details [here](https://medium.com/helloiconworld/icon-2-0-migration-community-update-30e43b4f609f).

[![](https://cdn-images-1.medium.com/max/800/1*F_mBrgDpG9v_3n20TyjR-g.png)](https://medium.com/helloiconworld/icon-2-0-migration-community-update-30e43b4f609f)As stated in the update, we estimate that this process can be completed by the end of August. But this timeline largely depends on how many incompatibility issues arise during the block migration process, and how hard they are to solve. Please note, it could be earlier or later than the end of August. We will keep the community updated as we progress. As of 7/31, we are at 67%.

After block import completion, we estimate that it will take around two weeks to prepare nodes and exchanges for the hard fork. At that point, ICON 1.0 will be stopped simultaneously at a predefined block height by a network proposal marking the start of the ICON 2.0 era.

Lastly, we will propose an initial IISS 3.1 update shortly. Please refer to the forum for further details and corresponding community discussions. As a reminder, this proposal will be an initial economic design for the ICON ecosystem within the ICON 2.0 framework and the addition of relayers.

**BTP Ecosystem**

During our final acceptance testing for Parachain integration, we found an issue of blocks not reaching finality in some extreme cases, such as hard forks that stall BTP communication with a very large accumulated message queue. While this is very unlikely to happen ever, we will not settle for almost robustness. Our teams have investigated this issue and have come up with a solution, to fragmentize the said message queue and properly process them to reach finality. This implementation is currently ongoing, and we expect to complete this task in about a week. Proceeding that will be actual integration to Moonriver (Our first Polkadot Parachain target).

Our integration to Binance Smart Chain has been going smoothly, and we have deployed a custom BSC node with the BTP contracts deployed. Our last task with BSC is the Relayer software which is close to completion as well. We will soon start testing BTP on BSC.

[![](https://cdn-images-1.medium.com/max/800/1*MCWFumPzMct4sIfIAiPbkw.jpeg)](https://twitter.com/NEARProtocol/status/1419916262830972935)Lastly, our integration to Near Protocol is also full-steam ahead with BTP contract implementation. The team has also announced this on Twitter in case you missed it: [click here](https://twitter.com/NEARProtocol/status/1419916262830972935)

We continue to explore other potential integration partners. Some promising names have already expressed high interest in joining our BTP ecosystem. At this stage, it’s becoming easier to pitch and attract new partners. Soon we’ll have a working prototype, and BTP will continue to thrive.

**ICE Blockchain**

This month, we also provided more details on the ICE blockchain, the new EVM compatible network in the ICON ecosystem. Further details can be found [here](https://medium.com/helloiconworld/the-ice-blockchain-e6ea96adc99).

We will also announce additional teams to the working group very soon. Additionally, we will provide details on the testnet, snapshot for the airdrop, and other key development milestones.

Join the ICON Community:

[**Homepage**](https://iconrepublic.org/) **|** [**Twitter**](https://twitter.com/helloiconworld) **|** [**Reddit**](https://www.reddit.com/r/helloicon/) **|** [**Community**](https://forum.icon.community/) **|**[**Facebook**](https://www.facebook.com/helloicon/) **|** [**Instagram**](https://www.instagram.com/helloiconworld/)

[**Telegram (ENG)**](https://t.me/hello_iconworld) **|** [**Telegram (KOR)**](https://t.me/iconkorea) **|** [**Contact**](mailto:hello@icon.foundation) **|** [**KakaoTalk**](https://open.kakao.com/o/gMAFhdS) **|** [**Brunch**](https://brunch.co.kr/@helloiconworld)

