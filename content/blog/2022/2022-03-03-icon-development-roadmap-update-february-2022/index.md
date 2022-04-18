---
title: ICON Development Roadmap Update – February 2022
subtitle: Check out the latest updates on ICON 2.0 and BTP development.
date: 2022-03-03
slug: icon-development-roadmap-update-february-2022-a31844765b6
description: Read more about progress on ICON 2.0 and BTP from February.
---

As part of January’s development roadmap update, we mentioned some ICON 2.0 revisions and upgrades that were progressing through the Berlin and Lisbon testnets.

We are excited to announce that this process is complete; by the middle of February, the updated version of ICON 2.0 had been deployed to the Berlin, Lisbon, and Sejong testnets. In some cases, bugs and other issues were detected but ultimately resolved.

The latest package (v1.2.3) has been released to the ICON MainNet, and all main P-Reps completed their node update, along with the Top 10 sub P-Reps.

The formal P-rep vote for Revision 17 has been passed and approved. This means that ICON 2.2 will be close to being implemented and complete. Two more steps need to occur before ICON 2.2 can be considered finalized:

* Review & Debugging Governance SCORE 2.0 Java version
* Change owner from built in owner to Gov SCORE itself

Here is a partial list of the features that Revision 17 will implement and enable:

* Expand the number of P-Reps from 22 to 25
* Allow change of ownership of an existing SCORE

Once the final changes get implemented to finalize ICON 2.2, these additional features of Revision 17 will be available:

* Network SCORE management: This means P-Reps will own the Network Score, rather than an individual address. This group-owned Score will distribute rewards related to CPS and Relays. So far, Foundation uses a specific address to distribute rewards (which is a manual job), but this Network Score will automate that process.
* Implements funding of CPS via inflation, as outlined in IISS 3.1
* Implements a penalty for missed Network Proposal vote
* Implements a Network Proposal Submission Fee: All P-Reps in the validator set can submit Network Proposals with a 100 ICX submission fee

To learn more about these changes, and to see the complete list, [click here](https://iconfoundation.notion.site/ICON-2-0-Roadmap-064c2ee577714c58b487a76c7f3998ff).

Meanwhile, ICONLOOP has decided to delay converting the Governance SCORE 2.0 into Java, as there is more review & debugging work to be completed.

As we look forward to March, the completion of ICON 2.2 enables a shifting of internal resources away from ICON 2.0 and toward BTP. Moving forward, the focus will be on designing the improved architecture of the next BTP iteration.

In addition, effort will also be put toward some updates to the ICONex Chrome Extension, including resolving an unstaking and unbonding display problem and adjusting the step price. While the ICONex mobile versions have been deprecated, updates such as these will continue for the Chrome extension.

## BTP

Since last month’s update, we’ve been able to make substantial progress regarding BTP’s development.

As we’ve alluded to in the past and more thoroughly explained in a [prior announcement](https://medium.com/helloiconworld/introducing-icon-bridge-f8d3f2d93bf8) this week, the version of BTP currently under development requires gas fees that far exceed what is reasonable. Accordingly, while we work to implement a fix to this issue, we have decided to take a phased approach to BTP and will be releasing a lite BTP called ICON Bridge.

Meanwhile, here’s a rundown of the progress we made with various integrations this past month, some of the challenges we’ve faced, and what we’re working on this month:

### BNB Smart Chain

As we continue to await the SHA3–256 hard fork requirement that is still [pending review](https://github.com/bnb-chain/bsc/pull/357#issuecomment-1033023851), we are working to integrate ICON Bridge with BSC, which will not require a hard fork. In the meantime, we will also be implementing the ICON Bridge on BSC as our primary focus for March. The tasks we aim to complete include:

* Moving the on-chain state validation done by the BMV to the singular ICON Relay
* Refactoring the BMC to support this Relay
* Refactoring the block updates logic to only relay BTP messages
* Removing rotation logic from the BMR that is used to support multiple relays.

### Moonriver

As part of the Moonriver integration process, we collected a gas cost estimate. This is what alerted us to the issue of high gas fees. Accordingly, we will be working on implementing and launching the ICON Bridge while our team works to tackle the high gas fee issue. After the effort to integrate into ICON Bridge on BSC is completed, we will do the same for Moonbeam.

### Harmony

We have started end-to-end testing of minting wrapped ONE on ICON locally. Harmony uses [Herumi’s BLS digital signatures library](https://github.com/herumi/bls) to sign and verify blocks. We worked with the Herumi developer to get a Java wrapper around the underlying C library. There are some JNI methods that the ICON blockchain does not currently support. Core ICON developers are working to support this.

### Algorand

We submitted [SHA3–256 pull request](https://github.com/algorand/go-algorand/pull/3544) to the go-algorand repository. Meanwhile, Algorand’s state proofs are still in development, which is necessary to support lite clients. Development of the Algorand BMV on ICON is dependent on state proofs. We are exploring an alternative temporary solution to relay Algorand state messages to ICON via a trusted oracle.

### Near Protocol

Completed functional testing and Bazel integration for BTP smart contract deployment on ICON and Near. Bazel integration took longer than expected due to issues with the BMR. We were not able to do end-to-end testing this month because of this. However, this month, we anticipate being able to conduct end-to-end testing of local and testnet token transfers of NEAR and ICX.