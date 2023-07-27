---
title: "xCall tutorial part 4: Adding Unit testing to the smart contracts."
date: 2023-07-24
author: espanicon
slug: x-call-tutorial-part-4-adding-unit-testing
description: xcall tutorial part 4, adding unit testing to the smart contracts
draft: false
tags:
- java
- smart contract
- solidity
- xcall
---
## Introduction

Unit tests are very helpful in the development process, so In this last part of the xCall tutorial series we are going to be creating unit tests for both our Java and Solidity contracts.

## Running Unit Tests for the Java Contract

For running the unit tests in the Java contract, a couple of configuration settings must be setup first.

The `build.gradle` file inside the [contract folder](https://github.com/icon-community/crosschain-voting-dapp-with-rollback/blob/master/contracts/jvm/VotingDapp/build.gradle) must define the set of test related dependencies and the test framework to use:

```gradle
java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
}

dependencies {
    compileOnly("foundation.icon:javaee-api:0.9.5")
    compileOnly("foundation.icon:btp2-xcall:0.6.2")
    implementation("foundation.icon:javaee-scorex:0.5.4.1")

    annotationProcessor("foundation.icon:javaee-score-client:0.10.3")
    compileOnly("foundation.icon:javaee-score-client:0.10.3")

    testImplementation("foundation.icon:javaee-unittest:0.12.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.9.3")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.9.3")
}

optimizedJar {
    mainClassName = 'app.VotingDapp'

    from {
        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
    }
}

test {
    useJUnitPlatform()
    testLogging.showStandardStreams = true
}
```

After defining the setup configurations we can create the test file. For the coverage in the testing, it will depend on you how the tests will be defined for your specific project, in this case to showcase the unit testing process we have defined 5 functions (tests):

* `hasGetXCallContractAddress()`: To verify that the contract has a readonly method called `getXCallContractAddress` and that the returned value of that method is the correct address.
* `hasGetDestinationBtpAddress()`: To verify that the contract has a readonly method called `getDestinationBtpAddress` and that the returned value of that method is the correct value.
* `invokeVoteYes()`: To verify that the contract has a payable method called `voteYes()`.
* `invokeVoteNo()`: To verify that the contract has a payable method called `voteNo()`.
* `callGetVotes()`: To verify that the contract has a readonly method called `getVotes()`.

```java
package app;


import com.iconloop.score.test.Account;
import com.iconloop.score.test.ServiceManager;
import com.iconloop.score.test.TestBase;
import com.iconloop.score.test.Score;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class VotingDappTest extends TestBase {
    private static final ServiceManager sm = getServiceManager();
    private static final Account owner = sm.createAccount();
    private static final String btpAddress = "btp://0xaa36a7.eth2/0x817c542D606ba65b9B158919A77A2Df5AeE2E2EF";
    private static Score DappScore;

    @BeforeAll
    public static void setup() throws Exception {
        DappScore = sm.deploy(owner, VotingDapp.class, owner.getAddress(), btpAddress);
    }

    @Test
    public void hasGetXCallContractAddress() {
        Object response = DappScore.call("getXCallContractAddress");
        System.out.println("xcall: " + response);
        assertEquals(response, owner.getAddress());
    }

    @Test
    public void hasGetDestinationBtpAddress() {
        Object response = DappScore.call("getDestinationBtpAddress");
        System.out.println("btp address: " + response );
        assertEquals(response, btpAddress);
    }

    @Test
    public void invokeVoteYes() {
        DappScore.invoke(owner, "voteYes");
    }

    @Test
    public void invokeVoteNo() {
        DappScore.invoke(owner, "voteNo");
    }

    @Test
    public void invokeGetVotes() {
        Object response = DappScore.call("getVotes");
        System.out.println("votes: " + response );
    }
}
```

## Running Unit Tests for the Solidity Contract

For running the unit tests in the Solidity contract we use truffle. The configuration is defined in the `./truffle.config.js` file at the root of the project:
```javascript

module.exports = {
  contracts_directory: "./contracts/solidity/contracts",
  contracts_build_directory: "./contracts/solidity/build",
  migrations_directory: "./contracts/solidity/migrations",
  test_directory: "./contracts/solidity/test",
  ...
}
```

If you have experience unit testing in javascript with Mocha the process for unit testing the Solidity contract with truffle is very similar, you can find more [detailed information in the official docs](https://trufflesuite.com/docs/truffle/how-to/debug-test/write-tests-in-javascript/).

```javascript
const VotingDapp = artifacts.require("VotingDapp");
const { BigNumber } = require("ethers");
const { strToHex, isValidEVMAddress } = require("../../../utils/utils");

contract("VotingDapp", accounts => {
  const deployer = accounts[0];
  const voteYes = strToHex("voteYes");

  // test #1 - should return the total votes
  it("should cast a vote for yes and return the total votes", async () => {
    const dapp = await VotingDapp.deployed();
    await dapp.handleCallMessage("btp://network/account", voteYes, {
      from: deployer
    });
    const response = await dapp.getVotes();
    const votesAmount = response["0"].toString();

    assert("1" === votesAmount, "The vote was not casted correctly");
  });

  // test #2 - should return a valid contract address
  it("should return a valid contract address", async () => {
    const dapp = await VotingDapp.deployed();
    const svcCall = await dapp.getCallService();
    assert(isValidEVMAddress(svcCall), "svcCall is not a valid EVM address");
  });

  // test #3 - should return a valid contract address
  it("returned svcCall address should be equal to supplied address in constructor during deployment", async () => {
    const dapp = await VotingDapp.deployed();
    const svcCall = await dapp.getCallService();
    assert(
      deployer === svcCall,
      "svcCall equal to the address suplied in constructor during deployment"
    );
  });

  // test #4 - should revert transaction
  it("should revert transaction when votes cap is reached", async () => {
    const dapp = await VotingDapp.deployed();
    let revertReason = null;
    for (let i = 0; i < 10; i++) {
      try {
        await dapp.handleCallMessage("btp://network/account", voteYes, {
          from: deployer
        });
      } catch (e) {
        revertReason = e.reason;
      }
    }
    assert(
      revertReason === "VotesCapReached",
      "The transaction was not reverted correctly"
    );
  });

  // test #5 - should return the votes cap
  it("should return the votes cap and the value should be 10", async () => {
    const dapp = await VotingDapp.deployed();
    const response = await dapp.getVotesCap();
    const votesCap = response.toString();
    console.log("votesCap", votesCap);
    assert(votesCap === "10", "The votes cap is not 10");
  });
});
```

## Conclusion

In this tutorial we finish up the xCall series setting up the unit tests for the Java and Solidity contracts.

We invite you to use xCall and give your projects cross chain capabilities, if you need help or want to join our developer community you can visit the [Discord Channels for the ICON Project](https://icon.community/icondiscord/).

## Further Resources
* Smart contracts in the official docs: https://docs.icon.community/icon-stack/smart-contracts
* Java score examples: https://github.com/icon-project/java-score-examples
* Javaee scorex: https://github.com/icon-project/javaee-scorex
* javaee api docs: https://www.javadoc.io/doc/foundation.icon/javaee-api/latest/index.html
