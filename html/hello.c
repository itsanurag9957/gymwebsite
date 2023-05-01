#include<stdio.h>


// Q.no. 3 write a program to calculate sum and avg using pointers and functions.//

void sumAndAvg(int a , int b , int *sum , int *avg);

int main(){

    int i , j, , sum ;
    float avg ;
    i = 3 ;
    j = 6 ;

    sumAndAvg(i, j, &sum , &avg);
    printf("The value of sum is %d \n ", sum);
    printf("The value of avg is %d \n ", avg);


    return 0 ;
}
void sumAndAvg(int a , int b , int *sum , int *avg){
    *sum = a + b ;
    *avg = (float)(*sum)/2 ;

}
