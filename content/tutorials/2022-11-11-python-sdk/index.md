---
title: ICON With Python – Getting Started With the ICON Python SDK
date: 2022-11-11
author: rhizome-labs
slug: icon-with-python-getting-started-with-the-icon-python-sdk
description: Learn how to install and configure the ICON Python SDK.
tags:
- python
---

In this tutorial series, we’ll be focusing on building infrastructure-related stuff like APIs to query for some kind of data, apps that can timestamp data into transactions, Discord bots for relaying smart contract events in real-time, and more. For this tutorial series, We’ll be using [ICON’s Python SDK](https://github.com/icon-project/icon-sdk-python), as that is the programming language that I’m most familiar with. However, most of the concepts can be applied to the other SDKs as well – JavaScript, Java, etc.

In this first tutorial, you’ll learn how to set up a local Python development environment for building apps and bots that leverage the ICON blockchain. We’ll cover topics like how to install Python and the ICON SDK, how to set up a Python virtual environment, and how to query for the latest block to test whether the environment is set up correctly.

## What is the ICON SDK?

Before we dive into how to install Python and the ICON SDK, let’s first talk about what the ICON SDK is exactly. An SDK, short for “software development kit”, is a collection of software tools that make developing for *something* easier. In the context of the ICON blockchain, the ICON SDK makes interacting with nodes more streamlined and less verbose.

To communicate with ICON nodes (e.g. sending a query to get information about the latest block), you need to send a POST request in the correct format. At this time, ICON nodes use the [JSON-RPC 2.0 specification](https://www.jsonrpc.org/specification). Don’t worry, you don’t need to be a JSON-RPC protocol expert to build on ICON – just know that nodes communicate via JSON-RPC.

Here’s an example of a JSON-RPC request lifecycle (request, response, and error) from the ICON developer portal:

{{< highlight javascript >}}
// Request
{
	"jsonrpc": "2.0",
	"method": "$STRING1",
	"id": $INT,
	"params": {
		"$KEY1": "$VALUE1",
		"$KEY2": {
			"method": "$STRING2",
			"params": {
				"$KEY3": "$VALUE3"
			}
		}
	}
}

// Response - success
{
	"jsonrpc": "2.0",
	"id": $INT,
	"result": "$STRING"
	// or
	"result": {
	  "$KEY1": "$VALUE1",
	  "$KEY2": "$VALUE2"
	}
}

// Response - error
{
	"jsonrpc": "2.0",
	"id": $INT1,
	"error": {
		"code": $INT2,
		"message": "$STRING"
	}
}
{{< /highlight >}}

The JSON-RPC syntax might look intimidating at first, but it’s actually pretty simple once you realize it’s just JSON that follows a specific syntax.

Alright, so how do ICON nodes make use of JSON-RPC exactly?

Instead of trying to describe it, let me just show you a snippet of JSON:

{{< highlight json >}}
{
	"jsonrpc": "2.0",
	"method": "icx_getLastBlock",
	"id": 1234
}
{{< /highlight >}}

The message above is what you’d want to send to an ICON node if you wanted to get the latest block height. Similarly, here’s what you’d send to get the result of an ICX transaction:

{{< highlight json >}}
{
	"jsonrpc": "2.0",
	"method": "icx_getTransactionResult",
	"id": 1234,
	"params": {
		"txHash": "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"
	}
}
{{< /highlight >}}

Now, imagine if you were developing an API or a bot that needed to make a bunch of these JSON-RPC POST requests to query data from the blockchain.

You’d end up with a bunch of code like this for each request:

{{< highlight python >}}
import requests

api_endpoint = "https://ctz.solidwallet.io/api/v3"

payload = {
	"jsonrpc": "2.0",
	"method": "icx_getBlockByHeight",
	"id": 1234,
	"params": {
		"height": "0x3"
	}
}

r = requests.post(api_endpoint, json=payload)

print(r.json())
{{< /highlight >}}

Making JSON-RPC requests directly is fine if you’re just doing a few calls, but having to specify the correct syntax for many calls can get overwhelming very quickly. That’s where the ICON SDK comes in. By using the SDK, you don’t have to worry about ensuring your JSON payloads are formatted correctly, and that’s just the start. Simply put, the ICON SDK implements all the JSON-RPC syntax for you, and abstracts away a lot of the repetitive and verbose stuff, so you can focus on building out the actual functionality of your app.

With the ICON SDK, the code above can be reduced to:

{{< highlight python >}}
from iconsdk.icon_service import IconService
from iconsdk.providers.http_provider import HTTPProvider

icon_service = IconService(HTTPProvider("https://ctz.solidwallet.io", 3))

block = icon_service.get_block(3)

print(block)
{{< /highlight >}}

As you can see, it’s much less verbose than the JSON-RPC example! Alright, now let’s get into how to install Python and the ICON SDK.

## How to Install Python and the ICON SDK

For this tutorial series, we’ll be using macOS. If you’re using Windows or Linux, check out the [official Python website](https://www.python.org/) for instructions on how to install Python 3. Most macOS installations ship with a default Python installation. However, in most cases, the default macOS Python version is Python 2.7. To work with the ICON SDK, you’ll need to install Python 3.

### How to Install Python 3 on macOS With Homebrew

To install Python 3 on macOS, I recommend using [Homebrew](https://brew.sh/) – a handy package manager that makes it easy to install and update a wide variety of software. If you don’t have brew installed on your system, you can install it by running the command below in Terminal:

{{< highlight bash >}}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
{{< /highlight >}}

After Homebrew has been installed, edit your ~/.zprofile file and add the line below to the bottom of the file:

{{< highlight bash >}}
export PATH="/usr/local/opt/python/libexec/bin:$PATH"
{{< /highlight >}}

{{< highlight bash >}}
nano ~/.zprofile
{{< /highlight >}}

This will open the file in the nano text editor. After you’ve added the file, press **Ctrl+O** and **Enter** to save the file. To exit nano, press **Ctrl+X**.

Next, use Homebrew to install Python 3 with the command below:

{{< highlight bash >}}
brew update
brew install python
{{< /highlight >}}

After the installation has finished, ensure Python 3 has been installed using the command below:

{{< highlight bash >}}
python3 --version
{{< /highlight >}}

If the installation was successful, you should see `Python 3.9.5`, or whatever the latest version of Python was when you ran the command. The important thing here is that we now have an installation of Python 3 to work with.

## How to Install pyenv

After installing Python 3, we’ll need to install pyenv – a tool for managing multiple Python versions on your system.

To install pyenv, use the command below:

{{< highlight bash >}}
brew update
brew install pyenv
{{< /highlight >}}

After install pyenv, let’s add a few lines to our `~/.zprofile` and `~/.zshrcfiles`. Depending on your operating system and shell, you may need to edit a different file. These commands will let us use the pyenvcommand without having to configure it every time.

{{< highlight bash >}}
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zprofile
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zprofile
echo 'eval "$(pyenv init --path)"' >> ~/.zprofile
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
exec $SHELL
{{< /highlight >}}

Alright, now that pyenv has been installed, let’s try installing another Python version. ICON recommends using Python 3.7 or above for ICON SDK, so let’s install the latest stable version of Python 3 (3.10.4).

Use the command below to install Python 3.10.4 with pyenv:

{{< highlight bash >}}
pyenv install 3.10.4
{{< /highlight >}}

After installing Python 3.10.4, run `pyenv versions` and you should see 3.10.4 in the list of installed versions.

## How to Create a Virtual Python Environment

Now let’s configure Poetry to use Python 3.10.4 when we run our code. To do this, run the command below in the `icon-sdk-project` folder.

{{< highlight bash >}}
pyenv shell 3.10.4
poetry env use 3.10.4
poetry shell
{{< /highlight >}}

After running `poetry shell`, you should see a slight change in your Terminal. The command line input should now include the name of the virtual environment. In the screenshot below, you can see the input line now reads `(icon-sdk-project-tHQQLkM1-py3.7) brianli@Brians-MacBook-Pro icon-sdk-project`. This means all commands are now being executed within the `icon-sdk-project-tHQQLkM1-py3.7` virtual environment.

Now let’s install our project dependencies! From this point forward, make sure you’re running commands in the Python 3.7.10 virtual environment.

For the purposes of this tutorial, we’ll develop a basic Python app to fetch information about the latest block. For a simple script, we don’t need anything else besides the ICON SDK package, so let’s go ahead and install that into our virtual environment with the command below:

{{< highlight bash >}}
poetry add iconsdk
{{< /highlight >}}

## How to Query the ICON Blockchain

After the ICON SDK has been installed, open up your favorite text editor (I recommend [Visual Studio Code](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/)). Next, create a new file and save it in the **~/Desktop/icon-sdk-project/icon_sdk_project** folder as `main.py`. In other words, the file path to `main.py` should be **~/Desktop/icon-sdk-project/icon_sdk_project/main.py**.

### How to Import ICON SDK

In order to use the ICON SDK, we need to import it into our project. To do this, let’s add the code below to the top of `main.py`:

{{< highlight python >}}
from iconsdk.icon_service import IconService
from iconsdk.providers.http_provider import HTTPProvider
{{< /highlight >}}

### Initialize IconService Object

Next, we need a way of specifying the domain of a node on the ICON network, so our code knows where to query for data. The ICON SDK offers a handy `IconService` class for this purpose.

To initialize an `IconService` object, add the code below to `main.py`:

{{< highlight python >}}
icon_service = IconService(HTTPProvider("https://ctz.solidwallet.io", 3))
{{< /highlight >}}

As you can see, `IconService` takes an `HTTPProvider` object, which we also imported. The `HTTPProvider` class then takes two arguments – ICON node domain ([https://ctz.solidwallet.io](https://ctz.solidwallet.io/)) and API version (3). The node domain can be any ICON P-Rep or citizen node. If you’ve set up a personal citizen node, you can specify the IP address or domain name for your node instead of `https://ctz.solidwallet.io`.

If you’re running your own node, you may need to append `:9000` to your IP address or domain because ICON nodes communicate over Port 9000.

For example:

- http://35.123.123.123:9000
- http://my-cool-node.com:9000

The `https://ctz.solidwallet.io` endpoint doesn’t require `:9000` because its been specifically configured to forward external requests to Port 9000 via an internal reverse proxy (e.g. Nginx, HAProxy, etc.). So, unless the endpoint you’re using has configured a reverse proxy, you’ll need to specify the port.

Now that we’ve initialized the `IconService` object, let’s use it to query for data about the latest block. To do this, just add the code below to `main.py`.

## Query the Latest Block

To query the latest block, we’ll use the built-in `get_block` method, and supply `"latest"` as the argument like so:

{{< highlight python >}}
block = icon_service.get_block("latest")

print(block)
{{< /highlight >}}

Your whole main.py file should look like this now:

{{< highlight python >}}
from iconsdk.icon_service import IconService
from iconsdk.providers.http_provider import HTTPProvider

icon_service = IconService(HTTPProvider("https://ctz.solidwallet.io", 3))

block = icon_service.get_block("latest")

print(block)
{{< /highlight >}}

That’s it for now! Save the main.py file, and switch over to your Terminal. Finally, let’s run the Python script and see what happens. To do this, navigate to the icon-sdk-project folder and run the command below (make sure you’re still in the Python 3.7.10 virtual environment):

{{< highlight bash >}}
python3 icon_sdk_project/main.py
{{< /highlight >}}

If you did everything correctly, you should see a dictionary like this in your Terminal window:

{{< highlight python >}}
{'version': '0.5', 'height': 35589816, 'signature': 'W+uY+ODvFIvPy2NDOvhRhEHzToeiM7hDL9bh7WLC7mpy6rXkdZob4giYCccjOUMuajEEpxVAjbNbO1qCUWGN1QA=', 'prev_block_hash': '38a65def3b0ec13f2ccb17d10433ca28d8b8f39bc9f810600e4c437379cd9981', 'merkle_tree_root_hash': '4262dec7a91f3f24380017fcecf7d510889286d4712b041b4d81248a41217991', 'time_stamp': 1623474467785654, 'confirmed_transaction_list': [{'version': 3, 'timestamp': 1623474467785654, 'dataType': 'base', 'data': {'prep': {'irep': '0x21e19e0c9bab2400000', 'rrep': '0x16e', 'totalDelegation': '0x131ba8e5c29b59673253e13', 'value': '0x2abee18c4149729e'}, 'result': {'coveredByFee': '0x565a2d9fe92000', 'coveredByOverIssuedICX': '0x0', 'issue': '0x2a68875ea160529e'}}, 'txHash': '0xb5af3b74ccbc96872eaa27b02a8f68a019f0803fb3d754af91ead66b78d52363'}, {'version': 3, 'from': 'hx5b802623eb53c6a90df9f29e5808596f3c2bf63e', 'to': 'cx9df59cf2c7dc7ae2dbdec4a10b295212595f2378', 'stepLimit': 100000000, 'timestamp': 1623474465294806, 'nid': 1, 'value': 0, 'nonce': 100, 'dataType': 'call', 'data': {'method': 'circle_arb'}, 'signature': 'bdg2sR5aY1yFKq1VI2vnwpADY8WgyZLDVGbOAbXLi1M4X34IcavcDJlfHV9Kq5rsmr+WuyDntqtxF6EF+XyIFQA=', 'txHash': '0x3fb6f6d024ded001da54f0c5166708f0fbd4c80f96901e9bacf5bb43125264e1'}, {'data': {'method': 'vp', 'params': {'_hash': '258d46b8942884f2928bfd365fc14be62c42ad5cb2f32624e80aefe752808919'}}, 'stepLimit': 999999999, 'signature': '7T8AxL1IfcgSnRtc9lL7NU3vCpK4GnOkhgI+S4DfoBUfI2gGaSA40wxmmFWm6Ww8vCMUILr3HV1ZAzW+qZOUzgA=', 'dataType': 'call', 'nid': 1, 'from': 'hx037c73025819e490e9a01a7e954f9b46d89b0245', 'to': 'cx9e3cadcc1a4be3323ea23371b84575abb32703ae', 'version': 3, 'timestamp': 1623474466677000, 'txHash': '0xd6498a5c8e17ecfa2f3bc0ddeb07fa9939319442cd438e407788ca20000876e5'}], 'block_hash': 'cbf2191b14e4ee37e80f927709fea2b1de308bb1349bccf63e50cf934352e83b', 'peer_id': 'hx262afdeda4eba10fe41fa5ef21796ac2bdcc6629', 'next_leader': 'hx262afdeda4eba10fe41fa5ef21796ac2bdcc6629'}
{{< /highlight >}}

This output contains information about the latest block on the ICON blockchain in Python dictionary format.

Here’s what the output looks like in properly-formatted JSON:

{{< highlight json >}}
{
	"version": "0.5",
	"height": 35589816,
	"signature": "W+uY+ODvFIvPy2NDOvhRhEHzToeiM7hDL9bh7WLC7mpy6rXkdZob4giYCccjOUMuajEEpxVAjbNbO1qCUWGN1QA=",
	"prev_block_hash": "38a65def3b0ec13f2ccb17d10433ca28d8b8f39bc9f810600e4c437379cd9981",
	"merkle_tree_root_hash": "4262dec7a91f3f24380017fcecf7d510889286d4712b041b4d81248a41217991",
	"time_stamp": 1623474467785654,
	"confirmed_transaction_list": [{
			"version": 3,
			"timestamp": 1623474467785654,
			"dataType": "base",
			"data": {
				"prep": {
					"irep": "0x21e19e0c9bab2400000",
					"rrep": "0x16e",
					"totalDelegation": "0x131ba8e5c29b59673253e13",
					"value": "0x2abee18c4149729e"
				},
				"result": {
					"coveredByFee": "0x565a2d9fe92000",
					"coveredByOverIssuedICX": "0x0",
					"issue": "0x2a68875ea160529e"
				}
			},
			"txHash": "0xb5af3b74ccbc96872eaa27b02a8f68a019f0803fb3d754af91ead66b78d52363"
		},
		{
			"version": 3,
			"from": "hx5b802623eb53c6a90df9f29e5808596f3c2bf63e",
			"to": "cx9df59cf2c7dc7ae2dbdec4a10b295212595f2378",
			"stepLimit": 100000000,
			"timestamp": 1623474465294806,
			"nid": 1,
			"value": 0,
			"nonce": 100,
			"dataType": "call",
			"data": {
				"method": "circle_arb"
			},
			"signature": "bdg2sR5aY1yFKq1VI2vnwpADY8WgyZLDVGbOAbXLi1M4X34IcavcDJlfHV9Kq5rsmr+WuyDntqtxF6EF+XyIFQA=",
			"txHash": "0x3fb6f6d024ded001da54f0c5166708f0fbd4c80f96901e9bacf5bb43125264e1"
		},
		{
			"data": {
				"method": "vp",
				"params": {
					"_hash": "258d46b8942884f2928bfd365fc14be62c42ad5cb2f32624e80aefe752808919"
				}
			},
			"stepLimit": 999999999,
			"signature": "7T8AxL1IfcgSnRtc9lL7NU3vCpK4GnOkhgI+S4DfoBUfI2gGaSA40wxmmFWm6Ww8vCMUILr3HV1ZAzW+qZOUzgA=",
			"dataType": "call",
			"nid": 1,
			"from": "hx037c73025819e490e9a01a7e954f9b46d89b0245",
			"to": "cx9e3cadcc1a4be3323ea23371b84575abb32703ae",
			"version": 3,
			"timestamp": 1623474466677000,
			"txHash": "0xd6498a5c8e17ecfa2f3bc0ddeb07fa9939319442cd438e407788ca20000876e5"
		}
	],
	"block_hash": "cbf2191b14e4ee37e80f927709fea2b1de308bb1349bccf63e50cf934352e83b",
	"peer_id": "hx262afdeda4eba10fe41fa5ef21796ac2bdcc6629",
	"next_leader": "hx262afdeda4eba10fe41fa5ef21796ac2bdcc6629"
}
{{< /highlight >}}

If you weren’t able to get the latest block data, I’d recommend going through the tutorial again to see if you missed any steps. If you’re unable to successfully debug the issue, feel free to start a discussion on the official ICON Discord.

## Conclusion

In this tutorial, you learned about the ICON SDK, how to communicate with ICON nodes, how to set up a local Python development environment, and how to write a basic Python script to query for the latest block data. With this foundational understanding of Python development, you’ll soon be able to build more complex apps that utilize the ICON blockchain. In the next tutorial, we’ll dig deeper into the ICON SDK to learn how to query for transaction results, make transactions, timestamp data, and more.