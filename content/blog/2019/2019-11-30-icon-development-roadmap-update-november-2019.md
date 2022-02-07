---
title: "ICON Development Roadmap Update — November 2019"
date: 2019-11-30
slug: icon-development-roadmap-update-november-2019-6f6f5ccb4b06
description:
featured_image:
---

### ICON Development Roadmap Update — November 2019

![](https://cdn-images-1.medium.com/max/800/1*-kIcFMwG4-WBPsQK-axM1g.png)Network Stabilization, ICON Tracker, Mobile Staking and BTP

Hello from ICON Foundation,

It was another busy month of activity with significant progress made across a number of key areas. We made improvements to network stabilization, we also launched an updated tracker, including network proposals and an updated ICONex for mobile staking (iOS). Furthermore, we continued to make headway on BTP, and are optimistic about our ability to commercialize this feature by 1H2020.

**BTP**

We are preparing the launch of our POC of BTP v0.5. This will be a private to public interchain POC that will likely launch in the coming weeks. We will share the details of this POC at the same time we release our design plans for BTP v1.0. Overall, our goal is to have commercialization of BTP technology in the 1H2020 (private to public interchain).

**Network stabilization**

We are stabilizing the network through 2 internal releases and 1 external release. We expect that with Revision 8 our network will be fully stabilized. Please note that for the time being, we will not be implementing the 6% burn penalty (previously scheduled to launch Nov 29th.). Once the network is fully stabilized, we will implement this feature.

Some recent network stabilization updates include:

**ICON Service**

* Applied updated P-Rep delegation reward calculation formula: Revision 7.
* Fixed a bug for loading total\_elected\_prep\_delegation amount when a node restarts
* Fixed IPC channel crashes between ICONService and RewardCalculator when processing queryIScore request with an empty string as an address parameter
* Fixed a bug for total\_elected\_prep\_delegation amount
* Fixed a minor bug on setDelegation TX
* Fixed IISS Data corruption

l**oopchain**

* Fixed unconfirmed tx remain while leader in complain state
* Treat the error as an exception while ‘Confirm Info’ is None
* Removed reset leader from the vote in block manager
* Avoid synchronizing a block that doesn’t have the `confirm\_info` and next block
* Update Broadcaster audience at once with the target list
* Remove peer\_list in ‘PeerManager

Outside of these items, core developers continue to research enhancements for our P2P network and for database integration. We expect these enhancements to improve basic network performance substantially. We are also working to improve the ICON Network by developing LFT2, an improved consensus algorithm to ensure higher liveness. We will provide more details on LFT2 in short order.

**Mobile Staking Update**

We launched mobile staking capabilities for iOS. However, the QA results for the Android update highlighted some issues that needed to be resolved. We’re hopeful that these issues will be resolved in the next few weeks.

Thank you,

ICON Foundation

\_\_\_\_\_\_

**ICON official community**

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

Contact : [hello@icon.foundation](http://hello@icon.foundation/)

