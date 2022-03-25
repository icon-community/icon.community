---
title: New Year, New Tracker — Geometry Labs Rolls Out Updates for ICON Blockchain Tracker
date: 2022-02-07
slug: new-year-new-tracker-geometry-labs-rolls-out-updates-for-icon-blockchain-tracker-b616cc2b155e
description: The ICON Foundation is proud to announce that Geometry Labs has soft launched a new version of the ICON tracker.
---

The ICON Foundation is proud to announce that Geometry Labs has soft launched a new version of the [ICON tracker](http://tracker.icon.community). Upgrades to the tracker include improvements to responsiveness, new streaming APIs, and an open backend that can be used or extended by other projects across the ICON community.

The tracker was also rebuilt to accommodate new [ICON 2.0 features](https://medium.com/helloiconworld/icon-2-0-introducing-a-new-blockchain-software-architecture-based-on-go-8874107a4e58) along with changes to the governance that came with [IISS 3.1](https://docs.google.com/spreadsheets/d/1jh9QF5lhP9mdNDDrlbKfButaScVTeUHwFwzoa-Mfgdk/edit#gid=783852509). Development was supported primarily through a grant from the Foundation along with CPS grants focused on DevOps improvements. While the new tracker is completely functional and ready to use, the old tracker will still be kept active as Geometry Labs starts the transition to the new tracker.

Keep reading below for more technical details; otherwise, bookmark the [new tracker](http://tracker.icon.community) and feel free to provide feedback on [Github](https://github.com/geometry-labs/icon-explorer/issues).

## General Architecture and Design

The new tracker was built based on a microservice architecture with domains split across blocks, transactions, logs, addresses, governance, and contracts. Services were primarily written in Go along with Python, and are all fed by an indexer and backed by PostgreSQL. This design splits the types of queries that are being served to their respective domains so that query parameters can be exposed to support associated use cases. For instance, when using the transactions service, you can filter using to/from addresses along with filtering by transaction method to be able to drill down into only the most relevant transactions.

### Streaming APIs

Along with delivering REST endpoints to support historical transactions, live transactions are also streaming with newly developed websockets. As an example, when you load the tracker landing page you will see records updating on the tables live as the transactions are happening. This is similar to how Etherscan type-trackers update, but with lower latency. These websockets are publicly available and can be used for other use cases across the ICON ecosystem such as live transactions feeds into dashboards like stats.balanced.network, which will see improvements over the coming months.

### Responsiveness Improvements

At times, certain page loads in the old tracker were admittedly a little slow. The new tracker is now faster across the board with only the busiest pages such as the governance taking any measurable amount of time to load, although still in less than 2 seconds. Effort was made to optimize the queries so that every view will now load much faster.

### Open Source Public APIs

One of the most exciting components of this this project is the new APIs that can be used by other projects across the ecosystem. Developers can now leverage the backend by exploring the API docs linked to in our repository to power frontends for various DApps across the ecosystem. All the code is public and GeometryLabs will be accepting push requests to enhance its functionality and deliver more focused queries. If your use case strays outside of the scope, GeometryLabs would be happy to help adopt their practices to your needs for those building on ICON.

## Upcoming Features

Everything is ready to be used, but there are still a few more items in process.

### Contract Verifications

Very soon users will be able to upload their source code for Java smart contracts and make it available to view from within the tracker. This was relatively easy to do with Python contracts as the raw source code was available, but because Java compiles the contracts, developers will have to take an extra step of uploading their contract source code through an on-chain transaction. Source code is verified and will be available to users to visualize from within a contract’s tracker detail page. Additionally metadata about the contract such as team name and social media details will be available for update much like they are available for P-Reps.

### Global Load Balanced Endpoints

We are currently running our clusters in US and Europe on AWS but plan to expand that footprint to other regions and transition to using very powerful bare metal instances as the main nodes. DApps are able to use the new tracker endpoints now at api.icon.geometry.io. The endpoints will be made much more robust after the migration to these bare metal instances.

### More Tracker Improvements

While the bulk of the upgrades were to the backend, the project was always aimed at building something that can be extended to deliver more features to the frontend. There is a list of upgrades that will be suggested to the community ranging from server upgrades to frontend improvements but as always, please provide feedback by leaving issues in the GeometryLabs Github, reaching out over Telegram, or, if you are a developer, by simply creating push requests in the respective repositories.