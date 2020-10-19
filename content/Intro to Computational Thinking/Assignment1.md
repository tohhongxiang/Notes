# Assignment 1

# Perfect Product

A perfect number is one that is equal to the sum of all its factors (excluding the number itself).
For example, 6 is perfect because its factors are 1, 2, and 3, and 6 = 1+2+3; but 24 is not perfect
because its factors are 1, 2, 3, 4, 6, 8, 12, but 1+2+3+4+6+8+12 = 36. Write a function that takes
a number, num, prints the perfrct numbers that are less than the number, and returns the product of
all perfect numbers. For example, if the number is 100, the function should return 168 (which is
6*28), as 6 and 28 are the only perfect numbers less than 100. If there is no perfect number for
the input number, then the function should return 1. Write the function in two versions. The
function perfectProd1() returns the result to the caller, while perfectProd2() passes the result
through the pointer parameter result. The function prototypes are given as follows: 

```c
int perfectProd1(int num);
void perfectProd2(int num, int *prod);
```

```c
#include <stdbool.h>
bool isPerfect(int n);

#include <stdio.h>
int perfectProd1(int num);
void perfectProd2(int num, int *prod);
int main()
{
   int number, result=0;      
       
   printf("Enter a number: \n");
   scanf("%d", &number);
   printf("Calling perfectProd1() \n");
   printf("perfectProd1(): %d\n", perfectProd1(number));
   
   printf("Calling perfectProd2() \n");
   perfectProd2(number, &result);
   printf("perfectProd2(): %d\n", result);
   return 0;
}
int perfectProd1(int num)
{
	/*edit*/
   /* Write your code here */
    int finalProd = 1;
    for (int i=1; i < num; i++) {
        if (isPerfect(i)) {
            printf("Perfect number: %d\n", i);
            finalProd *= i;
        }
    }
    
    return finalProd;
	/*end_edit*/
}
void perfectProd2(int num, int *prod)
{  
	/*edit*/
   /* Write your code here */
    *prod = 1;
    for (int i=1; i < num; i++) {
        if (isPerfect(i)) {
            printf("Perfect number: %d\n", i);
            *prod *= i;
        }
    }
	/*end_edit*/
}
bool isPerfect(int n) {
    int sum = 0;
    for (int i=1; i<n; i++) {
        if (n % i == 0) {
            sum += i;
        }
        
        if (sum > n) {
            return false;
        }
    }
    return sum == n;
}
```

# Count Odd Digits

Write a C function to count the number of odd digits, i.e. digits with values 1,3,5,7,9 in a positive
number (>0). For example, if number is 1234567, then 4 will be returned. Write the function in
two versions. The function countOddDigits1() returns the result, while the function
countOddDigits2() returns the result via the pointer parameter, count. The function
prototypes are given below:

```c
int countOddDigits1(int number);
void countOddDigits2(int number, int *count);
```

```c
#include <stdio.h>

int countOddDigits1(int num);
void countOddDigits2(int num, int *result);

int main()
{

    int number, result;

    printf("Enter a number: \n");
    scanf("%d", &number);

    printf("countOddDigits1(): %d\n", countOddDigits1(number));

    countOddDigits2(number, &result);
    printf("countOddDigits2(): %d\n", result);

    return 0;
}

int countOddDigits1(int number)
{
    /* Write your code here */
    int numberOfOddDigits = 0;

    while (number > 0)
    {
        int currentDigit = number % 10;

        if (currentDigit % 2 == 1)
        {
            numberOfOddDigits++;
        }

        number /= 10;
    }

    return numberOfOddDigits;
}

void countOddDigits2(int number, int *count)
{
    /* Write your code here */
    *count = 0;

    while (number > 0)
    {
        int currentDigit = number % 10;

        if (currentDigit % 2 == 1)
        {
            (*count)++;
        }

        number /= 10;
    }
}
```

# Symmetry 2D

Write the C function that takes in a square two-dimensional array of integer numbers M and the array
sizes for rows and columns as parameters, and returns 1 if M is symmetric or 0 otherwise. A square
two-dimensional matrix is symmetric iff it is equal to its transpose. It means that M[i][j] is equal
to M[j][i] for 0<=i<=rowSize and 0<=j<=colSize. For example, if rowSize and
colSize are 4, and M is {{1,2,3,4},{2,2,5,6},{3,5,3,7}, {4,6,7,4}}, then M will
be symmetric. The function prototype is given as follows:

```c
int symmetry2D(int M[][SIZE], int rowSize, int colSize); 
```

