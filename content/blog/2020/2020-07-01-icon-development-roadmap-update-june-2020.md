---
title: "ICON Development Roadmap Update — June 2020"
date: 2020-07-01
slug: icon-development-roadmap-update-june-2020-bed0e0af1512
description:
---

## ICON Development Roadmap Update — June 2020

![](https://cdn-images-1.medium.com/max/800/1*h0DSd97HDgqASCamznWlfQ.png)New Governance Updates in July and Token Standards

Greetings ICONists,

In June, we continued to work on the update that we previously announced to the community in May. And at this point, we are almost finished with the development and are now commencing testing and QA for stabilization of the update.

Below is the projected timeline for the release:

* **07/14**: Release the update to Pagoda, Yeouido
* **07/20**: Release update to exchanges
* **07/27**: Release update to Mainnet

We will also update ICONex Chrome, ICONex Mobile, and ICON Tracker to support the new features.

### Update details

Based on community requests, we have worked on several features to enhance the governance experience of the ICON network. Based on this feedback, we will soon add P-Rep private key dualizing, staking, and delegating functions in SCORE, multiple unstaking periods, and a function to increase the number of delegations from 10 to 100. Details of each feature can be found below.

**P-Rep Private Key Dualizing function**

* Allows P-Reps to register an additional key, the key used to produce and validate a block, to the ICON Network.
* Currently, when an ICONist tries to register as a P-Rep, the ICONist’s key will automatically be registered as a key for the node, and the keystore has to be put into the docker.
* With this update, ICONist can register a separate additional key for P-Rep nodes when they try to register as a P-Rep.
* The ICONist public address will be used to participate in governance, receive reward, and only the node key you have registered are included in the docker.
* Therefore, the ICONist’s public key does not enter the docker, but only the key of the node enters the docker. It can be understood that the owner of the node and the key for node operation are separated.

**Staking and delegating function in SCORE**

* Allows SCORE to stake and delegate directly to P-Reps.
* Since ICON Network has a block reward for voting, if a SCORE can vote to a P-Rep, the SCORE also can receive a reward and distribute it to the ICONists who deposited ICX to the contract.

**Multiple Unstaking Periods**

* Allows ICONists and SCOREs to have separate schedules for unstaking.
* Currently, an ICONist can only submit one unstaking request to the network. With this update, ICONist will be able to submit several unstaking requests (up to 1000).

**Extension of the number of delegation slots**

* Allows an ICONist to vote up to 100 P-Reps.

### Additional developments during the month

We continued to make progress on additional IRC token standards for the ICON network. We hope to release more information on these standards in the coming weeks.

Thank you,

ICON Foundation

\_\_\_\_\_\_

**ICON official community**

Homepage : [https://icon.foundation](https://icon.foundation/)

Medium (ENG) :<https://medium.com/helloiconworld>

Brunch (KOR) :<https://brunch.co.kr/@helloiconworld>

KakaoTalk (KOR) :<https://open.kakao.com/o/gMAFhdS>

Telegram (ENG) :<https://t.me/hello_iconworld>

Telegram (KOR) :<https://t.me/iconkorea>

Facebook :<https://www.facebook.com/helloicon/>

Reddit :<https://www.reddit.com/r/helloicon/>

Twitter (Foundation) :<https://twitter.com/helloiconworld>

Twitter (Republic) :<https://twitter.com/IconRepublic>

F.A.Q Portal :<https://helloiconworld.freshdesk.com/support/home>

Contact : [hello@icon.foundation](http://hello@icon.foundation/)

