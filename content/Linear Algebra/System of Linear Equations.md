# System of Linear Equations

A **linear equation** in $n$ variables $x_1, ..., x_n$ is expressed as:

$$
a_1x_1 + a_2x_2 + \cdots + a_nx_n = b, a_i, b \in \R
$$

> All the $x_i$ have degree 1

An example of a non-linear equation:

$$
\begin{aligned}
\sin x + 3y &= 2020 \\
420y^2 + x &= 69
\end{aligned}
$$

Each $a_i$ is a **coefficient**

A **system of linear equations** is a set of $m$ equations in $n$ unknowns

$$
\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n &= b_2 \\
&\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n &= b_m \\
\end{aligned}
$$

If $b_1 = b_2 = \cdots = b_m = 0$, the system is **homogeneous**

If an SLE has **at least 1 solution**, it is **consistent**. If an SLE has 0 solutions, it is **inconsistent**

Every system of linear equations has
1. Exactly **1** solution
2. **Infinite** solutions
3. **No** solutions

A homogeneous linear system is **consistent** because 

$$
x_1 = x_2 = \cdots = x_n = 0
$$ 

is a solution, called the **trivial solution**. Other non-zero solutions that are possible are called **non-trivial solutions**

# Matrix Notation for SLE
Consider the following SLE
$$
\begin{aligned}
x + y &= 1 \\
2x - y &= 2
\end{aligned}
$$

We can rewrite this as
$$
\begin{bmatrix}
1 & 1 \\
2 & -1 
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix} = 
\begin{bmatrix}
1 \\
2
\end{bmatrix}
$$

This is the form
$$
Ax = b
$$

$A$ is the **coefficient matrix**.

$\begin{bmatrix}
1 & 1 & 1 \\
2 & -1 & 2
\end{bmatrix}$ is the **augmented matrix**

To solve $Ax = b$, we reduce the augmented matrix into **row-echelon** form or **reduced row-echelon** form through **elementary row operations**

### Elementary Row Operations
- Multiply a row by a non-zero constant
- Interchange 2 rows
- Add a constant times one row to another

When a matrix $A$ is transformed to another matrix $B$ through a sequence of EROs, they are **row equivalent**

### Row Echelon Form
A matrix is in row-echelon form if:
1. Any rows that consist entirely of 0's are at the bottom of the matrix
2. In any 2 consecutive non-zero rows, the first non-zero element in the row, the **pivot**, in the lower row occurs farther to the right than the higher row

$$
\begin{bmatrix}
3 & 4 & 0 & 2 \\
69 & 420 & 1 & 2 \\
0 & 1 & 3 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

The process of reducing a matrix into its row-echelon form is called **Gaussian Elimination**.

The row-echelon form for a matrix is **not unique**.

### Reduced Row Echelon Form
A matrix is in reduced row-echelon form if:
1. The matrix is in row echelon form
2. Every pivot = 1, and every other element in the pivot's column is 0

$$
\begin{bmatrix}
0 & 0 & 0 & 0 \\
1 & 0 & 1 & 0 \\
0 & 1 & 3 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

The process of reducing a matrix into reduced row-echelon form is called **Gauss-Jordan Elimination**.

The reduced row-echelon form for a matrix is **unique**.

When solving $Ax = b$, we must always ask
1. Is the system consistent? (Does at least 1 solution exist?)
2. If a solution exists, is the solution **unique**?

Observations on the row-echelon form of the augmented matrix can tell you whether the system is consistent or not.

### No solution

$$
\begin{aligned}
x_2 - 4x_3 &= 8 \\
2x_1 - 3x_2 + 2x_3 = 1 \\
5x_1 - 8x_2 + 7x_3 = 1 
\end{aligned}
$$

The augmented matrix is $\begin{bmatrix}
0 & 1 & -4 & 8 \\
2 * -3 & 2 & 1 \\
4 & -8 & 12 & 1
\end{bmatrix}$

The row-echelon form is $\begin{bmatrix}
2 * -3 & 2 & 1 \\
0 & 1 & -4 & 8 \\
0 & 0 & 0 & 15
\end{bmatrix}$

The last line is saying 

$$
0 x_1 + 0 x_2 + 0 x_3 = 15
$$

Since this is impossible, the system is **inconsistent**

### Infinite solutions
$$
\begin{aligned}
1x_1 + 0x_2 + 2x_3 = 1 \\
0x_1 + 2x_2 + 6x_3 = 4 \\
1x_1 + 1x_2 + 5x_3 = 3
\end{aligned}
$$

Augementing and performing gaussian elimination, we get 
$$
\begin{bmatrix}
1 & 0 & 2 & 1 \\
0 & 1 & 3 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

