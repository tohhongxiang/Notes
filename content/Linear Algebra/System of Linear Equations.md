# Systems of Linear Equations

A linear equation of $n$ variables $x_1, x_2, ..., x_n$ is expressed as
$$
a_1x_1 + a_2x_2 + ... + a_nx_n = b
$$

A linear system of $m$ equations of $n$ unknowns, 
$$
\begin{aligned}
a_{11}x_1 + a_{12}x_2 + ... + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + ... + a_{2n}x_n &= b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + ... + a_{mn}x_n &= b_m \\
\end{aligned}
$$

If $b_1 = b_2 = ... = b_m = 0$, it is a **homogeneous** system. Else it is **non-homogeneous**.

An example of a linear system: 
$$
\begin{aligned}
x + 2y = 4 \\
5y - 2x = 9
\end{aligned}
$$

An example of a non-linear system: 
$$
\begin{aligned}
\sin x + 2y &= 4 \\
\frac{5}{y} - 2x &= 9
\end{aligned}
$$

A linear system is **consistent** if it has **at least 1 solution**. Else, it is **inconsistent**. An SLE always falls into one of the 3 following categories
1. It has 0 solutions
$$
\begin{aligned}
x - y = 4 \\
3x - 3y = 6
\end{aligned}
$$
2. It has exactly 1 solution
$$
\begin{aligned}
x - y = 1 \\
2x + y = 6
\end{aligned}
$$
3. It has infinitely many solutions
$$
\begin{aligned}
x + y = 2 \\
2x + 2y = 4
\end{aligned}
$$

# Homogeneous linear equation
$$
\begin{aligned}
a_{11}x_1 + a_{12}x_2 + ... + a_{1n}x_n &= 0 \\
a_{21}x_1 + a_{22}x_2 + ... + a_{2n}x_n &= 0 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + ... + a_{mn}x_n &= 0 \\
\end{aligned}
$$

Every homogeneous SLE is consistent, because it has the solution $x_1 = x_2 = \cdots = x_n = 0$. This is the **trivial** solution. Any other solutions to the homogeneous SLE are **non-trivial**.

Due to a homogeneous SLE always having a trivial solution, only 2 possibilities occur
1. Only 1 trivial solution
2. Infinitely many solutions, including the trivial solution

# Matrix
A matrix is a rectangular array of numbers
E.g.

$$
\begin{aligned}
x + 2y = 3 \\
4x + 5y = 6
\end{aligned}
$$

This SLE can be represented in a **coefficient** matrix:
$$
\begin{bmatrix}
1 & 2 \\
4 & 5
\end{bmatrix}
$$

Or as an **augmented** matrix:
$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

# Solving SLE
When solving an SLE, you have to consider the following:
- Is the system consistent?
- Is the solution unique?

We solve SLE by converted an augemented matrix into a **row-equivalent** matrix

> Two matrices are **row-equivalent** if there is a sequence of elementary row operations (ERO) that tranforms 1 row into another

EROs on a matrix/augmented matrix
- Multiplying a row by a **non-zero** constant
- Interchanging 2 rows
- Adding a constant times of one row to another

E.g.
$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix} \rightarrow
\begin{bmatrix}
10 & 20 & 30 \\
4 & 5 & 6
\end{bmatrix}
$$

$\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}$ and $
\begin{bmatrix}
10 & 20 & 30 \\
4 & 5 & 6
\end{bmatrix}
$ are row equivalent

# Row Echelon form and Reduced Row Echelon form
A matrix is in **row echelon form** if
- Any row is contained entirely of 0s, and these rows are grouped at the bottom of the matrix
- In any 2 consecutive rows that are NOT entirely 0, the first non-zero element (called a pivot) on a lower row occurs farther right compared than a pivot on the higher row

$$
\begin{bmatrix}
1 & 2 & 0 \\
0 & 69 & 99 \\
0 & 0 & 0
\end{bmatrix}
$$

Row echelon forms are non-unique. Different series of EROs on a matrix can form different row-echelon form matrices

A matrix is in **reduced row echelon form** if
-  Matrix is in *row-echelon form*
- In every column containing a pivot, every other element in the same **column** as that pivot are all 0
$$
\begin{bmatrix}
1 & 0 & 0 && 0 \\
0 & 1 & 99 && 0 \\
0 & 0 & 0 && 1
\end{bmatrix}
$$

A reduced row echelon form is always unique.

