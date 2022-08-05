---
title: ICON Development Update – July 2022
date: 2022-08-05
description: In July, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge.
slug: icon-development-update-july-2022
---

In July, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge. In this article, we’ll share what we worked on in July, and what our core focuses will be for August.

## BTP Architecture

The majority of the core components have now been implemented and are undergoing integration testing. The integration testing process is where we first take all individual components and run them together. This is the stage that uncovers many bugs, with several already found and patched.

One notable discovery during testing was around BTP Blocks. In order to verify BTP Blocks on non-ICON networks, the other networks must be able to verify the address and signatures of ICON validators. Therefore, ICON validators must register a public key or address that is created using the hashing and verification functions of the destination chains in order to properly produce BTP Blocks. 

Since this is necessary to produce BTP Blocks, changes to IISS must be made to penalize ICON validators that don’t register. Otherwise this could halt BTP as BTP Blocks would not function properly. More information on this will be made available to ICON validators closer to launch, but it’s not expected to be much additional work, just an additional administrative task when adding new networks to BTP.

### Last 30 Days

* Implementation of Java and Solidity MVs for testing purposes has been completed
* The Message Verifier Whitelist has been implemented
* The changes to the Relay have been implemented
* Unit and integration testing framework has been completed
* Began integration testing
* Found several small bugs and fixed them
* Found one larger bug in the Relay message structure that is still being worked on, about 1-2 weeks of debugging for this

### Next 30 Days

* Begin development of the necessary IISS and Goloop changes to register validator addresses/public keys
* Begin researching and planning Relay Network economics and processes
* Begin working on a deployment plan to get more granular details on what is needed prior to main net launch
* Continue integration testing, develop new tests for edge cases
* Continue to fix bugs uncovered from integration testing
* Update the Solidity BMC for changes to Relay Message structure
* Begin implementation of xCall service (formerly Arbitrary Call Service) in Solidity
* Refactor the Github repository

## Interoperability Integrations

As mentioned last month, due to ongoing events with Harmony and the associated risks to users, we paused the launch of the Harmony integration on ICON Bridge despite having deployed all contracts on mainnet in June. With the launch postponed indefinitely, we shifted our focus to improve DevOps processes across all our in-flight integrations, which helped start our CI/CD (Continuous Integration/Continuous Development) framework for the month of July.

Lets break down what that means:

ICONLOOP performs research and development for BTP, and builds reference specifications and implementations with local ICON and Ethereum nodes. Independent contractors then take these references and build the chain integrations that make their way to mainnet.

Some of these integrations may work differently than the specification currently. Instead of verifying transactions on-chain in a decentralized way, some integrations may verify transactions off-chain in a centralized manner – this difference is what we call "ICON Bridge".

Currently, the Harmony, BSC, and NEAR integrations all are being developed as ICON Bridge solutions, which means they rely on centralized off-chain verification. This is a natural checkpoint on the way to developing the fully-decentralized BTP solution because the work involved with going from the ICON Bridge to BTP specifically means migrating from off-chain verification to on-chain verification.

The problem with having independent contractors building these chain integrations is that all of the work that each team does is siloed. This causes a lot of duplicate work because the steps needed to do an integration are mostly the same.

iBriz developed the Harmony integration that was utilized for Wonder Game's minting event. We planned to support Nexus as well with this integration, but put it on hold after the Horizon Bridge exploit on Harmony. Since then, all of the work that has been done has been for the purpose of 
**unifying a core group of contractors into a BTP Integrations Special Interest Group (SIG)
**. The main goal of the SIG is to standardize the ways of working, testing, and deploying BTP and ICON Bridge integrations.

