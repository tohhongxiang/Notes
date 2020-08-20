# Propsitional Logic

A proposition is a declarative statement that is either **true** or **false**
- 1 + 1 = 2 - True
- 2 + 2 < 0 - False
- Singapore is in Europe - False
- 1 + 1 > X - Not a proposition unless we know the value of X
- What a great book! - Not a proposition because it is not a declarative statement

A declarative statement that cannot be assigned a truth value is a **paradox**
- This statement is false

# Logical operators

We use symbols to represent statements
- P : "dogs are mammals"
- P is true if dogs are mammals

We can use logical operators to combine statements
Logical operators include
- ^ (and)
- v (or)
- ¬ (not, or ~)

### Negation (NOT)
p | ~p
--- | ---
1 | 0
0 | 1

### Disjunction (OR)
- p v q is true if AT LEAST 1 of p or q is true

p | q | $p \lor q$
--- | --- | ---
0 | 0 | 0
0 | 1 | 1
1 | 0 | 1
1 | 1 | 1

- $p \lor q \equiv q \lor p$, hence the operator v commutes

### Conjunction (AND)
- p ^ q is true only if BOTH p and q are true

p | q | $p \land q$
--- | --- | ---
0 | 0 | 0
0 | 1 | 0
1 | 0 | 0
1 | 1 | 1

- ^ is also commutative

# De Morgan's Laws
$$
\begin{aligned}
\neg (p \lor q) &\equiv \neg p \land \neg q \\
\neg (p \land q) &\equiv \neg p \lor \neg q
\end{aligned}
$$

p | q | $\neg p$ | $\neg q$ | $p \land q$ | $\neg (p \land q)$ | $\neg p \lor \neg q$
--- | --- | --- | --- | --- | --- | ---
0 | 0 | 1 | 1 | 0 | 1 | 1
0 | 1 | 1 | 0 | 0 | 1 | 1
1 | 0 | 0 | 1 | 0 | 1 | 1
1 | 1 | 0 | 0 | 1 | 0 | 0 

# Contradiction and Tautology

A compound statement that is always false is a **contradiction**
- This course is easy and this course is not easy ($p \land \neg p \equiv F$)

$p$ | $\neg p$ | $p \land \neg p$
--- | --- | ---
0 | 1 | 0
1 | 0 | 0

A compound statement that is always true is a **tautology**
- $p \lor \neg p \equiv T$

$p$ | $\neg p$ | $p \lor \neg p$
--- | --- | ---
0 | 1 | 1
1 | 0 | 1

# Logically Equivalent expressions

Let
- $b$: Bob is single
- $\neg b$: Bob is not single
- $h$: Alice is married
- $\neg h$: Alice is not married

Alice is not married **but** Bob is not single (But is equivalent to and in english)
$$
\neg h \land \neg b
$$

Bob is not single **and** Alice is not married
$$
\neg b \land \neg h
$$

**Neither** Bob is single **nor** Alice is married (A neither-nor statement is the negation of an either-or statement)
$$
\neg (b \lor h)
$$

The three expressions are equivalent
$$
\neg h \land \neg b \equiv \neg b \land \neg h \equiv \neg (b \lor h)
$$

By commutivity, $\neg h \land \neg b \equiv \neg b \land \neg h$

By De Morgan's law, $\neg b \land \neg h \equiv \neg (b \lor h)$

### Double negation
$$
\neg (\neg p) \equiv p
$$

$p$ | $\neg p$ | $\neg (\neg p)$
--- | --- | ---
0 | 1 | 0
1 | 0 | 1

### Idempotency
$$
\begin{aligned}
p \land p &\equiv p \\
p \lor p &\equiv p
\end{aligned}
$$

### Absorption
$$
\begin{aligned}
p \lor (p \land q) &\equiv p \\
p \land (p \lor q) &\equiv p
\end{aligned}
$$

### Distributivity
$$
\begin{aligned}
p \lor (q \land r) &\equiv (p \lor q) \land (p \lor r) \\
p \land (q \lor r) &\equiv (p \land q) \lor (p \land r)
\end{aligned}
$$

# Conditional Operator: If then

If $p$ then $q$: $p \implies q$

$p$ | $q$ | $p \implies q$
--- | --- | ---
0 | 0 | 1
0 | 1 | 1
1 | 0 | 0
1 | 1 | 1

By definition, when $p$ is false, $p \implies q$ is true. This is called **vacuously true** or **true by default**

