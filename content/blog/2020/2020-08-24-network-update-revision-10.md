---
title: "Network Update: Revision 10"
date: 2020-08-24
slug: network-update-revision-10-b0ce0bd68cbe
description: Over the weekend, the ICON network experienced an attack by a malicious individual exploiting a vulnerability in the Multiple Unstaking Requests feature.
---

Dear ICON Community,

Over the weekend, the ICON network experienced an attack by a malicious individual exploiting a vulnerability in the Multiple Unstaking Requests feature. We would like to share a post-mortem on what happened in this post. **At this time, the situation is fully under control and no user funds were impacted.** It was imperative to wait until the vulnerability was fixed prior to sharing these details in order to prevent additional attacks.

The ICON Foundation proposed the Revision 9 Proposal two weeks ago and at block height 22,657,896 (UTC 2020–08–13 10:02:54), the Revision 9 update was activated with the Multiple Unstaking Requests feature.

At UTC 2020–08–22 18:00:06, a few community members alerted telegram admins of unusual activity with a specific user account. It was immediately escalated to ICON Team members and the investigation began.

The ICON Team, along with the help of dedicated community members and P-Reps, identified that the account was attacking the ICON Network using the ‘SetDelegate’ function to mint unauthorized ICX tokens. Realizing the potential severity of the situation, we quickly gathered all Main P-Reps to remain on standby for an emergency network update to remove the ‘SetDelegate’ function and blacklist the attacker’s accounts while we explored the root vulnerability the attacker was abusing. Exchanges were notified with specific accounts to freeze and to disable deposits and withdrawals while the patch was being developed. The network was then upgraded and the attacker was permanently stopped. The entire attack, coordination of a defense and development of a solution occurred over the course of approximately 11 hours.

The team worked tirelessly to successfully trace the funds and also track down the attacker. Thanks to the efforts of our exchange partners, P-Reps, and community members, **we were able to recover the majority of the stolen funds** and we know, with certainty, the identity of the attacker. Next steps and legal recourse are being reviewed by our attorneys. We are confident that we will be able to recover all the remaining stolen funds.

However, in order to counteract the ICX minted through this vulnerability and to provide our community the assurance that we will be able recover the remaining stolen funds, the ICON Foundation will be burning approximately 20 million ICX from ICAs (internally controlled addresses). We will provide an update with the transaction proving the ICX burn upon completion.

**Problem**

At UTC 2020–08–22 15:27:48 the [attacker](https://tracker.icon.foundation/addresstx/hx76dcc464a27d74ca7798dd789d2e1da8193219b4) found a vulnerability and created a ‘SetDelegation’ [transaction](https://tracker.icon.foundation/transaction/0xe9420e3c26b3ba1e0a8583dd8b49f807fd958413e69ffc3981be25ba3dd5b2a6) to generate 25,000 ICX.

Later, unauthorized ICX generated at UTC 2020–08–22 15:28:22 was [sent](https://tracker.icon.foundation/transaction/0xcc714a9648a91c1394be77b202f64f37ef5736c550ab360cddd657fde8a55ac1) to another account. After that, the attacker repeated the above actions to generate unauthorized ICX and sent it to dozens of other accounts.

The root cause of the problem was a vulnerability in the multiple unstaking periods feature. Given certain unlikely conditions, users were able to mint unauthorized ICX using the ‘SetDelegate’ function. The attacker found this vulnerability and exploited it for personal gain.

**Solution**

We’ve released a new hotfix and updated the network to Revision 10 to solve the root cause of the problem. The vulnerability has been fixed and this attack is no longer possible.

**Prevention**

Our team delayed the Revision 9 Proposal multiple times to extend the testing period. Unfortunately, that was not enough. We are currently exploring the best possible preventative measures for future attacks and vulnerabilities. It’s been less than 48 hours since the attack, hence we need more time to fully evaluate our internal and external processes. For example, we are considering more aggressive bug bounties and 3rd party audits. The ICON Foundation council members and leaders of the ICONLOOP development team are organizing an emergency meeting this week to further discuss preventative measures. Although we have not yet come to a specific plan for prevention, given that the situation is now fully under control, we wanted to share this story with our community as soon as possible.

Thank you,

The ICON team

