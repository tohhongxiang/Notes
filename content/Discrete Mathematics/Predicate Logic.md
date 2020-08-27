# Predicate Logic

# Predicates
Is the statement "x^2 is greater than x" a proposition?
- No, because we don't know the value of x

Let us define P(x) = "x^2 is greater than x"
- P(1) = "1^2 is greater than 1"
- Now P(1) is a proposition

> A predicate is a statement that contains variables and that is either true or false, depending on the values of these variables

P(x) is an example of a predicate. When x is a specific value, it is a proposition. (The predicate is instantiated with a value)

The **domain** of a predicate variable is the collection of all possible values that the variable may take

Let P(x, y) = x > y
Domain: $x, y \in \Z$

P(4, 3) = 4 > 3 = true
P(1, 2) = 1 > 2 = false
P(3, 4) = 3 > 4 = false

Note that P(x, y) is not equal to P(y, x)

# Quantifiers
- Some birds are angry
- Not all students study hard
- The square of any real number is non-negative

### Universal Quantifier $\forall$
- A quantifier that means "given any" or "for all"
- $\forall x \in D, P(x)$ iff "P(x) is true **for every** x in D"
- $\forall x \in \R, x^2 \ge 0$

### Existential Quantification $\exists$
- A quantifier that means "there exists", "there is at least 1", "for some"
- $\exists x \in D, P(x)$ iff "P(x) is true **for at least one** x in D"
- Some birds are angry
    - $\exists x \in \text{{birds}}$, x is angry

### Nested Quantification
- A proposition may contain multiple quantifiers
- All rabbits are faster than all tortoises
    - Domains: R = {rabbits}, T = {tortoises}
    - Predicate: C(x, y): Rabbit x is faster than Tortoise y
    - $\forall x \in R, \forall y \in T, C(x, y)$
    - For any rabbit x, and for any tortoise y, x is faster than y

- Every rabbit is faster than some tortoise
    - Domains: R = {rabbits}, T = {tortoises}
    - Predicate: C(x, y): Rabbit x is faster than Tortoise y
    - $\forall x \in R, \exists y \in T, C(x, y)$
    - For any rabbit x, there exists some tortoise y, x is faster than y

- There is a rabbit faster than every tortoise
    - Domains: R = {rabbits}, T = {tortoises}
    - Predicate: C(x, y): Rabbit x is faster than Tortoise y
    - $\exists x \in R, \forall y \in T, C(x, y)$
    - There exists some rabbit x, such that for any tortoise y, x is faster than y

### Order of nesting
Is $\forall x \in D, \exists y \in D, P(x, y) \equiv \exists y \in D, \forall x \in D, P(x, y)$ true in general?

- LHS
    - $\forall x \in D, \exists y \in D, P(x, y)$
    - $y$ can vary with $x$
- RHS
    - $\exists y \in D, \forall x \in D, P(x, y)$
    - y is fixed, x varies

- Let P(x, y) = "x admires y"
- LHS: Every person admires someone
- RHS: Some people are admired by everyone
- We can see that it is **not** equivalent

# Negation of Quantification 
Statement | When True | When False
--- | --- | ---
$\forall x \in D, P(x)$ | P(x) is true for every $x$ in $D$ | There is one $x$ for which $P(x)$ is false
$\exists x \in D, P(x)$ | There is one $x$ in $D$ for which $P(x)$ is true | $P(x)$ is false for every $x$ in $D$ 

If $D$ consists of $x_1, x_2, \cdots, x_n$, then

$$
\begin{aligned}
\forall x \in D, P(x) &\equiv P(x_1) \land P(x_2) \land \cdots \land P(x_n) \\
\exists x \in D, P(x) &\equiv P(x_1) \lor P(x_2) \lor \cdots \lor P(x_n)
\end{aligned}
$$

E.g.

Statememt | Negated Equivalent
--- | ---
Not all students study hard | There is at least 1 student that does not study hard
$\neg (\forall x, P(x))$ | $\exists x, \neg P(x)$
It is not the case that some students in this class are local | All students in this class are not local
$\neg (\exists x, P(x))$ | $\forall x, \neg P(x)$

E.g.