### Conversion theorem
> $p \implies q \equiv \neg p \lor q$

Proof:

$p$ | $q$ | $p \implies q$ | $\neg p$ | $\neg p \lor q$
--- | --- | --- | --- | ---
0 | 0 | 1 | 1 | 1
0 | 1 | 1 | 1 | 1
1 | 0 | 0 | 0 | 0
1 | 1 | 1 | 0 | 1

### Converse, Inverse, Contrapositive

Statement | $p \implies q$
--- | ---
Converse | $q \implies p$
Inverse | $\neg p \implies \neg q$
Contrapositive | $\neg q \implies \neg p$

Proof that $\neg q \implies \neg p \equiv p \implies q$

$$
\begin{aligned}
\neg q \implies \neg p &\equiv \neg (\neg q) \lor \neg p
&\equiv \neg p \lor q
&\equiv p \implies q
\end{aligned}
$$

p **only if** q is the same as $\neg q \implies \neg p$ by definition (Contrapositive)
E.g. Bob pays taxes **only if** is income > \$1000, If Bob's income <= \$1000, then bob does not pay taxes

When $p \implies q$, $p$ is called a **sufficient** condition for $q$, $q$ is a **necessary condition** for p.
- Being an apple is a **sufficient condition** for being a fruit -> If it is an apple, then it must be a fruit
- Being a fruit is a **necessary condition** for being an apple -> If it is not a fruit then it cannot be an apple

# Biconditional Operator (If and only if)
The **biconditional** of $p$ and $q$: $p \iff q \equiv (p \implies q) \land (q \implies p)$
- True only if $p$ and $q$ have identical truth values
- Written as **iff**

$p$ | $q$ | $p \implies q$ | $q \implies p$ | $p \iff q$
--- | --- | --- | --- | ---
0 | 0 | 1 | 1 | 1
0 | 1 | 1 | 0 | 0
1 | 0 | 0 | 1 | 0
1 | 1 | 1 | 1 | 1

# Operator Precedence
1. Brackets (Highest Precedence)
2. Negation
3. Disjunction/Conjunction
4. Conditional 
5. Biconditional (Lowest Precedence)

When equal binary instances of **binary connectives** (Connect 2 statements together) are not separated by (), the **leftmost** one has precedence
- $p \implies q \implies r \equiv (p \implies q) \implies r$

When instances of $\neg$ are not separated by (), the **rightmost** one has precedence
- $\neg \neg \neg p \equiv \neg (\neg (\neg p))$

E.g. $p \lor q \implies r \equiv (p \implies r) \land (q \implies r)$

$$
\begin{aligned}
p \lor q \implies r &\equiv (p \lor q) \implies r \\
&\equiv \neg (p \lor q) \lor r \\
&\equiv (\neg p \land \neg q) \lor r \\
&\equiv (\neg p \lor r) \land (\neg q \lor r) \\
&\equiv (p \implies r) \land (q \implies r)
\end{aligned}
$$

# Argument
An argument is a sequence of statements. The last statement is the **conclusion**. All the previous statements are **premises** 

A **valid argument** is an argument where the conclusion is true if all the premises are true. For n premises $p_1, \cdots, p_n$, and a conclusion $c$. A series of statements form a valid argument iff the conjunction of premises implying the conclusion is a tautology

$$
p_1 \land p_2 \cdots p_n \implies c
$$

E.g. 
$$
\begin{aligned}
p \implies &q \\
&p \\
\therefore &q
\end{aligned}
$$

To check that the above premise is valid, we have to check that $((p \implies q) \land p) \implies q$ is a **tautology**

$p$ | $q$ | $p \implies q$ | $(p \implies q) \land p$ | $((p \implies q) \land p) \implies q$
--- | --- | --- | --- | ---
0 | 0 | 1 | 0 | 1
0 | 1 | 1 | 0 | 1
1 | 0 | 0 | 0 | 1
1 | 1 | 1 | 1 | 1

We can see that $((p \implies q) \land p) \implies q$ is a tautology, hence the argument is **valid**

**Critical rows** are rows with all premises true.

If in all critical rows the conclusion is true, then the **argument is valid**. A critical row with a false conclusion is a **counterexample**
- Counterexamples invalidates the arguments, and shows that the conclusion does not follow the premises

E.g.
$$
\begin{aligned}
f \land a \implies &r \\
&f
& \neg a
\therefore \neg r
\end{aligned}
$$

