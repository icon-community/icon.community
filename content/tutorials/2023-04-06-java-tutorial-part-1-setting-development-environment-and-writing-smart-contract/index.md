---
title: "Java Tutorial Part 1: Setting Development Environment and Writing Smart Contract"
date: 2023-04-06
author: espanicon
slug: java-tutorial-part-1-setting-development-environment-and-writing-smart-contract
description: Java tutorial series part 1 How to setup the development environment and writing smart contracts
draft: false
tags:
- java
- smart contract
- gradle
---
## Introduction

A smart contract is a self-contained program that is stored and replicated on a blockchain network. When a contract is deployed to the blockchain, it becomes a part of the blockchain and is stored on every node in the network.

In the following guide we are going to explain in detail the process of:
* Setting up the development environment for writing a smart contract on ICON
* Writing a sample smart contract that will work as a poll for people to cast a vote “Yes” or “No”.
* Compile, optimize and deploy the smart contract.
* And finally we are going to interact with the smart contract via RPC calls.

## Setting up the development environment

### Prerequisites

For setting the development environment we need to install the following programs:
* Install OpenJDK, go, and goloop. [Follow these instructions to install goloop](https://docs.icon.community/concepts/computational-utilities/goloop/setup) (this has instructions for OpenJDK, go and goloop).
* [Install gradle](https://docs.gradle.org/current/userguide/installation.html)

For the smart contract deployment you can either choose to deploy on a testnet in the ICON Blockchain or run a local network.

If you want to deploy to a testnet you will need to have ICX in your selected testnet, for that you can use the following faucet:
* https://faucet.iconosphere.io/

For setting up a local network, you can follow this guide
* https://docs.icon.community/getting-started/how-to-run-a-local-network

### Creating the project workspace with gradle

We are going to be working on a folder named `poll-contract` inside our home folder, you can use any folder of your choice in your computer.

```bash
mkdir  ~/poll-contract
cd ~/poll-contract
```

Inside the folder we are going to initialize a project using gradle. If you are unfamiliar with gradle please refer to [their documentation](https://docs.gradle.org/current/userguide/what_is_gradle.html).

```bash
$ gradle init
Starting a Gradle Daemon (subsequent builds will be faster)

Select type of project to generate:
  1: basic
  2: application
  3: library
  4: Gradle plugin
Enter selection (default: basic) [1..4] 2

Select implementation language:
  1: C++
  2: Groovy
  3: Java
  4: Kotlin
  5: Scala
  6: Swift
Enter selection (default: Java) [1..6] 3


Split functionality across multiple subprojects?:
  1: no - only one application project
  2: yes - application and library projects
Enter selection (default: no - only one application project) [1..2] 1


Select build script DSL:
  1: Groovy
  2: Kotlin
Enter selection (default: Groovy) [1..2] 1


Generate build using new APIs and behavior (some features may change in the next minor release)? (default: no) [yes, no]  yes


Select test framework:
  1: JUnit 4
  2: TestNG
  3: Spock
  4: JUnit Jupiter
Enter selection (default: JUnit Jupiter) [1..4] 4


Project name (default: poll-contract): poll-contract
Source package (default: poll.contract): poll.contract


> Task :init
Get more help with your project: https://docs.gradle.org/8.0.2/samples/sample_build
ing_java_applications.html


BUILD SUCCESSFUL in 1m 34s
2 actionable tasks: 2 executed
```

The selected options are the following:
* Select type of project to generate: 2
* Select implementation language: 3
* Split functionality across multiple sub-projects?: 1
* Select build script DSL: 1
* Generate build using new APIs and behavior (some features may change in the next minor release)? (default: no) [yes, no]  yes
* Select test framework: 4
* Project name (default: poll-contract): poll-contract
* Source package (default: poll.contract): poll.contract

The following folder structure will be created:
```bash
.
├── app
│   ├── build.gradle
│   └── src
│   ├── main
│   │   ├── java
│   │   │   └── poll
│   │   │   └── contract
│   │   │       └── App.java
│   │   └── resources
│   └── test
│       ├── java
│       │   └── poll
│       │   └── contract
│       │       └── AppTest.java
│       └── resources
├── gradle
│   └── wrapper
│   ├── gradle-wrapper.jar
│   └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
└── settings.gradle


14 directories, 8 files
```

The `build.gradle` file is used to create [build scripts](https://docs.gradle.org/current/userguide/writing_build_scripts.html). In ICON, we use it to specify dependencies and write tasks.

After creating the workspace, you need to create one `build.gradle` file at the root of the project with the following code.

```gradle
buildscript {
  repositories {
    mavenCentral()
  }
  dependencies {
    classpath 'foundation.icon:gradle-javaee-plugin:0.8.1'
  }
}

subprojects {
  repositories {
    mavenCentral()
  }

  apply plugin: 'java'
  apply plugin: 'foundation.icon.javaee'

  java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
  }

  compileJava {
    options.compilerArgs += ['-parameters']
  }
}
```

This specifies the project to use the [gradle javaee plugin](https://github.com/icon-project/gradle-javaee-plugin) which is specifically created for smart contract development in ICON. Each subproject (in above tree structure, app folder) would have its own `build.gradle` file. There are 2 additional tasks you would need to add to optimize and deploy the jar file.

Edit the `app/build.gradle` file to have the following data:

```gradle
dependencies {
     compileOnly 'foundation.icon:javaee-api:0.9.3'

    	testImplementation 'foundation.icon:javaee-unittest:0.10.0'
    	testImplementation 'org.mockito:mockito-core:4.8.0'
    	testImplementation 'org.junit.jupiter:junit-jupiter-api:5.9.0'
    	testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.9.0'
}

optimizedJar {
     mainClassName = 'poll.contract.App'
     archivesBaseName = "poll-contract-" + archiveVersion.get() + ".jar"
	from {
    	    configurations.runtimeClasspath.collect {it.isDirectory() ? it : zipTree(it) }
	}

}

deployJar {
    endpoints {
        local {
            uri = 'http://localhost:9080/api/v3'
            nid = 0x3
        }
    }

    keystore = rootProject.hasProperty('keystoreName') ? "$keystoreName" : ''
    password = rootProject.hasProperty('keystorePass') ? "$keystorePass" : ''
}


test {
     useJUnitPlatform()
}
```

In the `optimizedJar` task, `mainClassName` refers to the class which would be the entry point for the smart contract.

To avoid errors during compilation edit the `app/src/test/java/poll/contract/AppTest.java` file to have the following code:
```java
package poll.contract;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AppTest {
}
```

## Writing and compiling the smart contract

For this tutorial we are going to be creating a smart contract that would work as a poll, it allows for addresses to vote either “yes” or “no” and has methods to check an address vote and the vote count.
After creating the smart contract we compile it, optimize the code for the ICON Blockchain and then deploy it to a local network in our computer.

### Writing the smart contract

Edit the `app/src/main/java/poll/contract/App.java` to have the following code:

```java
package poll.contract;

import score.Address;
import score.Context;
import score.VarDB;
import score.annotation.External;
import score.DictDB;

import java.math.BigInteger;

public class App {
    private static final String VOTER_ADDRESS = "voterAddress";
    // Dict of votes per each address
    final static DictDB<String, String> voters = Context.newDictDB(VOTER_ADDRESS, String.class);
    // Counter of “no” votes
    private final VarDB<BigInteger> countOfNo = Context.newVarDB("countOfNo", BigInteger.class);
    // Counter of “yes” votes
    private final VarDB<BigInteger> countOfYes = Context.newVarDB("countOfYes", BigInteger.class);

    /*
    * Adds a vote of “yes” with the caller address
    */
    @External
    public String addVoteYes() {
        Address _caller = Context.getCaller();
        String _addressVote = voters.getOrDefault(_caller.toString(), "null");
        String result = "Account already voted";
        if (_addressVote == "null") {
            result = "Voted Yes";
        	voters.set(_caller.toString(), "yes");
        	countOfYes.set(countOfYes.getOrDefault(BigInteger.ZERO).add(BigInteger.ONE));
        }
        return result;
    }

    /*
    * Adds a vote of “no” with the caller address
    */
    @External
    public String addVoteNo() {
        Address _caller = Context.getCaller();
        String _addressVote = voters.getOrDefault(_caller.toString(), "null");
        String result = "Account already voted";
        if (_addressVote == "null") {
            result = "Voted No";
            voters.set(_caller.toString(), "no");
            countOfNo.set(countOfNo.getOrDefault(BigInteger.ZERO).add(BigInteger.ONE));
        }
        return result;
    }

    /*
    * Checks the vote of the specified address
    */
    @External(readonly=true)
    public String checkVote(String _address) {
        return voters.get(_address);
    }

    /*
    * Gets the count of all votes
    */
    @External(readonly=true)
    public BigInteger getVotesResult() {
        return countOfNo.getOrDefault(BigInteger.ZERO).add(countOfYes.getOrDefault(BigInteger.ZERO));
    }
}
```

### Compiling the smart contract

To build the project and have it ready to deploy into the ICON Blockchain we run the following commands:

```bash
$ ./gradlew build

BUILD SUCCESSFUL in 432ms
4 actionable tasks: 1 executed, 3 up-to-date
```

```bash
$ ./gradlew optimize

BUILD SUCCESSFUL in 410ms
3 actionable tasks: 1 executed, 2 up-to-date
```

After running these commands the folder `./app/build/libs/` (along with an assortment of other files and folders) will be created by gradle with the following content:

```bash
$ tree -I 'classes|generated|report|gradle|src|tmp|reports|test-results|Makefile|*.gradle|gradle*'.
└── app
     └── build
          └── libs
          ├── poll-contract-optimized.jar
          └── poll-contract.jar


3 directories, 2 files
```

The file that we are going to deploy into the ICON Blockchain is `poll-contract-optimized.jar`.

## Further Resources
* Smart contracts in the official docs: https://docs.icon.community/icon-stack/smart-contracts
* Java score examples: https://github.com/icon-project/java-score-examples
* Javaee scorex: https://github.com/icon-project/javaee-scorex
* javaee module source: https://github.com/icon-project/goloop/tree/master/javaee/api/src/java/score
* Chain score sample: https://github.com/icon-project/goloop/blob/master/testsuite/java/foundation/icon/test/score/ChainScore.java
* javaee api docs: https://www.javadoc.io/doc/foundation.icon/javaee-api/latest/index.html
* javaee unittest api docs: https://www.javadoc.io/doc/foundation.icon/javaee-unittest/0.9.7/index.html
* javaee unittest source: https://github.com/icon-project/javaee-unittest
