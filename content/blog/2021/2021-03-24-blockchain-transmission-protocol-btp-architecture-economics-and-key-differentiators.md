---
title: "Blockchain Transmission Protocol (BTP) Architecture, Economics, and Key Differentiators"
date: 2021-03-24
slug: blockchain-transmission-protocol-btp-architecture-economics-and-key-differentiators-577eaf7ba3af
description: Latest technology advancements and details around the Blockchain Transmission Protocol (BTP)
---

We are excited to share the latest technology advancements and details around the Blockchain Transmission Protocol (BTP), ICON’s interoperability solution, with our community. This post covers the technical architecture, economic structure and key differentiators of BTP. Polkadot parachains will be used as an example throughout the post.

## Architecture

![](https://cdn-images-1.medium.com/max/800/1*CigI16wA5NqRjTlAHnW15Q.png)Components:

* Relay (BMR) — passes messages between Message Centers
* Message Center Contract (BMC) — Aggregates all BTP messages on a given network
* Verifier Contract (BMV) — verifies the messages sent to the Message Center by Relays
* Service Contract (BSH) — Holds application-specific logic (i.e. token transfer between networks vs NFT transfer between networks)

Information Flow:

The above diagram may be difficult to understand so here is an attempted simplification of Bob sending 100 ICX between two networks.

1. Bob sends 100 ICX to the Service Contract on ICON (BSH)
2. A small fee (1 ICX for this example) gets deducted from the 100 ICX and sent to the Fee Aggregation contract
3. The Service Contract locks the 99 ICX and sends a message to the Message Center on ICON (BMC)
4. The Relay (BMR) reads the message in the Message Center containing information that 99 ICX was locked in the Service Contract
5. The Relay sends the message to the Message Center on the parachain
6. The Message Center sends the message to the Verifier Contract (BMV) on the parachain
7. The Verifier contract either approves or rejects the message
8. Assuming the message is approved by the Verifier contract, the BMC will forward the approved message to the Service Contract on the parachain.
9. The Service Contract will mint 99 parachain-based wrapped ICX and send to Bob’s parachain wallet

BTP security relies entirely on smart contracts. It’s a set of 3 types of smart contracts on each connected network, with a Relay passing information between them. The security of the relayed information is therefore as secure as the two connected blockchains.

The key security checkpoint of BTP is the Verifier Contract (BMV). It verifies the signatures of validators and the consensus process of the source blockchain. In simple terms, the Verifier is able to verify, using cryptography, the validity of all data coming in from Relays. If a Relay lies (i.e. tries to steal coins), the Verifier won’t let it happen — the transaction will fail.

BTP Relays do not need to be trusted, ICON only needs to ensure liveness (BTP Network should always be online). Our plan is to launch with a centralized Relay set run by ICON to get an idea of costs and test the software. From there we will decentralize ownership of Relays using a Proof of Stake method detailed in the economics section.

## Economics

This is where it gets even more exciting for ICX holders. Other interoperability solutions hardly focus on this, and if they do, the economic value is only for large token holders. After a significant amount of internal discussion, we believe we’ve found an excellent solution to tie BTP activity directly to value for all ICX holders.

When somebody transfers tokens through BTP, there will be a 0.20% fee charged to the user and sent to the Fee Aggregation contract. There will also be a minimum fee to block spamming of small transactions. All fees will be aggregated into a smart contract and auctioned off to ICX holders. For other types of services besides transferring tokens (e.g. NFT transfer where a 0.20% fee can’t work), the Service Contract developer may use their own fee system. More details on how to develop your own service will be provided as BTP governance processes are ironed out. It will likely be an off-chain IIP process.

The end result of this process is discounted token purchases for ICX holders. For example, let’s say the Fee Aggregation contract holds 1 ETH from fees, and on the market it’s 900 ICX for 1 ETH. ICX holders can start placing bids for that 1 ETH, and maybe the winning bid will be 800 ICX for the 1 ETH. This creates value for ICX, as it will be a token used to purchase other tokens at a discount. And this will be for all assets connected to ICON through BTP.

The ICX proceeds earned from auctioning off fees will be sent to the [CPS](http://cps.icon.community) to be reinvested into the network. When the CPS hits its cap, additional contributions get burned. So BTP will either be adding resources to ICON growth initiatives or burning ICX. Sticking with the previous example, the 800 ICX winning bid for the 1 ETH would be sent to the CPS. If the CPS was already at its cap, then the 800 ICX would be burned. See below diagram for a better understanding of the architecture.

![](https://cdn-images-1.medium.com/max/800/0*q19_8Ix2N2zBrsIm)*Relays*

ICX holders may pre-register a Relay with a minimum stake of 25,000 ICX. The 25,000 ICX will be staked + delegated to avoid opportunity cost. The 25,000 ICX must be held and staked by the Relay, it’s not a DPoS system like P-Reps. The reward for running a Relay will come from inflation and the amount will be decided in the IISS 3.1 economics vote. Relays will be penalized from their staked ICX if they are not live when called upon to relay a message, so those that pre-register should be aware of this risk and pay close attention to BTP announcements to avoid loss of ICX. More details about how to pre-register a Relay will be released closer to ICON 2.0 launch.

## Key Differentiators

BTP is unique amongst existing interoperability solutions. Most solutions require some sort of game theory, slashing/penalties for validators, PBFT consensus, critical off-chain components or centralization.

The Verifier contract is the key differentiator of BTP. As mentioned earlier, other interoperability solutions rely on trusting the Relays or some sort of game theory, but BTP is secured entirely through cryptography. BTP is as secure with 1 Relay as it would be with 100 Relays. Extra Relays simply ensure more reliability and liveliness.

Additionally, BTP’s out-of-the-box infrastructure combined with a generalized architecture opens the door for simple integration by any 3rd party developer exploring unique use cases. Individual 3rd party developers do not need their own Relay networks, as the ICON Network provides that infrastructure and covers the costs. Developers simply need to build their own Service Contract (generalized architecture) to meet their needs, submit a Pull Request to get their Service Contract approved, then it will be serviced by ICON’s Relay Network and secured by BTP smart contracts.

And lastly, any network added to the BTP ecosystem becomes directly connected to all other networks in the ecosystem. There is no need to build bridges between all networks. Through inclusion in the BTP ecosystem, all chains are directly connected with one another.

We look forward to sharing more details on BTP Ecosystem growth. Stay tuned for future announcements as we continue our path to hyperconnect the world.

Thank you,  
The ICON Team

