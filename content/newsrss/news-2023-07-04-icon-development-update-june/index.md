---
title: ICON Development Update – June 2023
date: 2023-07-04
description: During the month of June, our dedicated team provided ample support for our focus testers as they began experimenting with BTP and xCall. As we move forward into this month, we are ready to deploy numerous fixes and optimizations meticulously crafted for all contracts.
slug: icon-development-update-june-2023
---

During the month of June, our dedicated team provided ample support for our focus testers as they began experimenting with BTP and xCall. This immersive process yielded a wealth of valuable feedback and insightful tips, which we have eagerly absorbed and begun addressing. The areas of improvement span across documentation, environment setup, bug detection, and several other key aspects that are detailed comprehensively in this [announcement](https://icon.community/blog/2023/xcall-focus-testing-recap/) 

As we move forward into this month, we are ready to deploy numerous fixes and optimizations meticulously crafted for all contracts. Our main goal is to achieve optimal functionality and a smooth user experience in anticipation of the upcoming Testnet Incentivization Program.

---

## xCall Architecture / Product

This past month, we successfully conducted end-to-end testing on ICON and BSC testnets and initiated the BSC Plato upgrade, among other tasks. Focus testing was also completed, leading to bug identification and fixes. As we proceed into the next month, our priority will be implementing these fixes and continuing work on trustless bridging between the BSC testnet and ICON, due mid-July. We're also set to upgrade our Solidity contracts, launch our testnet incentivisation program, and deploy updates to Havah BTP integration.

### Last Month

- [BTP blocks testing](https://www.notion.so/dd55ff14b0dc46e28feecc9bebbb187b?pvs=21) on Berlin testnet - ongoing/ monitoring
- [End to end testing](https://www.notion.so/10fc5892f3e8497493a02ad2ff32e909?pvs=21) on ICON (berlin) & BSC testnet -Done
- [End to end testing for ICON Berlin testnet & ETH Sepolia testnet](https://www.notion.so/fe184f9a2f244a70af320b211bf1cbaf?pvs=21) - Done
- Ongoing BSC and ETH relay testing and debugging
- Ongoing BSC and ETH BMV testing and debugging
- Ongoing Relay refactoring
- Ongoing focus testing comprised of ecosystem builders - Done
- Identify bugs that come through from Focus testing members - Done
- Commence working on the BSC plato upgrade. - Ongoing.
- Keep planning out the testnet incentivisation program - Done

### Next Month

- Implement fixes that have been worked on after focus testing has been completed
- Continue working on enabling [trustless bridging BSC testnet to ICON](https://www.notion.so/5ee229d9017746c5b5ec1d0fc07321c6?pvs=21) - to be completed mid July
- Update all Solidity contracts so that they can be upgradable.
- Keep working on the BSC plato upgrade.
- Launch testnet incentivisation program - (seperate announcement will be released on this)
- Build BTP network status dashboard
- Deploying updates to Havah BTP integration.

{{< img src="btp-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## xCall Integrations

The integration of IBC with ICON to Archway is progressing smoothly and efficiently. We're delighted to announce that integration testing has been successfully completed, and our dedicated team is currently in the midst of conducting end-to-end testing. As of now, all testing operations are confined to local instances. However, we anticipate soon expanding these operations to include the deployment on Berlin and Archway testnets, with more comprehensive testing to follow.

We are tirelessly working towards an official testnet deployment scheduled for the 14th of August, 2023. Audit processes are expected to commence shortly after this milestone. Please note, our timeline is subject to change, and if any alterations arise, we will keep our community updated. 

Milestone boards for both IBC and BTP integrations are published here:

- [IBC Integrations Milestones](https://www.notion.so/66221606c1464911be07c4ae73813578?pvs=21).
- [BTP Integrations Milestones](https://www.notion.so/78dbe0023a0144ba9c53db9558ac7cf5?pvs=21)

{{< img src="icon-ibc-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## ICON Blockchain

### Last Month

- Continued ICON Validator Support Program
- Released Goloop v1.3.7 on Mainnet
- Improved JSON RPC call method to covert parameters before making a request
- Designed and documented IISS 4.0
    - Completed mapping out functional specifications
    - Finalized implementation methods for the following features: Minimum wage distribution method, Jailing feature for missed network proposal, Double-vote preventing feature
- Fixed storing wallet function
- Resolved ICON Mainnet Singapore region citizen crash issue by applying empty string as metric method
- Released Goloop v1.3.7-hotfix
- Applied Revision 21 on Lisbon and Mainnet
    - https://lisbon.tracker.solidwallet.io/proposal/0xab2778369db8648ff6b167bcc01df7b7b478a880f1bc9dbe3a9804ad1cbcab21
    - https://tracker.icon.community/proposal/0x790c8c55632d527d10c1607973d75bc80bd30411021ae576d3bb5502900b57ed
- Fixed RPC getPrep issue on the Tracker and updated Github link in the footer to point to the source code

### Next Month

- Continuing the ICON Validator Support Program
- Goloop v1.3.8 release to address a bug identified in Immunefi bug report #21183
- Improving communication flow between ICON and Validators to enable a quicker response to potential security breaches 
- Sejong testnet shutdown
- Implementation of IISS 4.0