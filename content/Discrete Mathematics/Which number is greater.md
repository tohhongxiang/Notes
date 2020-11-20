# Which number is greater? $e^\pi$ or $\pi^e$?

Consider the function $f(x) = x^{\frac{1}{x}}$

Differentiating it gives us 

$$
f'(x) = (\frac{1}{x^2})(x^{\frac{1}{x}})(1 - \ln x)
$$

Solving for stationary points $f'(x) = 0$, we get $x = e$ as a **maximum** point.

Hence we know that 

$$
\begin{aligned}
e^{\frac{1}{e}} &> \pi^{\frac{1}{\pi}} \\
\frac{\lg e}{e} &> \frac{\lg \pi}{\pi} \\
\pi \lg e &> e \lg \pi \\
10^{\pi \lg e} &> 10^{e \lg \pi} \\
e^\pi &> \pi^e
\end{aligned}
$$