This is the same as the following system:
$$
\begin{aligned}
1x_1 + 0x_2 + 2x_3 = 1 \\
0x_1 + 1x_2 + 3x_3 = 2 \\
\end{aligned}
$$

$x_1, x_2$ are **leading variables**, while the remaining $x_3$ is a **free variable**. We can solve for the leading variable, and express the general solution parametrically in terms of the free variables

$$
\begin{aligned}
x_1 = 1 - 2x_3 \\
x_2 = 2 - 3x_3 \\
\end{aligned}
$$

# General Procedure to solve an SLE
1. Write the augmented matrix
2. Reduce the augmented matrix into row-echelon form. Decide whether the system is consistent or not. If the system is inconsistent, there is nothing else to do. Else, keep going.
3. Continue row reduction to obtain the reduced row-echelon form
4. Write the system of equations based on the matrix obtained in 3
5. Rewrite each non-zero term in 4 so that the leading variable is expressed in terms of any free variables in the equation

# Linear Combination of Vectors
Given vectors $v_1, v_2, ..., v_p \in \R^n$, and scalars $c_1, ..., c_n$, the vector

$$
y = c_1v_1 + \cdots + c_pv_p = \sum_{i=1}^{p} c_i v_i
$$

is a **linear combination** of $v_1, ..., v_p$, with weights $c_1, ..., c_p$

If 
$$
Ax = b, A \in \R^{m \times n}, b \in \R^n
$$

has a solution $x = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}$, then $b$ is a linear combination of the columns of $A$

$b$ can be written as

$$
b = x_1 a_1 + x_2 a_2 + \cdots + x_n a_n
$$

# Span
If $v_1, ..., v_p \in \R^n$, the set of **all linear combinations of** $v_1, ..., v_p$, denoted by $\text{Span}\{v_1, ..., v_p\}$  is the subset of $\R^n$ spanned by $v_1, ..., v_p$

$$
\text{Span}\{v_1, ..., v_p\} = \sum_{n=1}^{p} c_i v_i
$$

with scalars $c_1, ..., c_p$

A set of vectors $\{ v_1, ..., v_p \} \in \R^m$ spans $\R^m$ if every vector in \$R^m$ is a linear combination of $v_1, ..., v_p$. 

Basically, $\text{Span}\{v_1, ..., v_p\} = \R^m$

# Properties arising from Ax = b
Let $A \in \R^{m \times n}$. The following statements are logically equivalent
1. For each $b \in \R^m$, the equation $Ax = b$ has a solution
2. Each $b \in \R^m$ is a linear combination of the columns of $A$
3. The columns of $A$ span $\R^m$
4. $A$ has a pivot position in every row

Proof:
$A$ has a pivot position in every row => For each $b \in \R^m$, the equation $Ax = b$ has a solution.

Consider $Ax = b$, which can be reduced to $Rx = c$, where $R$ is the reduced row-echelon form of A 
If $R$ does not have a pivot position in row $m$, then

$$
0x_1 + \cdots + 0x_n = c_m
$$

Only vectors $c$ that satisfy $c_m = 0$ would make the equation $Ax = b$ consistent. A contradiction is reached. Hence $A$ has a pivot position in every row => For each $b \in \R^m$, the equation $Ax = b$ has a solution.

If $Ax = b$ has a solution, then that particular $b$ can be expressed as a linear combination of the columns of $A$.

Since every $b \in \R^m$ has a solution, every $b \in \R^m$ is a linear combination of the columns of $A$

Since all vectors in $\R^m$ can be expressed as a linear combination of the columns of $A$, by definition, the columns of $A$ span $R^m$

# Properties of multiplying matrices and vectors
Consider $A \in \R^{m \times n}$, $u, v \in \R^m$, and a scalar $c$. The following hold
- $A(u + v) = Au + Av$
- $A(cu) = c(Au)$

# Solution sets of linear systems
Consider the equation $Ax = 0$. The trivial solution $x=0$ always exists. Any other nonzero solution is called a **non-trivial** solution.

Example:
Describe all solutions for $Ax = 0$ where
$$
A = \begin{bmatrix}
3 & 5 & -4 \\
-3 & -2 & 4 \\
6 & 1 & -8
\end{bmatrix}
$$

Every solution of $Ax = 0$ is a scalar multiple of $v = \begin{bmatrix}\frac{4}{3} \\ 0 \\ 1\end{bmatrix}$

Now describe the solution set for $Ax = b$, where $A$ is the same as above, and $b = \begin{bmatrix}7 \\ -1 \\ -4\end{bmatrix}$

