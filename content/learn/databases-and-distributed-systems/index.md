---
title: "Databases and Distributed Systems"
date: 2023-03-21
slug: databases-distributed-systems
author: cyrus-vorwald
description: In this article, we will provide an introduction to the backend databases powering blockchain engines. We will also look at how distributed systems are used to achieve fault tolerance and high availability in blockchain networks.
---

A blockchain is essentially a security layer or communications protocol built on top of a distributed database. In this article, we will provide an introduction to the backend databases powering blockchain engines. We will also look at how distributed systems are used to achieve fault tolerance and high availability in blockchain networks. Whether you are a developer, a miner, or just interested in the technology, understanding the basics of databases and distributed systems is essential for understanding how blockchains work and whether they are a good choice for your applications.

## Databases

A database is an organized collection of data used to efficiently store, modify, and access information. There are a number of different methods and models used to organize the data in a database, with the main considerations being operation speed, storage space, and developer productivity.

### State machine
A state machine is an abstract mathematical representation of the execution of a digital system. It is described by two things:

1. All possible initial states
2. What next states can follow any given state

### Database states

A database can be represented as a state machine, where the state of the database is the collection of all the data stored in the database, and the state transitions are the actions that change the state of the database, such as inserting, updating, or deleting data.

The initial state of the database is empty, and state transitions are made up of applying transactions to the database.

### Database transactions

A database transaction is the smallest unit of work that results in a database state change. Database transactions must hold 4 key properties: Atomicity, Consistency, Isolation, Durability.

#### Atomicity

A transaction is an atomic unit, which means that it is either completed in its entirety or not 
executed at all.

Consider a scenario where Alice transfers money from her bank account to Bob. A transaction is used to withdraw money from Alice’s account and deposit it into Bob’s account.

The atomicity property of the transaction ensures that either both operations occur or neither of them occur, to avoid the scenario where money is withdrawn from Alice’s account but not deposited into Bob’s account.

#### Consistency

A database can only ever be in a valid state, and a transaction brings the database from one valid state to another. Valid means that the state adheres to the rules and constraints of the database system.

Consider in the bank account transfer scenario, that Alice’s account has $20 in it and Bob’s account has $5 in it. The total between their accounts is $25. The transfer transaction withdraws $10 from Alice’s account to Bob’s account. Alice now has $10 in her account, and Bob has $15. The total between their accounts is still $25.

The consistency property ensures that the transaction exchanged the correct amount of money between both accounts, and that no money was created or destroyed in the transaction. The total amount of money between accounts remains the same before and after the transaction.

#### Isolation

Multiple transactions can be executed simultaneously without interfering with each other. This means that transactions are ordered and data races are handled according to some set of rules.

Consider in the bank account transfer scenario that there was a third transaction to exchange money from Alice to Carol that was submitted at the same time as the transfer from Alice to Bob.

The isolation property ensures that the transactions are ordered and conflicts are resolved according to some set of rules. These rules are defined by concurrency control methods, and most commonly result in the transactions being serialized. In other words, even though the transfers from Alice to Bob and Alice to Carol both were submitted at the same time, the isolation property means that the transfers are executed sequentially.

#### Durability

Once a transaction is committed, its changes are made permanent and survive any subsequent failures or crashes.

Consider the bank account transfer scenario where the transfer transaction completed, and then the bank had a power outage.

The durability property ensures that the transaction persisted after power was restored.

### Transaction states

Transaction states are the different stages of a transaction’s lifecycle. These states are used to track the progress of a transaction, and to ensure that the transaction adheres to the ACID properties.

When multiple computers (cluster nodes) are storing the data, they need to make sure that all of them have stored the data correctly before making it available to people using the system. Each computer needs to wait for the other computers to confirm that they have stored the data correctly before letting people access it.

Commit and rollback operations are used to ensure that the data is stored in a consistent and correct state.

A commit operation is used to confirm that all the data has been stored correctly on all the cluster nodes and it is safe to make it available to clients. It marks the end of a transaction and ensures that all the changes made during the transaction are permanent and cannot be undone.

A rollback operation, on the other hand, is used to undo any changes made during a transaction if it is determined that there was an error or problem with the data storage. It allows the system to return to the previous state before the transaction began, ensuring that the data remains consistent and correct.

These are generally implemented using a two-phase commit (2PC) protocol to ensure atomicity of transactions.

#### Two-phase commit (2PC)

2PC is a protocol used to ensure that a set of distributed transactions are atomic, meaning they are treated as a single, indivisible operation. The protocol coordinates the actions of several distributed systems so that either all the changes made by a set of transactions are committed, or none of them are.

The 2PC protocol is divided into two phases:

Phase 1 (Prepared Phase): Each participating system, called a participant, votes on whether it is prepared to commit the transaction. The coordinator collects all the votes and decides whether to proceed with the commit or to abort the transaction.

Phase 2 (Commit Phase): If the coordinator decides to proceed, it sends a commit message to all participants. Each participant can then make the changes permanent, and respond with an acknowledgement.

