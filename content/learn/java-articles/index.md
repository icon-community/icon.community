---
title: "Java Articles"
date: 2023-01-20
slug: java-smart-contracts
description: Learn about the concepts of Java programming language used to write smart contracts in ICON.
---

# Smart Contracts on ICON

## What is a smart contract?

A smart contract is a self-contained program that is stored and replicated on a blockchain network. When a contract is deployed to the blockchain, it becomes a part of the blockchain and is stored on every node in the network.

Smart contracts on ICON are written in JVM-compatible languages, such as Java. This code gets compiled into low-level bytecode that can be run on the Java Virtual Machine (JVM). Contracts are deployed to the ICON platform using a special contract creation transaction sent to the [contract creation address](https://tracker.icon.community/contract/cx0000000000000000000000000000000000000000). A deployed contract is assigned an ICON address based on the originating account, timestamp, and if the contract address already exists nonce of the contract creation transaction is also used. Salt can also be used to create address. Salt is the transaction index of the transaction in the block. This address can be used to send funds to the contract or call its functions.

```
// genContractAddr generates new contract address
nonce, timestamp, from
data = from(20 bytes) + timestamp (32 bytes) + if exists, nonce (32 bytes)
digest = sha3_256(data)
contract address = digest[len(digest) - 20:] // get last 20bytes
// If there is salt, it would be added to nonce value.
```

Smart contracts are not associated with private keys like External Owned Accounts (EOAs). However, the smart contract deployer address is considered the “owner.” By default, smart contract owners may upgrade or change the owner of the contract.

### Deploying the contract
```json
{
    "jsonrpc": "2.0",
    "method": "icx_sendTransaction",
    "id": 1234,
    "params": {
        "version": "0x3",
        "from": "hxbe258ceb872e08851f1f59694dac2558708ece11",
        "to": "cx0000000000000000000000000000000000000000", // address 0 means SCORE install
        "stepLimit": "0x12345",
        "timestamp": "0x563a6cf330136",
        "nid": "0x3",
        "nonce": "0x1",
        "signature": "VAia7YZ2Ji6igKWzjR2YsGa2m53nKPrfK7uXYW78QLE+ATehAVZPC40szvAiA6NEU5gCYB4c4qaQzqDh2ugcHgA=",
        "dataType": "deploy",
        "data": {
            "contentType": "application/java",
            "content": "0x1867291283973610982301923812873419826abcdef91827319263187263a7326e...", // compressed SCORE data
            "params": {  // parameters to be passed to on_install()
                "name": "ABCToken",
                "symbol": "abc",
                "decimals": "0x12"
            }
        }
    }
}
```

### Upgrading the contract

```json
{
    "jsonrpc": "2.0",
    "method": "icx_sendTransaction",
    "id": 1234,
    "params": {
        "version": "0x3",
        "from": "hxbe258ceb872e08851f1f59694dac2558708ece11",
        "to": "cxbe258ceb872e08851f1f59694dac2558708ece11", // previously deployed smart contract address
        "stepLimit": "0x12345",
        "timestamp": "0x563a6cf330136",
        "nid": "0x3",
        "nonce": "0x1",
        "signature": "VAia7YZ2Ji6igKWzjR2YsGa2m53nKPrfK7uXYW78QLE+ATehAVZPC40szvAiA6NEU5gCYB4c4qaQzqDh2ugcHgA=",
        "dataType": "deploy",
        "data": {
            "contentType": "application/java",
            "content": "0x1867291283973610982301923812873419826abcdef91827319263187263a7326e...", // compressed SCORE data
            "params": {  // parameters to be passed to on_install()
                "name": "ABCToken",
                "symbol": "abc",
                "decimals": "0x12"
            }
        }
    }
}
```

Although this means smart contracts by default are mutable, the contract can be written to specify immutability rules. To make a contract immutable, the owner of the contract address has to be changed to a wallet that no one controls. Some ways to do that are by changing the owner to the contract itself provided there is no method in the contract to do self-upgrade. The owner can also be changed to [System contract - cx0000000000000000000000000000000000000000](https://tracker.icon.community/contract/cx0000000000000000000000000000000000000000).

Smart contracts are only executed when they are called by a transaction, either directly or as part of a chain of contract calls. They do not run in the background or parallel, and they are single-threaded.

On ICON, smart contracts are written in Java with domain-specific restrictions. The [ICON blockchain’s Java execution environment](https://github.com/icon-project/goloop/tree/master/javaee) for smart contracts is a modification of the [Aion Virtual Machine](https://github.com/aionnetwork/AVM). You can find a list of allowed methods [here](https://docs.icon.community/support/advanced-topics/java-smart-contracts/allowed-methods).

## Installation

* You need to install JDK 11 or a later version. Visit [OpenJDK.org](https://openjdk.org/) for prebuilt binaries. Or you can install a proper OpenJDK package from your OS vendors.

  In macOS:

  ```shell
  $ brew tap AdoptOpenJDK/openjdk
  $ brew cask install adoptopenjdk11
  ```

  In Linux (Ubuntu 20.04):
  ```shell
  $ sudo apt install openjdk-11-jdk
  ```
* Install Goloop CLI (Optional)
  
  Goloop CLI can be used for Keystore manipulation, sending transactions, managing blockchain, and other tasks through the terminal.
  
  * Install make
    ```shell
    $ sudo apt install make
    ```
  * Install [golang 1.18+](https://golang.org/doc/install)
  * Install RocksDB 6.22+
    * MacOS 
      ```shell
      $ brew update
      $ brew install rocksdb
      ```
    * Ubuntu
      ```shell
      $ sudo apt-get update
      $ sudo apt-get -y install build-essential libgflags-dev libsnappy-dev zlib1g-dev libbz2-dev liblz4-dev libzstd-dev
      $ git clone https://github.com/facebook/rocksdb.git
      $ cd rocksdb
      $ make shared_lib
      $ sudo cp --preserve=links ./librocksdb.* /usr/lib/
      $ sudo cp -r ./include/rocksdb/ /usr/include/
      ```

  * Clone [goloop repo](https://github.com/icon-project/goloop)
    ```shell
    $ git clone git@github.com:icon-project/goloop.git
    ```
  * Build goloop CLI 
    ```shell
    $ cd goloop
    $ make goloop
    ```

  Goloop binary file is located in `./bin/`. Add this to your `PATH` so that it can be used from anywhere in the terminal.

* Use [gochain-local](https://github.com/icon-project/gochain-local) to run a local blockchain node for testing
* Install [Gradle](https://docs.gradle.org/current/userguide/installation.html) 
* Install [VS Code](https://code.visualstudio.com/) or [Intellij](https://www.jetbrains.com/idea/)

## Creating a workspace
We use Gradle to create the workspace. If you are unfamiliar with Gradle please check their [documentation](
https://docs.gradle.org/current/userguide/what_is_gradle.html).

### Using CLI

#### Create a project folder

Gradle comes with a built-in task, called init, that initializes a new Gradle project in an empty folder. The init task uses the (also built-in) wrapper task to create a Gradle wrapper script, gradlew.

The first step is to create a folder for the new project and change the directory into it.
```shell
$ mkdir hello-world
$ cd hello-world
```

#### Run the init task

```shell
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

Generate build using new APIs and behavior (some features may change in the next minor release)? (default: no) [yes, no] yes

Select test framework:
  1: JUnit 4
  2: TestNG
  3: Spock
  4: JUnit Jupiter
Enter selection (default: JUnit Jupiter) [1..4] 4

Project name (default: hello-world):            

Source package (default: hello.world): 


> Task :init
Get more help with your project: https://docs.gradle.org/7.3.3/samples/sample_building_java_applications.html

BUILD SUCCESSFUL in 3m 50s
2 actionable tasks: 2 executed
```

The following directory structure will be created:

```shell
.
├── app
│   ├── build.gradle
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── hello
│       │   │       └── world
│       │   │           └── App.java
│       │   └── resources
│       └── test
│           ├── java
│           │   └── hello
│           │       └── world
│           │           └── AppTest.java
│           └── resources
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
└── settings.gradle
```

The app folder can be renamed to your preferred name and the name has to be changed accordingly in the settings.json file. You can also add multiple folders or contracts in the same directory. All the changes have to be reflected in the `settings.json` file.

### Using IDE

You can use [VS Code](https://code.visualstudio.com/) or [Intellij](https://www.jetbrains.com/idea/) for writing Java smart contracts. 

* [Using VS Code for Java](https://code.visualstudio.com/docs/java/java-tutorial)
* [Using Intellij with Gradle](https://www.jetbrains.com/help/idea/getting-started-with-gradle.html)

### Understanding build.gradle file

Build.gradle file is used to write [build scripts](https://docs.gradle.org/current/userguide/writing_build_scripts.html). In ICON, we use it to specify dependencies and write tasks. After creating the workspace, you need to create one build.gradle file at the root of the project with the following code.

```groovy
buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath 'foundation.icon:gradle-javaee-plugin:0.8.1'
    }
}
```

This specifies the project to use gradle javaee plugin which is specifically created for smart contract development in ICON. Each subproject (in above tree structure, app folder) would have it's own build.gradle file. There are 2 additional tasks you would need to add to optimize and deploy the jar.

```groovy
optimizedJar {
    mainClassName = 'com.iconloop.score.example.HelloWorld'
    archivesBaseName = 'hello-world'
    from {
        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
    }
}

deployJar {
    endpoints {
        lisbon {
            uri = 'https://lisbon.net.solidwallet.io/api/v3'
            nid = 0x2
        }
        local {
            uri = 'http://localhost:9082/api/v3'
            nid = 0x3
        }
    }
    keystore = rootProject.hasProperty('keystoreName') ? "$keystoreName" : ''
    password = rootProject.hasProperty('keystorePass') ? "$keystorePass" : ''
    parameters {
        arg('name', 'Alice')
    }
}
```

In the optimizedJar task, `mainClassName` refers to the class which would be the entry point for the smart contract. You can refer to [Java Score Examples](https://github.com/icon-project/java-score-examples) repo for more information. To deploy the contract, you would need to build the jar, optimize the jar and deploy the jar using the gradle. To deploy the contract, you would need the Keystore and password of the address. The Keystore file location and password can be specified in the gradle.properties file at the root of the project.

Example: gradle.properties
```properties
keystoreName = /path/to/kestore/file
keystorePass = password
```

* Build the project
  ```bash
  $ ./gradlew build
  ```
* Optimize the jar
  ```bash
  $ ./gradlew optimizedJar
  ```
* Deploy the optimized Jar
  ```bash
  $ ./gradlew hello-world:deployToLocal
  ```
  Local comes from the network name specified in the deployJar task.

## Class definition of a smart contract

In the `src/main` directory of a Java project, there can be multiple classes. The entry point or the main class is specified in build.gradle in optimize Jar task. All the classes which can be reached from the main class comprise the smart contract. 

Example:
```Java
//SimpleStorage.Java
package com.score.example;

import score.Context;
import score.VarDB;
import score.annotation.External;

import java.math.BigInteger;

public class SimpleStorage {
    private final VarDB<BigInteger> storedNumber = Context.newVarDB("storedNumber", BigInteger.class);

    public SimpleStorage() {

    }

    @External
    public void setStoredNumber(BigInteger number) {
        storedNumber.set(number);
    }

    @External(readonly = true)
    public BigInteger getStoredNumber() {
        return storedNumber.getOrDefault(BigInteger.ZERO);
    }
}
```

Almost all the concepts of Java apply to ICON smart contracts. You can use external smart contract libraries or packages. External packages need to be added as dependencies in the build.gradle file. Java only supports single inheritance. Java also supports abstract classes and interfaces. The main contract class can’t be abstract. It has to be an implementation class. 


## State variables and storage

Data can be stored in class variables and instance variables. Class variables and instance variables can store with or without using a state database. Class variables and instance variables without using a state database are reset on each contract upgrade. State variables persist through contract upgrades. State variables can be defined using Context.newXXXDB() methods. Reading data from class variables and instance variables without using a state database doesn’t incur any cost while reading from state variables incurs transaction fees. While writing a smart contract, you can choose the type of database you need to store values. There can be a maximum of 31 instance variables for a class in the smart contract. 

The visibility scope of state variables is the same as in Java. Defining a state variable public wouldn’t make it readable from outside the contract. You would have to define a read method to return the values of the state variable. 

Example:
```Java
// IRC2.java
public class IRC2Basic implements IRC2 {
// class variable without using a state database
protected static final Address ZERO_ADDRESS = new Address(new byte[Address.LENGTH]);

// instance variable using a state database
    	private final VarDB<String> name = Context.newVarDB("token_name", String.class);

// instance variable without using a state database
private final String symbol;

// class variable using a state database
private static final VarDB<BigInteger> decimals = Context.newVarDB("decimals", BigInteger.class);

public IRC2Basic(String _name, String _symbol, int _decimals) {
…
}

…
}
```

## Basic data structures

There are 4 basic data structures provided by the Java EE api package. They are VarDB, ArrayDB, DictDB, and BranchDB. They can be used to interact directly with blockchain storage. Other complex data structures can be created using these basic building blocks. ICON blockchain storage is a key-value database. The key is created by making a SHA256 hash of the byte array of the concatenation of prefixes for database type and custom key provided by the user. The value is converted to bytes and stored in the blockchain state. While decoding the value, we need to know the proper value type such that it can be decoded to the proper value.

## VarDB
VarDB is used to store single values. The value should be a readable and writable class. To create custom readable and writable classes, you would need to implement Object Reader and Object Writer in your class.

Method detail

set
void set​(E value)
Sets value.
Parameters:
value - new value

get
E get()
Returns the current value.
Returns:
current value
 
getOrDefault
E getOrDefault​(E defaultValue)
Returns the current value or defaultValue if the current value is null.
Parameters:
defaultValue - default value
Returns:
the current value or defaultValue if the current value is null.

## ArrayDB
An ArrayDB holds a sequence of values. The element type of the array needs to be a writable and readable class. 

Method Detail
 
add
void add​(E value)
Adds a value at the end of the array DB.
Parameters:
value - new value

set
void set​(int index, E value)
Sets value of the specified index.
Parameters:
index - index
value - new value
Throws:
java.lang.IllegalArgumentException - if the index is out of range.

removeLast
void removeLast()
Removes the last element of the array DB.
Throws:
java.lang.IllegalStateException - if array DB has zero elements.

get
E get​(int index)
Returns the element at the specified position in the array DB.
Parameters:
index - index of the element
Returns:
the element at the specified position in the array DB.
Throws:
java.lang.IllegalArgumentException - if the index is out of range.

size
int size()
Returns the number of elements in this array DB.
Returns:
the number of elements in this array DB.

pop
E pop()
Pops last element of the array DB.
Returns:
last element of array DB
Throws:
java.lang.IllegalStateException - if array DB has zero elements.

DictDB
A dictionary DB is a hash from key to value. Only values of the dictionary DB are recorded in the DB. Keys are not recorded.
K - Key type. It shall be String, byte array, Address, Byte, Short, Integer, Long, Character, or BigInteger.
V - Value type. It shall be readable and writable class.

Method Detail
 
set
void set​(K key, V value)
Sets a value for a key
Parameters:
key - key
value - value for the key

get
V get​(K key)
Returns the value for a key
Parameters:
key - key
Returns:
the value of a key

getOrDefault
V getOrDefault​(K key, V defaultValue)
Returns the value for a key or defaultValue if the value is null.
Parameters:
key - key
defaultValue - default value
Returns:
the value for a key or defaultValue if the value is null.

BranchDB
A branch DB is a hash from keys to sub-DBs. 

K - Key type. K shall be String, byte array, Address, Byte, Short, Integer, Long, Character, or BigInteger.
V - Value type. V shall be VarDB, DictDB, ArrayDB, or BranchDB.

Method Detail
 
at
V at​(K key)
Returns sub-DB for the key.
Parameters:
key - key for sub-DB.
Returns:
sub-DB.


## Annotations

Java annotations are used to provide some additional information in smart contracts like any Java program. Annotations can provide additional information to the compiler, generate some additional code and provide metadata during the execution time. Java Built-in annotations can be used in the ICON smart contracts. There are additional 5 annotations provided by the score.Annotation package to define methods as external, indicate methods as payable, specify optional parameters, generate event logs and specify code to persist during the optimization process. You can also write custom annotations. Custom annotations can be helpful to generate repetitive code thus making the process of writing smart contracts easier. Annotation can be used in a similar way to how modifiers are used in Solidity.

For documentation and tutorials on built-in annotations, you can refer to Java Documentation provided by Oracle.

There are four predefined annotation libraries provided by the ICON foundation commonly used in smart contracts.

### JavaEE API

#### EventLog
This annotation can be used to record logs in the transaction result as `eventLogs`. Only methods can be annotated using this annotation. Event logs can be useful to notify external applications about the executions happening inside the smart contract. One of the common event logs used in IRC2 tokens is Transfer. It is used to notify wallets and other applications about the transfer of tokens from one wallet to another.

If the value of an element, named indexed, is set, the designated number of parameters of the applied method declaration will be indexed in the order and included in the Bloom filter. Indexed parameters and non-indexed parameters are separately stored in the transaction result. At most 3 parameters can be indexed, and the number of indexed parameters cannot exceed the number of parameters. Possible data types for method parameters are int, boolean, byte[], BigInteger, String, and Address.

It is recommended to declare a method without an implementation body. Even if the applied method has the body, it is not executed at runtime. EventLog annotation should only be used in the main class or parent class. EventLog annotation defined in classes other than the main or parent class will not be processed during the smart contract optimization process. Thus those event logs will not be logged in the transaction result. Event Logs are generally written in the Pascal Case. 

Example:
```Java
@EventLog(indexed=3)
    public void Transfer(Address _from, Address _to, BigInteger _value, byte[] _data) {}

_from, _to and _value are indexed parameters. During the optimization process, the transfer event log will be processed and the following code will be generated.

    public void Transfer(Address var1, Address var2, BigInteger var3, byte[] var4) {
        Object[] var5 = new Object[]{"Transfer(Address,Address,int,bytes)", var1, var2, var3};
        Object[] var6 = new Object[]{var4};
        Context.logEvent(var5, var6);
    }
```

From the above conversion, you can see that the actual method used to log events is available in the Context class. Context.logEvent is used to write the logs in transaction results. It can be cumbersome to write event logs in this way. Thus, EventLog annotation helps in writing the code for event logs quickly.

#### External
This annotation can be used to indicate whether the method will be exposed externally to be used outside the contract. Only methods can be annotated using this annotation. Declaring a method public is not sufficient to expose it externally. For a method to be called from outside the contract (EOA or another contract), it needs to be annotated as External. The annotated methods will be registered on the exportable API list. Any attempt to call a non-external method from outside the contract will fail.

If the readonly element is specified and its value is true, i.e. @External(readonly=true), the method will have read-only access to the state DB. 

The special method, named fallback, cannot be annotated with @External. (i.e. fallback method cannot be specified in the transaction message as a callee method, and it can only be called via plain ICX transfer message.)
Example:
```java
//Write method:
@External
public void transfer(Address _to, BigInteger _value, @Optional byte[] _data) {
…
}

//Read method:
@External(readonly=true)
public BigInteger balanceOf(Address _owner) {
…
}
```

The following API description will be generated from the above code during the optimization process.
```bash
Method{type=0, name='transfer', flags=2, indexed=2, inputs=[Parameter{name='_to', descriptor=Lscore/Address;, type=5, optional=false}, Parameter{name='_value', descriptor=Ljava/math/BigInteger;, type=1, optional=false}, Parameter{name='_data', descriptor=[B, type=3, optional=true}], output=0, outputDescriptor=V}

Method{type=0, name='balanceOf', flags=3, indexed=1, inputs=[Parameter{name='_owner', descriptor=Lscore/Address;, type=5, optional=false}], output=1, outputDescriptor=Ljava/math/BigInteger;}
```
This API description is passed along with the code during the deployment of the smart contract.

#### Keep
This annotation denotes that the element should not be removed when the code is optimized by the tool kit. Methods, Fields, and Constructors can be annotated using this annotation. The tool kit removes unused methods during the optimization phase. If a struct appears in the signature of an @External method, necessary constructors, getters, and setters for the struct survive in the optimization phase even if the methods are not accessed in user code. More specifically, if a class is a writable struct and the class is used as a parameter type of an external method, its zero-argument constructor (if it is defined) and property setters are not removed.

Also, If a class is a readable struct and the class is used as a return type of an external method, its getters are not removed. For example, in the following contract, @Keep annotation is not necessary for the Person class since it is used as a parameter of an external method.

```java
//Person.java
public class Person {
public Person() {...}
public String getName() {...}
public void setName(String name) {...}
}

// Callee.java
 public class Score {
@External
 	public void hello(Person person) {
Context.println("Hello " + person.getName());
}
}
```

There are some cases in that a user must manually use Keep annotation. When a struct is passed as an argument of Context.call(), getters are called by the system. Also, when a struct is returned by Context.call(), a constructor and setters are called by the system. However, the tool kit cannot track the runtime type of the parameter of the Context.call() method. Thus, the getters or setters are removed if they are not accessed in the user code and they are not used as a parameter type or a return type of an external method.

In that case, Keep annotation is required for the necessary methods not to be optimized away. For example, in the following contract, Keep annotation is essential for getName() because the user code does not call the method and the Person class is not used as a parameter or a return type of an @External method.

```java
// Person.java
class Person {
public Person(name String) {...}

@Keep
public String getName() {...}
}
 
 // Caller.java
 	public class Caller {
@External
public void test(Address addr) {
Context.call(addr, "hello", new Person("Kim"));
}
}
```

#### Optional
This annotation can be used to indicate whether the method parameter is optional. Only parameters of external methods can be annotated using this annotation. If a parameter is annotated with this Optional annotation, the parameter can be omitted from the transaction message. If optional parameters were omitted when the external method is called, the value of optional parameters would be their zero values.

The zero value is:
0 for numeric types including BigInteger
false for the boolean type, and
null for Object types.

Example:
```java
@External
public void transfer(Address _to, BigInteger _value, @Optional byte[] _data) {…}
```

The default value for the _data parameter will be null inside the method.

#### Payable
This annotation can be used to indicate whether the method can receive ICX token. This annotation can be used to annotate external methods only. If this annotation is applied to the external method, the method can receive the incoming ICX token designated in the transaction message and further process it. The value of ICX transferred is obtained by using Context.getValue() method.

If the ICX token was passed to a non-payable method, that transaction would fail.

Note: The special method, named fallback, is invoked whenever the contract receives plain ICX tokens without data. However, if the fallback method was not annotated with @Payable, it would not be listed on the SCORE APIs and could not be called as well.

Example:
```java
@Payable
@External
public void registerPRep(String name, String email, String country, String city, String website, String details, String p2pEndpoint) { … }


@Payable
public void fallback() { … }
```

### JavaEE Score Client

#### ScoreInterface
This annotation is used to generate code that can be useful in making inter-smart contract calls using Context.call() method as well as while writing unit tests to mock the contract methods' behavior. This annotation can be used to annotate interface, class, or enumeration. While making inter-smart contract calls, it helps to track the parameter types which is not possible by using the Context.call() method natively. 

Example:
```java
//Xxx.java
@ScoreInterface
public interface Xxx {
	void externalMethod(String param);

	String readOnlyMethod(String param);

  @Payable
  @External
  void payableMethod(String param);

}
```
When java compiles, the following implementation class will be generated with @ScoreInterface.suffix().

```java
//XxxScoreInterface.java
public final class XxxScoreInterface implements Xxx {
  protected final Address address;

  public XxxScoreInterface(Address address) {
    this.address = address;
  }

  public Address _address() {
    return this.address;
  }

  public void externalMethod(String param) {
    Context.call(this.address, "externalMethod", param);
  }

  public String readOnlyMethod(String param) {
    return Context.call(String.class, this.address, "readOnlyMethod", param);
  }

  public void payableMethod(String param) {
    Context.call(this.address, "payableMethod", param);
  }

  public void payableMethod(BigInteger valueForPayable, String param) {
    Context.call(valueForPayable, this.address, "payableMethod", param);
  }
}
```

For the payable external method, an overloaded method has been generated with the first parameter as BigInterger valueForPayable. The generated class can be used in the following way:

```java
// Score.java
import score.Address;
import score.annotation.External;

import java.math.BigInteger;

public class Score {
    @External
    public void intercallExternal(Address address, String param) {
        XxxScoreInterface xxx = new XxxScoreInterface(address);
        xxx.externalMethod(param);
    }

    @External(readonly = true)
    public String intercallReadOnly(Address address, String param) {
        XxxScoreInterface xxx = new XxxScoreInterface(address);
        return xxx.readOnlyMethod(param);
    }

    @External
    public void intercallPayable(Address address, BigInteger valueForPayable, String param) {
        XxxScoreInterface xxx = new XxxScoreInterface(address);
        xxx.payableMethod(valueForPayable, param);
    }
}
```

#### ScoreClient
This annotation is used to generate an implementation class that can be useful in writing integration tests for smart contracts as well as integrating smart contracts with Java applications. This annotation can be used to annotate class, interface, enumeration, or field.

Example:
```java
@ScoreClient
public interface Xxx {
    void externalMethod(String param);

    @External
    String externalMethodWithReturn(String param);
    
    String readOnlyMethod(String param);

    @Payable
    void payableMethod(String param);
}
```

For the payable method, an overloaded method will be generated with the first parameter as BigInteger valueForPayable. For external methods with the return type, it is necessary to annotate with @External annotation. By default, a method with a void return type will be considered an external write method and a method with other than a void return type will be considered an external read method.

When java compiles, an implementation class will be generated with @ScoreClient.suffix(). The generated class for the above interface is provided below:

```java
// XxxScoreClient.java
public final class XxxScoreClient extends DefaultScoreClient implements Xxx {
  public XxxScoreClient(String url, BigInteger nid, Wallet wallet, Address address) {
    super(url, nid, wallet, address);
  }

  public XxxScoreClient(DefaultScoreClient client) {
    super(client);
  }

  public static XxxScoreClient _deploy(String url, BigInteger nid, Wallet wallet,
      String scoreFilePath, Map<String, Object> params) {
    return new XxxScoreClient(DefaultScoreClient._deploy(url,nid,wallet,scoreFilePath,params));
  }

  public static XxxScoreClient _of(Properties properties) {
    return _of("", properties);
  }

  public static XxxScoreClient _of(String prefix, Properties properties) {
    return new XxxScoreClient(DefaultScoreClient.of(prefix, properties));
  }

  public void externalMethod(String param) {
    Map<String,Object> params = new HashMap<>();
    params.put("param",param);
    super._send("externalMethod", params);
  }

  public void externalMethod(Consumer<TransactionResult> consumerFunc, String param) {
    Map<String,Object> params = new HashMap<>();
    params.put("param",param);
    consumerFunc.accept(super._send("externalMethod", params));
  }

  /**
   * @deprecated Do not use this method, this is generated only for preventing compile errors.
   *  Instead, use externalMethodWithReturn(Consumer<TransactionResult> consumerFunc, ...)
   * @throws java.lang.RuntimeException("not supported response of writable method in ScoreClient")
   */
  @Deprecated
  public String externalMethodWithReturn(String param) {
    throw new RuntimeException("not supported response of writable method in ScoreClient");
  }

  public void externalMethodWithReturn(Consumer<TransactionResult> consumerFunc, String param) {
    Map<String,Object> params = new HashMap<>();
    params.put("param",param);
    consumerFunc.accept(super._send("externalMethodWithReturn", params));
  }

  public String readOnlyMethod(String param) {
    Map<String,Object> params = new HashMap<>();
    params.put("param",param);
    return super._call(String.class, "readOnlyMethod", params);
  }

  /**
   * To payable, use payableMethod(BigInteger valueForPayable, ...)
   */
  public void payableMethod(String param) {
    Map<String,Object> params = new HashMap<>();
    params.put("param",param);
    super._send("payableMethod", params);
  }

  public void payableMethod(Consumer<TransactionResult> consumerFunc, String param) {
    Map<String,Object> params = new HashMap<>();
    params.put("param",param);
    consumerFunc.accept(super._send("payableMethod", params));
  }

  public void payableMethod(BigInteger valueForPayable, String param) {
    Map<String,Object> params = new HashMap<>();
    params.put("param",param);
    super._send(valueForPayable, "payableMethod", params);
  }

  public void payableMethod(Consumer<TransactionResult> consumerFunc, BigInteger valueForPayable,
      String param) {
    Map<String,Object> params = new HashMap<>();
    params.put("param",param);
    consumerFunc.accept(super._send(valueForPayable, "payableMethod", params));
  }
}
```
**Usage:**

**Use in java applications:**
```java
//Application.java
import java.math.BigInteger;

public class Application {

    public static void main(String[] args) {
        Xxx xxx;
        try{
            xxx = new XxxScoreClient(new DefaultScoreClient(
                    "http://HOST:PORT/api/v3",
                    "NID",
                    "PASSWORD_OF_KEYSTORE", 
                    "/PATH/TO/KEYSTORE",
                    "cx..."));
        } catch (Exception e) {
            e.printStackTrace();
            System.exit(1);
        }
        
        //external call
        xxx.externalMethod("PARAM");
        
        //call
        String result = xxx.readOnlyMethod("PARAM");
        
        //payable
        ((XxxScoreClient)xxx).payableMethod(BigInteger.ONE, "PARAM");
    }    
}
```

**Use in Integration test:**
```java
//XxxTest.java
import score.Address;
import score.annotation.External;

import java.math.BigInteger;

public class XxxTest {
    
    @ScoreClient
    static Xxx xxx;

    @BeforeAll
    static void beforeAll() {
        xxx = XxxScoreClient._of(System.getProperties());
    }

    @Test
    void test() {
        xxx.externalMethod("PARAM");
        
        xxx.readOnlyMethod("PARAM");
        
        ((XxxScoreClient)xxx).payableMethod(BigInteger.ONE, "PARAM");
    }
}
```

### JavaEE Score Data
#### ScoreDataObject
This annotation is used to generate an implementation class that is serializable and can be stored in the storage of a smart contract. This annotation can be used to annotate class, interface, or enumeration. This annotation can be useful to avoid writing writeObject and readObject methods which are required to make a class serializable. These methods are automatically generated in the implementation class with the use of this annotation.

Example:
```java
//Xxx.java
@ScoreDataObject
public class Xxx {
    private String value;
    
    public String getValue() { return value; }
    public void setValue(String value) { this.value = value; }
}
```

When java compiles, a serializable class will be generated with @ScoreDataObject.suffix().

**Generated class:**
```java
//XxxSdo.java
import java.lang.String;
import score.ByteArrayObjectWriter;
import score.Context;
import score.ObjectReader;
import score.ObjectWriter;
import score.annotation.Keep;

public final class XxxSdo extends Xxx {
  public XxxSdo() {
    super();
  }

  public XxxSdo(Xxx obj) {
    super();
    this.setValue(obj.getValue());
  }

  @Keep
  public static void writeObject(ObjectWriter writer, Xxx obj) {
    XxxSdo.writeObject(writer, obj instanceof XxxSdo ? (XxxSdo)obj : new XxxSdo(obj));
  }

  public static void writeObject(ObjectWriter writer, XxxSdo obj) {
    obj.writeObject(writer);
  }

  public static XxxSdo readObject(ObjectReader reader) {
    XxxSdo obj = new XxxSdo();
    reader.beginList();
    obj.setValue(reader.readNullable(String.class));
    reader.end();
    return obj;
  }

  public void writeObject(ObjectWriter writer) {
    writer.beginList(1);
    writer.writeNullable(this.getValue());
    writer.end();
  }

  public static XxxSdo fromBytes(byte[] bytes) {
    ObjectReader reader = Context.newByteArrayObjectReader("RLPn", bytes);
    return XxxSdo.readObject(reader);
  }

  public byte[] toBytes() {
    ByteArrayObjectWriter writer = Context.newByteArrayObjectWriter("RLPn");
    XxxSdo.writeObject(writer, this);
    return writer.toByteArray();
  }

  public static byte[] toBytes(Xxx obj) {
    return obj instanceof XxxSdo ? ((XxxSdo)obj).toBytes() : new XxxSdo(obj).toBytes();
  }

  public String toString() {
    return super.toString();
  }
}
```

**Usage:**
```java
//Score.java
import score.annotation.External;

public class Score {
    final VarDB<XxxSdo> db = Context.newVarDB("db", XxxSdo.class);
    
    @External
    public void set(Xxx xxx) {
        db.set(new XxxSdo(xxx));
    }

    @External(readonly = true)
    public Xxx get() {
        return db.get();
    }
}
```

#### ScoreDataProperty
This annotation is used along with ScoreDataObject. This is used to change the default behavior of a particular field. By default, some of the properties of fields are fixed. To change the behaviors like nullable, ignore a certain field, wrap, and so on, ScoreDataProperty annotation can be used with the fields of the class for which ScoreDataObject has been used.

Example:
```java
//Xxx.java
@ScoreDataObject
public class Xxx {
    @ScoreDataProperty(nullable = false)
    private String value;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
```

The generated class will be different according to the parameters set for the annotation.

```java
//XxxSdo.java
import java.lang.String;
import score.ByteArrayObjectWriter;
import score.Context;
import score.ObjectReader;
import score.ObjectWriter;
import score.annotation.Keep;

public final class XxxSdo extends Xxx {
  public XxxSdo() {
    super();
  }

  public XxxSdo(Xxx obj) {
    super();
    this.setValue(obj.getValue());
  }

  @Keep
  public static void writeObject(ObjectWriter writer, Xxx obj) {
    XxxSdo.writeObject(writer, obj instanceof XxxSdo ? (XxxSdo)obj : new XxxSdo(obj));
  }

  public static void writeObject(ObjectWriter writer, XxxSdo obj) {
    obj.writeObject(writer);
  }

  public static XxxSdo readObject(ObjectReader reader) {
    XxxSdo obj = new XxxSdo();
    reader.beginList();
    obj.setValue(reader.readString());
    reader.end();
    return obj;
  }

  public void writeObject(ObjectWriter writer) {
    writer.beginList(1);
    writer.write(this.getValue());
    writer.end();
  }

  public static XxxSdo fromBytes(byte[] bytes) {
    ObjectReader reader = Context.newByteArrayObjectReader("RLPn", bytes);
    return XxxSdo.readObject(reader);
  }

  public byte[] toBytes() {
    ByteArrayObjectWriter writer = Context.newByteArrayObjectWriter("RLPn");
    XxxSdo.writeObject(writer, this);
    return writer.toByteArray();
  }

  public static byte[] toBytes(Xxx obj) {
    return obj instanceof XxxSdo ? ((XxxSdo)obj).toBytes() : new XxxSdo(obj).toBytes();
  }

  public String toString() {
    return super.toString();
  }
}
```

### JavaEE Score JSON
#### JsonObject
If we need to convert a class into a JsonObject or vice-versa, we would need to write additional methods in the class to make the conversion. This annotation is used to generate those methods. This annotation can be used in class, interface, or enumeration. 

Example:
```java
//Xxx.java
@JsonObject
public class Xxx {
    private String value;
    
    public String getValue() { return value; }
    public void setValue(String value) { this.value = value; }
}
```

When java compiles, JSON convertible class will be generated with `@JsonObject.suffix()`. 

**Generated class:**
```java
//XxxJson.java
import com.eclipsesource.json.Json;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;
import java.lang.String;

public final class XxxJson extends Xxx {
  XxxJson() {
    super();
  }

  XxxJson(Xxx obj) {
    super();
    this.setValue(obj.getValue());
  }

  public static XxxJson parse(String jsonString) {
    return XxxJson.parse(Json.parse(jsonString));
  }

  public static JsonValue toJson(Xxx obj) {
    return obj == null ? Json.NULL : new XxxJson(obj).toJson();
  }

  public static XxxJson parse(JsonValue jsonValue) {
    if (jsonValue == null || jsonValue.isNull()) {
      return null;
    }
    JsonObject jsonObject = jsonValue.asObject();
    XxxJson obj = new XxxJson();
    JsonValue valueJsonValue = jsonObject.get("value");
    if (valueJsonValue != null && !valueJsonValue.isNull()) {
      obj.setValue(valueJsonValue.asString());
    }
    return obj;
  }

  public JsonObject toJson() {
    JsonObject jsonObject = Json.object();
    String value = this.getValue();
    JsonValue valueJsonValue = value == null ? Json.NULL : Json.value(value);
    jsonObject.add("value", valueJsonValue);
    return jsonObject;
  }
}
```

The generated class can be used in the following way:

```java
//Score.java
import score.annotation.External;
import com.eclipsesource.json.JsonObject;

public class Score {
    @External(readonly = true)
    public String json(String jsonString) {
        // parse
        Xxx xxx = XxxJson.parse(jsonString);
        // toJsonObject
        JsonObject jsonObject = XxxJson.toJsonObject(xxx);
        // toJsonString 
        return jsonObject.toString();
    }
}
```

#### JsonProperty
This annotation also works similarly to ScoreDataProperty. This annotation is used along with JsonObject. This is used to change the properties of specific fields in the class annotated by JsonObject. You can change the key of the JSON for the field, ignore the field, configure a custom parser, and so on. The generated class will be different compared to using only JsonObject.

Example:
```java
//Xxx.java
@JsonObject
public class Xxx {
    @JsonProperty(value = "key")
    private String value;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
```

**Generated class:**
```java
//XxxJson.java
import com.eclipsesource.json.Json;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;
import java.lang.String;

public final class XxxJson extends Xxx {
  XxxJson() {
    super();
  }

  XxxJson(Xxx obj) {
    super();
    this.setValue(obj.getValue());
  }

  public static XxxJson parse(String jsonString) {
    return XxxJson.parse(Json.parse(jsonString));
  }

  public static JsonValue toJson(Xxx obj) {
    return obj == null ? Json.NULL : new XxxJson(obj).toJson();
  }

  public static XxxJson parse(JsonValue jsonValue) {
    if (jsonValue == null || jsonValue.isNull()) {
      return null;
    }
    JsonObject jsonObject = jsonValue.asObject();
    XxxJson obj = new XxxJson();
    JsonValue valueJsonValue = jsonObject.get("key");
    if (valueJsonValue != null && !valueJsonValue.isNull()) {
      obj.setValue(valueJsonValue.asString());
    }
    return obj;
  }

  public JsonObject toJson() {
    JsonObject jsonObject = Json.object();
    String value = this.getValue();
    JsonValue valueJsonValue = value == null ? Json.NULL : Json.value(value);
    jsonObject.add("key", valueJsonValue);
    return jsonObject;
  }
}
```

## Function declarations
Smart contracts can have two functions that can be interacted with from outside of the contract. They are read-only and write functions. A function declaration can be done similarly to writing public Java methods. Although there are some restrictions. The method can’t be overloaded. Instead, you need to use Optional annotation to create such methods. There are also some limitations on parameter and return types.

```java
// Write method:
@External
public void transfer(Address _to, BigInteger _value, @Optional byte[] _data) {
…
}

// Read method:
@External(readonly=true)
public BigInteger balanceOf(Address _owner) {
…
}
```

### Parameter Type
A parameter type of an external method is:
- A simple value type,
- A writable struct, or
- An array of a parameter type
	
#### **Simple Value Type**

A simple value type is:
- A boolean, char, byte short, int or long, or
- A byte[], A BigInteger, Address, or String

#### **Writable Struct**
A type is a writable struct if
- the type is a non-abstract class,
- the type has no constructor or public zero-argument constructor, and
- the type has a public non-static setter method of writable property type

**Example:**
```java
class Person {
  public Person() {...}
  public String getName() {...}
  public void setName(String name) {...}
  public int getAge() {...}
  public void setAge(int age) {...}
}
```

##### **Writable Property**
A type is a writable property type if the type is
- A simple value type,
- A Boolean, Character, Byte, Short, Integer, or Long,
- A writable struct type (recursion is not allowed), or
- An array of writable property

### Return Type
A return type of an external method is
- void,
- A simple value type,
- A readable struct (regarded as a map),
- an array of a non-void return type (regarded as a list),
- List where each element is of a non-void return type or null, or
- Map where each key is of a String and each value is of a non-void return type or null

#### **Readable Struct**
A type is a readable struct if the type has a public non-static getter method of readable property type. For example, the following type is a readable struct. 

```java
class Person {
          public String getName() {...}
          public int getAge() {...}
}
```

#### **Readable Property**
A type is a readable property type if the type is
A simple value type
A Boolean, Character, Byte, Short, Integer, and Long,
A readable struct type (recursion is not allowed in this case), or
An array of readable property

## Event logs, and bloom filters

Event logs are written to notify external applications about the changes happening inside the transactions. Contracts can log the data about executions. Contracts can’t access those logs but external applications read those logs efficiently. Events are tied to the contract address that generates those events. Off-chain applications listen to events and can process them according to those events. Events are essential components for such off-chain applications. Events can also help test smart contract executions. Parameters can be indexed in events. Indexed parameters let us search for required data. Indexed parameters are also included in the bloom filter. 

Bloom filters are probabilistic data structures that can be used to check the membership of an item in the set. Here, bloom filters are used to check if an event log is part of a block or not. Since the bloom filters are probabilistic data structures, they can give false positives for some events when searching in bloom filters. If the bloom filters are less filled, there is less chance of false positives. In ICON, bloom filters are made of 2048 bits. Each transaction contains logsBloom and logs bloom of each transaction are merged into a single bloom filter. Bloom filters make searching those event logs easier and faster. Bloom filter uses very less memory which makes it an efficient choice to find out whether an event is contained in a particular block. To search for specific events in a block, we don’t need to download the entire block. We can just verify by examining the logsBloom field in the block header.

ICON adds contract address, event signature, and indexed fields in the Bloom filter. Event logs can have a maximum of 3 indexed fields, thus a maximum of 5 fields is added in the bloom filter for each event log. 

### Algorithm for creating Bloom filter of event logs

- Prepare a byte array of the address, event topic, and indexed event logs parameters. Add 0xff prefix for address, 0x01 prefix for event topic, and 0x02,0x03,0x04 prefix for other indexed parameters respectively.
- Compute the SHA256 hash of the byte array.
- Choose the first 3 pairs of hash.
- Convert each pair hex value into binary and take the last 11 bits which is equivalent to performing AND operation with 2047(0111 1111 1111)2.
- Set the ith bit of the 2048-bit long bloom filter where i is the number computed from the above operation.

### Algorithm to check membership of event log in Bloom filter

- Compute 3 bits with the same algorithm above for contract address, event topic, or indexed parameters.
- If all 3 bits are set in the bloom filter, the item would probably exist in the block.

## Context
Every smart contract has an associated Context that allows the application to interface with the environment the smart contract is running. Typically, it includes the transaction, block context, and other blockchain functionality. Unless otherwise noted, passing a null argument to a method in this class will cause a NullPointerException to be thrown. You can find more about the methods in the Context class here.

Context class lets smart contract developers access the global variables in the smart contract. It also provides some utility methods.
