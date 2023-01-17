---
title: "What is Zero Knowledge Protocol ?"
date: 2023-01-17
slug: zkp
description: A new paradigm for privacy, security and trust in blockchain world 
---

## Year In Review
2022 was without a doubt a defining year for cryptocurrencies and other crypto assets. As the “crypto winter” engulfed the space, the price plummeted and valuations plunged causing several high-profile crypto bankruptcies. The year was also marked by several high profile hacks in the crypto space, with cybercriminals stealing over $3 billion, with $718 billion stolen in October 2022 alone [1]. The chart[2] below from Bloomberg shows the timeline of the major crypto events together with the market capitalization.

![alt text for screen readers](./featured.jpg "Text to show on mouseover")

## ZK in 2022
But 2022 was also a busy year for the whole industry, including Ethereum’s merge, Bitcoin’s Taproot Upgrade, etc but it must have been a breakout year for Zero Knowledge Proof. More than $725M was invested in the technology for various projects, including Aleo 200M, Aztec 100M, Stakware 100M, MINA Foundation 92M and Scroll 30M. Moreover, a lot of existing projects also pledged funds to stir the development to stir the ZK applications in their respective ecosystems. [Polkadot, NEAR, ]. Coalition of different projects also put together the ZPrize Initiative with $7M in prizes.

Other than an increase in the community’s interest in this domain, prominent publications in the domain also appeared to be increasingly interested in it in 2022. In the case of Decrypt, it only published 18 articles in 2021 that used the term "Zero Knowledge Proofs," but by 2022, there were a total of 60. Coindesk followed suit, producing 81 articles in 2022, up 54 from the previous year.

## So, what is ZK ?
In cryptography, a zero-knowledge protocol is a method of proving that a statement is true, without revealing any further information about the statement. For example: a statement can be “I meet the age requirement to cast vote”, the prover can be an eligible voter who wants to prove the statement without disclosing his age, the verifier could be an administrator who needs to verify that all voters meet the age requirement. Using the ZK Protocol, the eligible voter will be able to prove his statement in zero knowledge.

Some more examples:

1. A user can pay his taxes without revealing his earning details
2. A user can login to a remote server without revealing his identity
3. A business can prove a statement about its holdings without revealing sensitive details
4. A user can request other users to perform a heavy computation and check that these users computed the task correctly

## What does it mean for blockchains ?
Though zero-knowledge proofs first appeared decades ago, the surge in their popularity over this decade is due to their promise in resolving some inherent problems within blockchain technology. Some of the fundamental ways this is achieved are as given below.

1. ZK For Privacy: 

    Blockchain transactions are public by design, so sender and recipient addresses as well as the transferred amount will be visible to anyone. It will also be possible to trace a user’s entire transaction history if his account address is known. Using a decentralized app like zcash, a user will be able to generate a proof showing that he has sufficient balance to execute the transaction without revealing transaction details.

2. ZK For Scalability:

    A decentralized application can require executing a complex set of steps on-chain which may end up costing a lot of gas. Executing the same transaction off-chain would be relatively much less costly. How zero knowledge protocol helps here is that a prover will run the computation off-chain and a verifier will verify that the computation was done correctly on-chain. 
    Here, we employ the succinctness property of a ZK protocol. What succinctness basically means, in this case, is that the verification of correct computation, which the verifier will have to do on-chain, will be much less costly than running the entire computation on-chain. This saving in computation done on-chain is what makes it possible to execute a large number of transactions on-chain.
    This can also be extended to the case where there are multiple provers collaborating to compute chunks of a single large computation. A verifier, here, will verify that these computations were done correctly and as such is able to offload a computation, which would have been less feasible for any single hardware to compute alone.

## Applications
Despite their enormous utility on blockchain systems, these ZK protocols actually predate blockchains and have had potential use cases on other systems as well. Following are some of its applications just to serve as a hint.
1. Games

    Lower gas cost and information hiding property unlocks a spectrum of applications that require a significantly larger number of interactions on top of complex application logic. With the added benefits inherent to a blockchain system, ZK makes possible a wide array of games, which would not have been possible on a centralized system or without the power of zk proofs.
2. Healthcare

    ZKP has the potential to revolutionize various industries such as healthcare, where patients can prove that they have a certain medical condition without revealing sensitive information to unauthorized parties. This could allow for better privacy protection and enable new forms of personalized healthcare.
3. E-Commerce

    In the field of e-commerce and supply chain, ZKP could enable consumers to verify the authenticity of goods without revealing information about the supplier or the goods itself. This could help combat issues such as counterfeit products and increase consumer trust in e-commerce platforms.
4. Government and Public Services

    In government and public services, ZKP could enable citizens to prove their identity and access services without revealing sensitive personal information. This could lead to more efficient and secure public services, and could also enable new forms of e-voting systems where voters can remain anonymous while still ensuring accurate vote counting and fraud detection.

