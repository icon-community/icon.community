---
title: "How to create a wallet account"
date: 2023-03-12
author: espanicon
slug: how-to-create-a-wallet-account
description: Learn how to create a wallet account on the ICON Blockchain
draft: false
tags:
- wallet
- javascript
- goloop
---
## Prerequisites

To follow this tutorial is necessary to setup the project folder accordingly to the method that you are going to be using for creating the account. Follow these instructions for setting up the project folder:

* [Setting up the project folder](https://docs.icon.community/icon-stack/accounts-and-authentication#setting-up-the-project-folder.)

## Using goloop CLI

[Goloop CLI](https://docs.icon.community/concepts/blockchain-components/goloop) is a terminal utility that you can use to generate accounts and make RPC JSON requests easily from the command line.

For a list of all the commands that you can use please visit the [following link](https://github.com/icon-project/goloop/blob/master/doc/goloop_cli.md#goloop).

### Generating private keys, public keys and addresses
Using the `goloop` CLI you can create [keystores files](https://ethereum.org/en/developers/docs/data-structures-and-encoding/web3-secret-storage/) (accounts) easily by using the following command:

```bash
$ goloop ks gen -p 1234
```

The `-p` flag can be used to setup the password for the keystore file.

### Generating a signature and sending an RPC JSON request

Authentication and generating the signature for a transaction is handled internally by the `goloop` CLI, you just need to specify the keystore file and the password to send the RPC JSON request for a transaction.

An example of a transaction for sending ICX to another account is described in the following code block:

```bash
$ goloop rpc sendtx transfer --uri "http://localhost:9000/api/v3" --nid "3" --step_limit "2000000" --to "hxb6b5791be0b5ef67063b3c10b840fb81514db2fd" --value "1000" --key_password "1234" --key_store ./path/to/wallet.json
```

For a list of all possible commands related to RPC JSON Requests please visit the [following link](https://github.com/icon-project/goloop/blob/master/doc/goloop_cli.md#goloop-rpc).

## Using icon-sdk-js

### Generating private keys, public keys and addresses

To create a wallet we can simply call the `.create()` method of the IconWallet object in the icon-sdk-js.

```javascript
const IconService = require("icon-sdk-js");
const { IconWallet } = IconService.default;
const wallet = IconWallet.create();
console.log(`Private Key: ${wallet.getAddress()}`);
console.log(`Private Key: ${wallet.getPrivateKey()}`);
```

You can call existing EOA by calling `loadKeystore` and `loadPrivateKey` function.

After creation, address and private Key can be looked up.

```javascript
// Load Wallet with private key
const walletLoadedByPrivateKey = IconWallet.loadPrivateKey('38f792b95a5202ab431bfc799f7e1e5c74ec0b9ede5c6142ee7364f2c84d72f6');

console.log(walletLoadedByPrivateKey.getAddress());
// Output: hx902ecb51c109183ace539f247b4ea1347fbf23b5

console.log(walletLoadedByPrivateKey.getPrivateKey());
// Output: 38f792b95a5202ab431bfc799f7e1e5c74ec0b9ede5c6142ee7364f2c84d72f6);

// Get keystore object from wallet. Keystore file will have a password
const keystoreFile = walletLoadedByPrivateKey.store('qwer1234!');

// Load wallet with keystore file
const walletLoadedByKeyStore = IconWallet.loadKeystore(keystoreFile, 'qwer1234!');

console.log(walletLoadedByKeyStore.getAddress());
// Output: hx902ecb51c109183ace539f247b4ea1347fbf23b5

console.log(walletLoadedByKeyStore.getPrivateKey());
// Output: 38f792b95a5202ab431bfc799f7e1e5c74ec0b9ede5c6142ee7364f2c84d72f6);
```

After Wallet object creation, Keystore file can be stored by calling `store` function. After calling `store`, Keystore JSON object can be looked up with the returned value.

```javascript
const privateKey = '38f792b95a5202ab431bfc799f7e1e5c74ec0b9ede5c6142ee7364f2c84d72f6';
const wallet = IconWallet.loadPrivateKey(privateKey);
console.log(wallet.store('qwer1234!'));
// Output:
// {
// "version": 3,
// "id": "e00e113c-1e45-47e4-b732-10f3d1903d75",
// "address": "hx7d3d4c743bb82b927ea8a0551a3b9288e722ac84",
// "crypto": {
//     "ciphertext": "d5df37230528bbfc0015e93c61e60041a31fb63266f61ffec60a31f474d4d7d0",
//     "cipherparams": {
//         "iv": "feaf0cc19678e4b78369904a99ba411e"
//     },
//     "cipher": "aes-128-ctr",
//     "kdf": "scrypt",
//     "kdfparams": {
//         "dklen": 32,
//         "salt": "e2e3666919161044f7b369d6ad4296380d4a13b9b5e844301c64a502ea3da240",
//         "n": 16384,
//         "r": 8,
//         "p": 1
//     },
//     "mac": "43789e78de4744d06c14cf966b9609fadbcd815b5380caf3f778797f9824d9d7"
// }
// }
```

### Generating a signature and sending an RPC JSON request

Using the `icon-sdk-js` we can create a transaction object using the `IcxTransactionBuilder` class and then create the signature using the `SignedTransaction` class.

```javascript
const IconService = require("icon-sdk-js");

const {
  IconWallet,
  IconBuilder,
  SignedTransaction,
  IconConverter,
  IconAmount
} = IconService.default;

const { IcxTransactionBuilder } = IconBuilder;

function signTx(wallet, to, amount) {
  try {
    // select the correct NID depending on the network
    // https://docs.icon.community/icon-stack/icon-networks/main-network
    const nid = 2;

    // convert amount to transfer into loop units, which is the smallest unit of currency
    const amountInLoop = IconAmount.of(amount, IconAmount.Unit.ICX).toLoop();
    const txObj = new IcxTransactionBuilder()
      .from(wallet.getAddress())
      .to(to)
      .value(amountInLoop)
      .stepLimit(IconConverter.toBigNumber("2000000"))
      .nid(nid)
      .nonce(IconConverter.toBigNumber("1"))
      .version(IconConverter.toBigNumber("3"))
      .timestamp(new Date().getTime() * 1000)
      .build();
    const signedTx = new SignedTransaction(txObj, wallet);
    return signedTx;
  } catch (err) {
    console.log("Unexpected error signing transaction");
    console.log(err);
    return null;
  }
}

// private key of wallet sending transaction
const pk = "1111111111111111111111111111111111111111111111111111111111111111";
// create wallet from private key
const wallet = IconWallet.loadPrivateKey(pk);
// address receiving the transfer
const addressTo = "hx1111111111111111111111111111111111111111";

const signedTx = signTx(wallet, addressTo, 1);
console.log(`signed tx: ${JSON.stringify(signedTx.getProperties())}`);
```

The result will be the params of the RPC JSON call like in the following example:

```json
{
  "to": "hx1111111111111111111111111111111111111111",
  "from": "hx396031be52ec56955bd7bf15eacdfa1a1c1fe19e",
  "nid": "0x2",
  "version": "0x3",
  "timestamp": "0x5f55518cac340",
  "stepLimit": "0x1e8480",
  "value": "0xde0b6b3a7640000",
  "nonce": "0x1",
  "signature": "TCaN1RDt8MpVKD2/Fk/PTrHfqHgyaN0ZiiyVkGOmzBYoCJ9iO5H+qyuI1M7nshONy7DHk5w3g+nmsSETOyd9FgE="
}
```

To send the transaction it will be necessary to first create an instance of the `IconService` with the correct `HttpProvider` depending on the network that you want to use and then run an async call to execute the transaction.

```javascript
const IconService = require("icon-sdk-js");

const {
  IconWallet,
  IconBuilder,
  SignedTransaction,
  IconConverter,
  IconAmount,
  HttpProvider // we import the HttpProvider class
} = IconService.default;

 // …
 // …

const httpProvider = new HttpProvider(
  "https://lisbon.net.solidwallet.io/api/v3"
);
const iconService = new IconService.default(httpProvider);

async function runAsync() {
  const txHash = await iconService.sendTransaction(signedTx).execute();
  console.log(`TxHash: ${txHash}`);
}

runAsync()
```

## Further Resources
* https://docs.icon.community/getting-started/how-to-create-a-wallet-account
