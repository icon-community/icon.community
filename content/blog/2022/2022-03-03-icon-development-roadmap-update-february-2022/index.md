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