# Gaussian Elimination and Gaussian-Jordan Elimination
A matrix which is not in row echelon form can be converted into its row echelon form through a sequence of EROs. Different sequences may lead to different matrices. This process is called **Gaussian elimination**.

A matrix which is not in reduced row echelon form (RREF) can be converted into its RREF through a sequence of EROs. Unlike gaussian elimination, the resultant matrix is **unique**. This process is called **Gaussian-Jordan elimination**

Transforming $\begin{bmatrix}
1 & 2 & 3 \\
1 & 1 & -4 \\
7 & 0 & 2
\end{bmatrix}$ into row-echelon form:

$$
\begin{bmatrix}
1 & 2 & 3 \\
1 & 1 & -4 \\
7 & 0 & 2
\end{bmatrix} \rightarrow
\begin{bmatrix}
7 & 14 & 21 \\
1 & 1 & -4 \\
7 & 0 & 2
\end{bmatrix} \rightarrow
\begin{bmatrix}
7 & 14 & 21 \\
1 & 1 & -4 \\
0 & 0 & -19
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 2 & 3 \\
1 & 1 & -4 \\
0 & 0 & -19
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 2 & 3 \\
0 & -1 & -7 \\
0 & 0 & -19
\end{bmatrix}
$$

Transforming $\begin{bmatrix}
1 & 2 & 3 \\
1 & 1 & -4 \\
7 & 0 & 2
\end{bmatrix}$ into reduced-row-echelon form:

$$
\begin{bmatrix}
1 & 2 & 3 \\
1 & 1 & -4 \\
7 & 0 & 2
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 2 & 3 \\
0 & -1 & -7 \\
0 & 0 & -19
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 2 & 3 \\
0 & -1 & -7 \\
0 & 0 & 1
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 7 \\
0 & 0 & 1
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 0 & 3 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

> Gauss-Jordan Elimination consists of 2 phases
> - Forward phase, zeroes are introduced below the pivot
> - Backward phase, zeroes are introduced above the pivot

Example question:
Determine if the following SLE is consistent:
$$
\begin{aligned}
x_2 - 4x_3 &= 8 \\
2x_1 - 3x_2 + 2x_3 &= 1 \\
5x_1 - 8x_2 + 7x_3 &= 1
\end{aligned}
$$

Solution:
First, we get the augmented matrix from the SLE: $\begin{bmatrix}
0 & 1 & -4 & 8 \\
2 & -3 & 2 & 1 \\
5 & -8 & 7 & 1
\end{bmatrix}$

Then we convert it into reduced row echelon form: $\begin{bmatrix}
1 & 0 & -5 & 0 \\
0 & 1 & -4 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}$

However, notice the last equation states that $0x_1 + 0x_2 + 0x_3 = 1$. Hence, this SLE is **inconsistent**

# Solutions of Linear Systems
Row reduction of the augmented matrix directly leads to a description of the solution set of a linear system

E.g.
$$
\begin{aligned}
x_1 + 3x_2 - 2x_3 + 2x_5 &= 0 \\
2x_1 + 6x_2 - 5x_3 - 2x_4 + 4x_5 - 3x_6 &= -1 \\
5x_3 + 10x_4 + 15x_6 &= 5 \\
2x_1 + 6x_2 + 7x_4 + 4x_5 + 18x_6 &= 6
\end{aligned} \Rightarrow
\begin{bmatrix}
1 & 3 & -2 & 0 & 2 & 0 & 0 \\
2 & 6 & -5 & -2 & 4 & -3 & -1 \\
0 & 0 & 5 & 10 & 0 & 15 & 5 \\
0 & 0 & 4 & 8 & 0 & 18 & 6
\end{bmatrix}
$$

First we take the augmented matrix, and convert it into row-echelon form.
$$
\begin{bmatrix}
1 & 3 & -2 & 0 & 2 & 0 & 0 \\
2 & 6 & -5 & -2 & 4 & -3 & -1 \\
0 & 0 & 5 & 10 & 0 & 15 & 5 \\
0 & 0 & 4 & 8 & 0 & 18 & 6
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 3 & -2 & 0 & 2 & 0 & 0 \\
0 & 0 & 1 & 2 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & \frac{1}{3} \\
0 & 0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

The presence of a row full of 0s shows that there are an infinite number of solutions. Now we further reduce the matrix into its reduced row echelon form
$$
\begin{bmatrix}
1 & 3 & -2 & 0 & 2 & 0 & 0 \\
0 & 0 & 1 & 2 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & \frac{1}{3} \\
0 & 0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 3 & 0 & 4 & 2 & 0 & 0 \\
0 & 0 & 1 & 2 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & \frac{1}{3} \\
0 & 0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

