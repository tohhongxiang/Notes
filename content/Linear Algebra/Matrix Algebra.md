# Matrix Algebra

# Matrix multiplication
- $A(Bx)$ is produced from $x$ by a *composition* of 2 linear transformations B, then A
- We can represent the 2 transformations with a single matrix, by multiplying 
$$
A(Bx) = (AB)x
$$

# Inverse of a Matrix

> If $A$ is an invertible $n \times n$ matrix, then for each $b \in \R^n$, the equation $Ax = b$ has the unique solution $x = A^{-1}b$

Proof: Let $b \in \R^n$

Proof that solution exists: Substitute $A^{-1}b$ into $Ax = b$
$$
\begin{aligned}
Ax &= AA^{-1}b \\
&= (AA^{-1})b \\
&= Ib \\
&= b
\end{aligned}
$$

Proof that solution is unique
$$
\begin{aligned}
Ax &= b \\
A^{-1}Ax &= A^{-1}b \\
x &= A^{-1}b
\end{aligned}
$$

Theorem on invertible matrices
- If $A$ is an invertible matrix, then $A^{-1}$ is invertible and $(A^{-1})^{-1} = A$
- If $A$ and $B$ are $n \times n$ invertible matrices, then $AB$ is also invertible. $(AB)^{-1} = B^{-1}A^{-1}$
- If $A$ is an invertible matrix, so is $A^T$, and $(A^T)^{-1} = (A^{-1})^T$

Proofs
- Find a matrix $C$ such that $A^{-1}C = I$ and $CA^{-1} = I$. $C$ is simply $A$. Hence $A^{-1}$ is invertible, and its inverse is $A$
- Find a matrix $C$ such that $(AB)C = I$ and $C(AB) = I$. If $C = B^{-1}A^{-1}$, then $(AB)(B^{-1}A^{-1}) = I$, similarly for $(B^{-1}A^{-1})(AB)$
- Find a matrix $C$ such that $A^TC = I$ and $CA^T = I$. If $C = (A^{-1})^T$, then $A^T (A^{-1})^T = (AA^{-1})^T = I^T = I$. Similarly for $(A^{-1})^T A^T$. Hence $A^T$ is invertible, and $(A^T)^{-1} = (A^{-1})^T$

# Elementary matrix

An elementary matrix is one that is obtained by performing a **single** elementary row operation on the **identity** matrix.

$$
\begin{bmatrix}
0 & 1 & 0 \\ 
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix},
\begin{bmatrix}
1 & 0 & 0 \\
0 & 7 & 0 \\ 
0 & 0 & 1
\end{bmatrix},
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\ 
-69 & 0 & 1
\end{bmatrix}
$$

If an ERO is performed on an $m \times n$ matrix $A$, the resulting matrix can be written as $EA$, where the $m \times m$ matrix $E$ us created by performing the same row operation on $I_m$

Each elementary matrix $E$ is invertible. $E^{-1}$ is the elementary matrix of the same type that transforms $E$ back into $I$

E.g. Find the inverse of $E_1 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -4 & 0 & 1 \end{bmatrix}$

To transform $E_1$ into $I$, we add 4 times of row 1 to row 3, hence the elementary matrix that does this is

$$
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
4 & 0 & 1
\end{bmatrix}
$$

E.g. Find the matrix that swaps the first 2 rows, and then find its inverse

