---
title: "How to check if a validator is missing blocks"
date: 2023-03-11
author: espanicon
slug: how-to-check-if-a-validator-is-missing-blocks
description: Learn how to check if a validator is missing blocks consecutively.
draft: false
tags:
- node-management
- javascript
---

As a validator in the network if you miss a certain amount of blocks consecutively your node can be penalized.

The following tutorial will explain in detail how to check if a validator is missing blocks consecutively and know if they are going to receive a penalty.

## Getting the max amount of missed blocks before a penalty

To check how many blocks you need to miss consecutively to be penalized we need to call the `getNetworkInfo` method of the chain SCORE like in the following example:

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"icx_call","id":218,"params":{"to":"cx0000000000000000000000000000000000000000","dataType":"call","data":{"method":"getNetworkInfo"}}}' https://ctz.solidwallet.io/api/v3
```

The response of the call is a JSON object in the following format:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "bondRequirement": "0x5",
    "consistentValidationPenaltyCondition": "0x5",
    "consistentValidationPenaltyMask": "0x1e",
    "consistentValidationPenaltySlashRatio": "0x0",
    "delegationSlotMax": "0x64",
    "extraMainPRepCount": "0x3",
    "iissVersion": "0x3",
    "irep": "0x21e19e0c9bab2400000",
    "lockMaxMultiplier": "0x14",
    "lockMinMultiplier": "0x5",
    "mainPRepCount": "0x16",
    "preps": "0x9b",
    "proposalNonVotePenaltySlashRatio": "0x0",
    "rewardFund": {
      "Icps": "0xa",
      "Iglobal": "0x27b46536c66c8e3000000",
      "Iprep": "0xd",
      "Irelay": "0x0",
      "Ivoter": "0x4d"
    },
    "rrep": "0x4b0",
    "subPRepCount": "0x4e",
    "termPeriod": "0xa870",
    "totalBonded": "0xe4587961c063648044000",
    "totalDelegated": "0x12cbcf6707967830bfccef7",
    "totalPower": "0xf562e99c53b58009778878",
    "totalStake": "0x14d8b283f6e8cf32af44c2a",
    "unbondingMax": "0x64",
    "unbondingPeriodMultiplier": "0x7",
    "unstakeSlotMax": "0x3e8",
    "validationPenaltyCondition": "0x294"
  },
  "id": 218
}
```

Converting the value of `validationPenaltyCondition` from hex to an integer will result in `660` , this is the amount of consecutive blocks that a validator must miss to receive a penalty.

## Check how many blocks a node has missed

Now that we know the amount of blocks that a node needs to miss to get a penalty, to check if a validator is currently missing blocks we need to make 2 RPC calls:

* `getPRepTerm`: The response of this call returns an array of all the validators in the network in the order they are currently ranked in the chain, and shows the names of the validators.
* `getPRepStats`: The response of this call returns an assortment of data related to block validation including the blocks the validator has missed but doesn't show the name of the validator.

Making the 2 RPC calls is necessary because both responses have the validators in an array ordered in the same way (according to their rank) but the `getPRepStats` call doesn't show the name of the validator. These calls are necessary to be made consecutively, or be made targeting the same specific block to ensure that the order of both responses are the same.

RPC call for the `getPRepTerm` method:

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"icx_call","id":142,"params":{"to":"cx0000000000000000000000000000000000000000","dataType":"call","data":{"method":"getPRepTerm"}}}' https://ctz.solidwallet.io/api/v3
```

Response:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "blockHeight": "0x3bfce3d",
    "bondRequirement": "0x5",
    "endBlockHeight": "0x3c02a32",
    "iissVersion": "0x3",
    "irep": "0x0",
    "isDecentralized": "0x1",
    "mainPRepCount": "0x19",
    "period": "0xa870",
    "preps": [
      {
        "address": "hx0b047c751658f7ce1b2595da34d57a0e7dad357d",
        "bonded": "0x1a784379d99db42000000",
        "city": "Zug",
        "country": "CHE",
        "delegated": "0x1f98e638c29c0959d56dab",
        "details": "https://icon.foundation/prep/details.json",
        "email": "hello@icon.foundation",
        "grade": "0x0",
        "irep": "0x2f6f10780d22cc00000",
        "irepUpdateBlockHeight": "0x12a8eb8",
        "lastHeight": "0x3bfc491",
        "name": "ICON Foundation",
        "nodeAddress": "hx9c63f73d3c564a54d0eed84f90718b1ebed16f09",
        "p2pEndpoint": "18.176.121.232:7100",
        "penalty": "0x0","power": "0x2116545850052128000000",
        "status": "0x0",
        "totalBlocks": "0x31d6f0d",
        "validatedBlocks": "0x31afc87",
        "website": "https://icon.foundation"
      }
		...
    ],
    "revision": "0x14",
    "rewardFund": {
      "Icps": "0xa",
      "Iglobal": "0x27b46536c66c8e3000000",
      "Iprep": "0xd",
      "Irelay": "0x0",
      "Ivoter": "0x4d"
    },
    "rrep": "0x0",
    "sequence": "0x4c2",
    "startBlockHeight": "0x3bf81c3",
    "totalDelegated": "0x12cbf923eb2714cfa96e81c",
    "totalPower": "0xf5623e3f106a1eed7ea5dd",
    "totalSupply": "0x31a10f1cd3229dcff7677ae"
  },
  "id": 142
}
```

