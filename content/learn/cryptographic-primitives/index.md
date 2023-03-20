---
title: "Cryptographic Primitives"
date: 2023-03-20
slug: cryptographic-primitives
author: cyrus-vorwald
description: Cryptographic primitives are the basic building blocks of cryptography. They are the foundation upon which more complex cryptographic algorithms and protocols are built. These primitives include functions such as encryption, decryption, digital signature, and key exchange.
---

Cryptographic primitives are the basic building blocks of cryptography. They are the foundation upon which more complex cryptographic algorithms and protocols are built. These primitives include functions such as encryption, decryption, digital signature, and key exchange. They are designed to provide specific security properties, such as confidentiality, integrity, and authenticity.

One of the main distinguishing factors of a blockchain compared to other data stores is in the way it uses cryptography. Because all transactions are cryptographically secured, there is no need for an intermediary to handle identity and access management. Cryptographic primitives allow for secure and decentralized management of user identities and access to the blockchain network.

## Hashing Functions

A hashing function is a mathematical function that takes an input and returns a fixed-size string of characters, or hash. Hashing functions are commonly used in cryptography to create digital signatures and to verify the integrity of data.

SHA3-256 is a commonly used hash function.

SHA3-256("Hello world") = "369183d3786773cef4e56c7b849e7ef5f742867510b676d6b38f8e38a222d8a2"

SHA3-256("hello world") = "644bcc7e564373040999aac89e7622f3ca71fba1d972fd94a31c3bfbf24e3938"

Modifying one letter completely changes the result and neither are interpretable. The only way to reverse-engineer the input string "Hello world" from "369183d3786773cef4e56c7b849e7ef5f742867510b676d6b38f8e38a222d8a2" is through brute-force, which is computationally infeasible because of the number of permutations.

### Security Properties of Hashing Functions

Hashing functions have several important security properties that make them useful for cryptographic applications. These properties include:
**Determinism**: A given input will always produce the same output.
**Pre-image resistance**: Given a hash, it is computationally infeasible to find an input that would produce that hash.
**Collision resistance**: It is computationally infeasible to find two different inputs that produce the same hash.
**Fixed-length output**: Regardless of the size of the input string, the hash function will always generate an output string of the same length.

### How Blockchains Use Hashing Functions

Blockchains use hashing functions to secure the blockchain and efficiently validate transactions.

## Asymmetric Key Cryptography

Asymmetric key cryptography, or public-key cryptography, is a method of encrypting and signing data using two different keys - a public key and a private key. The public key can be freely shared, while the private key must be kept secret. The private key is randomly generated. The public key is derived from the private key using a public key generation algorithm, which holds additional security constraints. Data that is encrypted using the public key can only be decrypted using the corresponding private key, and vice versa. This allows for secure communication even if the public key is known to an attacker.

### Digital Signatures

A digital signature algorithm is used to ensure the authenticity of a digital message. generating a unique hash of the message or document and encrypting it using the sender’s private key

#### Elliptic Curve Digital Signature Algorithm (ECDSA)

An elliptic curve is a curve defined by the equation y^2 = x^3 + ax + b. It is particularly useful because it uses relatively short key lengths compared to other digital signature algorithms.

#### Key Generation

The key generation process of ECDSA involves choosing a specific elliptic curve and a point on that curve, known as the generator point. These two elements are publicly known and are used to generate a public/private key pair. The generator point is a selected point on the elliptic curve that can generate every point on the curve through scalar multiplication. Scalar multiplication is a process of adding a point on the curve to itself a certain number of times.

For example, the generator point (Gx, Gy) on secp256k1, the elliptic curve used by Bitcoin, ICON, and many other cryptocurrencies, is:

Gx = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798

Gy = 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8

The private key is a randomly generated number, and the public key is a point on the curve that is obtained by performing scalar multiplication on the generator point and the private key.

#### Signature Generation

In ECDSA, the private key is used to create a signature by generating a random number and performing a series of mathematical operations, including modular arithmetic and elliptic curve point multiplication, on the nonce and the hash of the message.

### Public Key Recovery

Public key recovery is a technique that allows a recipient to obtain the public key of a sender from a digital signature. This is commonly useful in blockchains, where you want to verify that a signature came from a certain public key.

### How Blockchains Use Asymmetric Key Cryptography

Blockchains use asymmetric key cryptography for wallet addresses and digital signatures. Each user on the blockchain network has a unique public and private key pair, and transactions on the blockchain are signed using the private key. The public key can be used to verify the authenticity of the signature and confirm that the transaction was indeed initiated by the owner of the corresponding private key. The user's public key corresponds to a wallet address, or username, and the private key corresponds to the password. Both the username and password are automatically generated.

## Merkle Trees

A Merkle tree is a data structure that efficiently verifies the integrity of large sets of data. It is a binary tree where each leaf node is a hash of some data, and each non-leaf node is the hash of its child nodes.

Blockchains use Merkle trees to represent a set of transactions in a block and to efficiently verify that a specific transaction is included in the block. Each transaction in a block is hashed. The leaf nodes of the Merkle tree are the hashes of the transactions, and each non-leaf node is the hash of its child nodes. The root of the Merkle tree represents the entire set of transactions in the block. The Merkle root is included in the block header, along with other information such as the previous block hash and the current block height.

The block, along with its header and the Merkle root, is broadcasted to the network for verification. When a node receives a new block, it can verify the integrity of the transactions in the block by reconstructing the Merkle tree and checking that the root hash matches the one included in the block header.

### Traversal

Traversing a Merkle tree involves starting from the desired transaction and working up the tree to the root hash. The path from the transaction to the Merkle tree root is called a Merkle proof.

### Insertion

Inserting into a Merkle tree typically involves creating a new leaf node for the data being inserted, and then repeatedly combining pairs of sibling nodes and hashing their concatenated values to create new parent nodes until a single root node is reached. This may require reconstructing log(n) parts of the tree.

## Merkle Proofs

A Merkle proof is a way to prove that a specific piece of data is included in a Merkle tree without revealing the entire tree. It is a small set of hashes that starts from the desired data and works its way up the tree to the root hash. By providing the Merkle proof and the root hash, it can be verified that the desired data is included in the tree without revealing any other information.

### How Blockchains Use Merkle Proofs

Let’s say a user wants to prove that a specific transaction is included in a particular block on the blockchain. This is called a proof of inclusion. The naive approach is for the prover to generate a merkle proof and submit that to the verifier. Here’s how it works:

1. The prover starts by locating the leaf node in the Merkle tree that corresponds to the desired transaction.
2. The prover then follows the path from the leaf node to the root of the tree, collecting the hashes of the sibling nodes along the way.
3. The prover now has a set of hashes that make up the Merkle proof for the transaction.
4. The prover then sends the Merkle proof, along with the root hash of the tree and the block header, to the verifier for verification. The block header contains the aggregate signature of validators that signed the block.
5. The verifier receives the Merkle proof, root hash, and block header and performs the following steps:
    - The verifier recovers the public key(s) of the aggregate signature of validators using public key recovery.
    - Using the block header, the verifier calculates the root hash of the Merkle tree for that block.
    - The verifier reconstructs the path from the leaf node to the root, using the hashes provided in the Merkle proof.
    - The verifier compares the root hash from the Merkle proof to the one calculated from the block header.
6. If the root hash from the Merkle proof matches the one calculated by the verifier, the transaction is included in the block.

A more complex approach would be to optimize the size of the proof and verification process, which is what zero-knowledge proofs are for.