The RREF's corresponding SLEs are:
$$
\begin{aligned}
x_1 + 3x_2 + 4x_4 + 2x_5 &= 0 \\
x_3 + 2x_4 &= 0 \\
x_6 = \frac{1}{3}
\end{aligned}
$$

$x_1, x_3, x_6$ are **leading** variables (the leftmost non-zero variables within a row), and the remaining are **free** variables. Solving for the leading variables,
$$
\begin{aligned}
x_1 &= -3x_2 -4x_4 -2x_5 \\
x_3 &= -2x_4 \\
x_6 &= \frac{1}{3}
\end{aligned}
$$

The general solution of the system is expressed parametrically by assigning each free variable an arbitrary value.
$$
(x_1, x_2, x_3, x_4, x_5, x_6) = (-3r - 4s - t, r, -2s, s, t, \frac{1}{3})
$$

### Procedure to solve
Use row reduction to solve a linear system
1. Write the augmented amtrix
2. Use the row reduction algorithm to obtain an equivalent augmented matrix in row echelon form. Decide whether the system is consistent. If inconsistent, stop. Else, continue
3. Continue row reduction to obtain reduced row echelon form
4. Write the system of equations corresponding to the reduced row echelon form
5. Rewrite each nonzero equation from step 4 such that every leading variable is expressed in terms of any free variables appearing in the equation

# Linear Combination of Vectors
Given vectors $v_1, v_2, \cdots, v_p$ in $\R^n$ and given scalars $c_1, c_2, \cdots, c_p$, the vector y is defined
$$
y = c_1v_1 + c_2v_2 + \cdots + c_pv_p
$$
is called a **linear combination** of $v_1, v_2, \cdots, v_p$ with **weights** $c_1, c_2, \cdots, c_p$

For example, 
$$
a_1 = \begin{bmatrix}
1 \\ -2 \\ -5
\end{bmatrix},
a_2 = \begin{bmatrix}
2 \\ 5 \\ 6
\end{bmatrix},
b = \begin{bmatrix}
7 \\ 4 \\ -3
\end{bmatrix},
$$

Is $b$ a linear combination of $a_1$ and $a_2$?

We want to find weights $x_1, x_2$ such that
$$
x_1 \begin{bmatrix}
1 \\ -2 \\ -5
\end{bmatrix} + x_2 \begin{bmatrix}
2 \\ 5 \\ 6
\end{bmatrix} = \begin{bmatrix}
7 \\ 4 \\ -3
\end{bmatrix}
$$

We can get an augmented matrix, and reduce it into a RREF
$$
\begin{bmatrix}
1 & 2 & 7 \\
-2 & 5 & 4 \\
-5 & 6 & -3
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 0 & 3 \\
0 & 1 & 2 \\
0 & 0 & 0
\end{bmatrix}
$$

Hence $x_1 = 3, x_2 = 2$, and hence $b$ is a linear combination of $a_1$ and $a_2$

> A vector equation
> $$
> x_1a_1 + x_2a_2 + \cdots + x_na_n = b
> $$
> has the same solution as as the linear system whose augmented matrix is $[a_1 \ a_2 \ \cdots \ a_n \ b]$
> 
> In particular, $b$ can be generated by a linear combination of $a_1 \cdots a_n$ iff there exists a solution to the linear system corresponding to the above augmented matrix

Linear combination of vectors $\Leftrightarrow$ solution of linear system

# Span

If $v_1, v_2, \cdots, v_p \in \R^n$, then the set of all linear combinations of $v_1, v_2, \cdots, v_p$ is denoted by $Span \{ v_1, v_2, \cdots, v_p \}$

$Span \{ v_1, v_2, \cdots, v_p \}$ is the collection of all vectors that can be written in the form
$$
c_1v_1 + c_2v_2 + \cdots + c_pv_p
$$
with scalars $c_1, c_2, \cdots, c_p$

### Geometric view of Span{v} and Span{u, v}
Let $v$ be a nonzero vector in $\R^3$. Span{v} is the set of all scalar multiples of $v$ (the set of points in the **line** in $\R^3$ through $v$ and $0$)

If $u$ and $v$ are nonzero vectors in $\R^3$, with $v$ not being a multiple of $u$, then Span{u, v} is the **plane** in $\R^3$ that contains $u, v, 0$

