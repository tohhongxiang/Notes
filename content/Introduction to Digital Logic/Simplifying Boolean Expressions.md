# Simplifying Boolean Expressions
There are multiple ways to simplify a boolean expression

- Canonical form
    - Sum of minterms expression
    - Product of maxterms expression
- Standard form
    - Sum of products expression
    - Product of sums expression

# Minterms and Maxterms
> Minterms are all possible combinations of a given set of boolean variables formed by the AND operation

> Maxterms are all possible combinations of a given set of boolean variables formed by the OR operation

X | Y | Minterms | Maxterms 
--- | --- | --- | ---
0 | 0 | X'Y' | X + Y 
0 | 1 | X'Y | X + Y' 
1 | 0 | XY' | X' + Y 
1 | 1 | XY | X' + Y'

Minterms always output a 1, while maxterms output a 0

For a set of $N$ inputs, there are $2^N$ minterms and $2^N$ maxterms

E.g. 4 inputs: a, b, c, d
- 13 in decimal is 1101 in binary
- Minterm m13 = abc'd
- Maxterm M13 = a' + b' + c + d'

- 2 in decimal: 0010 binary
- m2 = a'b'cd'
- M2 = a + b + c' + d

Using minterms and maxterms, we can deduce a boolean expression from its truth table

# Sum of Minterms
To write the sum-of-minterms Boolean expression from a truth table:
- For each combination of the input variables that produces a logic 1 in the output, collect the corresponding minterms and OR them together

# Product of Maxterms
- For each combination of the input variables that produces a logic 0 in the output, collect the corresponding maxterms and AND them together
- Conversion of 2 forms is easy

- Sum of minterms expression is associated with active HIGH output
- Product of maxterms expression is associated with active LOW output

E.g. given the truth table, obtain the SOM and POM expressions for output F

X | Y | Z | F
--- | --- | --- | ---
0 | 0 | 0 | 0
0 | 0 | 1 | 1
0 | 1 | 0 | 1
0 | 1 | 1 | 0 
1 | 0 | 0 | 1
1 | 0 | 1 | 0
1 | 1 | 0 | 0 
1 | 1 | 1 | 1

To obtain SOM, we get all the minterms that output 1, and OR them together

SOM = X'Y'Z + X'YZ' + XY'Z' + XYZ = $\sum_{XYZ}(1,2,4,7)$

To obtain POM, we get all the maxterms that output 0, and AND them together

POM = (X + Y + Z)(X + Y' + Z')(X' + Y + Z')(X' + Y' + Z) = $\prod_{XYZ}(0,3,5,6)$

### Interpretation of Active High and Active Low for the above
- When F = 1 (High), there is an odd number of 1's amongst the 3 inputs
- When F = 0 (Low), there is an even number of 1's amongst the 3 inputs
- We can say that
    - F is **ODD**, which is active High
    - F is **EVEN\***, which is active Low

# Standard Forms
- SOP and POS
- Simplified expressions from the canonical forms
- Simpler logic circuits
- Known as combinational circuit minimisation
- Minimise the number of logic gates required
- Minimise the number of inputs on each gate

f(x,y,z) = xyz' + xyz + x'y'z + xy'z = xy(z + z') + (x + x')y'z = xy + y'z

This is now a sum-of-products expression 

A product term need not contain all the input variables, unlike a minterm

f(x,y,z) = (x + y' + z')(x + y' + z)(x' + y' + z)(x' + y + z) = (x + y')(x' + z)

This is a product-of-sums expression. 

A sum term need not contain all the input variables, unlike a maxterm

These are **neither* SOP or POS
- f = (xy)'z + xz' [(xy)'z is not a product term because (xy)'z = (x' + y')z]
- f = xy(x' + z)' [(x' + z)' is not a sum term due to the inverter. (x' + z)' = xz']
- f = (xy + z)(x' + y) [(xy + z) is not a sum term. xy is a product]

There are multiple methods to obtain a **simplified standard expression** from the canonical form
- Algebraic method
- Karnaugh map (K-map)
- Quine-McCluskey (Q-M method or Tabulation method)
- Heuristic methods, e.g. Espresso-II