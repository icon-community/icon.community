---
title: "Blockchain Transmission Protocol (BTP) Explained"
date: 2020-05-28
slug: blockchain-transmission-protocol-btp-explained-c4d9927ad398
description: Hundreds of new projects are emerging every year, competing to become the de-facto blockchain and the future home of all dApps.
---

Hundreds of new projects are emerging every year, competing to become the de-facto blockchain and the future home of all dApps. Projects race to demonstrate themselves as being the best, promising immediate scalability, transaction throughput, or the economic value it’s going to create. Despite the claims being true or not, these developments have mostly been operating in silos. Consequently, the industry as a whole has evolved into a series of stand-alone and disconnected blockchains.

The ICON Network, since its inception, has set out on a mission to “hyperconnect the world”. This catchphrase refers to the feature “interoperability”, and the technology to enable this feature is called Blockchain Transmission Protocol (BTP). To realize blockchain’s full potential, we want distinct protocols to have compatible ways to interact and communicate with each other, and the ability to interoperate at the protocol level. We have not deviated from this goal, and today we present BTP.

## What is BTP?

BTP (Blockchain Transmission Protocol) is a standard that renders heterogeneous blockchains interoperable, including blockchains that entail completely different consensus models and algorithms. Here, we define interoperability as the ability to facilitate value transfer, service invocation, and data exchange. These siloed operating blockchains can securely anchor transactions through a universal standard as a trustless settlement layer.

From an application-level standpoint, a great use case would be token transfers between different blockchains. BTP facilitates such transfer directly through smart contracts, from one chain to another without using a central trading platform, at the protocol level.

Another practical example could be enabling data exchanges between ICONLOOP powered enterprise partners, such as MyID applications.

![](https://cdn-images-1.medium.com/max/800/0*7CG4aRsMVzQPFp_V)Figure 1. MyID application to communicate between chains through BTPRegistered personal DID (Decentralized ID) data in the MyID application is verified on the public ICON Network, which then allows its owner to exchange messages to a public or private network that is interlinked via BTP, without having to resubmit their DID document and public key to each chain.

![](https://cdn-images-1.medium.com/max/800/0*EJQLJ2_Hzve6qay-)Figure 2. Broof certificate issuanceAnother service on the public ICON network, Broof, which allows issuing and storing verified certificates on the blockchain. BTP can, for example, enable the automation of certificate issuance for a private chain. As illustrated in the above figure, issuance service is invoked to a Broof smart contract on the ICON Network through BTP.

## BTP Building Blocks

To reliably transmit data and preserve its integrity and validity, the sender and receiver must comply with the below BTP standards and functions, we formally define.

* **Message Specifications** — messages must include sender, recipient, service name, serial number, and service data.
* **Message Relayers**— The application to query and deliver BTP messages between blockchains. The relayer operations are independent of blockchains.
* **Message Verifiers** — Message verifiers act as validators for data collected from relayers.
* **Service Smart Contract** — Verified BTP messages are delivered to the Service Smart Contract so the transaction from the sender blockchain’s smart contract can be executed in the recipient blockchain’s smart contract.

## BTP Data Verification

Since BTP verifies external data using smart contracts, all verification procedures are transparently disclosed on the blockchain. This makes the code publicly available to be audited and verified by anyone. Also, under this architecture, building a BTP environment is as easy as deploying a smart contract.

## Interconnected Blockchains

BTP by itself connects two blockchains, but the connected blockchains can further connect to other blockchains, creating an interconnected and interoperable web of blockchains.

## Asynchronous Operations

In the event of temporary network failure, a relayer or sender blockchain may stop sending data. Under an asynchronous network, BTP messages can be restored and retransmitted after the network is restored, without any loss of data.

## Partial Participation

BTP has a flexible design, allowing blockchains that do not support smart contracts, to partially participate in BTP transactions. In such instances, the blockchain would participate as a sender blockchain only, and not as a receiving blockchain.

## Full Participation

To fully utilize BTP features, the sender blockchain must have block finality and the participating blockchains must support smart contract capability.

**Finality**— Sender blockchain must reach finality and transmit irreversible results to the recipient blockchain, which is then verified via the verifier smart contract.

**Smart Contract**— To enable a fully-fledged BTP, blockchains must implement the following components using smart contracts.

* BMC (BTP Message Center) to build BTP messages and pass to a Relay for message delivery,
* BMV (BTP Message Verifier) to verify and decode the message received from a Relay to BTP Messages, and
* BSH (BTP Service Handler) to deliver BTP messages to service smart contracts.

## BTP Message Delivery Flow Example

![](https://cdn-images-1.medium.com/max/800/0*RFb3GhP6Fo3An8ZD)Figure 3. BTP Message Delivery Flow ChartThe below is an illustrative scenario of a public chain application verifying the identity of a user held on a private chain.

1. Bob logs into a Ride Share app and this app requires verification of Bob’s myID identity information
2. When Bob logs in, the Ride Share app sends a transaction with Bob’s encrypted identity information to BSH\_A on the public chain.
3. BSH\_A sends a service message to BMC\_A on the public chain requesting verification of encrypted identity information provided by Bob
4. BTP Message Relay detects the event and gathers Bob’s encrypted identity information
5. BMC\_B on the private myID chain receives the request to verify Bob’s information
6. BMV\_B on the private myID chain decodes the encrypted information to verify Bob’s identity
7. BSH\_B on the private myID chain replies to BMC\_B with the results of Bob’s identity-check
8. BMC\_B communicates these results to the BTP Message Relay
9. The BTP Message Relay passes the results back to BMC\_A

This is just one simple use-case. But as we mentioned previously, BTP is flexible and can be expanded for many use-cases.

## Additional Information

BTP 0.5 Proof of Concept is available on the [ICON Github Page](https://github.com/icon-project/icon-btp-0.5-PoC). For more detailed information and specifications please refer to the BTP proposal under [ICON Improvement Proposal (IIP)](https://github.com/icon-project/IIPs/blob/master/IIPS/iip-25.md). BTP 1.0 is currently pending review before final acceptance. To discuss the ICON BTP Standard, you can comment on the ICON Project Github Repository.

Thank you,

Hyperconnect the World

ICON Foundation

Homepage : [https://icon.foundation](https://icon.foundation/)

Medium (ENG) : <https://medium.com/helloiconworld>

Brunch (KOR) : <https://brunch.co.kr/@helloiconworld>

KakaoTalk (KOR) : <https://open.kakao.com/o/gMAFhdS>

Telegram (ENG) : <https://t.me/hello_iconworld>

Telegram (KOR) : <https://t.me/iconkorea>

Facebook : <https://www.facebook.com/helloicon/>

Reddit : <https://www.reddit.com/r/helloicon/>