E.g.

Let $a_1 = \begin{bmatrix} 1 \\ -2 \\ 3 \end{bmatrix}, a_2 = \begin{bmatrix} 5 \\ -13 \\ -3 \end{bmatrix}$ and  $b = \begin{bmatrix} -3 \\ 8 \\ 1 \end{bmatrix}$. Determine if $b \in Span\{a_1, a_2\}$

We form an augmented solution and try to find the solution 
$$
\begin{bmatrix}
1 & 5 & -3 \\
-2 & -13 & 8 \\
3 & -3 & 1
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 5 & -3 \\
0 & 1 & -\frac{2}{3} \\
0 & 1 & \frac{5}{9}
\end{bmatrix}
$$

The last 2 lines of the last matrix is saying that $x_2 = \frac{2}{3}$ and $x_2 = \frac{5}{9}$, which cannot be true. Hence there are no solutions to the SLE, b **cannot** be put in a linear combination of $a_1$ and $a_2$, and hence, $b$ not in Span{$a_1, a_2$}

# Ax = b
A general linear system of $m$ equations in $n$ unknowns $x_1, x_2, \cdots, x_n$ can be written in a matrix

$$
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a{_1n} \\
a_{21} & a_{22} & \cdots & a{_2n} \\
\vdots &        & \cdots & \vdots \\
a_{m1} & a_{m2} & \cdots & a{_mn} \\
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix} = 
\begin{bmatrix}
b_1 \\
b_2 \\
\vdots \\
b_n
\end{bmatrix}
$$

$$
Ax = b
$$

$A$ is the matrix of coefficients, $x$ is the vector of unknowns, and $b$ is the vector of constant terms

If $A$ is an $m$ by $n$ matrix, with columns $a_1, a_2, \cdots, a_n$, and $x$ is in $\R^n$, then the product of $A$ and $x$, denoted by $Ax$, is a **linear combination** of the columns of $A$ using the corresponding entries in $x$ as weights

$$
Ax = \begin{bmatrix} a_1 & a_2 & \cdots & a_n \end{bmatrix} \begin{bmatrix} x_1 \\ \vdots \\ x_n \end{bmatrix} = x_1a_1 + x_2a_2 + \cdots + x_na_n
$$

Theorem: If $A \in \R^{m \times n}$ and $b \in \R^m$, then 
$$
Ax = b
$$ 
has the same solution set as the vector equation 
$$
x_1a_1 + x_2a_2 + \cdots + x_na_n = b
$$
which has the same solution set as the SLE whose augmented matrix is 
$$
\begin{bmatrix}a_1 & a_2 & \cdots & a_n & b \end{bmatrix}
$$

The equation $Ax = b$ has a solution iff $b$ is a linear combination of the columns of $A$

E.g. 
Let $A = \begin{bmatrix}1 & 3 & 4 \\ -4 & -2 & -6 \\ -3 & -2 & -7\end{bmatrix}$, and $b = \begin{bmatrix}b_1 \\ b_2 \\ b_3\end{bmatrix}$. Is $Ax = b$ consistent for all possible $b_1, b_2, b_3$?

For $Ax = b$ to be consistent
$$
x_1a_1 + x_2a_2 + x_3a_3 = b
$$

$$
\begin{bmatrix}
1 & 3 & 4 & b_1 \\
-4 & -2 & -6 & b_2 \\
-3 & -2 & -7 & b_3
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 3 & 4 & b_1 \\
0 & 14 & 10 & 4b_1 - b_2 \\
0 & 0 & 0 & -2b_1 + b_2 - 2b_3
\end{bmatrix}
$$

For the last row of the REF matrix, $0x_1 + 0x_2 + 0x_3 = -2b_1 + b_2 - 2b_3$. If we want consistency, then $-2b_1 + b_2 - 2b_3 = 0$

So now we can see that $Ax = b$ is not consistent for ALL values of $b$, it is only consistent if $b$ satisfies the equation $-2b_1 + b_2 - 2b_3 = 0$.
Also, the columns of $A$ span a plane through 0 in $\R^3$

A set of vectors $\{ v_1, \cdots, v_p \} \in \R^m$ spans $\R^m$ if every vector in $\R^m$ is a linear combination of $v_1, \cdots, v_p$

Theorem: Let $A \in \R^{m \times n}$. Then the following statements are logically equivalent (For a particular $A$, either they are all true, or all false)
- For each $b \in \R^m$, $Ax = b$ has a solution
- Each $b \in \R^m$ is a linear combination of the columns of $A$
- The columns of $A$ span $\R^m$
- $A$ has a pivot position in every row

