---
title: xCall Focus Testing Recap
date: 2023-07-03
description: On June 15th, we successfully concluded a closed test for xCall. Each participating team created testing dApps that executed transactions between xCall-connected chains ICON, Ethereum, BSC, and Havah. 
slug: xcall-focus-testing-recap
canonicalURL: "http://localhost:1313/blog/2023/xcall-focus-testing-recap/"
---

On June 15th, we successfully concluded a closed test for [xCall](https://icon.community/xcall/). Five teams were selected from the ICON community to participate based on their prior contributions to the ecosystem. Testing period lasted two weeks. 

Our main goals during this testing period were to stabilize the xCall product prior to a broader roll out and to identify key areas of improvement that would optimize a dApp developer’s experience with xCall.

In order to achieve these goals, each participating team created testing dApps that executed transactions between xCall-connected chains: ICON, Ethereum, BSC, and Havah. This recap outlines in detail the extensive feedback and data that we gathered from these teams after testing.

<span style="font-size: 18px;">Thank you to all the teams that made the xCall focus testing a success. </span>

## Table of Contents
- [What is xCall: A Cross Chain Aggregator](#what-is-xcall-a-cross-chain-aggregator)
- [Why xCall?](#why-xcall)
- [xCall Focus Testing: Scope](#xcall-focus-testing-scope)
- [xCall Focus Testing: Key Results](#xcall-focus-testing-key-results)
    - [Code Outputs Per Team](#code-outputs-per-team)
    - [Issues and Discussions](#issues-and-discussions)
    - [Initial cost estimates of sending messages with xCall over BTP](#initial-cost-estimates-of-sending-messages-with-xcall-over-btp)
    - [Initial time estimates of sending messages with xCall over BTP](#initial-time-estimates-of-sending-messages-with-xcall-over-btp)
- [What the Teams Are Saying About xCall](#what-the-teams-are-saying-about-xcall)
- [Takeaways and Next Steps](#takeaways-and-next-steps)
- [Public xCall Incentivized Testnet: Coming Soon](#public-xcall-incentivized-testnet-coming-soon)
- [Available xCall Resources (list still growing)](#available-xcall-resources-list-still-growing)


---

## What is xCall: A Cross Chain Aggregator  

xCall is a single standard for dApps to deploy cross chain messages across any interoperability solution available today. xCall is specifically designed to make it as easy as possible for a developer to add cross chain functionality to their dApps—with one line of code, a developer can execute messages across multiple protocols. As a result, developers can focus on building great services and leave the varying complications of executing cross chain transactions across different systems to xCall, which handles the specifics in the backend. Hence, our slogan for xCall:  

>"Write once, deploy everywhere"

---

## Why xCall?

xCall is not a bridge aggregator (i.e., [LiFi](https://li.fi/), [Socket](https://socket.tech/)) nor is it an interoperability protocol (i.e., [BTP](https://github.com/iconloop/btp2-testnet), [IBC](https://ibcprotocol.org/), [Wormhole](https://wormhole.com/)). xCall aggregates the features of all interoperability protocols through a single interface that standardizes cross chain messaging across the different protocols. Through such standardization, xCall is able to simplify cross chain dApp development for developers and to enable developers to leverage the unique strengths of the underlying interoperability protocols. 

An application of leveraging benefits of multiple interoperability protocols could be multi-protocol verification, which is sending a cross chain transaction over not one, but two or more underlying interoperability protocols to reduce risks associated with relying on just one protocol when sending assets cross chain. 

---

## xCall Focus Testing: Scope

Needless to say, we are very excited about bringing xCall to market and the focus test brought us one step closer to that goal. During the testing period, the following teams, 

- [Staky](https://twitter.com/staky_icon?s=20) (the team behind [Craft](https://craft.network/))
- [Hugobyte](https://twitter.com/hugobyte?s=20) (main contributors to [BTP](https://github.com/iconloop/btp2-testnet))
- [Venture23](https://twitter.com/Venture23xyz?s=20) (main contributors to [Balanced](https://balanced.network/) and team behind [Gangstaverse](https://twitter.com/GangstaVerse?s=20))
- [Protokol7](https://twitter.com/protokol7_com?s=20) (main contributors to various ICON projects, including a learning platform in the works called [Crypto Pandas](https://crypto-pandas.com/))
- [Paul Rouge](https://twitter.com/Paul__Rouge?s=20) (founder of [Blobble World](https://www.blobble.xyz/)) 

were tasked with creating simple testing dApps that would test the following features: 

- Single-hop
- Multi-hop
- Rollback
- One-way message, one-way response
- EVM-EVM
- EVM-JVM
- JVM-EVM
- JVM-JVM

Focus testers were asked to test their dApps by submitting a variety of transaction types, the most effective way of finding bugs or other issues. Sample transaction types include the following:

- Simple, ‘hello world’, one-way transactions
- Transactions with partially complete data, which should be compiled on the receiving end as the full data arrives via multiple messages
    - E.g. (1) “hello w”, (2) “orld”
- Transactions with a batch of messages
    - E.g. (1) [“hello world 1”, “hello world 2”, “hello world 3”]

Finally, testers were asked to check transactions for speed, cost, and accuracy. 

{{< img src="live-on-testnet.jpg" alt="Community Focus Testers" caption="Each participating team created testing dApps that executed transactions between xCall-connected chains: ICON, Ethereum, BSC, and Havah." >}}

---

## xCall Focus Testing: Key Results


At the end of the two-week testing period, the teams collectively produced: 

- over hundreds of test transactions
- 10 code repositories
- 4 team reports + one upcoming
- 12 Github Issues, all being actively triaged
- 5 Github Discussions

Below are links to each team’s output, reported issues, and a summary of cost and time estimates using xCall over BTP:  

### Code Outputs Per Team

**Staky** 
- [Testing contracts](https://github.com/Staky-io/x-call-testing-contracts)
- [Testing front-end](https://github.com/Staky-io/x-call-test-frontend)
- [Testing scripts](https://github.com/Staky-io/xcall-testing-scripts)

**Hugobyte**
- https://github.com/HugoByte/btp-dapp-sample

**Venture23**
- https://github.com/naneey/Xcall-Dapp-sample-testing

**Protokol7** 
- https://github.com/R0bi7/xCall-testing-dApp (Typescript dApp for testing messaging)
- https://github.com/R0bi7/xCall-testing-EVM (Solidity Smart Contracts)
- https://github.com/R0bi7/xCall-testing-JVM (JAVA Smart Contracts)

**Paul Rouge**
- https://github.com/paulrouge/xcall-testing-evm (evm)
- https://github.com/paulrouge/icon-scripts (scripts)

### Issues and Discussions

- https://github.com/icon-project/btp2/issues 
- https://github.com/icon-project/btp2/discussions 

### Initial cost estimates of sending messages with xCall over BTP

The following [xCall transaction fees](https://github.com/iconloop/btp2-testnet/wiki/Fee-System) were approximated from testing by the Core Development team.

| Connection  | Fee in USD | Fee in ETH(wei) |
|-------------|------------|-----------------|
| ICON -> ETH2| 1.329043   | 706937800000000 |
| ETH2 -> ICON| 0.056664   | 30140466117021  |
| BSC -> ICON | 0.010569   | 5621579869681   |
| ICON -> BSC | 2.276340   | 1210818997872340|
| HAVAH -> ICON| 0.005054 | 2688242686170   |
| ICON -> HAVAH| 0.005054 | 2688242686170   |



If an xCall transaction includes a ‘rollback message’, which happens if there is an error on the destination chain, then the fees are expected to increase due to the secondary transaction on the source chain. 

### Initial time estimates of sending messages with xCall over BTP

Timing estimates for xCall using BTP depend on the time it takes for a chain to finalize a transaction. 

| Connection  | Tx Time    |
|-------------|------------|
| ICON -> ETH2| ~ 15 min   |
| ETH2 -> ICON| ~ 14 min   |
| BSC -> ICON | ~ 2 sec    |
| ICON -> BSC | ~ 2 min    |
| ETH2 -> BSC | ~ 15 min   |
| BSC -> ETH2 | ~ 45 min   |
| ICON -> HAVAH| ~ 2 sec   |
| HAVAH -> ICON| ~ 2 sec   |

---

{{< img src="community-testers.jpg" alt="Community Focus Testers" caption="Focus testers were asked to test their dApps by submitting a variety of transaction types, the most effective way of finding bugs or other issues." >}}

## What the Teams Are Saying About xCall

**Staky**
> “[T]hanks to this program we were able to make appropriate feedbacks to the ICON team to improve the overall experience for everyone.” - Staky on [@helloiconworld](https://twitter.com/helloiconworld/status/1669676333276999680?s=20)
- Positives
    - You can read the docs to find out how to use xCall. All of the steps are there
    - The team put together a demo app, which was used as the basis of this team’s dApp
- Room for improvement
    - Some of the documentation steps require careful reading. They should be made more clear
    - The demo dApp can be a bit complicated to set up. This too should be made simpler

**HugoByte**
> “Excited to witness xCall and its impact on the future!” - HugoByte on [@helloiconworld](https://twitter.com/helloiconworld/status/1675474492708245504?s=20)
- Positives
    - Enjoyed the challenging and interesting experience of testing xCall
    - Core development team was responsive and quickly fixed many of the issues raised by this team
- Room for improvement
    - More documentation on setting up local environment for testing could have been useful



**Venture23**
> “It felt as if I had conjured a portal to another world” - Venture23 on [@helloiconworld](https://twitter.com/helloiconworld/status/1673662604219121666?s=20)
- Positives
    - Deploying the dapp in a local environment was straightforward
- Room for improvement
    - Confusing to recognize when transactions failed
    - Test examples could have better documentation
    - Long finality time of Ethereum chain means that messages involving that chain will take time to be delivered



**Protokol7**
> “[C]ore team did an amazing job preparing docs and base demo app, equipping us with the necessary information right from the beginning” - Protokol7 on [@helloiconworld](https://twitter.com/helloiconworld/status/1668589106627235840?s=20)
- Positives
    - There was plenty of documentation to get started experimenting with xCall
    - Core team was highly responsive during testing 
- Room for improvement
    - It is important to have more documentation, demos, and experienced developers in this area to jumpstart the xCall ecosystem



**Paul Rouge**
> “Now to delve into testing and exploring the intricate aspects of xCall” - Paul Rouge on [@helloiconworld](https://twitter.com/helloiconworld/status/1666958338012360705?s=20)
- Positives
    - Was happy to see xCall as a near completed product ready to build dApps
    - The security benefits of the rollback feature was quite interesting 
- Room for improvement 
    - Difficult to understand the state of transactions, especially in the case of transaction failure
    - Easier access to testnet tokens for BSC 

---

## Takeaways and Next Steps

Based on the detailed feedback provided by each team, here are a list of priorities that we will be implementing through the triage period before launching an incentivized testnet for a broader audience: 
- Improve README in example repository setup documentations so that all setup information is available in one place
- Improve availability of resources related to event logging of connected chains, including tutorials and improved documentations for how to create and check the status of an xCall transaction
- Provide better resources describing the path of the transaction through xCall and through xCall + BTP, including information about timing and fees of connected networks
- Make sure relayer status is available
- Make docker image for relayer
- Maximize availability of test BNB and test ETH for developers

## Public xCall Incentivized Testnet: Coming Soon

A Notion page detailing guidelines and challenges for the public xCall incentivized testnet program will be released soon. The public incentivized testnet program is scheduled to launch on July 31st. 

## Available xCall Resources

For those who would like to experiment with xCall and create their own cross chain dApps, here is a compilation of useful guides: 

- xCall documentation: https://docs.icon.community/cross-chain-communication/xcall 
- What is xCall (high level): https://icon.community/xcall 
- Awesome ICON : https://github.com/icon-community/awesome-icon#interoperability 
- Example xCall dApp : https://github.com/icon-project/btp2/tree/main/e2edemo 
- Another example xCall dApp : https://github.com/R0bi7/xCall-testing-dApp , https://github.com/R0bi7/xCall-testing-JVM , https://github.com/R0bi7/xCall-testing-EVM 
- xCall contract finder : https://github.com/FidelVe/btp-contracts-finder 
- xCall fee system : https://github.com/iconloop/btp2-testnet/wiki/Fee-System 
- BTP relay status : https://github.com/iconloop/btp2-testnet/wiki/BTP2-WIKI 
- BTP/xCall solidity package : https://www.npmjs.com/package/@iconfoundation/btp2-solidity-library 
- BTP ICON improvement proposal : https://github.com/icon-project/IIPs/blob/master/IIPS/iip-25.md 
- xCall ICON improvement proposal : https://github.com/icon-project/IIPs/blob/master/IIPS/iip-52.md 

Keep in mind that xCall is an evolving product. If you encounter issues during testing, you can reach out for support troubleshooting by joining the ICON’s developer community on the [ICON Discord](https://discord.gg/ZmxwmpXM). Happy testing! 