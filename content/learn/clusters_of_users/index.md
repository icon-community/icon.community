---
title: "Clusters of users"
date: 2023-01-17
slug: clusters-of-users
description: When we throw around the phrase "building community", we should be sensible to the idea that this community represents more than a pool of dapp users and testers. What does a community look like?
author: venture-23
---

## What does a community look like ?
We've heard and mostly understood that blockchains are community driven. But what does  ~~Marsellus Wallace~~ this community look like? It's necessary to think about an answer to this question because it determines the nature of your target demography if you're building a decentralized app on a blockchain. Understanding the community will give answers to questions like the following -- for a certain dapp, how many unique users are there who could be interested, are there similar products that can co-exist and reinforce each other, how likely is it for users of other categories to try yours and as such how does it resonate with the ecosystem's direction.

## Is it clusters of users ?
To start, there are only a handful of product categories out there yet. Because of the restrictions in privacy and scalability aspects of blockchains today, developers have been [focusing on](https://youtu.be/DVj3uMwohSQ?t=289) low volume dapps. Numerous DeFi applications, an increasing number of on-chain games, marketplaces and social dapps to name a few of those [out there](https://dappradar.com/rankings). Among the dapps from these categories, we can check few basic metrics like the total number of daily active addresses, social media engagement, ongoing projects and so on. Additionally, checking the number of users that are common between an app and other apps of same and different categories will help divide the total user base by their degree of interest in the product and can also provide an entrypoint for understanding user behavior. For example, a DeFi user may not be all too interested in an open world game or a [secure chat application](https://github.com/njofce/zk-chat); a simple user may not find it necessary to transact through a privacy-friendly zero-knowledge applications like tornado-cash or zcash. However, a game that uses NFTs can share large chunk of user base with that of a marketplace dapp. 

## Let's take ICON for example
For additional examples, the total number of transactions on ICON Blockchain is roughly around 9 thousand on average per day when looked over the time range between Oct 1st, 2022 and Jan 31st, 2023. But so much of these transactions are triggered by some [noisy](https://tracker.icon.community/contract/cx9e3cadcc1a4be3323ea23371b84575abb32703ae) applications that do not really do anything useful. Instead if you look at the total number of unique users over this same period, there are around 4930 users. The table below summarizes the number of users that are common between different dapps. The diagonals, here, represent the total unique users for that dapp. For example, it can be seen that of the 184 unique users that transacted with ICON Bridge, 100 users also transacted with both ICON Bridge and Balanced. Some of the observations here are:
 - Most of bridge users use Balanced
 - Craft and Balanced drive a lot of users
 - A lot of Gangstabet users also use Craft Marketplace
 - A lot of OMM users also use Balanced

Needless to say, the data below will not be sufficient to draw any conclusion and is meant only as a guiding metric. The observations made above also seem rather obvious and something that may not even need data to prove it but what is intended to be known upon further inspection is answers to questions like the following:
 - Had most users used bridged assets on NFT Games and Marketplaces, would such information be relevant to identify which chain brings or can bring the most value from being integrated ?
 - ICON Bet has more number of mini products yet drives much less interest. Could integrating Gangstabet and ICONBet bring benefits to both?


| DAPP        | Balanced    | Craft       | OMM         | ICONBridge  | ICONBet     | GangstaBet   |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ------------ |
| Balanced    | 2158        | 561         | 801         | 100         | 80          | 362          |
| Craft       | 561         | 1891        | 305         | 54          | 44          | 428          |
| OMM         | 801         | 305         | 1268        | 51          | 39          | 227          |
| ICONBridge  | 100         | 54          | 51          | 184         | 14          | 27           |
| ICONBet     | 80          | 44          | 39          | 14          | 196         | 25           |
| GangstaBet  | 362         | 428         | 227         | 27          | 25          | 720          |

User addresses that transacted with the contract addresses given below were used to extract the information above. 
| DAPP       | ContractAddress | ContractName |
| ----------- | ----------- | ----------- |
| Balanced      | cx8dc674ce709c518bf1a6058a2722a59f94b6fb7f  | Balanced StakedLP  |
|               | cx203d9cd2a669be67177e997b8948ce2c35caffae  | Balanced Dividends  |
|               | cx66d4d90f5f113eba575bf793570135f9b10cece1  | Balanced Loans  |
|               | cxe0252e6c1fe4040412811d83d13979e335287e45  | Boosted Baln  |
|               | cx40d59439571299bca40362db2a7d8cae5b0b30b0  | Balanced Rebalancing  |
|               | cxa0af3165c08318e988cb30993b3048335b94af6c  | Balanced DEX  |
|               | cx21e94c08c03daee80c25d8ee3ea22a20786ec231  | Balanced Router  |
|               | cx10d59e8103ab44635190bd4139dbfd682fa2d07e  | Balanced Rewards  |
|               | cx44250a12074799e26fdeee75648ae47e2cc84219  | Balanced Governance  |
| Craft   | cx7ecb16e4c143b95e01d05933c17cb986cfe618e6    | CraftRewards   |
|         | cx9c4698411c6d9a780f605685153431dcda04609f    | CraftEscrow    |
|         | cx2d86ce51600803e187ce769129d1f6442bcefb5b    | CraftStaked    |
| OMM   | cx4f2d730ad969f5c839229de42184c5e47aefef6f  | OMM Reward distribution   |
|    | cxcb455f26a2c01c686fa7f30e1e3661642dd53c0d  | Omm Lending Pool   |
|    | cx841f29ec6ce98b527d49a275e87d427627f1afe5  | OMM Delegation   |
|    | cxeaff5a10cb72bf85965b8b4af3e708ab772b7921  | Boosted OMM Token   |
|    | cx8190de91c8831f382dcabdbc87968448380c4838  | Omm Governance Manager   |
|    | cx015c7f8884d43519aa2bcf634140bd7328730cb6  | Omm Staked Lp   |
| ICONBridge   | cxcef70e92b89f2d8191a0582de966280358713c32        | BTP TokenService       |
| ICONBet   | cxd47f7d943ad76a0403210501dab03d4daf1f6864   | ICONbet DAOblackjack   |
|    | cx6cdbc291c73faf79366d35b1491b89217fdc6638   | ICONbet WarGame   |
|    | cx38fd2687b202caf4bd1bda55223578f39dbb6561   | ICONbet Mini Roulette   |
|    | cxf17ab3c6daa47e915eab4292fbf3094067e9a026   | Spherebet World Cup 2022 Prediction   |
|    | cx9fda786d3e7965ed9dc01321c85026653d6a5ff4   | ICONbet Jungle Jackpot   |
|    | cx26b5b9990e78c6afe4f9d30776a43b1c19f7d85a   | ICONbet Sic bo   |
|    | cx1c06cf597921e343dfca2883f699265fbec4d578   | ICONbet Lottery   |
| GangstaBet | cx2dc662031f3d62bcdba4f63e9bf827767c847565 | GangstaBet Skill	|


So far we've talked about the way groups inside a community are clustered around the set of products they are interested in and how incorporating it to one's study can help a developer find the right product-market fit. 

## Why is more connectedness sometimes necessary?
With that being said, it should also be noted that if these user group clusters are separated so as to appear like separate silos of users on their own, the total value that the blockchain can extract from its community decreases. Having siloed user groups is equivalent to having a small community which developers can base their apps upon and as such is prone to scalability challenges. For a [two-sided platform](https://hbr.org/2019/01/why-some-platforms-thrive-and-others-dont) like blockchain that facilitates interaction between developers and users, this issue can be remarkable because it affects the network effect which the platform heavily relies upon. In other words, small userbase means developers are less attracted to build on platform; this in turn means less utility driven products that users can use which in turn alienates even more users to create an even smaller userbase. In such situation, the case made by blockchain interoperability to link blockchains and bring communities with similar interests together also makes sense.


In conclusion, when we throw around the phrase "building community", we should be sensible to the idea that this community represents more than a pool of dapp users and testers. Based on their values, the community is likely to take a form which builders need to inspect carefully to maximize the utlity of their product. 