If $A \in \R^{m \times n}$, $u$ and $v$ are vectors in $\R^m$, and $c$ is a scalar, then
- $A(u+v) = Au + Av$
- $A(cu) = c(Au)$

# Solution Sets of Linear Systems

### Homogeneous systems
Recall that $Ax = b$, if $b = 0$, then this is a homogeneous system. $x=0$  is a trivial solution. If $x$ is non-zero, then it is a non-trivial solution

E.g. Determine whether the following system has a non-trivial solution
$$
\begin{aligned}
3x_1 + 5x_2 - 4x_3 &= 0 \\
-3x_1 - 2x_2 + 4x_3 = 0 \\
6x_1 + x_2 - 8x_3 = 0
\end{aligned}
$$

Solution:
$$
\begin{bmatrix}
3 & 5 & -4 & 0 \\
-3 & -2 & 4 & 0 \\
6 & 1 & -8  & 0
\end{bmatrix} \rightarrow
\begin{bmatrix}
3 & 5 & -4 & 0 \\
0 & 3 & 0 & 0 \\
0 & 0 & 0  & 0
\end{bmatrix} \rightarrow
$$

We can see that $x_3$ is a free variable (No pivot in the $x_3$ column). This means that $x_3$ does not need to be 0 for $Ax = 0$. Hence $Ax = 0$ has a non-trivial solution. 

By further reducing to RREF, we can see that every solution for $Ax = 0$ is a scalar multiple of $v = \begin{bmatrix} \frac{4}{3} \\ 0 \\ 1 \end{bmatrix}$

### Non-homogeneous systems

Describe all the solutions of $Ax = b$ where $A = \begin{bmatrix} 3 & 5 & -4 \\ -3 & -2 & 4 \\ 6 & 1 & -8 \end{bmatrix}, b = \begin{bmatrix} 7 \\ -1 \\ -4 \end{bmatrix}$

$$
\begin{bmatrix}
3 & 5 & -4 & 7 \\
-3 & -2 & 4 & -1 \\
6 & 1 & -8 & -4
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 0 -\frac{4}{3} & -1 \\
0 & 1 & 0 & 2 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

Hence, the solution is $x = \begin{bmatrix} -1 + \frac{4}{3}x_3 & 2 & x_3 \end{bmatrix}$, which is a line

The parametric form of the solution set for $Ax = b$
$$
x = p + x_3 v = p + tv, t \in \R
$$

The previous exercise: Paramteric vector form of the solution set of $Ax = 0$ is $x = tv$. This is a line $L$ passing through $0$ and $v$

Hence we can see that the solutions of $Ax = b$ is obtained by adding $p$ to the solutions of $Ax = 0$. $p$ is one particular solution of $Ax = b$ (corresponding to $t=0$). This means that the solution set of $Ax = b$ is **parallel** to the solution set of $Ax = 0$

Theorem: Suppose $Ax = b$ is consistent for some $b$, and let $p$ be the solution. THen the solution set of $Ax = b$ is the set of all vectors in the form $w = p + v_h$, where $v_h$ is any solution of the homogeneous equation $Ax = 0$

# Linear Independence
An indexed set of vectors $\{ v_1, \cdots, v_p \}$ in $\R^n$ is **linearly independent** if the vector equation 
$$
x_1v_1 + x_2v_2 + \cdots x_pv_p = 0
$$

has **only** the trivial solution. If a non-trivial solution exists, then the vectors are **linearly dependent**

E.g.
let $v_1 = \begin{bmatrix} 1 & 2 & 3 \end{bmatrix}, v_2 = \begin{bmatrix} 4 & 5 & 6 \end{bmatrix}, v_3 = \begin{bmatrix} 2 & 1 & 0 \end{bmatrix}$. Determine if the set $\{ v_1, v_2, v_3 \}$ is linearly independent. if not, what is the linear dependence relation among them?

Solution:
We check if $Ax = 0$ has only the trivial solution
$$
\begin{bmatrix}
1 & 2 & 3 & 0 \\
4 & 5 & 6 & 0 \\
2 & 1 & 0 & 0
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 4 & 2 & 0 \\
0 & -3 & -3 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

$$
\begin{aligned}
x_1 + 4x_2 + 2x_3 &= 0 \\
-3x_2 -3x_3 &= 0
\end{aligned}
$$

