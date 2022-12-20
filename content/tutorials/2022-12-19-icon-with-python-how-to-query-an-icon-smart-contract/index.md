---
title: ICON With Python – How to Query an ICON Smart Contract
date: 2022-12-19
author: rhizome-labs
slug: icon-with-python-how-to-query-an-icon-smart-contract
description: Learn how to query an ICON smart contract with the ICON Python SDK.
tags:
- python
---

In the [previous tutorial](/tutorials/icon-with-python-getting-started-with-the-icon-python-sdk/), you learned how to set up a proper Python development environment for building apps and bots that interact with the ICON blockchain. Now that we've walked through the basics, let's dive into how to use the ICON Python SDK to query any smart contract on the ICON blockchain.

**NOTE: Example code for this tutorial can be found [here](https://github.com/rhizome-labs/icon-python-tutorials/tree/main/icon_python_tutorials/projects/2_how-to-send-an-icx-transaction).**

## What is a Smart Contract Query?

Before we dive into how to query a smart contract, it's important to understand what it is. A smart contract query is a way to ask for information from a smart contract on a blockchain network like ICON. Sometimes people want to query a smart contract to find out more about it. For example, they might want to verify the terms of the contract or check on the status of a transaction. Querying a smart contract can help people make sure everything is going according to plan and that the information in the contract is accurate.

Another reason someone might want to query a smart contract is to see what's happening with an asset that is being tracked by the contract. For example, the smart contract for the bnUSD (Balanced Dollar) token contains a ledger that maps ICX addresses to their respective bnUSD balances. In general, smart contract queries provide a way to get more information about the current or historial state of a smart contract.

## Building a Query With CallBuilder

The ICON Python SDK includes a `CallBuilder` for building `Call` objects that can be sent to an ICON node to query for data. Let's take a closer look at the `CallBuilder` to see how it functions.

When initializing a `CallBuilder` instance, you can provide the following variables:

* `from_`: The ICX address that's submitting the query. Since queries are read-only by nature, it's typically not necessary to specify the `from_` address.
* `to`: The contract address to query (starts with "cx").
* `method`: The method to call on the smart contract.
* `params`: A dictionary that contains the data that's expected by method.
* `height`: The block height to query – this is useful for querying the past state of a smart contract.

In practice, creating an instance of `CallBuilder` looks something like this:

**Note: This section uses code snippets. Please refer to the full example code [here](https://github.com/rhizome-labs/icon-python-tutorials/blob/main/icon_python_tutorials/projects/2_how-to-send-an-icx-transaction/main.py) to see a fully-functional script.**

{{< highlight python >}}
from iconsdk.builder.call_builder import CallBuilder

# Initialize IconService for interfacing with an ICON node.
ICON_SERVICE = IconService(HTTPProvider("https://ctz.solidwallet.io", 3))

# Build the Call object.
call = CallBuilder(
    to="cx...",
    method="some_method",
    params={"key": "value"},
    height=59487637,
).build()

# Send the Call object to an ICON node.
result = ICON_SERVICE.call(call)

# Return the result of the call.
return result
{{< /highlight >}}

## Example Smart Contract Queries

The best way to learn how to query smart contracts is to, well, query some smart contracts. In this section, we'll walk through two examples of how to query ICON smart contracts.

### Query for ICX/USD Quote

ICON has a price feed oracle operated by Band, an oracle-focused protocol that brings off-chain data on-chain. The Band price feed oracle includes quotes for a variety of digital assets such as BTC, ETH, and ICX. Let's take a look at how to query the ICON blockchain for the current price of ICX expressed in USD.

First, we need to a contract address. Luckily, the Band oracle contract address is [listed in the official ICON documentation](https://docs.icon.community/v/icon1/oracles/band-protocol).

```
Band Oracle: cx087b4164a87fdfb7b714f3bafe9dfb050fd6b132
```

Now that we have a contract address, let's use the [RHIZOME Contract Explorer](https://contract-explorer.rhizome.dev/contract/cx087b4164a87fdfb7b714f3bafe9dfb050fd6b132/) to see the various query methods exposed by the smart contract.

{{< img src="rhizome-contract-explorer-band-oracle.jpg" size="wide">}}

As you can see, there are three "read" methods (query methods are also be called read or read-only methods).

1. `get_ref_data`
2. `get_reference_data`
3. `get_reference_data_bulk`

The `get_ref_data` method expects a `_symbol` string parameter. Let's use the RHIZOME Contract Explorer to test this method. Type "ICX" into the `_symbol` input field and press "Query".

You should see a dictionary response (formatted in JSON) like this:

{{< highlight json >}}
{
	"last_update": "0x5f03f13012000",
	"rate": "0x8e62320",
	"request_id": "0xdd9e12"
}
{{< /highlight >}}

This response contains all the information we need to extract the price of ICX. Now that we've found all the required components for a smart contract query (contract address, method, and params), let's implement this query with the ICON Python SDK.

First, let's write a general `call()` function in our Python project:

{{< highlight python >}}
def call(
    to: str,
    method: str,
    params: dict = {},
    height: int = None,
) -> dict:
    """
    Submits a read-only request to query data from the ICON blockchain.

    Args:
        to: The contract address to query.
        method: The contract method to query.
        params: The parameters expected by the contract method.
        height: The block height to query (useful for fetching data about past state).

    Returns:
        A dictionary containing the result of the query.
    """
    call = CallBuilder(
        to=to,
        method=method,
        params=params,
        height=height,
    ).build()
    result = ICON_SERVICE.call(call)
    return result
{{< /highlight >}}

Next, let's write another function that queries the Band oracle contract.

{{< highlight python >}}
def query_icx_usd_quote(height: int = None):
    """
    Query the Band oracle contract for the latest ICX/USD quote.
    """
    # Query Band oracle contract's "get_ref_data".
    result = call(
        "cx087b4164a87fdfb7b714f3bafe9dfb050fd6b132",
        "get_ref_data",
        {"_symbol": "ICX"},  # We want the ICX/USD quote, so "_symbol" is set to "ICX".
        height=height,
    )
    icx_usd_price = (
        int(result["rate"], 16) / 1_000_000_000
    )  # Divide by 1,000,000,000 to make it easier to read.

    if height is None:
        print(f"Current ICX/USD price is ${icx_usd_price}.")
    else:
        print(f"ICX/USD price at block #{height} was ${icx_usd_price}.")
    return icx_usd_price
{{< /highlight >}}

As you can see, the `query_icx_usd_quote()` function includes the four parameters required for a query:

* `to`: `cx087b4164a87fdfb7b714f3bafe9dfb050fd6b132`
* `method`: `get_ref_data`
* `params`: `{"_symbol": "ICX"}`
* `height`: `None` (When `height` is set to `None`, the state of the most recent block is returned.)

Now, we can call the function like so:

{{< highlight python >}}
query_icx_usd_quote()  # Latest quote.
query_icx_usd_quote(height=58_586_000)  # Quote at Block #58,586,000
{{< /highlight >}}

And the results:

```
Current ICX/USD price is $0.1499.
ICX/USD price at block #58586000 was $0.1689.
```

### Query for Balanced Liquidity Pool Data

Let's move on to a more advanced query. In this example, we'll fetch data for every liquidity pool on the Balanced DEX.

To do this, we'll use the elements below to create a `Call` object.

* `to`: `cxa0af3165c08318e988cb30993b3048335b94af6c`
* `method`: `getPoolStats`
* `params`: `{"_id": pool_id}`
* `height`: `None`

As you may have guessed, `cxa0af3165c08318e988cb30993b3048335b94af6c` is the contract address for the Balanced DEX. The contract's `getPoolStats` method returns a dictionary the contains data about a liquidity pool. The exact liquidity pool to query for is specified with the `_id` parameter set to an integer – this can be verified by [inspecting the contract with the RHIZOME Contract Explorer](https://contract-explorer.rhizome.dev/contract/cxa0af3165c08318e988cb30993b3048335b94af6c/).

Since the total number of pools is unknown, we can't use a `for` loop. Instead, we'll use a `while` loop and increment the `pool_id` variable by 1 at the end of each loop iteration.

Below is a condensed version of the code. Again, to get a fully-functional script, please refer to the example code repository [here](https://github.com/rhizome-labs/icon-python-tutorials/blob/main/icon_python_tutorials/projects/2_how-to-query-a-smart-contract/main.py).

{{< highlight python >}}
# Initialize an array to hold pool data.
pools = []

# Set initial pool ID to 1.
pool_id = 1

# Start a loop to make smart contract calls.
while True:
    try:
        # Query Balanced DEX contract's "getPoolStats" method with the provided pool ID.
        result = call(
            "cxa0af3165c08318e988cb30993b3048335b94af6c",  # cxa0af3165c08318e988cb30993b3048335b94af6c is the Balanced DEX contract address.
            "getPoolStats",
            {"_id": pool_id},
        )

        # Append pool to pools array.
        pools.append(result)
        print(f"Added Pool #{pool_id}...")

        # Increment pool_id by 1 for the next iteration.
        pool_id += 1

	# For the purposes of this tutorial, JSONRPCException is raised if the pool ID doesn't exist.
    # For production use cases, it's good to be more granular with error handling
    # because JSONRPCException can also be raised in other situations.
    # In that case, let's break out of the loop and finish up the function.
    except JSONRPCException:
    	break

return pools
{{< /highlight >}}

Notice how the body of the code is wrapped in a `try...except` block. As we mentioned earlier, the assumption for this scenario is that we don't know the total number of pools on the Balanced DEX. Luckily, the ICON Python SDK throws a `JSONRPCException` if a query is unsuccessful for whatever reason. In this case, a `JSONRPCException` is raised when the `pool_id` refers to a nonexistent pool. At that point, we can deduce that there are no more pools to process and break out of the `while` loop and return the `pools` array.

In a real-world situation, the result of the call to `getPoolStats` will require a few rounds of processing before it's human readable. Be sure to check out the full code example [here](https://github.com/rhizome-labs/icon-python-tutorials/blob/main/icon_python_tutorials/projects/2_how-to-query-a-smart-contract/main.py) to see the additional processing steps!

## Summary

In this tutorial, you learned how to use the `CallBuilder` class in the ICON Python SDK to query smart contracts on the ICON blockchain. Believe it or not, you now have all the blockchain skills required to build a dashboard to display on-chain data! In the next tutorial, you'll learn how to send ICX transactions to write data to the ICON blockchain.