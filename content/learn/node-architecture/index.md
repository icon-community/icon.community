# Understanding the Blockchain Node Architecture

A blockchain is a decentralized, distributed ledger that records transactions across a network of computers. The nodes in a blockchain network are responsible for maintaining the integrity of the network and ensuring that all transactions are valid. In this article, we will explain the different types of nodes in a blockchain network, their roles, and how they communicate with each other.

## Full Nodes

Full nodes are the backbone of a blockchain network. Depending on the network, they may store a copy of either the entire blockchain or some recent history, such as the past day. For networks that do not store full history in full nodes, they store full history in archival nodes, which are basically the same full nodes except that they store more data. Archival nodes normally get developed in response to the size of a blockchain getting so large that it justifies splitting the full node into multiple types. Full nodes validate transactions and blocks, participate in consensus, and can independently verify the validity of transactions.

## Light Clients

Light clients do not store a copy of the entire blockchain. Instead, they rely on full nodes to provide them with information about the state of the blockchain. Light clients are less secure than full nodes, as they rely on the trustworthiness of full nodes. However, they are useful for devices with limited resources, such as mobile devices.

Light clients can verify proof of inclusion of a transaction within a block sent by a full node. Light clients can also perform operations such as sending transactions, but it needs to rely on the full node to validate and propagate them.

Light clients may be compact and efficient enough to run on-chain. This is useful in interoperability because it enables on-chain verification of the inclusion of a transaction in another blockchain. This enables secure communication between two heterogeneous blockchains.

## Node Networking

Nodes in a blockchain network communicate with each other to propagate transactions and blocks. The nodes form a peer-to-peer network, where each node is connected to one or more other nodes. The nodes exchange information using a handshake protocol which is used to establish a connection between two nodes.

## Node Discovery

Node discovery is the process of finding other nodes in a blockchain network. New nodes broadcast their existence to the network, and existing nodes keep a list of known nodes. This allows new nodes to join the network and connect to other nodes.

## Block Syncing

Block syncing is the process of downloading and verifying blocks from other nodes. When a new node joins a blockchain network, it needs to download and validate the entire blockchain. The node requests blocks from other nodes, and when it receives a block, it verifies its integrity by checking the block's hash and digital signature.

## Block Broadcasting
Block broadcasting is the process of sending a new block to other nodes in the network. When a node mines a new block, it sends the block to all its connected nodes. The nodes then validate the block and add it to their copy of the blockchain.

## Transaction Broadcasting

Transaction broadcasting is the process of sending a new transaction to other nodes in the network. When a user creates a new transaction, it is sent to the node's connected nodes. The nodes then validate the transaction and add it to the memory pool.

## Memory Pool

The memory pool is a data structure that stores unconfirmed transactions. When a node receives a new transaction, it adds it to the memory pool. When a new block is mined, the transactions in the memory pool are included in the block and confirmed.

## Event Ordering

Event ordering is the process of determining the order of transactions and blocks in a blockchain. Transactions and blocks are assigned a timestamp, and the nodes in the network use this timestamp to order the events.

## Message Exchanging

Message exchanging is the process of sending and receiving messages between nodes in a blockchain network. Nodes use a protocol called TCP (Transmission Control Protocol) to send and receive messages.

## Request-Response

The request-response is a pattern for message exchanging between nodes. In this pattern, a node sends a request message to another node, and the other node sends a response message. This is used for tasks such as block syncing, transaction broadcasting and node discovery.

## Remote Procedure Call (RPC)

Remote Procedure Call (RPC) is a method for message exchanging between nodes that allows a node or wallet to call a function on another node as if it were a local function. This allows nodes to easily access and manipulate data on other nodes, and works well because all nodes are replicas of each other.
