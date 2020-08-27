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

