#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int binarySearch(int array[], int left, int right, int target);

void bubbleSorting(int arr[], int n);

int main()
{

    int array[] = {1, 6, 3, 9, 10, 4, 5, 7, 2, 8};
    int n = sizeof(array) / sizeof(array[0]);
    int target = 9;

    printf("Original Array: \n");
    for (int i = 0; i < n; i++)
    {
        printf("%d, ", array[i]);
    }
    printf("\n\n");

    bubbleSorting(array, n);

    int result = binarySearch(array, 0, n - 1, target);

    printf("Sorted Array: \n");
    for (int i = 0; i < n; i++)
    {
        printf("%d, ", array[i]);
    }

    printf("\n\n");
    if (result != -1)
    {
        printf("The number %d was found at the %d index of the array.", target, result);
    }
    else
    {
        printf("The number %d was not found in the array.", target);
    }

    return 0;
}

void bubbleSorting(int arr[], int n)
{
    bool changed = true;
    int temp = 0;

    while (changed)
    {
        changed = false;
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    changed = true;

                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}

int binarySearch(int array[], int left, int right, int target)
{
    if (left > right)
    {
        return -1;
    }

    int middle = left + (right - left) / 2;

    if (target == array[middle])
    {
        return middle + 1;
    }

    if (target > array[middle])
    {
        return binarySearch(array, middle + 1, right, target);
    }

    else
    {

        return binarySearch(array, left, middle - 1, target);
    }
}