---
title: "Path to Sustainable Economics"
date: 2020-05-26
slug: path-to-sustainable-economics-450be4137724
description:
featured_image:
---

### Path to Sustainable Economics: P-Rep Commission Rates

![](https://cdn-images-1.medium.com/max/800/0*yxiTQ4WEJP1LXizd)The Path to Sustainable Economics will serve as guidance for P-Reps and a starting point for making upgrades to the ICON Network. This post will cover a new understanding of i\_rep as the P-Rep Commission Rate. We appreciate all the feedback and effort from the community to help us improve on various aspects of our economic policies.

### Expressing i\_rep as the “P-Rep Commission Rate”

Other networks, such as [Cosmos](https://www.mintscan.io/validators) and [Tezos](https://mytezosbaker.com/), have the concept of a commission or fee charged by block validators. Block rewards are given directly to validators, then are passed on to voters after the validator takes their commission for the service provided (block validation and governance). Each Validator chooses their own commission rate, and the example below illustrates a Validator that charges a 15% commission.

![](https://cdn-images-1.medium.com/max/800/0*58aZKNNh7YF-VZww)The commission rate can also be understood as opportunity cost. Voters should ask themselves: “How much more money would I be making if I self-delegated to my own node instead of delegating to somebody else?” Voters often do not want to go through the effort of setting up their own node and self-delegating (or perhaps they don’t have enough tokens), and as a result, they sacrifice a portion of block rewards. If a Voter instead chose to set up their own node and self-delegate, they would no longer be paying a commission and therefore would no longer be experiencing opportunity cost.

The ICON Network is no different, and for that reason **i\_rep will soon be expressed as something more easily understandable in all documentation: “P-Rep Commission Rate”.**

The difference between ICON and other DPoS-style networks is that:

* ICON’s block reward distribution to voters is handled by the network itself instead of by individual P-Reps
* There is a network wide commission rate rather than commission rates charged by individual P-Reps
* Commission is paid through dilution. **When P-Reps raise the P-Rep Commission Rate (i\_rep), they raise rewards only for themselves and not for voters, leading to dilution of ICX holders. The number of ICX going to ICX holders remains the same regardless of P-Rep Commission Rate (i\_rep), only the number of ICX going to P-Reps is effected.**

Here is an example of what is meant by commission through dilution:

160 new ICX are created in Block\_A  
80 ICX go to voters  
80 ICX go to P-Reps  
= 50% commission rate

*-> Main P-Reps start lowering commission rate*

100 new ICX are created in Block\_B  
80 ICX go to voters  
20 ICX go to P-Reps  
= 20% commission rate

As you can see, the actual number of ICX going to voters remains constant regardless of adjustments to i\_rep. What changes is the percentage of newly created ICX going to voters vs P-Reps.

![](https://cdn-images-1.medium.com/max/800/0*RF1ZUiMTLfFCDCyi)ICON’s format is beneficial in that there is no need to trust a P-Rep to pay your share of rewards, however, expressing commission rates as the little-understood “i\_rep governance variable” has confused the ICON community by obfuscating the true commission rate. We believe that now is the time to take action and clarify our economic structure.

### Fixing the Problem

Commission Rates on other networks ([Cosmos](https://www.mintscan.io/validators), [Tezos](https://mytezosbaker.com/)) range from 0% (promos offered by new validators) to more than 20% (typically offered by the largest validators that don’t want extra delegation). **The current P-Rep Commission Rate, based on an i\_rep of 37,500, is 36%** (not including Main P-rep rewards), almost double the highest commission rates on other networks.

![](https://cdn-images-1.medium.com/max/800/0*hCcqhW1R5ahlGOWJ)With this understanding of how i\_rep influences the P-Rep Commission Rate, the ICON Foundation would like to propose **lowering i\_rep to 14,000. This results in a P-Rep Commission Rate of approximately 17.5%.** Not only does this lower the P-Rep Commission Rate to a more reasonable number, but **inflation also drops from 8% to just under 6%, a 25% drop in newly created ICX.**

![](https://cdn-images-1.medium.com/max/800/0*Wg6GtdmFBbVsU6hG)Additionally, we would like to propose changing the adjustment process of the P-Rep Commission Rate into a Network Proposal rather than a constantly fluctuating governance variable. We believe that the inflation rate and commission rate on the network should be predictable and not easily changed.

In order to change P-Rep Commission Rate adjustments from a Governance variable to a Network Proposal, Main P-Reps must pass a Revision Proposal. **The ICON Foundation would like to make this proposal around the middle of July,** subject to change based on unforeseen development factors. We hope to see this Revision Proposal passed by Main P-Reps in an effort to continue down the path to sustainable economics. In the meantime, **we are also providing guidance to Main P-reps to lower their i\_rep to 14,000 (P-Rep Commission Rate of ~17.5%) for the reasons mentioned above.**

The calculation of P-Rep Commission Rate does not include the B1 Block Production Reward (Main P-rep reward) because this is not guaranteed opportunity cost; it is only available to Main P-Reps. This will not be an issue when IISS 3.0 launches, since B1 is removed. The equation is as follows:

P-Rep Commision Rate = P-rep Reward Rate / (Voter Reward Rate + P-rep Reward Rate)

P-rep Reward Rate (for 1 ICX vote): 1 / Total Network Votes x 100 x 12 x i\_rep / 2

### Other Considerations

We expect a few key questions in response to these changes and wanted to cover them in advance.

**Question:** How can P-Reps save up enough for their bond if P-Rep Commission Rates are being lowered?

**Answer:** High P-Rep Commission Rates dilute ICX holders for the personal gain of P-Reps. It is not the burden or responsibility of ICX holders to pay for the bond of P-Reps. If you do not have enough ICX for your bond, you can apply for a grant in order to earn ICX, you can buy more ICX, or you can take the opportunity cost of not having a full bond and slowly earn enough to get it.

**Question**: Now that P-Reps are earning less rewards because of the lower commission rate, how are P-Reps expected to make meaningful contributions?

**Answer**: P-Reps still have several options to seek funding for their projects. P-Reps should leverage the [ICON Community Grant Program](https://forum.icon.community/t/icon-community-grant-program-icon-cgp/256), P-Reps can seek traditional venture capital funding for larger projects, P-Reps will eventually have the Contribution Proposal System, and many P-Reps have already earned significant rewards because of the previously high commission rates allowing them to fund projects of other P-Reps or continue funding their own work.

**Question:** As a voter, should this affect how we evaluate P-Reps?

**Answer:** P-Reps still have plenty of avenues to receive funding and contribute to the ICON Network, therefore not much changes from a voter’s perspective. Voters should consider self-funded / self-developed projects built on ICON, grants received from ICON, businesses / apps built on ICON, community growth efforts, growth of ICON’s KPIs, etc.

We are grateful for the honest and candid feedback from the community. The feedback of ICONists has prompted this line of thinking and we are excited to continue the Path to Sustainable Economics.

Thank you,  
ICON Team

