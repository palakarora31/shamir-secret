This project implements a simplified version of **Shamir's Secret Sharing Algorithm** in Java. It is capable of reading secret shares from a `.json` file and reconstructing the **constant term (c)** of the polynomial using **Lagrange Interpolation**.

---

## 📌 Problem Statement

Given a polynomial of degree `m`, you need at least `k = m + 1` points to reconstruct it.  
This program reads these `(x, f(x))` points from a JSON file and calculates the constant term `c` of the polynomial.

---
