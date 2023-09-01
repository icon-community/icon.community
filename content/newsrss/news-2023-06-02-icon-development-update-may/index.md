---
title: ICON Development Update – May 2023
date: 2023-06-02
description: In May, testing efforts continues, resulting in the identification and resolution of numerous bugs. Additionally, all necessary updates for the BSC Luban upgrade were completed and deployed successfully!
slug: icon-development-update-May-2023
canonicalURL: "https://icon.community/blog/2023/icon-development-update-may-2023/"
---

In May, testing efforts continued, resulting in the identification and resolution of numerous bugs. Additionally, all necessary updates for the BSC Luban upgrade were completed and deployed successfully. This update provides details on the tasks accomplished in May and outlines the upcoming development milestones for June. Furthermore, dedicated monthly reports documenting the progress of xCall Service's IBC integrations are included and can be accessed further down.

---

## xCall Architecture / Product

The xCall teams have been focused on ongoing testing and debugging of the BSC and ETH relay and BMV components. They successfully enabled trustless bridging between ETH Sepolia and ICON and updated the relay and BMV to align with the BSC testnet's Luban update. They began focus testing with ecosystem builders, aiming to identify bugs and implement necessary fixes. The team also started planning for the BSC Plato upgrade and the testnet incentivization program.

### Last Month

- [BTP blocks testing](https://www.notion.so/dd55ff14b0dc46e28feecc9bebbb187b?pvs=21) on Berlin testnet - ongoing/ monitoring
- [End to end testing](https://www.notion.so/10fc5892f3e8497493a02ad2ff32e909?pvs=21) on ICON (berlin) & BSC testnet - ongoing
- [End to end testing for ICON Berlin testnet & ETH Sepolia testnet](https://www.notion.so/fe184f9a2f244a70af320b211bf1cbaf?pvs=21) - ongoing
- Ongoing BSC and ETH relay testing and debugging
- Ongoing BSC and ETH BMV testing and debugging
- Enabling [trustless bridging between ETH Sepolia to ICON](https://www.notion.so/fe184f9a2f244a70af320b211bf1cbaf?pvs=21) - Done
- Update relay and BMV with changes made to the BSC testnet via the [Luban](https://forum.bnbchain.org/t/bnb-smart-chain-testnet-luban-upgrade-announcement/1331) - Done
- Start testing with our focused testing group comprised of our ecosystem builders. - Planning done

### Next Month

- Continue working on enabling [trustless bridging BSC testnet to ICON](https://www.notion.so/5ee229d9017746c5b5ec1d0fc07321c6?pvs=21)
- Ongoing focus testing comprised of ecosystem builders - In progress
- Identify bugs and implement fixes that come through from Focus testing members
- Commence working on the BSC plato upgrade.
- Keep planning out the testnet incentivisation program

{{< img src="btp-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## xCall Integrations

The integration of xCall into IBC is making great progress. We are pleased to announce that all the IBC core contracts for both ICON and Archway have been successfully developed. Additionally, the relay component has been completed as well. Our team has been diligently conducting integration tests between these contracts and relays. Once this crucial step is finalized and any identified issues have been resolved, we will proceed with comprehensive end-to-end testing.

For more detailed information on the monthly progress of our IBC integrations, we invite you to explore our latest report available at the following link:
https://github.com/icon-project/grants-program/tree/main/progress-reports/ibc-integration

Milestone boards for both IBC and BTP integrations are published here:

- [IBC Integrations Milestones](https://www.notion.so/66221606c1464911be07c4ae73813578?pvs=21).
- [BTP Integrations Milestones](https://www.notion.so/78dbe0023a0144ba9c53db9558ac7cf5?pvs=21)

{{< img src="icon-ibc-notion-header.png" alt="xCall & IBC Integrations" caption="" >}}

------

## ICON Blockchain

### Last Month

- Ongoing ICON Validator Support Program
- Improved Goloop master branch code coverage: 44.81% (network: [75.86%](https://app.codecov.io/gh/icon-project/goloop/tree/master/network))
    - https://app.codecov.io/gh/icon-project/goloop/tree/master
- [IISS 4.0 text proposal](https://tracker.icon.community/proposal/0x52cc7f638c8adb596f192462f4d9781828185f471c83ecf54d1194b9e31e730d) by Lydia Labs submitted and passed
    - Commission system
    - Minimum Wage
    - Change the number of main/rotating validators
    - Validator Jail
    - Improvements to the validation penalty
    - Double-sign penalty
- Functional specifications for IISS 4.0 created for implementation stage
- Goloop v1.3.6 release to fix consensus issues, updated BerlinNet, SejongNet, LisbonNet
    - Canonicalized format to check for duplicate public keys
    - Support for retrieving compressed public key in SDK
    - Additional BLS12-381 curve operation APIs (#151)
    - Fixes failures in reading some keystore files
- Goloop v1.3.7 release, updated BerlinNet, SejongNet, LisbonNet
    - Implementing updates to the getPRepStats API
    - Resolving issues in metric collection from invalid JSON-RPC method
    - Correcting a bug affecting BTP message handling
    - Introducing a cast check in JSON-RPC parameter validation
    - Incorporating recovery logic into JSON-RPC batch processing
- Applied patches for RPC API crash bug
- Fixed Lint warning

### Next Month

- Goloop v1.3.7 release on Mainnet
- Continuing the ICON Validator Support Program
- Improving bug reporting process
- Improving code coverage
- IISS 4.0 (monetary policy) updates