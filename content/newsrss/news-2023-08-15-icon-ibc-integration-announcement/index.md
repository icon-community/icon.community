---
title: IBC Integration Announcement
date: 2023-08-15
description: With immense pride, we officially announce that we are now interconnected with the Archway and Neutron testnets via IBC!
slug: ibc-integration-announcement
canonicalURL: "https://icon.community/blog/2023/ibc-integration-announcement/"
---

To those who have been keenly tracking our monthly updates, today marks a pivotal moment in our journey. We are thrilled to officially communicate the progress of ICON's integration with IBC!

The complexity and size of this integration cannot be understated. The entirety of the IBC core needed to be translated into Java and Rust contracts, normally IBC is part of the core blockchain so we had to create those components as smart contracts. One of our most challenging tasks was the creation of the smart contract version of the Light clients. This was paramount in guaranteeing that no IBC chains would necessitate a hard fork. Producing Light clients as smart contracts, especially in two distinct languages – Java and Rust, was a big challenge that we have successfully overcome.
With immense pride, we officially announce that we are now interconnected with the Archway and Neutron testnets via IBC!

For a deeper dive:
* **IBC Integration Repository**: [IBC-Integration](https://github.com/icon-project/IBC-Integration)
* **Implementation of the Relay**: [ibc-relay](https://github.com/icon-project/ibc-relay)
* **Contract Addresses Reference**: [IBC-Integration-SCORE-Addresses](https://github.com/icon-project/IBC-Integration/wiki/IBC-Integration-Smart-Contract-Addresses)

Teams who are interested in utilizing the resources provided can find all necessary details in the mentioned repositories. A colossal amount of effort has been invested by Venture 23, and this wouldn't have been possible without the unwavering support from the ICON Foundation. Our commitment from January 2023 to commence this significant project has come to fruition.

## Next Steps:
We have initiated our internal audits. Upon completion, we will deploy the corresponding fixes and activate BTP blocks on the mainnet.
Subsequently, the IBC integration will transition to Mainnet.
In our forthcoming August development update, we aspire to share a definitive date for Archway's mainnet deployment, ensuring continuous communication with our community.
The horizon looks promising, and we are eager to navigate the exciting times ahead with all of you!
