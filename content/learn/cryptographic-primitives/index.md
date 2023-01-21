Cryptographic Primitives
Cryptographic primitives are the basic building blocks of cryptography. They are the foundation upon which more complex cryptographic algorithms and protocols are built. These primitives include functions such as encryption, decryption, digital signature, and key exchange. They are designed to provide specific security properties, such as confidentiality, integrity, and authenticity.

Hashing Functions
A hashing function is a mathematical function that takes an input (or 'message') and returns a fixed-size string of characters, which is known as a 'hash' or 'digest'. Hashing functions are commonly used in cryptography to create digital signatures and to verify the integrity of data.
Security Properties of Hashing Functions
Hashing functions have several important security properties that make them useful for cryptographic applications. These properties include:
Determinism: A given input will always produce the same output.
Pre-image resistance: Given a hash, it is computationally infeasible to find an input that would produce that hash.
Collision resistance: It is computationally infeasible to find two different inputs that produce the same hash.

Asymmetric Key Cryptography
Asymmetric key cryptography, or public-key cryptography, is a method of encrypting and signing data using two different keys: a public key and a private key. The public key can be freely shared, while the private key must be kept secret. Data that is encrypted using the public key can only be decrypted using the corresponding private key, and vice versa. This allows for secure communication even if the public key is known to an attacker.

Public Key Recovery
Public key recovery is a technique that allows a recipient to obtain the public key of a sender from a digital signature. This is commonly useful in blockchains, where you want to verify that a signature came from a certain public key.

Accounts, Wallets, and Addresses
An account is a virtual representation of a user or entity that holds a balance and can participate in transactions. A wallet is a software application that allows a user to interact with their account, such as sending and receiving transactions. An address is a unique identifier that is associated with an account and is used to send and receive transactions.

Merkle Trees
A Merkle tree is a data structure that efficiently verifies the integrity of large sets of data. It is a binary tree where each leaf node is a hash of some data, and each non-leaf node is the hash of its child nodes.

Blockchains use Merkle trees to represent a set of transactions in a block and to efficiently verify that a specific transaction is included in the block. Each transaction in a block is hashed. The leaf nodes of the Merkle tree are the hashes of the transactions, and each non-leaf node is the hash of its child nodes. The root of the Merkle tree represents the entire set of transactions in the block. The Merkle root is included in the block header, along with other information such as the previous block hash and the current block height.

The block, along with its header and the Merkle root, is broadcasted to the network for verification. When a node receives a new block, it can verify the integrity of the transactions in the block by reconstructing the Merkle tree and checking that the root hash matches the one included in the block header.

Traversal
Traversing a Merkle tree involves starting from the desired transaction and working up the tree to the root hash. The path from the transaction to the Merkle tree root is called a Merkle proof.

Insertion
Inserting into a Merkle tree typically involves creating a new leaf node for the data being inserted, and then repeatedly combining pairs of sibling nodes and hashing their concatenated values to create new parent nodes until a single root node is reached. This may require reconstructing log(n) parts of the tree.

To verify a specific transaction, a node can use a Merkle proof, which is a small set of hashes that starts from the desired transaction and works its way up the tree to the root hash. By providing the Merkle proof and the root hash, it can be verified that the desired transaction is included in the block without revealing any other information.
Merkle Proofs
A Merkle proof is a way to prove that a specific piece of data is included in a Merkle tree without revealing the entire tree. It is a small set of hashes that starts from the desired data and works its way up the tree to the root hash. By providing the Merkle proof and the root hash, it can be verified that the desired data is included in the tree without revealing any other information.

Let’s say a user wants to prove that a specific transaction is included in a particular block on the blockchain. This is called a proof of inclusion. The naive approach is for the prover to generate a merkle proof and submit that to the verifier. Here’s how it works:

The prover starts by locating the leaf node in the Merkle tree that corresponds to the desired transaction.
The prover then follows the path from the leaf node to the root of the tree, collecting the hashes of the sibling nodes along the way.
The prover now has a set of hashes that make up the Merkle proof for the transaction.
The prover then sends the Merkle proof, along with the root hash of the tree and the block header, to the verifier for verification. The block header contains the aggregate signature of validators that signed the block.
The verifier receives the Merkle proof, root hash, and block header and performs the following steps:
The verifier recovers the public key(s) of the aggregate signature of validators using public key recovery.
Using the block header, the verifier calculates the root hash of the Merkle tree for that block
The verifier reconstructs the path from the leaf node to the root, using the hashes provided in the Merkle proof.
The verifier compares the root hash from the Merkle proof to the one calculated from the block header.
If the root hash from the Merkle proof matches the one calculated by the verifier, the transaction is included in the block.
