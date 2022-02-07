---
title: "ICON 2.0: Introducing a new blockchain software architecture based on Go"
date: 2020-09-17
slug: icon-2-0-introducing-a-new-blockchain-software-architecture-based-on-go-8874107a4e58
description:
featured_image:
---

### ICON 2.0: Introducing a new blockchain software architecture based on Go

![](https://cdn-images-1.medium.com/max/800/1*GS4Drql9g7eIKrkhjlO7AA.png)Batang: The Foundation for the Future Growth of the ICON Network

Attention ICONists,

Our biggest secret is finally out. Today, we are excited to announce our next significant technical advancement — **ICON 2.0: BATANG, a new blockchain software architecture based on Go.** The word “Batang” means “base” or “foundation” in the Korean language and we see ICON 2.0 as the base or foundational technology that will support the future growth of the ICON network.

The current ICON mainnet, built entirely on Python, was our first raw attempt to create and experiment with a public blockchain network. We were proud that ICON became one of the top blockchain networks, but we knew we could do much better now with more experience under our belt. Therefore, about a year ago, ICON’s core developers started to completely redesign the existing loopchain’s architecture in an effort to prepare us for the future. Now, the ICON 2.0 is built and ready to go.

ICON 2.0 is a brand new software; a faster, more stable, and scalable high-performance blockchain that inherits the current ICON Network. We are completely overhauling the ICON mainnet that was launched in 2018. **ICON 2.0 will come standard with interoperability features to support and power cross-chain DeFi solutions.** At launch, the ICON Foundation will deploy all necessary smart contracts on high-profile blockchains and will also run the relayers.

ICON 2.0 uses an enhanced and completely rewritten blockchain engine: “Goloop”, providing an improved blockchain experience over the existing Python-based loopchain.

**Again, we would like to emphasize that goloop base modules for enterprises are completed. Some of ICONLOOP’s enterprise clients including Seoul Metropolitan Government are also preparing to use the new blockchain engine.** We are planning a smooth migration process and there should be no necessary actions to be taken by ICONists. We will share more details as the implementation plans roll out.

### New Features in ICON 2.0

One of the most exciting aspects of ICON 2.0 is it contains a large number of enhanced core features needed for our community, and an opportunity to redesign some of the current blockchain’s features. Here we will share all of the features and opportunities for ICON 2.0. Some of these features will be discussed on the forum amongst P-Reps to come to consensus on the finer details, and many of these features still require more research.

#### **Python SCORE Executor**

Python SCORE Executor provides a pure Python execution environment that will be operated in a separate process from the consensus engine. It can execute the already deployed Python SCOREs on the ICON network as it is. By separating the executor process from the consensus engine, we can handle infinite loop and instability issues of Python SCOREs.

#### **Java SCORE Executor**

Now SCORE developers can write their program using the Java programming language. SCOREs written in Java would run on the Java virtual machine, thus SCOREs can be executed securely and stably without requiring the audit process, which has been a major pain point for developers on the current ICON mainnet. Since Java SCOREs don’t require an audit, we’ll be encouraging future developers to use the Java SCOREs. Furthermore, Java SCOREs can be interoperable with the existing Python SCOREs through inter-SCORE calls, which makes for a smooth transition to the Java SCORE environment.

#### **New P2P protocol**

A new protocol to synchronize the state between nodes will be integrated. A new node uses both gossip and multicast protocol to deliver messages. This requires a structured network supported by community members. In most cases, messages are delivered through multicast protocol using redundant paths, but they use gossip protocol in some exceptional cases like discovering the last state, recovering missed messages, and so on.

#### **Fast Sync**

Normally nodes need to synchronize all of the historical blockchain data before joining the consensus or querying the last state. But most users are not interested in historical data. For those users, we are planning to support the Fast Sync feature. If it’s enabled, they can provide most services, except querying old transactions, in a fairly short time. DApps using historical data do not use this feature. Representative nodes may use this feature for a fast start-up, but they need to synchronize all the historical data.

#### **Object Merkle Patricia Tree**

Most merkle tree implementations calculate hashes of stored data at adding an entry. And also they provide just an interface to store bytes. Object Merkle Patricia Tree (OMPT) calculates hashes only when they’re required; until then it manages all data as immutable objects. With this scheme, it calculates the hashes at the end of the execution of all transactions in the block.

#### **Performance Enhancements**

With Python implementation, it’s hard to utilize multi-cores using multiple threads because of the global interpreter lock (GIL). Go provides goroutines to manage threads efficiently. Although the runtime supports garbage collection, it does not make any big response delay for collecting garbage. It reduces response time in handling most user requests and enables handling more user requests concurrently compared with Python implementations.

#### **BTP**

BTP is a general purpose interoperability protocol, however, it will come standard on ICON 2.0 with a specific initial use case in mind. We will be supporting interoperability with other public blockchains in order to support cross-chain DeFi solutions. At launch, the ICON Foundation will deploy all necessary smart contracts on high-profile blockchains and will also run the relayers, however, any individual or group may run a private relayer with their own fee system.

ICX holders will have the opportunity to pre-register a relayer in preparation for a decentralized relayer network. There will be a minimum ICX stake requirement to pre-register, and pre-registered relayers will earn any inflation allocated to relayers and the fees generated by cross-chain transactions based on the amount of ICX they have staked. The fees earned will be paid in the asset which was sent, meaning that if somebody sends ETH to the ICON blockchain, Relayers will earn ETH as fees.

#### **Vote Spreading**

Vote Spreading is a novel solution for systematically decentralizing a DPoS network, where inactive voters have their ICX spread to all top 100 P-Reps. This will solve the issue of vote stagnancy and allow active ICX holders to have the greatest impact on governance. Further details on vote spreading will be shared in a separate post and discussed on the forum.

#### **IISS 3.1**

ICON 2.0 gives us more freedom to design a cleaner and more easily understood economic design. The basic structure of IISS 3.1 follows the structure of IISS 3.0 already discussed in the community. However, the IISS 3.1 design simply divides inflation into a few different predefined categories. For example:

* P-Reps: 17.5%
* Relayers: 2.5%
* Contribution Proposal Fund: 10%
* Voters: 70%

ICON 2.0 will include a network proposal to allow P-Reps to easily adjust these inflation allocations using an on-chain and self-executing vote. More details regarding IISS 3.1 will be shared in a separate post and discussed on the forum.

#### **Multi-Channel Technology**

Multi-channel is a form of scalability, where each DApp on ICON could instead be an application specific channel (see Band Protocol and Kava for examples of application specific chains using the Cosmos SDK). Each channel is essentially its own blockchain, sparing DApp developers platform risk while making it easy to launch their own network. The technology behind channel chains is complete for ICON 2.0, however, additional work will need to be done to productize the software after the successful migration.

With this strategy in mind, we would like to turn the ICON Nexus (the primary network operated by P-Reps) into the security, immutability, and governance layer of the ICON Republic and encourage future DApps to launch application specific channels. In practice, this means increasing the main P-Rep set significantly to create more decentralization, more security, and more immutability. Channel chains would have fewer nodes in order to be more scalable, but would periodically backup their data on the ICON Nexus (secure, decentralized, immutable) using a BTP connection.

### Fully open source development process

In order to make the development process completely transparent, and to share all the progress with the community, we decided to share all the development processes on Github at the beginning.

**On this Github, you can see the source code of the next generation loopchain based on Go, called “Goloop”, which as mentioned, we’ve developed for over a year.** Any community member can verify the code and technology of the ICON team on this Github Repository. We are confident that this development direction will be helpful to the community to understand the structure of ICON 2.0 in the long term.

**Github Repository:**

<https://github.com/icon-project/goloop>

Currently, there are two branches in the repository. “master” is the development branch for ICON 2.0 and the “base” is the source code of goloop. Therefore, the updates only focused on the goloop base modules will be committed to the “base” branch, while the economics and governance logics focused updates are committed to the “master” branch.

More technical docs and info will be uploaded on Github soon.

### New development strategy focused on ICON 2.0

Since we are migrating to ICON 2.0, we have made the decision to save some portions of development for ICON 2.0 rather than duplicating work, introducing potential instability in ICON 1.0, and slowing down the entire migration process. You may have noticed there was not much conversation regarding upgrades to the network after IISS 3.0, and that is because we were discussing whether or not to migrate to ICON 2.0 or spend time enhancing the current ICON Network.

We have decided to implement only the Contribution Proposal System on the current ICON Network, but all other planned network enhancements will be saved for ICON 2.0. Additionally, instead of being funded by block rewards (because this creates significant extra work), ICON will be using a portion of our block rewards to fund the CPS while still keeping a portion to continue funding grants.

This is an exciting time to be an ICONist, and we look forward to your participation and feedback as we roll out ICON 2.0 and continue building one of the most advanced, decentralized blockchain networks in the world.

Thank you,

The ICON team

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

