# Phonebook Management System

Write a C program that implements the phoebook management system with the following three
functions:

1. The function readin() reads a number of persons’ names and their corresponding
telephone numbers, passes the data to the caller via the parameter p, and returns the
number of names that have entered. The character '#'  is used to indicate the end of
user input.  
2. The function printPB() prints the phonebook information on the display. It will print the
message “Empty phonebook“ if the phonebook list is empty.
3. The function search() finds the telephone number of an input name target, and then
prints the name and telephone number on the screen. If the input name cannot be
found, then it will print an appropriate error message. 

The prototypes of the three functions are given below:

```c
void printPB(PhoneBk *pb, int size);
int readin(PhoneBk *pb);
void search(PhoneBk *pb, int size, char *target);
```

The structure definition for PhoneBk is given below:
  
```c
typedef struct {
   char name[20]; // a string
   int telno;    // an integer with 5 digits
} PhoneBk;
```

> Note that `scanf` leaves a newline in the buffer. By using `fgets` to remove the newline character afterwards, the following `fgets` will successfully work
> Also, `fgets` will read newlines. By doing `p = strchr(stringToScan, '\n'); *p = '\0'`, the newline character is replaced with an end-of-string character

# Solution

```c
#include <stdio.h>
#include <string.h>
#define MAX 100
typedef struct {
   char name[20];
   int telno;
} PhoneBk;
void printPB(PhoneBk *pb, int size);
int readin(PhoneBk *pb);
void search(PhoneBk *pb, int size, char *target);
int main() {
   PhoneBk s[MAX];
   char t[20], *p;
   int size=0, choice;
   char dummychar;
     
   printf("Select one of the following options: \n");
   printf("1: readin()\n");      
   printf("2: search()\n");
   printf("3: printPB()\n");
   printf("4: exit()\n");       
   do
{
      printf("Enter your choice: \n");
      scanf("%d", &choice);
      switch (choice)
{
         case 1:     
            scanf("%c", &dummychar);        
            size = readin(s);  
            break;
         case 2:  
            scanf("%c", &dummychar);   
            printf("Enter search name: \n");
            fgets(t, 20, stdin);   
            if (p=strchr(t,'\n')) *p= '\0';
            search(s,size,t);                    
            break;
         case 3:  
            printPB(s, size);
            break;          
      }
   } while (choice< 4);
   return 0; }
   
void printPB(PhoneBk *pb, int size)   {
    /* Write your code here */ 
    for (int i=0; i<size; i++) {
        printf("Name: %s, Telephone: %d\n", pb[i].name, pb[i].telno);
    }
}
int readin(PhoneBk *pb) {
    /* Write your code here */ 
    int count = 0;
    char dummyChars[20];
    char *p;
    
    while (1) {
        printf("Enter a name to enter, # to stop\n");
        
        fgets(pb[count].name, 20, stdin);
        if (p=strchr(pb[count].name,'\n')) {
            *p= '\0'; // Replace \n at the end of the string to \0
        }
        
        if (!strcmp(pb[count].name, "#")) {
            break;
        }
        
        printf("Enter a phone number\n");
        scanf("%d", &pb[count].telno);
        
        fgets(dummyChars, 20, stdin); // Remove trailing \n after scanf from stdin
        count++;
    }
    
    return count;
}
void search(PhoneBk *pb, int size, char *target) {
    /* Write your code here */ 
    int found = 0;
    for (int i=0; i<size; i++) {
        if (!strcmp(pb[i].name, target)) {
            found = 1;
            printf("Name: %s, Telno: %d\n", pb[i].name, pb[i].telno);
            break;
        }
    }
    
    if (!found) {
        printf("The user was not found\n");
    }
}
```