RPC call for the `getPRepStats` method:

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"icx_call","id":142,"params":{"to":"cx0000000000000000000000000000000000000000","dataType":"call","data":{"method":"getPRepStats"}}}' https://ctz.solidwallet.io/api/v3
```

Response:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "blockHeight": "0x3bfcfea",
    "preps": [
      {
        "fail": "0x27286",
        "failCont": "0x0",
        "grade": "0x0",
        "lastHeight": "0x3bfc491",
        "lastState": "0x2",
        "penalties": "0x0",
        "realFail": "0x27286",
        "realFailCont": "0x0",
        "realTotal": "0x31d70ba",
        "status": "0x0",
        "total": "0x31d6561"
      },
      ...
    ]
  },
  "id": 142
}
```

## Example using JavaScript

Once we have the result of the 3 RPC calls (`getNetworkInfo`, `getPRepTerm` and `getPRepStats`) we can use this information to create a function that will give us the max amount of blocks a validator can miss before getting a penalty and how many blocks each validator had missed consecutively.

Javascript function to merge `getPRepTerm` and `getPRepStats`:

```javascript
function getPRepsFullInfo(prepTerm, prepStats) {
  const result = [];
  for (let i = 0; i < prepTerm.preps.length; i++) {
    result.push({
      ...prepTerm.preps[i],
      ...prepStats.preps[i]
    });
  }
  return result;
}
```

Once we have the result of `getPRepsFullInfo` we can get the count of missing blocks on each validator using the following function:

```javascript
function getPRepsMissingBlocks(prepsFullInfo) {
  const result = [];
  for (const prep of prepsFullInfo) {
    if (prep.realFailCont != "0x0") {
      result.push({
        name: prep.name,
        realFailCont: prep.realFailCont
      });
    }
  }
  return result;
}
```

We can use the following function to merge the network data and the validator data:

```javascript
function getCountdownToPenalty(networkInfo, prepsFullInfo) {
  const result = [];
  const vpCondition = parseInt(networkInfo.validationPenaltyCondition, 16);
  for (const prep of prepsFullInfo) {
    result.push({
      address: prep.address,
      name: prep.name,
      realFailCont: parseInt(prep.realFailCont, 16)
    });
  }
  return {
    validationPenaltyCondition: vpCondition,
    preps: result
  };
}
```

The result of this function call will be the following:

```
{
  validationPenaltyCondition: 660,
  preps: [
    {
      address: 'hx0b047c751658f7ce1b2595da34d57a0e7dad357d',
      name: 'ICON Foundation',
      realFailCont: 0
    },
    {
      address: 'hxfba37e91ccc13ec1dab115811f73e429cde44d48',
      name: 'Lydia Labs',
      realFailCont: 0
    },
    {
      address: 'hxf680ae11372c48afebbce77c9d8de455e1acc18a',
      name: 'GROW',
      realFailCont: 0
    },
    {
      address: 'hx1b5c004de7b8591cb571f004fdfa00d74d1099e6',
      name: 'Binance Node',
      realFailCont: 0
    },
    {
      address: 'hx3d5c3ce7554f4d762f6396e53b2c5de07074ec39',
      name: 'ICON DAO',
      realFailCont: 0
    },
    {
      address: 'hx3c58970034d5a923aa95058365450feed28979a2',
      name: 'GangstaVerse',
      realFailCont: 0
    },
    ...
  ]
}
```
The validators will receive a penalty once their `realFailCont` ≥ `validationPenaltyCondition`.

## Further Resources
* https://docs.icon.community/support/advanced-topics/validator-nodes/how-to-check-if-a-validator-is-missing-blocks
