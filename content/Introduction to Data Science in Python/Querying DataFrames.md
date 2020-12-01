# Querying DataFrames

Boolean mask
- An array which can be of one dimension (like a Series) or 2 dimensions (dataframe), each value is either true or false. The array is overlaid on top of the data structure we are querying. Any cell aligned with `true` will be admitted into our final result, and any cell aligned with `false` will not

```py
df['chance of admit'] > 0.7
```

Pandas looks at the dataframe's `chance of admit` column, and checks if it is greater than 0.7, returning the boolean value

```py
df.where(df['chance of admit'] > 0.7)
```

returns all rows of `df` where `chance of admit > 0.7`. Howegver rows which did not meet condition will have `NaN` data. To drop those,

```py
df.where(df['chance of admit'] > 0.7).dropna()
```

To do `where` and `dropna` at once, we can use

```py
df[df['chance of admit'] > 0.7]
```

For multiple conditions, `df[(df['chance of admit'] > 0.7) and (df['toefl score'] > 100)]` will fail. We need to use the `&` operator to do bitwise AND on the 2 boolean masks

```py
df[(df['chance of admit'] > 0.7) & (df['toefl score'] > 100)]
```

> Ensure that each condition is wrapped by brackets

`df[df['chance of admit'] > 0.7 & df['toefl score'] > 100]`. Pandas tries to `0.7 & df['toefl score']`, which causes an error. You can also, instead of using `>`, use pandas' built-in `gt` (greater than) function `df[df['chance of admit'].gt(0.7) & df['toefl score'].gt(100)]`

# Multi indexing
```py
df.set_index(['STNAME', 'CTYNAME'])
```

Set indexes based on `df['STNAME']`, then `df['CTYNAME']`. This is called **hierarchical indexing**

And to get a specific index, `df.loc['Michigan', 'Washtenaw County']`

# Managing missing data

```py
df.dropna()
```
Drops all `na` values

```py
df.fillna(value_to_fill)
```
Fills up `na` values

`ffill` (forward fill) fills missing data with data from previous row,
`bfill` (backward fill) fills missing data with data from the next row