$$
x = \begin{bmatrix}-1 \\ 2 \\ 0\end{bmatrix} + x_3\begin{bmatrix}\frac{4}{3} \\ 0 \\ 1\end{bmatrix}
$$

In general, if $Ax = 0$ has a non-trivial solution $x = kv$ for some scalar $k$ and $Ax = b$ has a particular solution $p$, then $Ax = b$ has the solution set $x = p + kv$ 

$$
\begin{aligned}
Av &= 0 \\
Ap &= b \\
A(v + p) &= Av + Ap \\
&= 0 + b \\
&= b
\end{aligned}
$$

$$
\begin{aligned}
Av &= 0 \\
Ap &= b \\
A(kv + p) &= kAv + Ap \\
&= 0 + b \\
&= b
\end{aligned}
$$

# Linear Independence
An indexed set $\{v_1, ..., v_p\} \in \R^n$ is **linearly independent** if the equation

$$
x_1v_1 + \cdots + x_pv_p = 0
$$

**only has the trivial solution**. If a non-trivial solution exists, then the set is **linearly dependent**.

E.g.
$$
\begin{aligned}
v_1 = \begin{bmatrix}3 \\ 1\end{bmatrix}, v_2 = \begin{bmatrix}6 \\ 2\end{bmatrix} \\
2v_1 - v_2 = 0
\end{aligned}
$$

Since a non-trivial solution exists, $\{v_1, v_2\}$ are linearly dependent

$$
\begin{aligned}
v_1 = \begin{bmatrix}3 \\ 2\end{bmatrix}, v_2 = \begin{bmatrix}6 \\ 2\end{bmatrix} \\
0v_1 + 0v_2 = 0
\end{aligned}
$$

Since only the trivial solution exists, $\{v_1, v_2\}$ are linearly independent

Theorem: If a set contains more vectors than there are entries in each vector, then the set is linearly dependent, i.e. $\{ v_1, ..., v_p \} \in \R^n$ is linearly dependent if $p > n$

Proof: 

Let $A = \begin{bmatrix} v_1 & \cdots & v_p \end{bmatrix}$. 

$A \in \R^{n \times p}$

$Ax = 0$ corresponds to the system of $n$ equations and $p$ unknowns

Since $p > n$, there must be at least 1 free variable, hence $Ax = 0$ contains a non-trivial solution, hence the set is linearly dependent.

E.g. $\{ \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \begin{bmatrix} 4 \\ -1 \end{bmatrix}, \begin{bmatrix} 2 \\ -2 \end{bmatrix} \}$ form a linearly dependent set

Theorem: If a set contains the zero vector, then the set is linearly dependent

Proof: 

Consider the set $\{ v_1, ..., v_p, 0 \}$
$$
    c_1 v_1 + \cdots + c_p v_p + c_{p+1} 0 = 0
$$

$c_{p+1}$ can be any real nonzero value (e.g. $c_{p+1} = 1$), and still satisfy the equation. Hence a non-trivial solution exists, and the set is linearly dependent

# Linear Transformations
$Ax = b$ can be thought of transforming the vector $x$ into the vector $b$.

A **transformation** $T: \R^n \to \R^m$ is a rule that maps each vector $x \in \R^n$ to a vector $T(x) \in \R^m$

Example of transformation matrices:
$$
T: \R^3 \to \R^3, T(x) = Ax, A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

A transformation is **linear** if
1. $T(u+v) = T(u) + T(v)$, for all $u, v$ in the domain of $T$
2. $T(cu) = cT(u)$ for some scalar $c$

In general
$$
T(\sum_{i=1}^{n}c_iv_i) = \sum_{i=1}^{n} c_i T(v_i)
$$

### Finding the transformation matrix $A$

The transformation matrix $A$ can be found by the tracking where the columns of the **standard basis** end up after the transformation. In general:
$$
\begin{aligned}
T(x) &= Ax \\
A &= \begin{bmatrix} T(e_1) & T(e_2) & \cdots & T(e_n) \end{bmatrix}
\end{aligned}
$$

$A$ is the **standard matrix for the linear transformation** $T$.

Consider the transformation that rotates every 2D vector anticlockwise by $\theta$ radians.

The first standard basis vector, $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$ ends up at $\begin{bmatrix} \cos \theta \\ \sin \theta \end{bmatrix}$

The second standard basis vector, $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$ ends up at $\begin{bmatrix} -\sin \theta \\ \cos \theta \end{bmatrix}$

Hence the transformation matrix,
$$
A = \begin{bmatrix}
\cos \theta & -\sin \theta  \\ 
\sin \theta & \cos \theta
\end{bmatrix}
$$

For more information, [3Blue1Brown's video](https://www.youtube.com/watch?v=kYB8IZa5AuE) will help.