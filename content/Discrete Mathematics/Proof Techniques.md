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