If any participant fails to vote or fails to respond to the commit message, the coordinator will assume it's failed and will abort the transaction.

2PC is a primitive used in blockchain consensus protocols. They build on top of the concepts of 2PC, with unique consideration to determining who the coordinator is. In a decentralized blockchain, anyone who runs the blockchain node program can be the coordinator or a voter.

## Key-value store

One of the most common nonrelational database types is the key-value store.

A key-value store database stores data as a collection of key-value pairs, where each key is a unique identifier that is used to retrieve the corresponding value. Both the key and value can be any arbitrary data type, and are commonly implemented as bytes. A key-value store database can be thought of as a distributed hashmap or dictionary, with many optimizations for performance, persistence, and concurrency.

Key-value stores are commonly used as the backend for blockchains. Some examples include
Bitcoin Core uses LevelDB [https://github.com/bitcoin/bitcoin/tree/master/src/leveldb]
Polkadot supports RocksDB and ParityDB [https://github.com/paritytech/parity-db]
Goloop supports RocksDB and LevelDB [https://github.com/icon-project/goloop/tree/70a68831bed63440c566dc37577f2090648c7e21/common/db]

Blockchains generally use key-value stores to store all persisted data. This includes all committed transactions, blocks, other chain state information such as the current block height and network configuration, and block indexing metadata. The exact details of how this data is stored is dependent on the implementation.

## Fault tolerance

Fault tolerance is the ability of a system to continue operating correctly in the event of the failure of one or more of its components. For example, power sources commonly have backup generators. When the power goes out, the backup generator comes online to restore power to the electrical system.

Fault tolerance is achieved through redundancy. Redundancy is the duplication of a system component.

Redundancy is important for blockchains because it allows for multiple nodes to participate in the process of creating new blocks and maintaining the network. If one node fails, another node can take its place, which helps to ensure the continued operation of the network. Redundancy is fundamental to blockchains that have no central authority to manage the network and ensure its continued operation.

The core tradeoff that blockchains make compared to other types of databases is efficiency versus redundancy. Permissionless blockchains are designed to be as redundant as possible. Cryptocurrencies even go so far as to incentivize redundancy. This is to maximize agreement among decentralized nodes on what the state of the database is because there is no central authority to handle disputes. If a mistake is made in a centralized database, an intermediary can modify the database to fix the mistake. Because there is no intermediary, a mistake on a blockchain would require the entire community of participants to make a new copy and abandon the original entirely.

Replication is a form of redundancy commonly used in distributed systems to ensure multiple copies of data or a system are available.

Replication is used in blockchains to ensure that multiple copies of the blockchain's ledger exist across different nodes in the network. This allows for the network to continue functioning even if some nodes become unavailable, as other nodes will still have copies of the ledger. This also allows for multiple parties to validate and reach a consensus on the state of the ledger, which is a key aspect of the security and immutability of the blockchain.

## State machine replication

### Single-primary replication

In single-primary replication, there is a central authority, or primary node, that controls the replication process and coordinates the updates to the database. This database is a single source of truth. Secondary nodes receive updates from the primary node and apply them to their own copies of the data. Only the primary node has write privileges to the main copy of the database. The others can only process read-only transactions. The primary VM is continuously replicated to the secondary VM so that the secondary VM can take over at any point, thereby providing Fault Tolerant protection.

Single-primary replication is commonly used because it allows for efficient updates and simplifies the management of the database. Federated and proof-of-authority blockchains may use single-primary replication depending on their implementation.
### Multi-primary replication

In multi-primary replication, there is no central authority or primary node, and all of the nodes are considered peers. Each node can update the data independently, and the updates are propagated to the other nodes in the network.

Public blockchains that use peer-to-peer networks all use multi-primary replication because multi-primary replication achieves the highest levels of decentralization. Each node in the blockchain network can independently validate and add new blocks to the blockchain, and the updates are propagated to the other nodes in the network. This helps to ensure that the data in the blockchain is accurate and consistent, and that it is not altered by malicious actors. 

## State machine consensus

In the cryptocurrency industry, “consensus” often refers to proof-of-work, proof-of-stake, and delegated-proof of stake. However, these are not consensus protocols. Consensus is the process that determines the order that proposed transactions should be committed.

In single-primary replication, the consensus process is simple. The primary is known and assumed to be trusted. Typically the primary has at least 2 backup copies for failover. If the first primary goes down, the backup takes its place as the new primary.

Systems like Tendermint use a leader-election mechanism where nodes essentially take turns being the primary. The primary node proposes the transaction to be committed to the database, and the secondary nodes vote on whether or not to accept this proposal. ICON’s consensus mechanism is an implementation of Tendermint and works in this way. Validators are chosen by delegated-proof-of-stake, and those validators take turns as the primary and secondary nodes in the consensus process.

## Resource selection mechanisms

Proof-of-work, proof-of-stake, and delegated-proof-of-stake are all resource selection mechanisms to determine which node proposes a transaction and which nodes vote on whether that transaction should be committed. Once the nodes are selected, they follow a consensus protocol to agree upon what the state of the blockchain is.

### Proof-of-work (PoW)

Participating nodes, or miners, compete to solve a complex mathematical problem, and the first one to solve it gets to add a block to the chain and is rewarded for their work. The solution, or proof, is difficult to produce but easy to verify. PoW is designed so that miners spend computational resources, measured in hashes per second, to add a block. The cost deters malicious actors from adding fraudulent blocks to the blockchain.

In Bitcoin, the mathematical problem miners solve is to find a 4-byte number, or nonce, that when combined with the block's data and hashed twice with SHA-256, results in a hash that is below some target value. The first miner that finds a valid nonce gets to add a block to the chain and is rewarded with newly minted Bitcoins.

### Proof-of-stake (PoS)

The key difference between PoW and PoS is that in PoS, participating nodes don’t spend computational resources. Instead, they need to hold, or stake, a certain amount of the cryptocurrency as collateral in order to participate in the network as a validator.

The penalty for failing to validate, or for trying to add a fraudulent block to the chain, is usually the forfeiture, or slashing, of some or all of the staked cryptocurrency.

Validators are selected according to the network rules, which should be unpredictable and unbiased and weighted based on the amount of staked collateral.

### Delegated-proof-of-stake (DPoS)

DPoS is a variation of PoS where a smaller group of validators are elected by the community to validate the network. DPoS uses a voting system to elect the delegates. All token holders can vote for the delegates they trust and prefer, and the top voted delegates are selected to validate the blocks. The number of delegates can vary depending on the implementation, but it's usually a smaller number compared to the number of validators in PoS systems.

The tradeoff between smaller and larger number of PoS validators is speed versus security. If there are a few delegated validators, those elected are in theory going to have the best possible computational resources to validate the network. The fewer the number of nodes, and the better the hardware running the node, the faster the consensus process. However, the top voted delegates may not always be the most suitable for the job or have the best interest of the network. The greater the number of nodes, the less damaging a single node can cause the network.

## Concurrency

Concurrency is the ability of a computer system to perform multiple tasks or processes independently, simultaneously and in parallel. Blockchains execute transactions sequentially because state changes must be deterministic for the state changes to be replicated. There are optimizations that can be made to increase the speed of a blockchain, but generally this means that a blockchain will be slower than other types of databases that could otherwise execute transactions in parallel.

### Serial execution

Serial execution is the sequential ordering of task execution. In a sequential execution system, each instruction is executed in turn, and the next instruction is not executed until the current one has completed. There is no overlap between the execution of different instructions, and each instruction is executed in the order in which it appears.

### Parallel execution

Parallel execution is the simultaneous execution of tasks. In a parallel execution system, independent instructions run simultaneously. This requires coordination and synchronization between tasks, determination of independent instructions, and management of the distribution of tasks and data across the computing resources.

### Concurrency controls

Concurrency controls are used to ensure that multiple transactions can be executed simultaneously without conflicting with each other. A transaction must request a lock on a shared resource before it can access or modify the resource.

If the lock is granted, the transaction can proceed with its work. The lock prevents anything other than the transaction from accessing the shared resource. Once the transaction has completed its work with the shared resource, it releases the lock.

If the lock is not granted, the transaction must wait until the lock is released. If two transactions attempt to update the same record at the same time, one of them will be rolled back to prevent data corruption.

Transactions make use of synchronization primitives internally for lock management and concurrency control.

#### Synchronization primitives

Synchronization primitives coordinate the execution of concurrent threads or processes. They are used to control the access to shared resources and to ensure that the correct order of execution is maintained in concurrent systems.

Synchronization primitives include mutexes, semaphores, events, signals, and condition variables.

##### Mutexes

A mutex provides mutual exclusion to a resource, which means that only one task can access it at a time. It is the most commonly used primitive and is synonymous with a lock.

##### Semaphors

A semaphore is a counter used to limit access to a shared resource. It starts at a defined maximum value, which represents the maximum number of concurrent tasks that can access a shared resource. The value decreases when an operation accesses, or acquires, the shared resource. The value increases when the semaphore is released. If the value falls to zero, any effort to acquire the semaphore will be prevented until another task frees it up. Mutexes use a binary semaphore, meaning that the maximum value is one.

##### Events

An event is a mechanism for one thread or process to notify another thread or process that a specific condition has been met. When a thread needs to wait for a specific condition, it calls the `wait` method on the event, which blocks the thread until the event is signaled by another thread. When the condition is met, another thread signals the event by calling the `signal` method, which wakes up the waiting thread and allows it to proceed.

##### Signals

A signal is a mechanism used to interrupt the execution of a thread and notify it of an event or condition. It is commonly used when a thread needs to be notified of the completion of an operation without having to wait for it.

##### Condition variables

A condition variable provides a convenience mechanism for a task to wait for a change in the state of a shared resource. Instead of having to continuously poll a semaphore to check if the shared resource is available, a task can use a condition variable to wait for a change in the state of the shared resource. Condition variables commonly implement the `wait` and `signal` methods.
