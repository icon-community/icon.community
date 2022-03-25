---
title: "LFT2 Consensus Algorithm"
date: 2020-04-09
slug: lft2-consensus-algorithm-5ee4322b2fd4
description: LFT2 is based on the PBFT consensus model, with a proprietary algorithm to emerge commit messages into a 2-step consensus process.
---

LFT2 is based on the PBFT consensus model, with a proprietary algorithm to emerge commit messages into a 2-step consensus process. This alleviates communication overhead and complexity of PBFT’s 3-step consensus process, leading to a lightweight and highly performant blockchain consensus algorithm.

Additionally, LFT2 guarantees safety and liveness even under a simplified scheme, by incorporating a Candidate/Commit Block mechanism to resolve any potential security issues that could be raised in a partially synchronous network. In short, LFT2 is a revolutionized PBFT implementation that enjoys the same benefits with reduced complexity and enhanced performance in network latency, block confirmation, and transaction throughput.

LFT2 has recently been audited by KAIST, one of the leading research universities in South Korea [[audit report](https://arxiv.org/pdf/2004.04294.pdf)]. For more information, please check the [[LFT2 whitepaper](https://github.com/icon-project/LFT2/blob/master/Whitepaper%20-%20LFT2%20%28ENG%29.pdf)].

## **Different PBFT implementations**

PBFT can be considered as an academic prototype, designed in theory for practical applications but needs some key optimizations to implement the algorithm into real-world software. Popular products include [Tendermint](https://docs.tendermint.com/), which focuses on several key design decisions to make a full-fledged PBFT system. Examples include removal of the View-Change phase, making faulty leader replacement possible without additional process and gossip protocol to deliver constant size messages which do not depend on system size. In general, Tendermint is an implementation of PBFT that is suitable for blockchains, with a strong focus on faulty node accountability.

PBFT has a fundamental pitfall. It requires a large amount of message exchanges to reach consensus for a block. One of the ways to address efficiency issues is by reducing its complexity, without any compromise in security. We see efforts from other PBFT-based blockchain protocols such as Casper FFG, which tries to simplify message types from two (prepares and commits) to just one (votes).

ICON network aims to cater to smart contracts with complex business logic and cross-chain interoperability. To serve these purposes, a more optimized consensus algorithm becomes essential and that is the design goal for LFT2. Next, we’ll explore how LFT2 achieves this feat.

## **How LFT2 Works**

![](https://cdn-images-1.medium.com/max/800/0*DxY-xPc7KWdFY6XO)Figure 1. LFT2 block consensus processAs seen in Figure 1, each consensus round consists of two steps: Propose and Vote. LFT2 confirms blocks in two rounds of the consensus process, and commits the block on the next block, i.e. block n+1 confirms and commits block n. Let’s dig deeper. But first, we need to be familiar with the terms below.

![](https://cdn-images-1.medium.com/max/800/1*JdMql8V6Qu_yqR4dvKIPrw.png)A leader node will propose a block (block n) and broadcasts the block to all validation nodes in the network. Each validation node will verify block n’s integrity and broadcast a voting message to all other nodes in the network. The leader node and validation nodes will execute transactions in the block to generate validation results at the same time.

If block n receives more than ⅔ of votes via the above process, the round is considered to be successful, and block n becomes a Candidate block. At this point, the block is not completely confirmed but has reached the quorum level.

The leader node for block n+1 will include the execution result of block n (Candidate block) and propose the block to all nodes in the network. After voting on block n+1 with a successful round, the state hash of block n will finally be confirmed and the block is turned to a Commit block. At this point, block confirmation is complete at the end of round 2 and block n+1 becomes the new Candidate block and a similar process continues.

![](https://cdn-images-1.medium.com/max/800/0*dtYymjbSzwxrr9qV)Figure 2. How previous state hash is stored in the next blockThe above figure demonstrates previous state hash being stored on the next block, and block 1 getting confirmed in block 2. This unique design of LFT2 of confirming previous block state hash in the next block under a deterministic virtual machine will yield faster block confirmation speed.

### **Performance Comparison**

![](https://cdn-images-1.medium.com/max/800/0*frKb98yFCmGgzL7W)Figure 3. Block confirmation time against transaction execution timeThe figure above illustrates block confirmation time against transaction execution time. The above graph is based on the assumption that both algorithms confirm on the next block. As seen in the graph, LFT2 can confirm blocks faster than PBFT throughout the chart.

![](https://cdn-images-1.medium.com/max/800/0*VpkiiT0sPyrT070P)Figure 4. Block Confirmation Time according to Network LatencyThe above graph shows how block confirmation time varies with different network latency settings. Generally speaking, LFT2 will perform even faster as network latency increases.

![](https://cdn-images-1.medium.com/max/800/0*SHiKkey1hu2IbmzS)Figure 5. Time to confirm n blocksThe above figure demonstrates time to confirm n blocks. As seen, LFT2 can confirm blocks at an increasing rate against PBFT as blocks to confirm increases. In real network environments, the gap is even greater as network latencies do occur (refer to the previous graph).

In mathematical terms, LFT2 broadcasts vote messages once in a single round, with a total of n+n² number of messages. PBFT broadcasts vote messages twice in a single round, resulting in n+2n² number of messages. The reduction in messages eases network burden which effectively reduces network latency as messages broadcast become less of a bottleneck.

### **Additional Information**

For additional information please check the [[LFT2 whitepape](https://github.com/icon-project/LFT2/blob/master/Whitepaper%20-%20LFT2%20%28ENG%29.pdf)r]. LFT2 is implemented as a library that can be used in any applications or blockchain systems. The code is open-sourced at [[ICON Project Github](https://github.com/icon-project/LFT2)]. ICON network will be upgrading to LFT2 in the future, stay tuned.

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