$x_3$ is a free variable. The presence of a free variable means that there are non-trivial solutions. $v_1, v_2, v_3$ are linearly dependent.

RREF:
$$
\begin{bmatrix}
1 & 0 & -2 & 0 \\
0 & 1 & 1 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$

Hence the solution for the SLE is $x = k\begin{bmatrix} 2 \\ -1 \\ 1 \end{bmatrix}, k \in \R$. We can set k = 1 and see that $2x_1 - x_2 + x_3 = 0$ is one possible linear dependence relation.

Geometrically, if the columns are a scalar multiple of each other (they are parallel), then there exists a linear dependence. If all the columns (and the sum of any columns) are not parallel, then they are linearly independent

# Characteristics of Linearly Dependent Sets

An indexed set $S = \{ v_1, \cdots, v_p \}$ of 2 or more vectors is **linearly dependent** iff at least one of the vectors in $S$ is a linear combination of the others. if $S$ is linearly dependent and $v_1 =0$, then some $v_j$, with $j > 1$, is a linear combination of the preceding vectors $v_1, \cdots, v_{j-1}$

> If more than 2 vectors lie in the same plane, we can say that the set is linearly dependent

Theorem: If a set contains more vectors than there are entries in each vector, then the set is **linearly dependent**. i.e. any set $\{ v_1, \cdots, v_p \} \in \R^n$ is linearly dependent if $p > n$

Proof:

Let $A = \begin{bmatrix} v_1 & \cdots v_p \end{bmatrix}$. $A \in \R^{n \times p}$

$Ax = 0$ corresponds to $n$ equations of $p$ unknowns

$$
\begin{aligned}
p > n &\implies \text{More variables than equations} \\
&\implies \text{At least 1 free variable} \\
&\implies \text{Non-trivial solution exists for Ax = 0} \\
&\implies \text{Columns of A are linearly dependent}
\end{aligned}
$$

$$
\begin{bmatrix}
* & * & * & * & * \\
* & * & * & * & * \\
* & * & * & * & * 
\end{bmatrix}
$$

$\begin{bmatrix} a_1 \\ b_1 \end{bmatrix}, \begin{bmatrix} a_2 \\ b_2 \end{bmatrix}, \begin{bmatrix} a_3 \\ b_3 \end{bmatrix}$ are 3 vectors, each vector has 2 entries. Hence they are linearly dependent.

Theorem: If a set $S = \{ v_1, \cdots, v_p \}$ in $\R^n$ contains the zero vector, then the set is **linearly dependent**

Proof:
Without loss of generality, assume $v_1 = 0$. Then the equation $1v_1 + 0v_2 + 0v_3 + \cdots + 0v_p = 0$ is a non-trivial solution, and the existence of a non-trivial solution means that $S$ is linearly dependent

# Linear Transformations
Think of $Ax = b$ as:

$A$ is an object that "acts" on a vector $x$ by multiplication to produce a new vector $Ax$

A **transformation** $T$ from $\R^n$ to $\R^m$ (denoted by $T: \R^n \mapsto \R^m$) is a rule that assigns each vector $x \in \R^n$ to a vector $T(X) \in \R^m$
- $\R^n$ - **Domain** of $T$
- $\R^m$ - **Codomain** of $T$
- $T(x)$ - **Image** of x
- Set of all images $T(x)$ - **Range** of $T$

E.g.

Let $A = \begin{bmatrix} 1 & -3 \\ 3 & 5 \\ -1 & 7 \end{bmatrix}, u = \begin{bmatrix} 2 \\ -1 \end{bmatrix}, b = \begin{bmatrix} 3 \\ 2 \\ -5 \end{bmatrix}, c = \begin{bmatrix} 3 \\ 2 \\ 5 \end{bmatrix}$, and define a transformation $T: \R^2 \mapsto \R^3$ by $T(x) = Ax$
a. Find $T(u)$
b. Find an $x$ in $\R^2$ whose image under $T$ is $b$
c. Is there more than 1 $x$ whose image under $T$ is $b$?
d. Determine if $c$ is in the range of $T$

Solution:
a. 
$$
\begin{aligned}
T(u) &= \begin{bmatrix} 1 & -3 \\ 3 & 5 \\ -1 & 7 \end{bmatrix} \begin{bmatrix} 2 \\ -1 \end{bmatrix} \\
&= \begin{bmatrix} 5 \\ 1 \\ -9 \end{bmatrix}
\end{aligned}
$$

