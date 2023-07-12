---
title: "Zero Knowledge Proof on ICON Blockchain: Part-2"
date: 2023-05-11
slug: zkp-on-icon-pt2
description: In this three-part article series, we will explore the exciting world of zero-knowledge proofs (ZKPs) and how they can be used on the ICON blockchain. In particular, will use the Sudoku as an example to provide an overview of ZKPs, how they work, and their benefits.
author: venture-23
canonicalURL: "https://medium.com/@iconzkp/zero-knowledge-proof-on-icon-blockchain-part-2-d7ba2e6a37d6"

---

* **Jump back to [Part-1](/tutorials/zkp-on-icon-pt1/)**
* **Jump ahead to [Part-3](/tutorials/zkp-on-icon-pt3/)**

In this article, we will be talking about the circuits that we used in our Sudoku game. This [Sudoku project](https://github.com/venture23-zkp/zkp-examples/tree/main/apps/sudoku) consists of 3 directories namely, circuits, contracts, and frontend.

# Circuits:
In the circuits section, we will take a look into the following things. You can also jump to whichever section you prefer to read by clicking any of the below topics:

1. [Writing the circuits](#writing-the-circuit)
2. [Compiling the circuits](#compiling-the-circuits)
3. [Perform trusted setup](#perform-trusted-setup)
4. [Generate Zkey](#generate-zkey)
5. [Generate JAVA Verifier](#generate-java-verifier)
6. [Computing the witness](#computing-the-witness)
7. [Generating a Proof](#generating-a-proof)
8. [Verifying a Proof](#verifying-a-proof)

## Writing the Circuit
Circom circuits are built using a combination of programming constructs and mathematical functions. The circuits are written in [Circom](https://circom.io/) language. In our Sudoku game, we have 3 different circuits, namely [puzzle.circom](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/circuits/puzzle.circom) [sudoku_sha256.circom](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/circuits/sudoku_sha256.circom), [sudoku_pedersen.circom](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/circuits/sudoku_pedersen.circom).

### Circuits Explanation:
[Puzzle.circom](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/circuits/puzzle.circom#L1):
```bash
pragma circom 2.0.0;

include "./node_modules/circomlib/circuits/comparators.circom";

template Puzzle() {
    signal input board[9][9];
    signal input solved[9][9];

    // Check if the numbers of the solved sudoku are >=1 and <=9 matches
    // Each number in the solved sudoku is checked to see if it is >=1 and <=9

    component getone[9][9];
    component letnine[9][9];


    for (var i = 0; i < 9; i++) {
       for (var j = 0; j < 9; j++) {
           letnine[i][j] = LessEqThan(32);
           letnine[i][j].in[0] <== solved[i][j];
           letnine[i][j].in[1] <== 9;

           getone[i][j] = GreaterEqThan(32);
           getone[i][j].in[0] <== solved[i][j];
           getone[i][j].in[1] <== 1;

           letnine[i][j].out ===  getone[i][j].out;
        }
    }


    // Check if board is the initial state of solved
    // If board[i][j] is not zero, it means that solved[i][j] is equal to board[i][j]
    // If board[i][j] is zero, it means that solved [i][j] is different from board[i][j]

    component ieBoard[9][9];
    component izBoard[9][9];

    for (var i = 0; i < 9; i++) {
       for (var j = 0; j < 9; j++) {
            ieBoard[i][j] = IsEqual();
            ieBoard[i][j].in[0] <== solved[i][j];
            ieBoard[i][j].in[1] <== board[i][j];

            izBoard[i][j] = IsZero();
            izBoard[i][j].in <== board[i][j];

            ieBoard[i][j].out === 1 - izBoard[i][j].out;
        }
    }


    // Check if each row in solved has all the numbers from 1 to 9, both included
    // For each element in solved, check that this element is not equal
    // to previous elements in the same row

    component ieRow[324];

    var indexRow = 0;


    for (var i = 0; i < 9; i++) {
       for (var j = 0; j < 9; j++) {
            for (var k = 0; k < j; k++) {
                ieRow[indexRow] = IsEqual();
                ieRow[indexRow].in[0] <== solved[i][k];
                ieRow[indexRow].in[1] <== solved[i][j];
                ieRow[indexRow].out === 0;
                indexRow ++;
            }
        }
    }


    // Check if each column in solved has all the numbers from 1 to 9, both included
    // For each element in solved, check that this element is not equal
    // to previous elements in the same column

    component ieCol[324];

    var indexCol = 0;


    for (var i = 0; i < 9; i++) {
       for (var j = 0; j < 9; j++) {
            for (var k = 0; k < i; k++) {
                ieCol[indexCol] = IsEqual();
                ieCol[indexCol].in[0] <== solved[k][j];
                ieCol[indexCol].in[1] <== solved[i][j];
                ieCol[indexCol].out === 0;
                indexCol ++;
            }
        }
    }


    // Check if each square in solved has all the numbers from 1 to 9, both included
    // For each square and for each element in each square, check that the
    // element is not equal to previous elements in the same square

    component ieSquare[324];

    var indexSquare = 0;

    for (var i = 0; i < 9; i+=3) {
       for (var j = 0; j < 9; j+=3) {
            for (var k = i; k < i+3; k++) {
                for (var l = j; l < j+3; l++) {
                    for (var m = i; m <= k; m++) {
                        for (var n = j; n < l; n++){
                            ieSquare[indexSquare] = IsEqual();
                            ieSquare[indexSquare].in[0] <== solved[m][n];
                            ieSquare[indexSquare].in[1] <== solved[k][l];
                            ieSquare[indexSquare].out === 0;
                            indexSquare ++;
                        }
                    }
                }
            }
        }
    }

}
```	
This is a circom circuit checks if a given Sudoku puzzle is correctly solved. The template receives two inputs: “board”, which represents the initial state of the Sudoku puzzle, and “solved”, which represents the solved state of the puzzle.

This code uses circoms built-in circuit called [comparators.circom](https://github.com/iden3/circomlib/blob/master/circuits/comparators.circom) which has various comparison functions like **LessEqThan**, **GreaterEqThan** ans **IsEqual**.

The code consists of several components that perform different checks on the input. Here is a brief summary of what each component does:

* **getone** and **letnine**: These two components ensure that each number in the solved Sudoku is between 1 and 9 (inclusive).
It defines two arrays of component objects, **letnine** and getone, each with dimensions of 9x9.

In the nested for loops, the code initializes each element of the letnine and getone arrays as a comparison component object.

For each letnine object, the **LessEqThan** method is called with an argument of 32, which is used as the threshold value for the comparison. The first input of the letnine object is then connected to the corresponding cell of the solved array, while the second input is set to a constant value of 9.

Similarly, for each getone object, the **GreaterEqThan** method is called with an argument of 32, and the inputs are connected to the corresponding cell of the solved array and a constant value of 1, respectively.

Finally, the out output of each letnine object is connected to the out output of the corresponding getone object.

Overall, this code sets up constraints for the solver to ensure that each cell of the Sudoku puzzle is a valid number between 1 and 9.
```bash
for (var i = 0; i < 9; i++) {
       for (var j = 0; j < 9; j++) {
           letnine[i][j] = LessEqThan(32);
           letnine[i][j].in[0] <== solved[i][j];
           letnine[i][j].in[1] <== 9;

           getone[i][j] = GreaterEqThan(32);
           getone[i][j].in[0] <== solved[i][j];
           getone[i][j].in[1] <== 1;

           letnine[i][j].out ===  getone[i][j].out;
        }
    }
```

* **ieBoard** and **izBoard**: These components check if the initial state of the board matches the solved state of the puzzle. If a cell in the board is not zero, it means that the corresponding cell in the solved state should have the same value. If a cell in the board is zero, it means that the corresponding cell in the solved state should have a different value.
```bash	
component ieBoard[9][9];
    component izBoard[9][9];

    for (var i = 0; i < 9; i++) {
       for (var j = 0; j < 9; j++) {
            ieBoard[i][j] = IsEqual();
            ieBoard[i][j].in[0] <== solved[i][j];
            ieBoard[i][j].in[1] <== board[i][j];

            izBoard[i][j] = IsZero();
            izBoard[i][j].in <== board[i][j];

            ieBoard[i][j].out === 1 - izBoard[i][j].out;
        }
    }
```	
* **ieRow**: This component checks if each row in the solved Sudoku has all the numbers from 1 to 9 (inclusive) without repetition. For each cell in a row, it checks that the cell is not equal to any of the previous cells in the same row.
```bash
component ieCol[324];

    var indexCol = 0;

    for (var i = 0; i < 9; i++) {
       for (var j = 0; j < 9; j++) {
            for (var k = 0; k < i; k++) {
                ieCol[indexCol] = IsEqual();
                ieCol[indexCol].in[0] <== solved[k][j];
                ieCol[indexCol].in[1] <== solved[i][j];
                ieCol[indexCol].out === 0;
                indexCol ++;
            }
        }
    }
```
* **ieCol**: This component checks if each column in the solved Sudoku has all the numbers from 1 to 9 (inclusive) without repetition. For each cell in a column, it checks that the cell is not equal to any of the previous cells in the same column.
```bash
component ieCol[324];

    var indexCol = 0;

    for (var i = 0; i < 9; i++) {
       for (var j = 0; j < 9; j++) {
            for (var k = 0; k < i; k++) {
                ieCol[indexCol] = IsEqual();
                ieCol[indexCol].in[0] <== solved[k][j];
                ieCol[indexCol].in[1] <== solved[i][j];
                ieCol[indexCol].out === 0;
                indexCol ++;
            }
        }
    }
```
* **ieSquare**: This component checks if each 3×3 square in the solved Sudoku has all the numbers from 1 to 9 (inclusive) without repetition. For each cell in a square, it checks that the cell is not equal to any of the previous cells in the same square.
```bash
component ieSquare[324];

    var indexSquare = 0;

    for (var i = 0; i < 9; i+=3) {
       for (var j = 0; j < 9; j+=3) {
            for (var k = i; k < i+3; k++) {
                for (var l = j; l < j+3; l++) {
                    for (var m = i; m <= k; m++) {
                        for (var n = j; n < l; n++){
                            ieSquare[indexSquare] = IsEqual();
                            ieSquare[indexSquare].in[0] <== solved[m][n];
                            ieSquare[indexSquare].in[1] <== solved[k][l];
                            ieSquare[indexSquare].out === 0;
                            indexSquare ++;
                        }
                    }
                }
            }
        }
    }
```
These components use various built-in Circom circuit functions, such as **LessEqThan** and **GreaterEqThan** for range checking, and **IsEqual** and **IsZero** for equality checking. The components are connected using the standard Circom syntax for wiring inputs and outputs.

In our Sudoku game circuit we are using multiple hashing functions from cirocm because we want to reduce number of public inputs which drastically reduces the gas cost in the verification of proof.

[sudoku_sha256.circom](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/circuits/sudoku_sha256.circom#L1):
```bash
pragma circom 2.0.0;

include "./node_modules/circomlib/circuits/bitify.circom";
include "./node_modules/circomlib/circuits/sha256/sha256.circom";
include "./puzzle.circom";


template Sha256BoardHasher() {
    signal input board[9][9];
    signal output out;

    component board_n2b[9][9];
    component sha256 = Sha256(328); // 81 * 4 bits + 4 bits for byte alignment
    sha256.in[0] <== 0;
    sha256.in[1] <== 0;
    sha256.in[2] <== 0;
    sha256.in[3] <== 0;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            board_n2b[i][j] = Num2Bits(4);
            board_n2b[i][j].in <== board[i][j];
            var index = 4 + 4 * (9 * i + j);
            sha256.in[index] <== board_n2b[i][j].out[3];
            sha256.in[index + 1] <== board_n2b[i][j].out[2];
            sha256.in[index + 2] <== board_n2b[i][j].out[1];
            sha256.in[index + 3] <== board_n2b[i][j].out[0];
        }
    }
    component boardHash = Bits2Num(256);
    for (var i = 0; i < 256; i++) {
        boardHash.in[i] <== sha256.out[255 - i];
    }

    out <== boardHash.out;
    // print the board hash
}

template SudokuSha256() {
    signal input boardId;
    signal input board[9][9];
    signal input solved[9][9];

    component boardHasher = Sha256BoardHasher();
    boardHasher.board <== board;
    boardHasher.out === boardId;

    component puzzle = Puzzle();
    puzzle.board <== board;
    puzzle.solved <== solved;
}


component main {public [boardId]} = SudokuSha256();
```
This Circom circuit computes a SHA256 hash of the given board.

The program consists of two templates:

1. **Sha256BoardHasher**: This template takes a 9×9 Sudoku board as input and generates a SHA256 hash of the board. The board is first converted into a binary string representation using Num2Bits component from Circomlib library. Then, the binary string is padded with zeros to ensure byte alignment and passed to the SHA256 component. Finally, the SHA256 output is converted back to a decimal number using Bits2Num component.
```bash	
template Sha256BoardHasher() {
    signal input board[9][9];
    signal output out;

    component board_n2b[9][9];
    component sha256 = Sha256(328); // 81 * 4 bits + 4 bits for byte alignment
    sha256.in[0] <== 0;
    sha256.in[1] <== 0;
    sha256.in[2] <== 0;
    sha256.in[3] <== 0;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            board_n2b[i][j] = Num2Bits(4);
            board_n2b[i][j].in <== board[i][j];
            var index = 4 + 4 * (9 * i + j);
            sha256.in[index] <== board_n2b[i][j].out[3];
            sha256.in[index + 1] <== board_n2b[i][j].out[2];
            sha256.in[index + 2] <== board_n2b[i][j].out[1];
            sha256.in[index + 3] <== board_n2b[i][j].out[0];
        }
    }
    component boardHash = Bits2Num(256);
    for (var i = 0; i < 256; i++) {
        boardHash.in[i] <== sha256.out[255 - i];
    }

    out <== boardHash.out;
    // print the board hash
}
```	
2. **SudokuSha256**: This template takes a boardId, a 9×9 Sudoku board, and a 9×9 solved board as input. It first generates a SHA256 hash of the input board using the Sha256BoardHasher template. Then, it passes the board and solved board to a puzzle component, which solves the Sudoku puzzle and verifies that the solution matches the solved board. The output of this template is the boardId which is the SHA256 hash of the input board.
```bash
template SudokuSha256() {
    signal input boardId;
    signal input board[9][9];
    signal input solved[9][9];

    component boardHasher = Sha256BoardHasher();
    boardHasher.board <== board;
    boardHasher.out === boardId;

    component puzzle = Puzzle();
    puzzle.board <== board;
    puzzle.solved <== solved;
}
```
The main component simply calls the SudokuSha256 template and exposes the boardId signal as public.
```bash
component main {public [boardId]} = SudokuSha256();
```
Overall, the program uses the SHA256 hash function to generate a unique identifier for each Sudoku puzzle solution. This identifier can be used to verify that a given Sudoku solution matches a specific board.

[sudoku_pedersen.circom](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/circuits/sudoku_pedersen.circom#L1):
```bash
pragma circom 2.0.0;

include "./node_modules/circomlib/circuits/bitify.circom";
include "./node_modules/circomlib/circuits/pedersen.circom";
include "./puzzle.circom";


template PedersenBoardHasher() {
    signal input board[9][9];
    signal output out;

    component board_n2b[9][9];
    component pedersen = Pedersen(328); // 81 * 4 bits + 4 bits for the byte alignment
    pedersen.in[0] <== 0;
    pedersen.in[1] <== 0;
    pedersen.in[2] <== 0;
    pedersen.in[3] <== 0;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            board_n2b[i][j] = Num2Bits(4);
            board_n2b[i][j].in <== board[i][j];
            var index = 4 + 4 * (9 * i + j);
            pedersen.in[index] <== board_n2b[i][j].out[3];
            pedersen.in[index + 1] <== board_n2b[i][j].out[2];
            pedersen.in[index + 2] <== board_n2b[i][j].out[1];
            pedersen.in[index + 3] <== board_n2b[i][j].out[0];
        }
    }

    out <== pedersen.out[0];
}

template SudokuPedersen() {
    signal input boardId;
    signal input board[9][9];
    signal input solved[9][9];

    component boardHasher = PedersenBoardHasher();
    boardHasher.board <== board;
    boardHasher.out === boardId;

    component puzzle = Puzzle();
    puzzle.board <== board;
    puzzle.solved <== solved;
}


component main {public [boardId]} = SudokuPedersen();
```

This is a Circom circuit defines a template for hashing a 9×9 Sudoku board using the Pedersen hash function. The template is called **PedersenBoardHasher()** and takes as input a 9×9 Sudoku board and outputs the hash of the board.

The template first includes two other Circom built-in circuits: **bitify.circom** and **pedersen.circom**, which define the Num2Bits and Pedersen components, respectively.

The **PedersenBoardHasher()** template defines a 9×9 board input signal and an out output signal. It also defines a board_n2b component that converts each board element from a number to a 4-bit signal using Num2Bits. The Pedersen component is then used to hash the 4-bit signals of each board element and output the resulting hash as out.

```bash
template PedersenBoardHasher() {
    signal input board[9][9];
    signal output out;

    component board_n2b[9][9];
    component pedersen = Pedersen(328); // 81 * 4 bits + 4 bits for the byte alignment
    pedersen.in[0] <== 0;
    pedersen.in[1] <== 0;
    pedersen.in[2] <== 0;
    pedersen.in[3] <== 0;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            board_n2b[i][j] = Num2Bits(4);
            board_n2b[i][j].in <== board[i][j];
            var index = 4 + 4 * (9 * i + j);
            pedersen.in[index] <== board_n2b[i][j].out[3];
            pedersen.in[index + 1] <== board_n2b[i][j].out[2];
            pedersen.in[index + 2] <== board_n2b[i][j].out[1];
            pedersen.in[index + 3] <== board_n2b[i][j].out[0];
        }
    }

    out <== pedersen.out[0];
}
```

The **SudokuPedersen()** template uses **PedersenBoardHasher()** to hash a Sudoku board and outputs the boardId. It also takes as input a solved 9×9 Sudoku board to be used for puzzle verification.
```bash
template SudokuPedersen() {
    signal input boardId;
    signal input board[9][9];
    signal input solved[9][9];

    component boardHasher = PedersenBoardHasher();
    boardHasher.board <== board;
    boardHasher.out === boardId;

    component puzzle = Puzzle();
    puzzle.board <== board;
    puzzle.solved <== solved;
}
```

Finally, the main component instantiates the SudokuPedersen() template and makes the boardId output signal public.
```bash
component main {public [boardId]} = SudokuPedersen();
```	
## Compiling the circuits:
For compiling the circuits, we perform the following step:
```bash
circom ${circuitName}.circom --r1cs --wasm --prime ${curveName} -o ${buildDir}
```
After compiling the circuits, we get a wasm and r1cs files. This is a script that compiles the circuit. The circuit can either be **sudoku_pedersen** or **sudoku_sha256**, and the chosen curve (either **bn128** or **bls12381**) is determined based on the **circuitName** and **curveName**. The script creates a build directory and compiles the circuit using circom to generate the R1CS (Rank-1 Constraint System) and Wasm files.

The R1CS file is a textual representation of the algebraic equations that make up the circuit. It defines the constraints that the inputs and outputs of the circuit must satisfy in order for the circuit to be considered valid. The R1CS file is used as input to the zk-SNARK setup and proof generation processes.

The Wasm file is a binary format of the circuit that can be executed by the snarkjs library. It contains the compiled circuit code, along with any dependencies required for the circuit to function. The Wasm file is used to generate a witness for the circuit, which is a set of input values that satisfy the constraints defined in the R1CS file. The witness is then used to generate a zk-SNARK proof of the circuit’s validity.

*Note: For performing trusted setup, we need to install [icon-snarkjs](https://github.com/venture23-zkp/icon-snarkjs#install-icon-snarkjs) in our system.*

## Perform Trusted Setup:
To understand the concept of **trusted setups**, let us consider both words in the phrase.

**Trust** comes into play because a group is involved in the setup process of a proof system. In contrast, the **setup** phase involves performing (the setup part) some computation that generates a piece of data ([parameter generation](https://z.cash/technology/paramgen/?ref=blog.pantherprotocol.io)) called into use every time you run a specific cryptographic protocol. Trusted setups are exceptional cases of [multi-party computation](https://blog.pantherprotocol.io/a-deep-dive-into-secure-multi-party-computation-mpc/), that require randomness, multiple individuals, and at least one honest party.

### How does Trusted Setup help sudoku?
For example, In the context of a blockchain Sudoku game, the trusted setup could be performed by a set of trusted parties (such as developers or auditors) who generate the ZKP parameters and publicly distribute them on the blockchain. This ensures that anyone can verify the correctness of the Sudoku solution without having to trust any particular party.

In this project, we have used the **Groth16 zk-SNARK protocol**. To use this protocol, we will need to generate a trusted setup. Groth16 requires a per circuit trusted setup. In more detail, the trusted setup consists of 2 parts:

1. The powers of tau, which is independent of the circuit.
2. The phase 2, which depends on the circuit.

Next, we provide a very basic ceremony for creating the trusted setup, and we also provide the basic commands to create and verify Groth16 proofs. Review the related Background section and check the snarkjs tutorial for further information.

### Powers of Tau
First, we start a new “powers of tau” ceremony:
```bash
icon-snarkjs powersoftau new ${curveName} 16 pot12_0000.ptau -v
```
Then, we contribute to the ceremony:
```bash 
icon-snarkjs powersoftau contribute pot16_0000.ptau pot16_0001.ptau --name="First contribution" -v
```
Now, we have the contributions to the powers of tau in the file pot16_0001.ptau, and we can proceed with the Phase 2.

### Phase 2
The phase 2 is **circuit-specific**. Execute the following command to start the generation of this phase:
```bash
icon-snarkjs powersoftau prepare phase2 pot16_0001.ptau pot16_final.ptau -v
```
## Generate Zkey:
In the previous step we performed the trusted setup where we started a power of tau ceremony.

Now, we generate a **.zkey** file that will contain the proving and verification keys together with all phase 2 contributions. Execute the following command to start a new zkey:
```bash
icon-snarkjs groth16 setup ${circuitName}.r1cs pot16_final.ptau ${circuitName}_0000.zkey
```
Contribute to the phase 2 of the ceremony:
```bash
icon-snarkjs zkey contribute ${circuitName}_0000.zkey ${circuitName}_0001.zkey --name="1st Contributor Name" -v
```
Export the verification key:
In the previous step we generated a zkey that contains the proving and verifying keys and we also contributed to the second phase of the ceremony. Now we need to export the verification_key for Verifying the proof.
```bash
icon-snarkjs zkey export verificationkey ${circuitName}_0001.zkey verification_key.json
```
## Generate JAVA Verifier
To generate a Java verifier, we can use the following command:
```bash
icon-snarkjs zkey export javaverifier ${circuitName}_0001.zkey ${circuitName}.java
```
Now that we have a Java verifier, we can use these verifiers to verify the proof, that will be generated by the browser when the user submits the solution.

## Computing the witness
```bash
node ${circuitName}_js/generate_witness.js ${circuitName}_js/${circuitName}.wasm $inputFileName ${witnessFileName}+
```
Here, once we have compiled the circuits, a folder named ${circuitName}_js is generated. So, for computing the witness we use generate_witness.js file and an input file [${circuitName}.json](https://github.com/venture23-zkp/zkp-examples/tree/main/apps/sudoku/circuits/inputs) and the final witness file say, witness.json is generated.

## Generating a Proof
Once the witness is computed and the trusted setup is already executed, we can **generate a zk-proof** associated to the circuit and the witness:
```bash
icon-snarkjs groth16 prove ${circuitName}_0001.zkey witness.wtns proof.json public.json
```
This command generates a Groth16 proof and outputs two files:

* **proof.json**: it contains the proof.
* **public.json**: it contains the values of the public inputs and outputs.
*Note: In our case, circuit can be either sudoku_sha256.circom or sudoku_pedersen.circom and depending on what comes into circuitName.*

## Verifying a Proof
To verify the proof, execute the following command:
```bash
icon-snarkjs groth16 verify verification_key.json public.json proof.json
```
The command uses the file's like **verification_key.json** we exported earlier, **proof.json** and **public.json** to check if the proof is valid. If the proof is valid, the command outputs an OK.

## Wrapping It Up
Whew! That’s a lot of steps. When developing circuits, we frequently try to verify if the circuits behaves as expected, that the proof and output are generated as expected and they verify correctly. So every time we make a change to our script we might want to run through all the steps discussed above. To make that process faster, I have created a script that automates the above steps. You can go through the script by clicking the link mentioned below.

[Script to automate all the above steps](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/circuits/build.sh)

Overall, In this article we discussed about how to write circuit for a Sudoku game, compiling it, perform trusted setup, generate a zkey, a JAVA verifier computing a witness and generation and verification of the proof.

In the third part, we will discuss about how we can use the above circuits in a [Sudoku](https://v23-zkp-examples-sudoku.vercel.app/) game utilizing Zero Knowledge Proof.

---
* **Jump back to [Part-1](/tutorials/zkp-on-icon-pt1/)**
* **Jump ahead to [Part-3](/tutorials/zkp-on-icon-pt3/)**