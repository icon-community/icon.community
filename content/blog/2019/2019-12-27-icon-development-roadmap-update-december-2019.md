---
title: "ICON Development Roadmap Update — December 2019"
date: 2019-12-27
slug: icon-development-roadmap-update-december-2019-2036fbfd94eb
description:
---

## ICON Development Roadmap Update — December 2019

![](https://cdn-images-1.medium.com/max/800/1*eM4lmjv0JGoBsljgOpkvSA.png)Stabilization, Oracles, IISS and BTP

Greetings ICONists,

As 2019 comes to a close, the Foundation would like to wish everyone a joyous and happy holiday season! 2019 was a solid year of progress and we truly appreciate the community contributions along the way!

Looking ahead, there are many things in the pipeline to be excited for in 2020. First and foremost is the expected launch and release of commercialized BTP v1.0. We also expect to complete IISS by adding in the contribution proposal system. This includes the DApp Booster Program and Ecosystem Expansion Projects.

Additionally, we are exploring the implementation of a side chain for smart contract execution on Core 2.0 to improve scalability, enhance BTP functionality and provide a sandbox environment. Furthermore, we are inching closer towards a partnership with a leading oracle solution and we hope to provide more details on this very soon.

Lastly, core developers continue to research enhancements for our P2P network and for database integration. We are also working to improve the ICON Network by developing LFT2, an improved consensus algorithm to ensure higher liveness.

These are just a few of the highlights heading into the new year. We will share a more detailed roadmap update in the coming weeks.

**December update**

Core contributors continue to focus on network stabilization by releasing loopchain 2.4.20 and ICON Service 1.5.20.

Additionally, we have applied the block structure update version 0.4 from block height of 12,640,761 to support several new stabilization features. These updates will be included in the Revision 8 which ICON Foundation will propose to P-Reps for a vote on January 7th.

We also announced the release note for loopchain and ICON Service on the ICON developer portal. You can view these in more detail using the link below: (https://www.icondev.io/changelog/release-note)

**ICON Service 1.5.20**

* Fix the state inconsistency for claimIScore between iconservice and rc
* Fix score data corruption on score query call
* Fix a bug on PRepEngine.\_reset\_block\_validation\_penalty
* Implement getInactivePReps JSON-RPC API
* Impose low productivity penalty when a P-Rep gets penalized for block validation failure and low productivity at the same time
* Update getPRepTerm JSON-RPC API
* Fix infinite loop on ipc\_server termination
* Pass a new main prep list to loopchain when a p2pEndpoint of the main prep is modified
* Fix a crash on processing queryIScore request with malformed address

**loopchain 2.4.20**

* Make block\_height\_sync\_timer repeatable
* Reset preps\_data in DB if score returns preps data
* Add nid to ‘/api/v1/status/peer’
* Edit logic after write\_precommit\_state, which is determined by the result of itself
* Base of block version 0.4 for the penalty
* Use VOTING\_RATIO after block version 0.4
* Edit logic to prevent confirmation of the previous block if it has a mismatch round with the current round of the node

Lastly, we also released BTP v0.5 and Android mobile staking, prepared Revision 9 and launched the ICON Community Grant Proposal system.

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

