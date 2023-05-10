---
title: "Zero Knowledge Proof on ICON Blockchain: Part-3"
date: 2023-05-12
slug: zkp-on-icon-pt3
description: In this three-part article series, we will explore the exciting world of zero-knowledge proofs (ZKPs) and how they can be used on the ICON blockchain. In particular, will use the Sudoku as an example to provide an overview of ZKPs, how they work, and their benefits.
author: venture-23
canonicalURL: "https://medium.com/@iconzkp/zero-knowledge-proof-on-icon-blockchain-part-3-5d45849ccf2e"
---

This article is the continuation of the [Part-1](https://icon.community/learn/zkp-on-icon-pt1) & [Part-2](https://icon.community/learn/zkp-on-icon-pt2) of this article series on **Zero Knowledge Proof on ICON Blockchain**. This article features a [ZkSudoku](https://v23-zkp-examples-sudoku.vercel.app/) game that utilizes Zero Knowledge Proof.

In **Part-1**, we started with why we need zero-knowledge proof and in **Part-2**, we dived into the proofs using circom and icon-snarkjs. In this final article, we will create a complete full stack application that solves our problem with Sudoku NFT Collection. We’ll call the project [ZK-Sudoku](https://v23-zkp-examples-sudoku.vercel.app/).

# ZK Sudoku Project Structure:
We have structured our project by splitting them into three directories, namely circuits, contracts and frontend.

## 1. Circuits:
This directory consists of three circuits, namely [puzzle.circom](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/circuits/puzzle.circom), [sudoku_sha256.circom](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/circuits/sudoku_sha256.circom) and [sudoku_pedersen.circom](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/circuits/sudoku_pedersen.circom) that verifies the solution of Sudoku game, computes sha256 hash and pedersen hash of the given board.

## 2. Contracts:
In this directory, we put all the contracts necessary for our Sudoku game, that includes Board.java, Sudoku.java, PedersenBN128Verifier.java and Sha256BLS12381Verifier.java.

Sudoku.java contract will be used as main Sudoku game logic contract.

PedersenBN128Verifier.java and Sha256BLS12381Verifier.java will be used as a verifier contract for verifying the proof.

## 3. Frontend:
In this directory, we put all the UI logic necessary for our Sudoku game. After we deploy the Sudoku game contract, the corresponding contract address will be kept inside [frontend/pages/config](https://github.com/venture23-zkp/zkp-examples/tree/main/apps/sudoku/frontend/pages/config) location. And once we have compiled the circuits we will have the corresponding zkey, wasm and r1cs files that we will put inside [frontend/public/circuit/pedersen](https://github.com/venture23-zkp/zkp-examples/tree/main/apps/sudoku/frontend/public/circuit/pedersen) and [frontend/public/circuit/sha256](https://github.com/venture23-zkp/zkp-examples/tree/main/apps/sudoku/frontend/public/circuit/sha256).

## Sudoku game utilizing Zero Knowledge Proof:
In this [Sudoku game](https://v23-zkp-examples-sudoku.vercel.app/) that we have created, there are three boards available that users can choose to solve. When a user reloads the page, it then sends a request to the smart contract, the contract responds by rendering one of three Sudoku boards to the user interface (UI). In other words, the user will be presented with a Sudoku puzzle to solve. This process can be repeated with multiple requests, and each time a different Sudoku board will be rendered as below:

{{< img src="sudoku_1.png" alt="Sudoku 1" caption="Board before the user fills the correct solution" >}}

{{< img src="sudoku_2.png" alt="Sudoku 2" caption="Solved board before the user clicks on Verify button" >}}

{{< img src="sudoku_3.png" alt="Sudoku 3" caption="Solution correctly verified" >}}

Once the user picks and fills the board with the solution that he/she is confident about then, At a high level, the user submits the solution to the Sudoku game contract that verifies the solution.

After the user clicks the submit button, the proof generation starts. Once the proof is generated, it is automatically forwarded to the SCORE (smart contract). The proof generation is done on the browser.

## Generating proof on browser using snarkjs:
For example, in our ZK Sudoku game to generate the proof in the browser, we can do the following things:

First, we call the [generateGroth16Proof](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/frontend/pages/index.js#L34) function as follows:
```bash
async function generateGroth16Proof(input, wasmPath, zkeyPath) {
    const {
        proof: { pi_a, pi_b, pi_c },
    } = await snarkjs.groth16.fullProve(input, wasmPath, zkeyPath);
    return {
        a: [pi_a[0], pi_a[1]],
        b: [
            [pi_b[0][0], pi_b[0][1]],
            [pi_b[1][0], pi_b[1][1]],
        ],
        c: [pi_c[0], pi_c[1]],
    }
}
```
This function takes three arguments:

1. **Input:** An object containing the data that needs to be included in the proof. In this case, it includes boardId, board, and solved.
2. **{PATH TO wasm FILE}/sudoku.wasm:** A path to the WebAssembly binary file containing the compiled code for the zk-SNARK circuit used to generate the proof.
3. **{PATH TO zkey FILE}/sudoku_final.zkey:** A path to the trusted setup parameters file used to generate the proof.
The **generateGroth16Proof()** function returns a Groth16 proof by running the circuit specified in the **sudoku.wasm** file on the input data and the trusted setup parameters specified in the **sudoku_final.zkey** file.

## Code Explanation:
**snarkjs.groth16.fullProve()** is a method from the snarkjs library that takes three arguments, namely **input**, **wasmPath**, **zkeyPath** and is used to generate a Groth16 proof. A Groth16 proof is a type of proof used in zero-knowledge proofs that allows a prover to prove the validity of a computation without revealing any of the inputs or the computation itself.

The **fullProve()** method takes in three parameters: The **fullProve()** method returns an object containing three arrays: pi_a, pi_b, and pi_c. These arrays represent the Groth16 proof that can be verified by a verifier. The **generateGroth16Proof()** function extracts the pi_a, pi_b, and pi_c arrays from the object returned by **fullProve()**, formats them into the expected format, and returns them as an object with the properties a, b, and c.

* If the proof generation fails, an alert message like **“failed to generate proof”** is prompted.

After the proof is generated, it is then submitted to the Sudoku game contract deployed on the ICON Blockchain for the verification.

For the verification of the proof, we call the [verify method](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/frontend/pages/index.js#L207) of the Sudoku game contract as follows:
```bash
 @External(readonly = true)
    public boolean verify(BigInteger boardId, BigInteger[] a, BigInteger[][] b, BigInteger[] c) {
        for (int i = 0; i < boards.size(); i++) {
            Board board = boards.get(i);
            if (board.getSha256Id().equals(boardId)) {
                return this.sha256BLS12381Verifier.verifyProof(a, b, c, new BigInteger[]{boardId});
            }
            if (board.getPedersenId().equals(boardId)) {
                return this.pedersenBN128Verifier.verifyProof(a, b, c, new BigInteger[]{boardId});
            }
        }
        throw new IllegalArgumentException("Board with id = " + boardId + " does not exist!");
    }
```	
This method takes four parameters:

1. **boardId:** a BigInteger representing the ID of the board to verify.
2. **a:** a BigInteger array representing the first part of the proof.
3. **b:** a two-dimensional BigInteger array representing the second part of the proof.
4. **c:** a BigInteger array representing the third part of the proof.

The [@External](http://twitter.com/External)(readonly = true) annotation indicates that this method is a read-only method, meaning that it does not modify the state of the object.

The for loop iterates through all the Board objects in the boards list until it finds the board with the given **boardId**.

If the boardId and the respective hash of the board is matched then, it calls the appropriate verifier ie; [sha256BLS12381Verifier.verifyProof](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/contracts/contracts/src/main/java/io/venture23zkp/sudoku/Sha256BLS12381Verifier.java#L254) or [pedersenBN128Verifier.verifyProof](https://github.com/venture23-zkp/zkp-examples/blob/main/apps/sudoku/contracts/contracts/src/main/java/io/venture23zkp/sudoku/PedersenBN128Verifier.java#L243) to verify the proof represented by the **a**, **b**, and **c** arrays, and returns the result of the verification. If the board is not found, it throws an **IllegalArgumentException**.

Finally, after the proof is verified by the verifier contract, then the user is prompted with **“Correct solution!”** and the game is successfully completed.

## Sudoku game details:
This game contract is deployed on the ICON blockchain, and the following are the game-specific links:

* Game link: https://v23-zkp-examples-sudoku.vercel.app/
* Contract Address: cxbedd3bec8a4f966c2cd6c5956066fd2605ad519d
* GitHub repo link: https://github.com/venture23-zkp/zkp-examples