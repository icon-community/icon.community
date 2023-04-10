---
title: "Java Tutorial Part 3: Unit Testing"
date: 2023-04-06
author: espanicon
slug: java-tutorial-part-3-unit-testing
description: Java tutorial series part 3 Unit Testing
draft: false
tags:
- java
- smart contract
- gradle
---

## Unit Testing

For smart contract unit testing you can use the `javaee-unittest` [module](https://github.com/icon-project/javaee-unittest). In the following link you can check the methods of the API for building your own tests.
* https://www.javadoc.io/doc/foundation.icon/javaee-unittest/0.9.7/index.html
* https://github.com/icon-project/javaee-unittest

For the context of a unit test on smart contracts, it is necessary to have a way to mock the contract so that we can test the functions. For this the `javaee-unittest` has a `Service Manager` that allows these types of interactions like account creation, contract deployment, etc.

For the case of this example edit the `app/src/test/java/poll/contract/AppTest.java` file and add the following code:

```java
package poll.contract;

import com.iconloop.score.test.Account;
import com.iconloop.score.test.Score;
import com.iconloop.score.test.ServiceManager;
import com.iconloop.score.test.TestBase;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import static org.junit.jupiter.api.Assertions.*;

/**
 * This class tests the Poll contract.
 * It uses the Service Manager to deploy the score and create accounts for testing.
 * It also uses the Service Manager to invoke the methods in the score.
 */
class PollTest extends TestBase {
	// Create a Service Manager for the tests
	private static final ServiceManager sm = getServiceManager();

	// Create an account for the owner of the score
	private static final Account owner = sm.createAccount();

	// Create a score for testing
	private Score score;

	/**
 	* This method is run before each test.
 	* It deploys the score with the Service Manager for testing.
 	* @throws Exception
 	*/
	@BeforeEach
	public void setup() throws Exception {
    	// Deploys the score with the Service Manager for testing
    	score = sm.deploy(owner, Poll.class);
	}

	/**
 	* This method tests the 'addVoteYes' method.
 	* It creates a 'user' and invokes the method in the score created with the Service Manager for testing.
 	* @throws Exception
 	*/
	@Test
	void appCanVoteYes() {
    	final String result = "yes";
    	var user = sm.createAccount();
    	score.invoke(user, "addVoteYes");
    	assertEquals(result, score.call(
                	"checkVote",
                	user.getAddress().toString()
                	));
	}

	/**
 	* This method tests the 'addVoteNo' method.
 	* It creates a 'user' and invokes the method in the score created with the Service Manager for testing.
 	* @throws Exception
 	*/
	@Test
	void appCanVoteNo() {
    	final String result = "no";
    	var user = sm.createAccount();
    	score.invoke(user, "addVoteNo");
    	assertEquals(result, score.call(
                	"checkVote",
                	user.getAddress().toString()
                	));
	}
}

```

Execute the following command for running the tests:

```bash
$ ./gradlew test

BUILD SUCCESSFUL in 504ms
3 actionable tasks: 3 up-to-date
```

## Further Resources
* Smart contracts in the official docs: https://docs.icon.community/icon-stack/smart-contracts
* Java score examples: https://github.com/icon-project/java-score-examples
* Javaee scorex: https://github.com/icon-project/javaee-scorex
* javaee module source: https://github.com/icon-project/goloop/tree/master/javaee/api/src/java/score
* Chain score sample: https://github.com/icon-project/goloop/blob/master/testsuite/java/foundation/icon/test/score/ChainScore.java
* javaee api docs: https://www.javadoc.io/doc/foundation.icon/javaee-api/latest/index.html
* javaee unittest api docs: https://www.javadoc.io/doc/foundation.icon/javaee-unittest/0.9.7/index.html
* javaee unittest source: https://github.com/icon-project/javaee-unittest
