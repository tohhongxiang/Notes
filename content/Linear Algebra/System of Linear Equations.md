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