## Recent Advances
With the potential areas where blockchain is applicable now known, it will help to understand recent advances in this proof system to be familiar with how far the technology has reached and where it’s header. Following are some recent advances in the field of zero-knowledge.

1. Succinct Blockchain

    A blockchain full node requires dedicated hardware to save historical blocks and perform computation on them. With a large number of transactions, it becomes expensive to save these blocks on a device, let alone on a smartphone. This reduces the possibility of having a larger number of participants in block consensus verification and impedes full decentralization. 

    How ZK protocols help with this is by aggregating proof of correct computation of each of these blocks into a single aggregated proof, which can be in the order of kilobytes. Should a smartphone or any relatively low resourced device want to participate in block verification, it will need to download a small aggregated proof, verify that this computation was done correctly and then proceed with further verification like any other nodes.
2. Minimal trust assumption

    A ZK Protocol requires a pre-processing stage, where some public parameters that are used by both provers and verifiers are generated. These parameters are called structured reference strings (SRS) and this pre-processing is called a trusted setup for ZK-SNARK protocols. Recent advances to universal and updateable SRS have made it such that a developer who wants to create his own proof system can use the existing pre-processing parameters.
3. Improved Tool Sets

    User friendly Domain Specific Languages (DSLs) like circom, zokrates, better circuit debugging tools, audited code base on cryptographic primitives, etc have made it much easier for a developer to pick and choose among different tools that he can use for his application at hand.
4. ZK EVMs

    To perform the on-chain computation written in smart contracts off-chain, one would have to rewrite the implementation in a different language. To ensure that the battle-tested, audited codes retain their value and the cost of introducing ZK solutions is low, we have ZK EVMs. These are virtual machines that execute smart contracts in a way that is compatible with zero knowledge computation.

## A Setback on Privacy
While there has been much progress towards ZK proof based system adoption, there has also been some setbacks. Anonymity property, while useful for a wide range of use cases, has also been attractive for money laundering. Bridge hacks have withdrawn the extracted token through anonymity providing decentralized app like tornado cash mixer. 

On August 8, 2022 U.S. Department of the Treasury’s Office of Foreign Assets Control (OFAC) sanctioned Tornado Cash citing its use in money laundering[3]. Although OFAC decided to enroute with the sanctions for all accounts interacting with Tornado Cash, there might have been better routes to regulatory solutions, some powered by ZKPs as explored [4]. While there are a lot of prying eyes on anonymous decentralized systems, it would bode well if we consider how infringement to privacy rights of individuals can be strengthened with ZK proofs. 

Despite such push backs citing illicit use of anonymous payments, we must consider fair criticisms when it’s there and take this as an opportunity to educate the parties involved and improve upon the current system architecture. 

## How things are changing for the better
The changes brought forth on cryptography and cryptocurrency systems through zero knowledge proofs can be listed as follows.
1. Assisted cryptography research

    Cryptography research, in general and not limited to zero-knowledge, has also received attention during this process, namely, Multi Party Computation, Functional Encryption, Fully Homomorphic Encryption (FHE). Each of these have their own merits and will serve to improve the overall system. 
2. Community Building

    ZK Research drove a teaching-learning community with ample resources on research publications, explainer & conference videos, podcasts, tutorials and reviews that are all made easily accessible and funds backing them for continued growth of the community.
3. Improved web2 solutions

    ZK R&D has made the protocol applicable on web2 solutions as well. For example, Signal Messaging Service makes use of zero knowledge proof to prove that a user is part of a group without revealing group details. 
4. Introduced dialogue on Privacy, Regulation & Decentralization
    - how personal user data on web2 based applications are susceptible to be misused and ways they can be secured
    - how laws can impede growth of privacy preserving systems and the need for solutions to preserve privacy while avoiding misuse from bad actors
5.  Building robust systems
    - Proof of reserves and solvency can help centralized exchange and other business build trust
    - Existing blockchain based solutions can be made more decentralized to lessen security risks of running low numbers of validator nodes. 

## Conclusion
Zero-knowledge proof brings forward a new notion; a new paradigm on the way we think about privacy, security, and trust in the digital world. It enables new forms of transparent and efficient systems where trust is established through mathematics rather than through centralized intermediaries; where sensitive information is kept private by default, and where individuals and businesses have more control over their personal data. 



## References

[1] https://fortune.com/crypto/2022/12/30/5-biggest-crypto-hacks-2022/

[2] https://www.bloomberg.com/graphics/2022-crypto-contagion-from-bitcoin-to-FTX/

[3] https://home.treasury.gov/news/press-releases/jy0916

[4] https://a16zcrypto.com/privacy-protecting-regulatory-solutions-using-zero-knowledge-proofs-full-paper/
