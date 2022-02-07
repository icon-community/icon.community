---
title: "ICON 2.0 Alpha Version Released!"
date: 2021-04-15
slug: icon-2-0-alpha-version-released-89c8063ab1a1
description:
---

## ICON 2.0 Alpha Version Released!

![](https://cdn-images-1.medium.com/max/800/1*gaRkGDvX9D4LSWPDBEutlg.png)Sejong Testnet Launched with ICON 2.0 Features

Greetings ICONists,

We’re proud to announce that the alpha version of the ICON 2.0 implementation has been successfully released today. To fully test this implementation publicly, we launched a new testnet, Sejong, for the community so that everyone can see and experience ICON 2.0 through ICONex and ICON Tracker for Sejong.

Network information below:

* Network: <https://sejong.net.solidwallet.io>
* Tracker: <https://sejong.tracker.solidwallet.io>
* Nid: 0x53

Sejong is a testnet for testing core technologies, including IISS 3.1 features, Bonding features, P-Rep Slashing features, and such. This testnet will continue to be upgraded as new updates are released and could be reset or rolled back at any time without notice. The foundation will operate 22 P-Rep nodes for testing purposes at the start, and after that, we will set up an environment for the community to operate P-Rep nodes.

Since the alpha version of ICON 2.0 implementation is based on the Goloop implementation, basic core improvements that existed on the Goloop are supported. Additionally, this alpha version supports most of ICON 2.0 features so that users can test features. You can find new APIs supporting ICON 2.0 features here: <https://github.com/icon-project/goloop/blob/master/doc/iiss_extension.md>

### **Java SCORE Executor**

SCORE developers can write their programs using the Java programming language. SCOREs written in Java run on the Java virtual machine, thus SCOREs can be executed securely and stably without requiring an audit process, which has been a major pain point for developers on the current ICON mainnet. Since the alpha version supports staking and delegating features, SCOREs can do ICX staking and delegation via governance SCORE inter-call.

### **Object Merkle Patricia Tree**

Most Merkle tree implementations calculate hashes of stored data v adding an entry. And also they provide an interface to store bytes. Object Merkle Patricia Tree (OMPT) calculates hashes only when they’re required; until then it manages all data as immutable objects. With this scheme, it calculates the hashes at the end of the execution of all transactions in the block.

### **Performance Enhancements**

With the Python implementation, it’s hard to utilize multi-cores using multiple threads because of the global interpreter lock (GIL). Go provides goroutines to manage threads efficiently. Although the runtime supports garbage collection, it does not make any big response delay for collecting garbage. It reduces response time in handling most user requests and enables handling more user requests concurrently compared with Python implementations.

### **Fast Sync**

Normally nodes need to synchronize all of the historical blockchain data before joining the consensus or querying the last state. But most users are not interested in historical data. For those users, we are planning to support the Fast Sync feature. If it’s enabled, they can provide most services, except querying old transactions, in a short time. DApps using historical data do not use this feature. Representative nodes may use this feature for a fast start-up, but they need to synchronize all the historical data.

### **IISS 3.1**

This alpha version supports a new inflation allocating model based on the IISS 3.1 model. You can query the allocating ratio of each bucket. Currently, the alpha version doesn’t have the network proposal to set the total amount of network inflation and ratio of each basket, but we’ll add this soon. The current default iglobal values and basket ratios are below:

* iglobal: 5,000,000 ICX
* iprep: 50
* irelay: 0
* ivoter: 50
* icps: 0

More discussion associated with this topic can be found here: <https://forum.icon.community/t/iiss-3-1-structure/1309>

### **Bond Requirement, Bonded Delegation, and Bonding**

Based on the IISS 3.1 design, all P-Reps are required to stake a bond equivalent to 5% of the delegation received to maximize rewards.

The minimum bond requirement of 5% of the delegation received is intended to meaningfully lower the benefit of reward sharing while also requiring P-Reps to have “skin in the game”. Additionally, this bond will be used to pay burn penalties; voters will no longer be affected.

Ranking, rewards, and governance power will be based on “bonded delegation” rather than the number of votes received. Bonded delegation is equal to the number of bonded ICX divided by 5%. This system provides a way for P-Reps to ease into the bond requirement without needing the entire bond up-front. P-reps can earn and have access to their rewards but must post the entire bond to maximize their rewards.

### **Penalties**

New penalty systems to keep the network stable are applied on this alpha version. More details can be found here: <https://forum.icon.community/t/icon-2-0-penalty-system/1296>

Thank you,

ICON

\_\_\_\_\_\_

ICON official community

Homepage : <https://iconrepublic.org/>

Medium (ENG) : <https://medium.com/helloiconworld>

Brunch (KOR) : <https://brunch.co.kr/@helloiconworld>

KakaoTalk (KOR) : <https://open.kakao.com/o/gMAFhdS>

Telegram (ENG) : <https://t.me/hello_iconworld>

Telegram (KOR) : <https://t.me/iconkorea>

Facebook : <https://www.facebook.com/helloicon/>

Reddit : <https://www.reddit.com/r/helloicon/>

Twitter (Foundation) : <https://twitter.com/helloiconworld>

Contact : hello@icon.foundation

