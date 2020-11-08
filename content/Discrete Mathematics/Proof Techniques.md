# Proof Techniques

# Direct Proof
Prove that $n \text{odd} \rightarrow n^2 \text{odd}$

$$
\begin{aligned}
n &= 2k + 1, k \in \Z (\text{Definition of odd number}) \\
n^2 &= (2k+1)^2 \\
&= 2(2k^2 + 2k) + 1
\end{aligned}
$$

Hence, $n \text{odd} \rightarrow n^2 \text{odd}$

# Mathematical Induction

General procedure:
1. Prove the base case (Smallest $n$)
2. Assume that there exists some integer $k \ge n$ such that $P(n)$ is true. Prove that $P(n) \rightarrow P(n+1)$
3. By Mathematical induction , $P(n)$ is true for all $n$

# Proof by Contradiction
Proving $P(n) \rightarrow Q(n)$
1. Assume that $\neg (P(n) \rightarrow Q(n))$
    -  This occurs when $P(n) \land \neg Q(n)$
2. Prove that this assumption is a contradiction $\neg (P(n) \rightarrow Q(n)) \rightarrow C \land \neg C$
3. This is equivalent to $P(n) \rightarrow Q(n)$

# Proof by Contrapositive

$$
P(n) \rightarrow Q(n) \equiv \neg Q(n) \rightarrow \neg P(n)
$$

# Questions
1. Prove that 
$$
\sum_{k=1}^{n} a + nd = \frac{n}{2}(2a + (n-1)d)
$$

2. Prove that $\sqrt{n}$ is irrational if $n \not = k^2$ for some integer $k$

3. Prove that for any integers $x$ and $y$, and for any prime $p$, 

$$
(x+y)^p = x^p + y^p \bmod p
$$

Use induction to show, for any prime $p$, $a^p \equiv a \bmod p$ for all positive integers $a$

4. Show that if $n$ is not a multiple of 4, then 

$$
\sum_{i=1}^{4} i^n \equiv 0 \bmod 5
$$

5. AM-GM inequality. Let $\{a_i\}_{i=1, 2, ..., n}$ be a sequence of increasing positive real numbers. Prove that

$$
\frac{a_1 + a_2 + \cdots + a_n}{n} \geq \left(a_1 a_2 \cdots a_n\right)^\frac{1}{n}
$$