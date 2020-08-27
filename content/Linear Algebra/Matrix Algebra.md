# Matrix Algebra

# Matrix multiplication
- $A(Bx) is produced from $x$ by a *composition* of 2 linear transformations B, then A
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
Ax = b
A^{-1}Ax = A^{-1}b
x = A^{-1}b
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

