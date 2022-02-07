---
title: "ICON Development Roadmap Update — February 2021"
date: 2021-02-28
slug: icon-development-roadmap-update-february-2021-3b5897957094
description:
---

## ICON Development Roadmap Update — February 2021

![](https://cdn-images-1.medium.com/max/800/1*4unJ42-JPv2-A141CV5n5Q.png)Rosetta Implementation, Hotfix, Testnet, and CPS Launch

Greetings ICONists,

It was another busy month as the team continues to push forward with ICON 2.0 migration and improving the developer experience on the ICON network. We also continue to make preparations for BTP integration, and EVM compatibility. We hope to share more details on both very soon. It’s never been a better time to join the ICON ecosystem and if you’re interested in joining developer working groups please reach out.

## ICON Rosetta Implementation

ICON posted a reference implementation of the Rosetta specification for ICON blockchain on the Rosetta official forum for review by their team. A basic guide is provided here ([rosetta-icon/README.md](https://github.com/icon-project/rosetta-icon/blob/main/README.md)) and you can find details on the ICON API here (<https://www.icondev.io/docs/icon-json-rpc-v3>)

We look forward to feedback on this implementation. Please feel free to share it on this repository or in the thread below.

* Github repository of the implementation: <https://github.com/icon-project/rosetta-icon>
* Post on the forum: <https://community.rosetta-api.org/t/icon-rosetta-implementation/394>

If you would like to learn more about the Rosetta API, you can find out more information here. (<https://www.rosetta-api.org/>)

## Hotfix on the icon-service

We plan to release a hotfix in the next week to fix an issue with block syncing. After investigation, in a specific situation, it turned out that there is a misconnection between icon-service and the reward calculator. Below outlines the fix:

* Fixed the connection protocol between icon-service and reward calculator module
* Fixed the issue that iconservice was terminated when a query request came during node booting
* Added log measuring execution time of SCORE call

## Improving the Yeouido testnet and launching a new testnet

There have been concerns/issues regarding the stability of the Yeouido testnet. Therefore, we have upgraded the hardware spec of all nodes in Yeouido, and if Yeouido fails to produce a block, we have configured the node to be restarted automatically. In addition, we will measure the transaction execution time of each smart contract, and plan to establish a process that can temporarily freeze the smart contract if the execution time of a specific transaction becomes too long. Also, we plan to prepare another smart contract testnet for the same purpose as Yeouido in order to give the community more options. More details can be shared within 1~2 weeks, and we will share the progress on the [icondev telegram channel](https://t.me/icondevs).

As mentioned in the last roadmap update, we are releasing an alpha version implementation of Goloop’s public modules in late March, which will provide an ICON 2.0 alpha testnet. Once it is released, we will try to discontinue operating the current ICON 1.0 testnets, and will put a policy in place to allow the community to test the Python SCORE and Java SCORE through the ICON 2.0 Alpha Testnet.

More detailed information will be shared in the March Roadmap Update.

## Contribution Proposal System

This past week, ICON and the iBriz-ICONOsphere P-Rep team announced the release of the [Contribution Proposal System](https://cps.icon.community/). We believe this release brings us one step closer to realizing the vision of the ICON Network, where network resources are allocated to specific contributions to grow the ICON Ecosystem.

A detailed walkthrough of how to use the CPS, as both an ICONist and a P-Rep, can be found [here](https://medium.com/ibriz-iconosphere/how-to-use-the-contribution-proposal-system-1efe714c9182). You can also ask questions in the icon.community telegram room if you are having trouble.Please direct any feedback you may have to the iBriz-ICONOsphere team or a member of the ICON Team.

For this beta phase, ICON will be allocating its block rewards into the Contribution Proposal Fund on a regular basis. The CPS will have initial funding of 250,000 ICX but will continue receiving block rewards from the ICON Foundation until ICON 2.0. After migrating to [ICON 2.0](https://medium.com/helloiconworld/icon-2-0-introducing-a-new-blockchain-software-architecture-based-on-go-8874107a4e58), the CPS will be funded directly through network inflation.

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

