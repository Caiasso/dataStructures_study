#include <stdio.h>
#include <stdbool.h>

void bubbleSort(int arr[], int n);

int main()
{
    int array[] = {7, 3, 5, 6, 8, 1, 2, 4, 10, 9};

    int n = sizeof(array) / sizeof(array[0]);

    bubbleSort(array, n);

    for(int i = 0; i < n; i ++)
    {
        printf("%d, ", array[i]);
    }

    return 0;
}

void bubbleSort(int arr[], int n)
{
    bool changed = true;
    int temp = 0;

    while (changed)
    {
    for(int i = 0; i < n - 2; i++)
    {
        for(int j = 0; j < n - i - 1; j++)
        {
            changed = false;

            if(arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }   
    }
    
}