$a$ | $r$ | $f$ | $\neg a$ | $f \land a$ | $f \land a \implies r$ | $\neg r$
--- | --- | --- | ---      | ---         | --------               | ---
0 | 0 | 0 | 1 | 0 | 1 | 1
0 | 0 | 1 | 1 | 0 | 1 | 1
0 | 1 | 0 | 1 | 0 | 1 | 0
0 | 1 | 1 | 1 | 0 | 1 | 0
1 | 0 | 0 | 0 | 0 | 1 | 1
1 | 0 | 1 | 0 | 1 | 0 | 1
1 | 1 | 0 | 0 | 0 | 1 | 0
1 | 1 | 1 | 0 | 1 | 1 | 0

We can check the critical rows of the truth table (where all the premises, $f \land a \implies r, f, \neg a$ are true)

$a$ | $r$ | $f$ | $\neg a$ | $f \land a$ | $f \land a \implies r$ | $\neg r$
--- | --- | --- | ---      | ---         | --------               | ---
0 | 0 | 1 | 1 | 0 | 1 | 1
0 | 1 | 1 | 1 | 0 | 1 | 0

We see that for 1 of the critical rows, the conclusion is false although all the premises are true. Thus, a **fallacy**.
> A **fallacy** is an error in reasoning that results in an invalid argument

### Fallacy 1 (Converse Error)
$$
\begin{aligned}
p \implies &q \\
&q \\
\therefore &p
\end{aligned}
$$

- If it is Christmas, then it is a holiday
- It is a holiday. Therefore, it is Christmas
- This is false, because it could have been Good Friday instead

### Fallacy 2 (Inverse Error)
$$
\begin{aligned}
p \implies &q \\
\neg &p \\
\therefore \neg &q
\end{aligned}
$$

- If it is raining, I will stay at home
- It is not raining, therefore I will not stay at home
- False, because I can stay at home even if it is raining

### Invalid argument, correct conclusion
An argument may be invalid but still draw a correct conclusion

- If New York is a big city, then New York has tall buildings
- New York has tall buildings
- So, New York is a big city
- This is an invalid argument, because having tall buildings does not imply that the city is big (Converse error). However the conclusion was still valid by coincidence

# Inference Rules
A **rule of inference** is a logical construct which takes premises, analyses their syntax and returns a conclusion



**Modus Tollens** (Method of Denying)

Name | Definition
 --- | ---
Modus Ponens (Method of Affirming) | $\begin{aligned}p \implies &q \\ &p \\\therefore &q\end{aligned}$
Modus Tollens (Method of Denying) | $\begin{aligned}p \implies &q \\ &\neg q \\ \therefore &\neg p \end{aligned}$
Conjunctive Simplification (Particularising) | $\begin{aligned}p \land &q \\ \therefore &p \end{aligned}$
Conjunctive Addition (Specialising) | $\begin{aligned}&p \\ &q \\ \therefore &p \land q \end{aligned}$
Disjunctive Addition (Generalisation) | $\begin{aligned}&p \\ \therefore p \lor &q\end{aligned}$
Disjunctive Syllogism (Case Elimination) | $\begin{aligned}p \lor &q \\ & \neg p \\ \therefore &q\end{aligned}$
Rule of Contradiction | $\begin{aligned}\neg p \implies &F \\ \therefore p \end{aligned}$
Dilemma (Case by Case) | $\begin{aligned} p \lor &q \\ p \implies &r \\ q \implies &r \\ \therefore &r \end{aligned}$
Hypothetical Syllogism | $\begin{aligned} p \implies &q \\ q \implies &r \\ \therefore p \implies &r\end{aligned}$

### Hypothetical Syllogism Proof
$$
\begin{aligned}
(p \implies q) \land (q \implies r) &\equiv (\neg p \lor q) \land (\neg q \lor r) \text{(Conversion Theorem)} \\
&\equiv ((\neg p \lor q) \land \neg q) \lor ((\neg p \lor q) \land r) \text{(Distributive)} \\
&\equiv ((\neg p \lor q) \land \neg q) \lor r \text{(Conjunctive simplification)} \\
&\equiv ((\neg p \land \neg q) \lor (q \land \neg q)) \lor r \text{(Distributive)} \\
&\equiv (\neg p \land \neg q) \lor r \text{(Law of non-contradiction. $q \land \neg q \equiv F$, and $a \lor F \equiv a$)}
&\equiv \neg p \lor r \text{(Conjunctive simplification)}
&\equiv p \implies q

\end{aligned}
$$


