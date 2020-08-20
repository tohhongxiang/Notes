# Digital Arithmetic

Using binary to perform addition, subtraction, multiplication and division

# Addition
- $10111_2 + 1010_2$
    - We can see the second bit requires a carry, hence 10111 + 1010 = 100001

# Adders

### Half adder
- It is a logic circuit that performs the addition of 2 bits
- It takes in a 2 bit input, and has a 2 bit output - a carry and a sum
    - SUM = A ⊕ B
    - Carry = A.B
- A | B | Carry | Sum
  --- | --- | --- | ---
  0 | 0 | 0 | 0
  0 | 1 | 0 | 1
  1 | 0 | 0 | 1
  1 | 1 | 1 | 0 

### Full adder
- A logic circuit that performs addition on 3 bits - A, B and $C_{in}$ (Carry-in)
- It has 2 outputs - $C_{out}$ (Carry-out) and sum
- A | B | Cin | Cout | Sum
  --- | --- | --- | ---
  0 | 0 | 0 | 0 | 0
  0 | 0 | 1 | 0 | 1
  0 | 1 | 0 | 0 | 1
  0 | 1 | 1 | 1 | 0
  1 | 0 | 0 | 0 | 1
  1 | 0 | 1 | 1 | 0
  1 | 1 | 0 | 1 | 0
  1 | 1 | 1 | 1 | 1
- Sum = A ⊕ B ⊕ Cin
- Cout = A.B + B.Cin + A.Cin
- Also, see that Cout = A.B + B.Cin + A.Cin 
    = A.B + (A'B + AB)Cin + (AB + AB')Cin 
    = AB + Cin(AB) + Cin(A'B + AB') 
    = AB(1 + C) + Cin(A'B + AB') 
    = AB + Cin.(A ⊕ B) (Half adder)

- To add 2 4-bit numbers together, we need 4 full adders
    - The first full adder takes 1 bit from the first number, 1 bit from the second number, and nothing for the carry in
    - The second full adder takes the second bit from the first number, the second bit for the second number, and the carry out from the previous adder will be the carry in
    - This goes on until the last adder is reached
    - This configuration is called the **ripple-carry adder**
    - Addition speed is limited by propagation delays of the full adder - called **carry propagration**
    - ![Ripple carry adder diagram](ripple-carry-adder.png)

# Signed magnitude representation
- The sign for a binary number is the MSB
- If the sign is 0, it is positive. If it is 1, it is negative
- Decimal number | Sign | Magnitude
  --- | --- | ---
  14 | 0 | 1110
  -14 | 1 | 1110
- An N-bit signed value lies within the range $[-(2^{N-1} - 1), 2^{N-1} - 1]$
    - $1111_2 = -7_{10}, 0111_2 = 7_{10}, 0000_2 = 0_{10}, 1000_2 = -0_{10}$

# 2's complement system
- sign bit = 0 for zero and positive numbers
- sign bit = 1 for negative number
- To get the 2's complement for a number
    1. Invert every bit of the binary number (1's complement)
    2. Add 1 to the result
    E.g. 1110 -> 0001 -> 0010
- Decimal number | Sign | Magnitude
  --- | --- | ---
  14 | 0 | 1110
  -14 | 1 | 0010
- Shortcut for obtaining 2's complement of a number
    1. Starting from LSB, copy the bit if it is '0', and repeat the process with the remaining bits UNTIL THE FIRST 1
    2. Copy the bit if it is the first '1', then invert all the remaining bits
- There is 1 more negative value than positive ones
- An N-bit value in 2's complement lies within the range $[-2^{N-1}, 2^{N-1} - 1]$
    - E.g. in 4 bits, the range of values is [-8, 7] (Note you cannot represent +8 as a value using 4 bits in 2's complement)
    - 8 bits, [-128, 127] (Cannot represent +128 as a value in 8 bits in 2's complement)