```c
#include <stdio.h>
#define SIZE 10
#define INIT_VALUE 999
int symmetry2D(int M[][SIZE], int rowSize, int colSize);
int main()
{
    int M[SIZE][SIZE], i, j, result = INIT_VALUE;
    int rowSize, colSize;

    printf("Enter the array size (rowSize, colSize): \n");
    scanf("%d %d", &rowSize, &colSize);
    printf("Enter the matrix (%dx%d): \n", rowSize, colSize);
    for (i = 0; i < rowSize; i++)
        for (j = 0; j < colSize; j++)
            scanf("%d", &M[i][j]);
    result = symmetry2D(M, rowSize, colSize);
    if (result == 1)
        printf("symmetry2D(): Yes\n");
    else if (result == 0)
        printf("symmetry2D(): No\n");
    else
        printf("Error\n");
    return 0;
}
int symmetry2D(int M[][SIZE], int rowSize, int colSize)
{
    /* Write your code here */
    for (int i = 0; i < rowSize; i++)
    {
        for (int j = 0; j < colSize; j++)
        {
            if (M[i][j] != M[j][i])
            {
                return 0;
            }
        }
    }

    return 1;
}
```

# Item Operations

Write a C program for the following functions that work on arrays which can store up to 10
integers:
1. 
```c
void insert(int max, int *size, int ar[], int num);
```

This function inserts the number num into the array ar where the pointer parameter
size stores the number of integers in ar. Before and after the function call, ar is an
array of integers in ascending order. max is the maximum number of integers which
can be stored in ar. This means that the function should issue an error message "The
array is full\n" and no insertion should be done if *size is equal to max
before insertion.

2. 
```c
void iremove(int *size, int ar[], int num);
```

This function removes the first appearance of the number num from the array ar
which has *size numbers in it. Before and after the function call, ar is an array of
integers in ascending order. Please note:
- After the number is removed, the message "The integer is removed\n"
should be displayed.
- If *size is equal to zero, the error message "The array is empty\n"
should be displayed.
- If num does not appear in ar, the function should issue an error message "The
number is not in the array\n".

3. 
```c
void initialize(int *size, int ar[]);
```

This function reads in a specified number of integers and uses insert() to store
them in ar. The pointer parameter size returns the actual number of integers stored in
ar, and ar will be an array of integers in ascending order.

4. 
```c
void display(int size, int ar[]);
```

This function prints the numbers stored in ar. size gives the number of integers
stored in ar.

```c
#include <stdio.h>
#define MAX 10
void initialize(int *size, int ar[]);
void insert(int max, int *size, int ar[], int num);
void iremove(int *size, int ar[], int num);
void display(int size, int ar[]);
int main()
{
    int option = 0;
    int num, ar[MAX], size = 0;

    printf("Please select an option: \n");
    printf("(1) Initialize the array \n");
    printf("(2) Insert an integer \n");
    printf("(3) Remove an integer \n");
    printf("(4) Display the numbers stored in the array \n");
    printf("(5) Quit \n");
    do
    {
        printf("Enter your choice: \n");
        scanf("%d", &option);
        switch (option)
        {
        case 1:
            initialize(&size, ar);
            break;
        case 2:
            printf("Enter an integer: \n");
            scanf("%d", &num);
            insert(MAX, &size, ar, num);
            break;
        case 3:
            printf("Enter the integer to be removed: \n");
            scanf("%d", &num);
            iremove(&size, ar, num);
            break;
        case 4:
            display(size, ar);
            break;
        default:
            break;
        }
    } while (option < 5);
    return 0;
}
void display(int size, int ar[])
{
    int i;

    printf("The %d numbers in the array: \n", size);
    for (i = 0; i < size; i++)
        printf("%d ", ar[i]);
    printf("\n");
}
void initialize(int *size, int ar[])
{
    int total, i, num;
    printf("Enter the total number of integers (MAX=%d): \n", MAX);
    scanf("%d", &total);
    (*size) = 0;
    printf("Enter the integers: \n");
    for (i = 0; i < total; i++)
    {
        scanf("%d", &num);
        insert(MAX, size, ar, num);
    }
}
void insert(int max, int *size, int ar[], int num)
{
    /* Write your code here */
    if (*size >= max)
    {
        printf("The array is full\n");
        return;
    }

    int insertionIndex = *size; // index to place the new element. Default at the end
    for (int i = 0; i < *size; i++)
    {
        if (num <= ar[i])
        {
            insertionIndex = i;
            break;
        }
    }

    for (int i = *size; i >= insertionIndex; i--)
    {
        ar[i] = ar[i - 1];
    }
    ar[insertionIndex] = num;

    (*size)++;
}

void iremove(int *size, int ar[], int num)
{
    /* Write your code here */
    if (*size == 0)
    {
        printf("The array is empty\n");
        return;
    }

    int indexToRemove = -1;
    for (int i = 0; i < *size; i++)
    {
        if (num == ar[i])
        {
            indexToRemove = i;
            break;
        }
    }

    if (indexToRemove == -1)
    {
        printf("The number is not in the array\n");
        return;
    }

    for (int i = indexToRemove + 1; i < *size; i++)
    {
        ar[i - 1] = ar[i];
    }

    ar[*size] = 0;

    printf("The integer is removed\n");
    (*size)--;
}
```