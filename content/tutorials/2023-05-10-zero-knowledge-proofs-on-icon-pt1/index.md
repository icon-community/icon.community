---
title: "Zero Knowledge Proof on ICON Blockchain: Part-1"
date: 2023-05-10
slug: zkp-on-icon-pt1
description: In this three-part article series, we will explore the exciting world of zero-knowledge proofs (ZKPs) and how they can be used on the ICON blockchain. In particular, will use the Sudoku as an example to provide an overview of ZKPs, how they work, and their benefits.
author: venture-23
canonicalURL: "https://medium.com/@iconzkp/zero-knowledge-proof-on-icon-blockchain-part-1-4b3bcf6924f0"
---

* **Jump ahead to [Part-2](/tutorials/zkp-on-icon-pt2/)**
* **Jump ahead to [Part-3](/tutorials/zkp-on-icon-pt3/)**

The [integration of the BLS 12–381 curve on the ICON blockchain](https://github.com/icon-project/goloop/pull/151) enables the use of **Zero Knowledge Proofs** on the platform, opening up a new realm of possibilities for secure and private transactions.

In this three-part article series, we will explore the exciting world of zero-knowledge proofs (ZKPs) and how they can be used on the ICON blockchain. In particular, will use the [Sudoku](https://sudoku.com/) as an example to provide an overview of ZKPs, how they work, and their benefits.

## Sudoku NFT Collection
Suppose you want to create an NFT collection exclusively for Sudoku fans, where only those who solve a particular puzzle can mint the NFT.

{{< img src="sudoku.jpg" alt="Sudoku" caption="Photo by Bozhin Karaivanov on Unsplash" >}}

Photo by Bozhin Karaivanov on Unsplash
One way to achieve this is by coding the puzzle in a smart contract and creating a function that accepts solutions as inputs. The following is the pseudocode of the approach:

```bash
package com.icon.score;

import score.Context;
import score.annotation.External;

public class Sudoku {

  // 0 shows the unsolved portion of Sudoku
  int[][] board = new int[][]{
      { 1, 2, 7, 5, 8, 4, 6, 0, 3 },
      { 8, 0, 6, 3, 7, 9, 1, 2, 0},
      { 3, 4, 0, 6, 2, 1, 0, 7, 5 },
      { 0, 7, 1, 9, 5, 8, 2, 0, 6 },
      { 2, 6, 8, 7, 1, 3, 5, 4, 9 },
      { 9, 0, 5, 0, 6, 2, 7, 1, 8 },
      { 5, 8, 3, 0, 0, 0, 4, 0, 1 },
      { 0, 1, 4, 8, 3, 6, 9, 0, 2 },
      { 6, 9, 0, 1, 4, 5, 3, 0, 7 }
  }

  @External
  public solveSudokuAndMintNFT(int[][] solution) {
    // revert if the solution is not valid

    // if valid solution:
         mintNFT();
  }
  
  public mintNFT() {
    // Code to mint the NFT

  }
  
}
```

## The Problem
There is a major flaw in this approach. Once someone solves the puzzle, the solution becomes visible to everyone, and anyone can copy the solution and submit it as their own to mint the NFT.

To prevent this, we could store the solution in the contract and revert any attempts to submit the same solution. The pseudocode can be:

```bash
// imports

public class Sudoku {
  
  @External
  public solveSudokuAndMintNFT(int[][] solution) {
    // revert if the solution has been previously received    

    // revert if the solution is not valid

    // if valid solution:
         storeSolution(solution);
         mintNFT();
  }
 
}
```

But again, this approach would only allow the first person to solve the puzzle to mint the NFT, while we want all Sudoku enthusiasts to have the chance to solve the puzzle and mint the NFT.

## A Solution
So instead of submitting the actual solution, we need to be able to submit a proof to the solution of the puzzle. This proof should not reveal anything about the solution, except for the fact that this is indeed a valid solution. Even the smart contract, should not be able to know what the solution was, only that the proof is valid.

This is where zero-knowledge proofs come in, allowing us to prove knowledge of a solution without revealing the solution itself.

## But what if we copy and paste the proof itself?
To prevent this, like in the previous approach, we can store the solution in the contract and revert any attempts to submit the same proof. But, unlike the solution being the same, proofs can be different. This allows all Sudoku enthusiasts to solve the puzzle and have their proof of solution be accepted.

```bash
// imports

public class Sudoku {
  
  @External
  public solveSudokuAndMintNFT(int[][] proof) {
    // revert if the proof has been previously received    

    // revert if the proof is not valid

    // if valid proof:
         storeProof(proof);
         mintNFT();
  }
 
}
```

*Note: Instead of copying other’s solution, users can easily solve Sudoku with tools like SudokuSpoiler. We consider Sudoku just to help us understand ZKP and their benefits. We can easily then easily extend our understanding to prove statements that cannot be easily solved like proving the preimage of hash.*

## Generating and Validating Proofs
Now that we understand why we need a proof, let’s discuss how we can generate and validate one. The first step in generating a proof is to represent what we want to prove, which is typically done using the Rank-1 Constraint System (R1CS). R1CS can be translated to [quadratic arithmetic programs](https://medium.com/@VitalikButerin/quadratic-arithmetic-programs-from-zero-to-hero-f6d558cea649), but don’t worry if this sounds complex because we can use circom to create and describe the circuits for us. [Circom](https://iden3.io/circom) is a programming language that makes it easy to create the circuits required for Zero-Knowledge Proofs.

Once we have the arithmetic circuits in place, we can generate and verify proofs. To create a proof, we require a proving key, and to verify a proof, we require a verifying key. Creating these keys involves using randomness ([powers of tau](https://zeroknowledge.fm/the-power-of-tau-or-how-i-learned-to-stop-worrying-and-love-the-setup)) and [elliptic curve cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography), which can be quite complicated. To simplify this process, we have created [icon-snarkjs](https://github.com/venture23-zkp/icon-snarkjs), which includes all the necessary tools to perform these operations on the ICON blockchain.

## Conclusion
If all of this seems overwhelming, don’t worry. In Part 2, we will explore these tools in more detail and learn how to use them.

---
* **Jump ahead to [Part-2](/tutorials/zkp-on-icon-pt2/)**
* **Jump ahead to [Part-3](/tutorials/zkp-on-icon-pt3/)**