$$
E = \begin{bmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

The inverse of $E$ is itself
$$
E^{-1} = \begin{bmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

Theorem: An $n \times n$ matrix $A$ is invertible iff $A$ is row equivalent to $I_n$, and in this case, any sequence of EROs that reduces $A$ to $I_n$ also reduces $I_n$ to $A^{-1}$.

$$
A \rightarrow I_n \rightarrow A^{-1}
$$

E.g. Find the inverse of $A = \begin{bmatrix} 0 & 1 & 2 \\ 1 & 0 & 3 \\ 4 & -3 & 8 \end{bmatrix}$

To do this, we can create an augmented matrix $\begin{bmatrix} A & I \end{bmatrix}$

$$
\begin{aligned}
\begin{bmatrix} A & I \end{bmatrix} &= 
\begin{bmatrix} 
0 & 1 & 2 & 1 & 0 & 0 \\
1 & 0 & 3 & 0 & 1 & 0 \\
4 & -3 & 8 & 0 & 0 & 1
\end{bmatrix} \\
&= \begin{bmatrix}
1 & 0 & 3 & 0 & 1 & 0 \\
0 & 1 & 2 & 1 & 0 & 0 \\
4 & -3 & 8 & 0 & 0 & 1
\end{bmatrix} \\
&= \begin{bmatrix}
1 & 0 & 3 & 0 & 1 & 0 \\
0 & 1 & 2 & 1 & 0 & 0 \\
0 & -3 & -4 & 0 & -4 & 1
\end{bmatrix} \\
&= \begin{bmatrix}
1 & 0 & 3 & 0 & 1 & 0 \\
0 & 1 & 2 & 1 & 0 & 0 \\
0 & 0 & 2 & 3 & -4 & 1
\end{bmatrix} \\
&= \begin{bmatrix}
1 & 0 & 0 & -9/2 & 7 & -3/2 \\
0 & 1 & 0 & -2 & 4 & -1 \\
0 & 0 & 1 & 3/2 & -2 & 1/2
\end{bmatrix} \\

A^{-1} &= \begin{bmatrix}
-9/2 & 7 & -3/2 \\
-2 & 4 & -1 \\
3/2 & -2 & 1/2
\end{bmatrix}
\end{aligned}
$$

Invertible Matrix Theorem: Let $A$ be a square $n \times n$ matrix. Then the following statements are equivalent (all true or all false)
1. $A$ is invertible
2. $A$ is row equivalent to $I_n$
3. $A$ has $n$ pivots
4. $Ax = 0$ has only the trivial solution
5. The columns of $A$ form a linearly independent set
6. $Ax = b$ has at least one solution **for each** $b \in \R^n$
7. The columns of $A$ span $\R^n$
8. There is an $n \times n$ matrix $C$ such that $CA = I$
9. There is an $n \times n$ matrix $D$ such that $AD = I$
10. $A^T$ is invertible

# Matrix Factorizations
- Matrix multiplication is the *synthesis* of data $AB = C$
- Give $C$, we want to extract out $A$ and $B$, that is the *analysis* of data

# LU Factorization
Consider solving a sequence of equations $Ax = b_1, Ax = b_2, \cdots, Ax = b_p$
- Inefficient solution: Compute $A^{-1}$ and then find $A^{-1}b_1, \cdots, A^{-1}b_p$
- Efficient solution: $A_{m \times n} = L_{m \times m}U_{m \times n}$
    - Assumption that $A$ can be reduced to echelon form **without** row interchanges
    - $L$ is the Unit Lower Triangular
    - $U$ is the Upper Triangular

$$
A = LU = \begin{bmatrix}
1 & 0 & 0 & 0 \\
* & 1 & 0 & 0 \\
* & * & 1 & 0 \\
* & * & * & 1
\end{bmatrix}\begin{bmatrix}
* & * & * & * & * \\
0 & * & * & * & * \\
0 & 0 & 0 & * & * \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

$$
\begin{aligned}
Ax &= b \\
LUx &= b 
\end{aligned}

\text{Let} y = Ux \\

\begin{aligned}
Ly = b \text{(Solve for $y$ by forward substitution)}
Ux = y \text{(Solve for $x$ by backward substitution)}
\end{aligned}
$$

E.g. Solve 

$$
Ax = b, A = 
\begin{bmatrix}
3 & -7 & -2 & 2 \\
-3 & 5 & 1 & 0 \\
6 & -4 & 0 & -5 \\
-9 & 5 & -5 & 12
\end{bmatrix} = \begin{bmatrix}
1 & 0 & 0 & 0 \\
-1 & 1 & 0 & 0 \\
2 & -5 & 1 & 0 \\
-3 & 8 & 3 & 1
\end{bmatrix}\begin{bmatrix}
3 & -7 & -2 & 2 \\
0 & -2 & -1 & 2 \\
0 & 0 & -1 & 1 \\
0 & 0 & 0 & -1
\end{bmatrix}
$$ 
and $b = \begin{bmatrix} -9 \\ 5 \\ 7 \\ 11 \end{bmatrix}$

First, we can solve $Ly = b$ using an augmented matrix of $\begin{bmatrix} L \\ b \end{bmatrix}$
$$
\begin{bmatrix}
1 & 0 & 0 & 0 & -9 \\
-1 & 1 & 0 & 0 & 5 \\
2 & -5 & 1 & 0 & 7 \\
-3 & 8 & 3 & 1 & 11
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 0 & 0 & 0 & -9 \\
0 & 1 & 0 & 0 & -4 \\
0 & 0 & 1 & 0 & 5 \\
0 & 0 & 0 & 1 & 1
\end{bmatrix}
$$

This took 6 multiplications and 6 additions. Now we solve $Ux = b$

$$
\begin{bmatrix}
3 & -7 & -2 & 2 & -9 \\
0 & -2 & -1 & 2 & -4 \\
0 & 0 & -1 & 1 & 5 \\
0 & 0 & 0 & -1 & 1
\end{bmatrix} \rightarrow 
\begin{bmatrix}
1 & 0 & 0 & 0 & 3 \\
0 & 1 & 0 & 0 & 4 \\
0 & 0 & 1 & 0 & -6 \\
0 & 0 & 0 & 1 & -1
\end{bmatrix}
$$

To reduce from $U$ to $I$, it took 4 divisions, 6 additions and 6 multiplications

Through $LU$ factorization, it took 28 flops (Floating point operations) excluding the cost of factorization. Through row reduction it took 62 flops.

$$
x = \begin{bmatrix} 3 \\ 4 \\ -6 \\ -1 \end{bmatrix}
$$

# LU Factorization Procedure
- Row reduction of $A$ to $U$ produces $L$ without extra work
- Recall the assumption that $A$ can be reduced to echelon form **without row interchanges**

There exists unit lower traignular elementary matrices $E_1, \cdots, E_p$ such that 

$$
\begin{aligned}
E_p \cdots E_1 A &= U \\
A &= (E_p \cdots E_1)^{-1}U = LU \\
L &= (E_p \cdots E_1)^{-1}
\end{aligned}
$$

Same row operations that reduce $A$ to $U$ also reduce $L$ to $I$

$$
(E_p \cdots E_1)L = I
$$

E.g. Find an $LU$ factorization of $A = \begin{bmatrix}
2 & -2 & 3 \\
6 & -7 & 14 \\
4 & -8 & 30
\end{bmatrix}$

First we reduce A to REF to find U
$$
\begin{aligned}
A &= \begin{bmatrix}
2 & -2 & 3 \\
6 & -7 & 14 \\
4 & -8 & 30
\end{bmatrix} \\
&= \begin{bmatrix}
2 & -2 & 3 \\
0 & -1 & 5 \\
0 & -4 & 24
\end{bmatrix} \\
&= \begin{bmatrix}
2 & -2 & 3 \\
0 & -1 & 5 \\
0 & 0 & 4
\end{bmatrix} = U
\end{aligned}
$$

We know $L$ takes the form 

$$
L = \begin{bmatrix}
1 & 0 & 0 \\
? & 1 & 0 \\
? & ? & 1
\end{bmatrix}
$$

We can use the pivot columns of A when it is being transformed to U to find L

$$
L = \begin{bmatrix}
2 &  &  \\
6 & -1 &  \\
4 & -4 & 4
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 0 & 0 \\
3 & 1 & 0 \\
2 & 4 & 1
\end{bmatrix}
$$

Divide all the columns such that the top most non-zero element is a 1

Alternatively
$$
L = \begin{bmatrix}
1 & 0 & 0 \\
3 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
2 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 4 & 1
\end{bmatrix} = \begin{bmatrix}
1 & 0 & 0 \\
3 & 1 & 0 \\
2 & 4 & 1
\end{bmatrix}
$$

Just place the nonzero off-diagonal elements of the elementary matrices into the appropriate positions of L

When the assumption is not valid,
$$
A = \begin{bmatrix}
1 & 1 & 1 \\
1 & 1 & -1 \\
2 & -1 & -1
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 1 & 1 \\
0 & 0 & -2 \\
0 & -3 & -3
\end{bmatrix}
$$

To switch rows 2 and 3, we can use a **permutation matrix** $P = \begin{bmatrix}
1 & 0 & 0 \\
0 & 0 & 1 \\
0 & 1 & 0
\end{bmatrix}$

In summary,

For every $n \times n$ matrix $A$, there exists a matrix $P$, such that $PA$ possesses an $LU$-factorization, i.e. $PA = LU$, where $L$ is a lower triangular matrix with all diagonal entries equal to 1, and $U$ is an upper triangular matrix.

FYI:

For $n \times n$ dense matrix and for $n$ moderately large, (e.g. $n \ge 30$):
- $LU$ factorization: about $2n^3/3$ flops
- Find $A^{-1}$: about $2n^3$ flops
- Solving $Ly = b$ and $Ux = y$: $2n^2$ flops
- Multiplication of $b$ by $A^{-1}$: about $2n^2$ flops
