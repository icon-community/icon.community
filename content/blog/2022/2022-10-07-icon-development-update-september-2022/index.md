---
title: ICON Development Update – September 2022
date: 2022-10-07
description: In September, the ICON team continued making progress on ICON 2.0, BTP, and ICON Bridge.
slug: icon-development-update-september-2022
---

In September, the ICON team continued making progress on BTP,  ICON Bridge Integrations and ICON 2.0. In this article, we’ll share what we worked on in September and our development plans for October.

## BTP Architecture

This month was focused on testing and planning potential feature implementations including block update rewards, relay fees for routed messages and xCall service features. Integration testing for the core BTP components is ongoing and expected to be largely completed in October barring any issues or architectural design challenges. 

The primary ongoing challenge has been handling Relay fees for routed messages. A few architectural design options have been outlined, and a final decision is expected to be reached in the coming weeks. 

Implementation of fees for routed messages is also expected to begin in October. These implementation details may lead to additional integration testing requirements as well.


### Last 30 Days

* Scoped out the work for rewarding block updates, but ultimately decided this feature may not be necessary at launch. If it proves necessary, we have the design ready to go.
* Designed a few options for how to handle relay fees for routed messages
* Continued running integration tests on edge cases and new features.
* Continued to fix bugs discovered during integration testing.
* Added new features to xCall service based on Relay fee design.

### Next 30 Days

* Finalize the process for handling relay fees for routed messages
* Begin implementation work for relay fees on routed messages
* Implement and debug the state sync to handle for BTP Blocks
* Add more event logs to BTP Messages for easier message-status tracking
* Change Message Broker and xCall service specs to account for Relay fees in the BMC and protocol fees in the xCall


## Interoperability Integrations

As you may know, the ICON development team has doubled down on open sourcing ICON Bridge development and integration. The team has made the ICON Bridge integration github public, with integration teams moving to a monthly release schedule for releases (published [here](https://www.google.com/url?q=https://github.com/icon-project/icon-bridge/releases/tag/v0.0.10&sa=D&source=docs&ust=1665118110493503&usg=AOvVaw2aok9ohcb7zea4KqcQvQVC)) and progress reports (published [here](https://github.com/icon-project/grants-program/tree/main/progress-reports/icon-bridge)). Once these updates are submitted, we will release a separate report summarizing what has been accomplished and what is planned for next month.

## ICON 2.0

In September, we made progress on upgrading GoLoop, testing Rosetta API integration and developing a new proposal for a calling method of ChainSCORE. The new custom proposal will easily extend functions by adding a parameter instead of submitting a new proposal for a new function (current version) whenever ChainSCORE is changed.

### Last 30 Days ICON 2.0

* Released "[GoLoop version 1.2.12](https://github.com/icon-project/goloop/releases/tag/v1.2.12)", onboarding several main validators including SejongNet, BerlinNet, LisbonNet, MainNet Citizen, ICON_Foundation, ICONFi, and Velic
* Developed new proposal for ICON calling method of ChainSCORE

### Last 30 Days Rosetta

* Conducted exhaustive testing patching errors like locked account handling and incorrect address transfer
* Completed mainnet data sync after observing speed issues of MainNet due to increase in disk usage and database pruning. Team fixed the speed issue and the sync was completed mid-September
* Implemented exception handling associated with duplicate tx incidents that occurred in the past migration
* Created a docker file that is based on Ubuntu (current version is Alpine) as required in Rosetta Readiness Checklist

### Next 30 Days

* Create Ubuntu-based docker file for Rosetta 
* Vet downloading Mainnet Backup DB as custom-made function