b. If $Ax = b$, find x 
$$
\begin{bmatrix} 1 & -3 & 3 \\ 3 & 5 & 2 \\ -1 & 7 & -5 \end{bmatrix} \rightarrow \begin{bmatrix} 1 & 0 & \frac{3}{2} \\ 0 & 1 & -\frac{1}{2} \\ 0 & 0 & 0 \end{bmatrix}
$$

Hence, $x = \begin{bmatrix} \frac{3}{2} \\ -\frac{1}{2} \end{bmatrix}$

c. Since there was only 1 solution for $Ax = b$, there are no other $x$ such that its image under $T$ is $b$

d. Check if $c = T(x)$ for some $x$. If $c$ exists, then $Ax = c$ is consistent, and $c$ would be in the range of $T$
$$
\begin{bmatrix}
1 & -3 & 3 \\
3 & 5 & 2 \\
1 & 7 & 5
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & -3 & 3 \\
0 & 1 & 2 \\
0 & 0 & -35
\end{bmatrix}
$$

By observation of the REF, we can see that $Ax = c$ is inconsistent, hence $c$ is not in the range of $T$

E.g.
Let $A = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}$. What is the transformation?

Let $A = \begin{bmatrix} 1 & 3 \\ 0 & 1 \end{bmatrix}$. What is the transformation?

$$
Ax = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} x \\ y \\ 0 \end{bmatrix}
$$
A projection of the 3D space onto the XY plane

$$
Ax = \begin{bmatrix} 1 & 3 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} x + 3y \\ y \end{bmatrix}
$$

Converts a square to a parallelogram. This is a **shear**

A transformation $T$ is **linear** if:
- $T(u + v) = T(u) + T(v) \forall u, v \in D_T$
- $T(cu) = cT(u)$

Generalizing, 
$$
T(c_1v_1 + c_2v_2 + \cdots + c_pv_p) = c_1 T(v_1) + \cdots c_p T(v_p)
$$

E.g.
- $T(x) = rx, T: \R^2 \mapsto \R^2$ is a **contraction** when $0 \leq r \leq 1$ and a **dilation** if $r>1$
- Show that $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$ represents a linear transformation by finding the images of $u = \begin{bmatrix}4 \\ 1 \end{bmatrix}, v = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$
    - 
$$
\begin{aligned}
T(u) &= \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}\begin{bmatrix}4 \\ 1 \end{bmatrix}  \\
&= \begin{bmatrix} -1 \\ 4 \end{bmatrix} \\

T(v) &= \begin{bmatrix} -3 \\ 2 \end{bmatrix} \\

T(u) + T(v) &= \begin{bmatrix} - 4\\ 6 \end{bmatrix} \\
T(u + v) &= T \left( \begin{bmatrix}4 \\ 1 \end{bmatrix} + \begin{bmatrix} 2 \\ 3 \end{bmatrix} \right) \\
&= T \left( \begin{bmatrix} 6 \\ 4 \end{bmatrix} \right) \\
&= \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} 6 \\ 4 \end{bmatrix} \\
&= \begin{bmatrix} -4 \\ 6 \end{bmatrix} \\
&\therefore T(u + v) = T(u) + T(v)
\end{aligned}
$$

$$
\begin{aligned}
T(cu) &= \begin{bmatrix} 0 & - 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} 4c \\ c \end{bmatrix} \\
&= \begin{bmatrix} -c \\ 4c \end{bmatrix} \\
&= c \begin{bmatrix} -1 \\ 4 \end{bmatrix} \\
&= c T(u) \\
&\therefore T(cu) = cT(u) 
\end{aligned}
$$

# Matrix of a Linear Transformation

Given the description of a linear transformation in words, how to obtain the corresponding matrix?
> $T$ is completely determined by what it does to the columns of the $n \times n$ identity matrix $I_n$

