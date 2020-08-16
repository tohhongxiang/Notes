# Elementary number theory

There are different types of numbers
- Natural numbers $\N$, such as 1, 2, 3. Sometimes 0 is also included (Whole numbers)
- Integers $\Z$, natural numbers including zero and their negatives (..., -3, -2, -1, 0, 1, 2, 3, ...)
- Real numbers $\R$, any number on the continuous number line (0, $\pi$, $-\sqrt{2}$)
- Rational numbers $\mathbb{Q}$, numbers that can be represented in the form $\frac{a}{b}$, for $a, b \in \Z, b \neq 0$ ($\frac{3}{7}, \frac{999}{1000}$)
- Irrational numbers $\mathbb{I}$, numbers that cannot be represented in the form $\frac{a}{b}$ for any integers $a$ or $b$ ($\pi, e, \sqrt{2}$)

# Euclidean Division
- There exists **unique** integers $q$ and $r$ such that
$$
m = qn + r, 0 \leq r < n
$$

- $q$ is the quotient, $r$ is the remainder
- If $r = 0$, then:
    - $n$ divides $m$: ($n | m$)

- A prime number $p$ is a *natural* number that have only 2 factors: ($1, p$)
- An even number $a$ is a number that is divisible by 2, can be expressed in the form $a = 2n, n \in \Z$
- An odd number $b$ is a number not divisible by 2, can be expressed in the form $b = 2n + 1, n \in \Z$

# Modulo and Congruence
- For a positive divisor $n$, two integers $a$ and $b$ are **congruent modulo $n$**, if $(a - b) | n$
$$
    a \equiv b \pmod n
$$
- If $ a \equiv b \pmod n $, then $a-b = qn$ and $a = qn + b$, and $n | a - b$
- $- 8 \equiv 2 \equiv 7 \pmod 5$

# Modular arithmetic properties
$$
\begin{aligned}
a \equiv b \pmod n &\Leftrightarrow a = qn + b \\
(a \pmod n) + (b \pmod n) &\equiv (a + b) \pmod n \\
(a \pmod n) * (b \pmod n) &\equiv (ab) \pmod n 
\end{aligned}
$$

### Proof
$$
a \pmod n + b \pmod n = (a + b) \pmod n
$$ 

Let $a \equiv r_1 \pmod n$, which means that $a = nq_1 + r1$, and similarly, $b \equiv r_2 \pmod n \leftarrow b = nq_2 + r_2$

$$
\begin{aligned}
    a + b &= n(q_1 + q_2) + (r_1 + r_2) \\
    \Rightarrow r_1 + r_2 &\equiv (a + b) \pmod n \\
    \Rightarrow a \pmod n + b \pmod n &\equiv (a + b) \pmod n
\end{aligned}
$$

--- 

$$
(a \pmod n)(b \pmod n) = (ab) \pmod n
$$ 

Let $a \equiv r_1 \pmod n$, which means that $a = nq_1 + r1$, and similarly, $b \equiv r_2 \pmod n \leftarrow b = nq_2 + r_2$

$$
\begin{aligned}
    a * b &= n(n q_1 q_2 + q_1 r_2 + q_2 r_1) + (r_1 r_2) \\
    \Rightarrow r_1 r_2 &\equiv (ab) \pmod n \\
    \Rightarrow (a \pmod n)(b \pmod n) &\equiv (ab) \pmod n
\end{aligned}
$$

$$
\begin{aligned}
    17 \pmod 5 + -8 \pmod 5 &\equiv 2 \pmod 5 + 2 \pmod 5\\
    &\equiv (2 + 2) \pmod 5 \\
    &\equiv 4 \pmod 5
\end{aligned}
$$

$$
\begin{aligned}
    (12 \pmod 5) * (-3 \pmod 5) &\equiv (2 \pmod 5) * (2 \pmod 5)\\
    &\equiv (2 * 2) \pmod 5 \\
    &\equiv 4 \pmod 5
\end{aligned}
$$

# Operator Closure
- Consider a set $S$ with an operator $\Delta$
    - Examples of operators include $ +, *$, squaring  
- $S$ is closed under $\Delta$ if the result of the operation $\Delta$ on any 2 elements in $S$ results in an element of $S$
    - $S \in \R$ is closed under $\Delta = +, *$, every integer multiplied by another integer is an integer, and the same for addition
    - $S \in \Z$ is not closed under $\Delta = /$, dividing 2 integers does not always give you an integer
    - $S \in k \pmod n, k \in \Z$ is closed under $\Delta = addition \pmod n$

# More modular properties and proof
If $a \equiv b \pmod n$ and $b \equiv c \pmod n$, then $a \equiv c \pmod n$

$$
\begin{aligned}
a \equiv b \pmod n &\Rightarrow a = qn + b \\
b \equiv c \pmod n &\Rightarrow b = pn + c
\end{aligned}
$$

Hence, 
$$
\begin{aligned}
a &= qn + b \\
  &= qn + pn + c \\
  &= n(p+q) + c \Rightarrow a \equiv c \pmod n
\end{aligned}
$$
--- 

If $a \equiv b \pmod n$ and $c \equiv d \pmod n$, then $(a + c) \equiv (b + d) \pmod n$

$$
\begin{aligned}
    a \equiv b \pmod n \Rightarrow a &= nq + b \\
    c \equiv d \pmod n \Rightarrow c &= np + d \\
\end{aligned}
$$

$$
    a + c = n(p + q) + (b + d) \Rightarrow (a + c) \equiv (b + d) \pmod n
$$

--- 

If $a \equiv b \pmod n$ and $c \equiv d \pmod n$, then $(ac) \equiv (bd) \pmod n$

$$
\begin{aligned}
    a \equiv b \pmod n \Rightarrow a &= nq + b \\
    c \equiv d \pmod n \Rightarrow c &= np + d \\
\end{aligned}
$$

$$
    ac = n(npq + pb + qd) + (bd) \Rightarrow (ac) \equiv (bd) \pmod n
$$

--- 

If $a \equiv b \pmod n$ and $k \in \Z$, then $a^k \equiv b^k \pmod n$

$$
a \equiv b \pmod n \Rightarrow a = qn + b 
$$

$$
\begin{aligned}
a^k &= (qn + b)^k \\
&= {n \choose 0} b^k (qn)^0 + {n \choose 1} b^{k-1}(qn)^1 + \cdots + {n \choose n} b^0 (qn)^k \\
&= b^k + n\left( {n \choose 1} b^{k-1}q^1n^0 + \cdots + {n \choose n} b^0 q^k n^{k-1} \right) \Rightarrow a^k \equiv b^k \pmod n
\end{aligned}
$$