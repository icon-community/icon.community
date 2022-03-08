---
title: "ICON Development Roadmap Update — January 2021"
date: 2021-01-31
slug: icon-development-roadmap-update-january-2021-7cfb8005a766
description: ICON Rosetta Implementation, Contribution Proposal System code review and ICON 2.0 alphanet
---

## ICON Development Roadmap Update — January 2021

![](https://cdn-images-1.medium.com/max/800/1*0-4ygw6LO_TqJcOjZfMP-A.png)Rosetta Integration, Revision 12, CPS, and ICON 2.0 Alphanet

Greetings ICONists,

2021 is off to a fast start as we continue to focus the majority of our efforts on the migration to [ICON 2.0 BATANG](https://medium.com/helloiconworld/icon-2-0-introducing-a-new-blockchain-software-architecture-based-on-go-8874107a4e58). We are making good progress and hope to share more details with the community along the way. ICON 2.0 is a step-change improvement over the current network, and we’re excited and encouraged about the progress thus far.

Furthermore, development and planning are underway to create BTP bridges with other communities. It’s too early to note the ecosystems at this point, but we can say we are extremely excited about the potential. Lastly, we continue to make progress on EVM compatibility and are narrowing the potential solutions. They are many attractive options, and we hope to share the plans soon. Stay tuned.

## 1. ICON Rosetta Implementation

ICON developers finished a reference implementation of the Rosetta specification for the ICON blockchain. Now, we’re waiting for the next ICON Mainnet update in order to fully function this implementation since it requires a few specific APIs included in the upcoming update. Once ICON Mainnet updates to the icon-service 1.8.0, then we’ll post this implementation on the Rosetta official forum to get reviewed by the Rosetta team.

You can see the github repository of the implementation here (<https://github.com/icon-project/rosetta-icon>) and if you haven't heard of the Rosetta API, you can find more information here. (<https://www.rosetta-api.org/>).

## 2. Revision 12 Update on Mainnet

ICON Foundation has released a new update including Revision 12 features and continue to test it to make sure the stability of the update. We are set to release it on the Mainnet within the first two weeks of February if there are no issues found.

This update is focusing on increasing security and stability of the network. The new update includes the below features:

* **Burn address:** The System SCORE (cx000..) will have the ability to burn the ICX that is sent to the address. Everyone who wants to burn ICX on the ICON Network is able to send their ICX to this address.
* **ICX balance verification logic:** In order to check all the changes on the ICX supply, the blockchain verifies each account’s balance when it processes and generates a transaction
* **Recovery mode:** A solution to recover a P-Rep node from the network pause situation. Nodes with this feature enabled are automatically rebooted simultaneously to restore the network
* **Minor bug fixes:** fixed bugs on container DB, transaction processing logic and etc.

You can find more details on this release note: <https://www.icondev.io/changelog/2020-01-14-icon-node-release>

## 3. Contribution Proposal System (CPS)

The Contribution Proposal System is in the final stages of code review and will be tested again starting the first week of February. All frontend and backend logic is complete and ready for production. Assuming no more issues are found, we expect to launch the CPS no later than the 3rd week of February. We look forward to bringing this amazing product to the community.

## 4. ICON 2.0 Alphanet

ICON 2.0 Alphanet, the testnet that is powered by the alpha version of the ICON 2.0 implemented Goloop, is almost ready. Some features are still under development, but most of the key features including IISS 3.1, Node operating system, Staking and delegation system and others are already developed. ICON developers have started full testing and would like to have a 2 month testing period to make sure the stability of the software, so it is expected to be finished by the end of March. The timeline and details are subject to change depending on the testing results, however we are keen to keep this schedule.

Once we have the exact timeline, we’ll share it with the community with more details. More information related to the can be found [here](https://medium.com/helloiconworld/icon-2-0-introducing-a-new-blockchain-software-architecture-based-on-go-8874107a4e58).

Thank you,

ICON

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