$$
\neg (\forall x \in D, P(x) \land Q(x)) \equiv \exists x \in D, \neg P(x) \lor \neg Q(x)
$$

# Determine Truth Values
- Exhaustion
- Case
- Logical derivation

1. Exhaustion
    - let $D = \{ 5, 6, 7, 8, 9 \}$. Is $\exists x \in D, x^2 = x$ true?
    - By trying out every element in D, we can see that it is not true

2. Case
    - Using a positive example to prove existential quantification
    - Is $\exists x \in \Z, x^2 = x$
    - By showing an example $x = 0, 1$, it is true
    - Is $\forall x \in \R, x^2 > x$ true?
    - By showing a counterexample, $x = 0.1$, we can see that it is false

3. Method of case
    - Does not work for proving universal quantification
    - Does not disprove existential quantification
    - Consider an arbitrary domain $X$ with n members ($X = \{ x_1, \cdots, x_n \}$)
    - Is $\exists x \in X, (P(x) \lor Q(x)) \equiv (\exists x \in X, P(x)) \lor (\exists x \in X, Q(x))$?
    - $$
    \begin{aligned}
        \exists x \in X, (P(x) \lor Q(x)) &\equiv (P(x_1) \lor Q(x_1)) \lor (P(x_2) \lor Q(x_2)) \lor \cdots \lor (P(x_n) + Q(x_n)) \\
        &\equiv (P(x_1) \lor \cdots \lor P(x_n)) \lor (Q(x_1) \lor \cdots \lor Q(x_n)) \\
        &\equiv (\exists x \in X, P(x)) \lor (\exists x \in X, Q(x))
    \end{aligned}
    $$

# Conditional quantification
For any real number $x$, if $x > 1$, then $x^2 > 1$
- Let P(x) = "$x > 1$"
- Let Q(x) = "$x^2 > 1$"
- $\forall x \in \R, P(x) \implies Q(x)$

Many statements can be restated as conditionals. Consider "lions are fierce animals"
- Let $A$ denote the set of all animals
- Let $P(x)$ denote "x is a lion"
- Let $Q(x)$ denote "x is fierce"
- The statement can be rephrased as "If an animal x is a lion, then it is fierce"
- $\forall x \in A, P(x) \implies Q(x)$

Given a conditional quantification such as 

$$
\forall x \in A, P(x) \implies Q(x)
$$

We can define the following
- $\forall x \in A, \neg Q(x) \implies \neg P(x)$ (Contrapositive)
- $\forall x \in A, Q(x) \implies P(x)$ (Converse)
- $\forall x \in A, \neg P(x) \implies \neg Q(x)$ (Inverse)
- Note: A conditional is equivalent to its contrapositive

What is $\neg (\forall x \in X, P(x) \implies Q(x))$?

$$
\begin{aligned}
\neg (\forall x \in X, P(x) \implies Q(x)) &\equiv \exists x \in X, \neg (P(x) \implies Q(x)) \\
&\equiv \exists x \in X, \neg(\neg P(x) \lor Q(x)) \\
&\equiv \exists x \in X, P(x) \land \neg Q(x)
\end{aligned}
$$

# Basic inference rules
- Universal Generalisation
- Universal Instantiation
- Existential Generalistaion
- Existential Instantiation

### Universal Generalisation
If $P(c)$ for any $c$ in domain $D$, $\therefore \forall x \in D, P(x)$
- $P(c) = x^2 >= 0$
- We know $P(c)$ for **any** arbitrary real $c$
- Therefore, $\forall x \in \R, P(x)$

### Universal Instantiation
If $\forall x \in D, P(x)$, then $P(c)$, where $c$ is any element of the domain $D$
- No cat can catch Jerry
- Tom is a cat
- Therefore, Tom cannot catch Jerry

### Existential Generalisation
If $P(c)$, then $\exists x \in D, P(x)$ for c being **some** specific element in the domain $D$
- If everyone is selling stocks, then someone is selling stocks

### Existential Instantiation
If $\exists x \in D, P(x)$, therefore $P(c)$ for some $c$ in the domain $D$
- If any student scores > 80 in the final exam, then that student will receive an A
- There are students who score > 80 in the final exam
- Therefore there are students who received an A
