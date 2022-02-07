---
title: "ICON Development Roadmap Update — May 2020"
date: 2020-05-31
slug: icon-development-roadmap-update-may-2020-c769789dfea4
description:
featured_image:
---

### ICON Development Roadmap Update — May 2020

![](https://cdn-images-1.medium.com/max/800/1*X8Bty3NozREvdkj0Y1Kc0g.png)Governance Features, ICONex, Tracker and BTP

Greetings ICONists,

In May, we continued to focus on enhancing the ICON Network’s governance experience and have a number of updates that the community will be excited about. Additionally, we capped off the month with the release of BTP 1.0, our interoperability technology, and released a technical demonstration video. Interoperability has been a key focus since the initial whitepaper and we are extremely excited to have cleared this milestone. And now, we look forward to driving real application of this technology into the future. See more details on our development in May below.

### **Features to enhance governance experience**

Based on community requests, we started to work on several features to enhance our governance experience. Based on this feedback, we will be adding P-Rep private key dualizing, staking and delegating functions in SCORE, multiple unstaking periods, and a function to increase the number of delegations from 10 to 100.

#### **P-Rep Private Key Dualizing function**

* Allows P-Reps to register an additional key, the key used to produce and validate a block, to the ICON Network.
* Currently, when an ICONist tries to register as a P-Rep, the ICONist’s key will automatically be registered as a key for the node, and the keystore has to be put into the docker.
* However, in the future, ICONist can register a separate additional key for P-Rep nodes when they try to register as a P-Rep.
* The ICONist public address will be used to participate in governance, receive reward, and only the node key you have registered are included in the docker.
* Therefore, the ICONist’s public key does not enter the docker, but only the key of the node enters the docker. It can be understood that the owner of the node and the key for node operation are separated.

#### **Staking and delegating function in SCORE**

* Allows SCORE to stake and delegate directly to P-Reps.
* Since ICON Network has a block reward for voting, if a SCORE is able to vote to a P-Rep, the SCORE also can receive a reward and distribute it to the ICONists who deposited ICX to the contract.

#### **Multiple Unstaking Periods**

* Allows ICONists and SCOREs to have separate schedules for unstaking.
* Currently, an ICONist can only submit one unstaking request to the network. However, in the future, ICONist will be able to submit several unstaking requests.

#### **Extension of the number of delegation slots**

* Allows an ICONist to vote up to 100 P-Reps.

### **ICONex**

In order to limit vote stagnancy and vote centralization, we randomly mixed the list of P-Reps and removed rankings. We will observe the effects of this experiment on voting and the changes in governance. Also, we added the step limit auto adjustment function to solve a problem in the mobile version of ICONex. Now, if you want to send a transaction to SCORE, the step limit to call the SCORE will be automatically adjusted.

### **ICON Tracker**

Recently, ICON Foundation announced a blog post: [Path to Sustainable Economics](https://medium.com/helloiconworld/path-to-sustainable-economics-450be4137724). Based on the post, we will introduce the concept of commission rate to the community via the ICON Tracker. Soon, the tracker will display the Suggested Commission Rate by each P-Rep and a Global Commission Rate from all P-Reps.

### **BTP**

Last but not least was the release of BTP, a standard interface for interoperability contracts. We recently released a demo video with BTP’s detailed blog post; see [blog post](https://medium.com/helloiconworld/blockchain-transmission-protocol-btp-explained-c4d9927ad398) and [demo video](https://www.youtube.com/watch?v=MaO-fI5Azuk&t=27s) for more information.

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

