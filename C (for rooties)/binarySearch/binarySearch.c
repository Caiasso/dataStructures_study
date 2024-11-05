#include <stdio.h>
#include <stdlib.h>

int binarySearch(int arr[], int left, int right, int target);

int main()
{

    int array[] = {1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};

    int n = sizeof(array) / sizeof(array[0]);

    int target = 16;

    int result = (binarySearch(array, 0, n - 1, target));

    if(result != -1)
    {
        printf("The number %d was found at the index %d.", target, result);
    }
    else{
        printf("The number %d was not found in the array.", target);
    }
    
    return 0;
}


int binarySearch(int arr[], int left, int right, int target)
{
    if(left > right)
    {
        return -1;
    }

    int mid = left + (right - left) / 2;

    if(arr[mid] == target)
    {
        return mid + 1;
    }

    if(arr[mid] > target)
    {
        return binarySearch(arr, left, mid - 1, target);
    }

    else{
        return binarySearch(arr, mid + 1, right, target);
    }
}
