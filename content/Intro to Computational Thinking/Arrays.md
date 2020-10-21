# Finding an element within a non-sorted array

Write a function `findAr1D()` that returns the subscript of the first appearance
of a target number in an array. For example, if `ar = { 3,6,9,4,7,8 }`, then `findAr1D(6,ar,3)`
will return 0 where 6 is the size of the array and 3 is the number to be found, and
`findAr1D(6,ar,9)` will return 2. If the required number is not in the array, the function
will return ‐1. The function prototype is given as follows:  

```c
int findAr1D(int size, int ar[ ], int target);   
```

```c
#include <stdio.h>
#define INIT_VALUE -1000
int findAr1D(int size, int ar[], int target);  
int main()   
{
  int ar[20];
  int size, i, target, result = INIT_VALUE;
    
  printf("Enter array size: \n");
  scanf("%d", &size);   
  printf("Enter %d data: \n", size);
  for (i=0; i<=size-1; i++)   
      scanf("%d", &ar[i]);
  printf("Enter the target number: \n");
  scanf("%d", &target);    
  result = findAr1D(size, ar, target);
  if (result == -1)
      printf("findAr1D(): Not found\n");
  else  
      printf("findAr1D(): %d", result);
  return 0;
}
int findAr1D(int size, int ar[], int target)     
{
  /* Write your code here */
  int targetIndex = -1;
  for (int i=0; i < size; i++) {
      if (target == ar[i]) {
          targetIndex = i;
      }
  }
  return targetIndex;
}
```


# Array Row\Column Swapping

Write the code for the following matrix functions:

```c
void swap2Rows(int ar[][SIZE], int r1, int r2);
/* the function swaps the row r1 with the row r2 of a 2‐dimensional array ar */
void swap2Cols(int ar[][SIZE], int c1, int c2);
/* the function swaps the column c1 with the column c2 of a 2‐dimensional array ar
*/
```

You may assume that the input matrix is a 3x3 matrix, i.e. SIZE = 3.

```c
#include <stdio.h>
#define SIZE 3
void swap2Rows(int ar[][SIZE], int r1, int r2);
void swap2Cols(int ar[][SIZE], int c1, int c2);
void display(int ar[][SIZE]);
int main()
{
   int array[SIZE][SIZE];
   int row1, row2, col1, col2;    
   int i,j;        
   int choice;
    
   printf("Select one of the following options: \n");
   printf("1: getInput()\n");      
   printf("2: swap2Rows()\n");
   printf("3: swap2Cols()\n");
   printf("4: display()\n");
   printf("5: exit()\n");  
   do {
      printf("Enter your choice: \n");
      scanf("%d", &choice);
      switch (choice) {
         case 1:  
            printf("Enter the matrix (3x3): \n");
            for (i=0; i<SIZE; i++)
               for (j=0; j<SIZE; j++)
                  scanf("%d", &array[i][j]);  
            break;
         case 2:   
            printf("Enter two rows for swapping: \n");
            scanf("%d %d", &row1, &row2);     
            swap2Rows(array, row1, row2);
            printf("The new array is: \n");       
            display(array);
            break;
         case 3:   
            printf("Enter two columns for swapping: \n");       
            scanf("%d %d", &col1, &col2);
            swap2Cols(array, col1, col2);
            printf("The new array is: \n");       
            display(array);
            break;
         case 4:   
            display(array);
            break;
      }
   } while (choice < 5);  
   return 0;
}

void display(int ar[][SIZE])
{
   int l,m;
   for (l = 0; l < SIZE; l++) {
      for (m = 0; m < SIZE; m++)
         printf("%d ", ar[l][m]);
      printf("\n");
   }
}

void swap2Rows(int ar[][SIZE], int r1, int r2)
{
   /* Write your code here */
   for (int i=0; i<SIZE; i++) {
       
   int temp = ar[r1][i];
   ar[r1][i] = ar[r2][i];
   ar[r2][i] = temp;
   }
}

void swap2Cols(int ar[][SIZE], int c1, int c2)
{
   /* Write your code here */
   for (int i=0; i<SIZE; i++) {
       
   int temp = ar[i][c1];
   ar[i][c1] = ar[i][c2];
   ar[i][c2] = temp;
   }
}
```