---
title: "Post-Mortem of the Network Pause"
date: 2019-11-25
slug: post-mortem-of-the-network-pause-be673c7eb7de
description:
---

## Post-Mortem of the Network Pause

![](https://cdn-images-1.medium.com/max/800/1*t_YzbhE86nBOZTbxVt8_6Q.png)Timeline, Resolution and Upcoming Updates

Greetings ICONists,

In this post, we outline the cause of the recent network pause and the steps taken to resolve the issue. We hope this provides more clarity on the timeline, the parties involved, and the processes needed to restore the network. Additionally, we highlight the next loopchain release and to-do’s.

At block height 11,165,694, 14:37:22 UTC, Nov 17th, the ICON Network halted due to a leader node initializing bug. This bug caused the ICON Network to halt temporarily while the issue was being resolved. The chain was ultimately recovered at UTC 12:37:38, Nov 18th with block height 11,165,695.

At this time, the core engineering team is monitoring the Mainnet 24/7 to avoid any additional significant network downtime. We will release a new version update to fix these bugs as soon as possible.

Further details are provided below.

**History of network pause:**

1. Leader complain was raised
2. Two leader nodes were appointed due to leader initializing bug
3. Two leader nodes suggested two different blocks at the same block height of 11,165,695
4. At the time, 14 main P-Reps were validating one of the blocks while 8 main P-Reps were validating the other
5. Given this, 8 Main P-Reps had to reset their database and sync from block data snapshot and the entire group of Main P-Reps restarted at the same time
6. After the restart, P-Rep A produced an invalid block which included invalid block confirmation data in block height 11,165,696 (from the 8 P-Reps’ invalid block)
7. There were two attempts to recover the network by restarting. However, this still didn’t work due to the issue of the last block containing invalid information
8. ICON Foundation released a loopchain patch in tag 2.4.16 to prevent syncing data from the invalid blocks which took roughly 5 hours to produce
9. The Main P-Reps restarted their nodes at the same time twice
10. The network was recovered

**Next release and to-do’s:** loopchain version 2.4.18

1. Leader initializing bug will be fixed in the next update
2. Change the quorum for the leader complain votes to 22 x 2/3 (Currently it is: 22 x 1/2). With this update, Main P-Rep nodes won’t need to be restarted at the same time
3. Add a function to reduce an invalid non-broadcasted block

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