[3B1B's video](https://www.youtube.com/watch?v=kYB8IZa5AuE) about matrix transformation

For identity matrix with columns $e_1, \cdots, e_n, e_i \in \R^n$, the transformation matrix of $T$ is just $\begin{bmatrix} T(e_1) & T(e_2) & \cdots & T(e_n) \end{bmatrix}$

E.g.

Let $I_2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ and $e_1 = \begin{bmatrix} 1 & 0 \end{bmatrix}, e_2 = \begin{bmatrix} 0 & 1 \end{bmatrix}$. Suppose $T$ is a linear transformation from $\R^2$ to $\R^3$ such that $T(e_1) = \begin{bmatrix} 5 \\ -7 \\ 2 \end{bmatrix}, T(e_2) = \begin{bmatrix} -3 \\ 8 \\ 0 \end{bmatrix}$. Find the formula for the image of an arbitrary $x \in \R^2$

$$
\begin{aligned}
x &= \begin{bmatrix} x_ 1 \\ x_2 \end{bmatrix} \\
&= x_1 \begin{bmatrix} 1 & 0 \end{bmatrix} + x_2 \begin{bmatrix} 0 & 1 \end{bmatrix} \\

T(x) &= T(x_1e_1 + x_2e_2) \\
&= x_1 T(e_1) + x_2 T(e_2) \\
&= x_1 \begin{bmatrix} 5 \\ -7 \\ 2 \end{bmatrix} + x_2 \begin{bmatrix} -3 \\ 8 \\ 0 \end{bmatrix}
&= \begin{bmatrix} 5x_1 - 3x_2 \\ -7x_1 + 8x_2 \\ 2x_1 \end{bmatrix}
\end{aligned}
$$

Also from the previous section, we learnt that 
$$
T = \begin{bmatrix} 5 & -3 \\ -7 & 8 \\ 2 & 0 \end{bmatrix}
$$

Theorem: let $T: \R^n \mapsto \R^m$ be a linear transformation. Then there exists a unique matrix $A$ such that 
$$
T(x) = Ax \forall x \in \R^n
$$

$A \in \R^{m \times n}$ whose $j^{th}$ column is the vector $T(e_j)$, where $e_j$ si the $j^{th}$ column of the identity matrix in $R^n$

$$
A = \begin{bmatrix} T(e_1) \cdots T(e_n) \end{bmatrix}
$$

$A$ is called the **standard matrix for the linear transformation** $T$

E.g. 

Let $T: \R^2 \mapsto \R^2$ be the transformation that rotates each point in $\R^2$ about the origin through an angle $\phi$ with counterclockwise rotation for a positive angle. Find the standard matrix $A$ for this transformation.

Solution:
$$
\begin{aligned}
e_1 &= \begin{bmatrix}1 \\ 0 \end{bmatrix} \\
e_2 &= \begin{bmatrix}0 \\ 1 \end{bmatrix} \\
A &= \begin{bmatrix} T(e_1) & T(e_2) \end{bmatrix}
\end{aligned}
$$

By rotating $e_1$, the new coordinates are $\begin{bmatrix} \cos \phi \\ \sin \phi \end{bmatrix}$ 
By rotating $e_2$, the new coordinates are $\begin{bmatrix} -\sin \phi \\ \cos \phi \end{bmatrix}$ 

Hence $A = \begin{bmatrix} \cos \phi & - \sin \phi \\ \sin \phi & \cos \phi \end{bmatrix}$

# Selected tutorial question attempts
1. Find the values of $k$ such that the equations
$$
\begin{aligned}
x + 5y + 3z &= 0 \\
5x + y - kz &= 0 \\
x + 2y + kz &= 0
\end{aligned}
$$

Solution:

From the augmented matrix, we perform a series of EROs
$$
\begin{bmatrix}
1 & 5 & 3 & 0 \\
5 & 1 & -k & 0 \\
1 & 2 & k & 0
\end{bmatrix} \rightarrow
\begin{bmatrix}
1 & 5 & 3 & 0 \\
0 & -24 & -k-15 & 0 \\
0 & 0 & -\frac{9}{8}k + \frac{9}{8} & 0
\end{bmatrix}
$$

We can see from the last equation, that if $x, y, z \neq 0 \Rightarrow -\frac{9}{8}k + \frac{9}{8} \Rightarrow k = 1$

Extra reading: https://www.youtube.com/watch?v=lerx7O6HfFA

2. Let $a = \begin{bmatrix}
1 & 0 & -4 \\
0 & 3 & -2 \\
-2 & 6 & 3
\end{bmatrix}$ and $b = \begin{bmatrix}
4 \\ 1 \\ -4
\end{bmatrix}$. Let the columns of $A$ be denoted by $a_1, a_2, a_3$ and let $W = span {a_1, a_2, a_3}$. Is $b \in W$?

Solution:
A **span** of a set $S$ of vectors is the smallest linear subspace that contains the set. Any linear combination of $a_1, a_2, a_3$ is in $W$. Hence, if $b \in W$, then  $Ax = b$ has at least 1 solution (which is true). $W$ also has an infinite amount of vectors