We will post more information on how SIGs will function in the ecosystem ICON within the next few weeks. Keep an eye on the recently-launched [ICON Community GitHub organization](https://github.com/icon-project/community) for the latest information on the BTP Integrations SIG.

Moving forward, we will no longer provide regular updates on Harmony and Moonbeam. The BTP Integrations SIG still intends to integrate Moonbeam by the end of 2022, but it is a lower-priority integration as of right now. We are also continuing to monitor the Harmony situation, and will keep the community informed if we decide to move forward with the Harmony integration.

We still have independent development teams outside of the BTP integrations SIG that work on other chains. The team integrating Algorand is outside of this SIG. Over time, one of our goals is to be able to onboard and offboard contractors to the SIG in a smooth and easy process.

As a member of the ICON community, you can expect all of this to mean that communications and timelines will be more clear moving forward. The ICON Bridge code repository will remain closed source until the audit finishes, which is conservatively expected to happen sometime between 2022 Q4 and and 2023 Q1. Once this is done, we will fully launch and open source the ICON Bridge repository. At that point, everyone will have access to the same information that we have internally and there will be a single source of truth for the BTP Integrations SIG’s progress.

Until the audit finishes, **we consider the ICON Bridge to be in beta and recommend exercising caution when using it** because we cannot be confident about its stability or security until after the audit is done. There have been many security breaches in other bridges in the cryptocurrency industry within the past year. We intend to move slowly and carefully with this in mind. 

**You can expect the testnet version of Nexus with BSC integrations to be released in the coming week.** After one week on testnet, we will release the mainnet version of Nexus the following week if no major issues are discovered.

Please understand that upon release, Nexus will be in beta, and will remain so until the audit finishes.In the cryptocurrency industry, there have been many catastrophic hacks associated with bridges. The industry is still figuring out how to deal with cross-chain attack vectors. We recommend only using testnet until the ICON Bridge is fully audited. Even after that, it is advised to proceed with caution.

### CI/CD for BTP and ICON Bridge

With regard to our CI/CD processes, we will be focusing on two specific items in the short term:

1. Creating an end-to-end testing framework and automation.
2. Developing release management standards.

#### End-to-End Testing Framework

* Build out test cases to be used for end to end tests across any integration.
* Build out the automation of these test cases when new code is shipped.
* Record results everytime test has finished for traceability.

#### Release Management Standards

* Develop clear build standards with clear actions as to what triggers a build.
* Integrate automated end to end testing that kicks off nightly after a new build have been triggered.
* Design deployment process via Github Actions runners.
* Use Github Actions for versioning and automated tag bumping.

As we keep building out our CI/CD workflow, our delivery quality and pace will greatly improve and really enable use to onboard new chains to ICON Bridge and ensure no compromise in quality.

## Last 30 Days

### Algorand

We are developing the Message Verifier contracts on Algorand to verify ICON to Algorand messages. For Algorand to ICON, we are waiting on Algorand state proofs to be available.

* Investigate other Message Verifier contracts to understand all the necessary method calls to implement it.
* Compare those calls with the cost list on the Algorand platform, to gather an estimation of their sum.
* Access whether or not that sum would be to costly to implement on Teal contracts.
* Going through the current repo, to gather what we already have working and what needs to be added.
* Understanding how to deploy Algorand smart contracts from the outside relayer.
* Get the current test cases running and validate results.

### BNB Smart Chain

* Worked on CI/CD processes to streamline development.

### NEAR Protocol

* Added a NEAR module to the ICON Bridge relay.

## Next 30 Days

### Algorand

* Continue researching and developing Message Verifier contracts.
* Start working on integration state proofs to Message Verifier contracts if they become available on Algorand's side.

## BNB Smart Chain

* Keep working on CI/CD processes.
* Deploy BSC ICON Bridge integration to testnet in the first half of August, and make it available on the Nexus frontend. At that point, the BSC integration will be available for use on testnet.
* Deploy BSC ICON Bridge integration to mainnet one week after testnet if no major issues are spotted.
* Once the BSC integration has been released, we will start finalizing the codebase for a security audit.

### NEAR Protocol

We are refactoring the NEAR BTP integration to instead use the ICON Bridge so that all teams in the BTP Integrations SIG adopt the same code base. This amounts to moving message verification from on-chain to off-chain.

* Remove references to the Message Verifier from the Message Center.
* Implement message verification on the ICON Bridge relay.
* Merging Service Handlers for tokens and native coin into a unified Service Handler.

## ICON 2.0

In July, we fixed a few bugs relating to the Governance SCORE, and implemented a few fixes for ICON's Rosetta integration.

### Last 30 Days

* Passed Revision 19 proposal. Click [here](https://tracker.icon.foundation/proposal/0xce1cd28129fd6787b099baac5e18b0786a2bcab1a5c5b6eb4484073509176467) to view more information about Revision 19 on the ICON Tracker.
* Debugged Chain SCORE APIs.
* Updated the Governance SCORE to v2.1.2, which fixed an issue with voting lists not updating after quorum.
* Worked on fixing the engine of the ICON Rosetta implementation.

### Next 30 Days

* Prioritize development of ICON Light Node.
* Work on IISS update for registration of public keys for BTP Blocks feature.
* Begin design process for an IISS proposal that introduces a more effective reward/penalty system.
