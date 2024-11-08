#include <stdio.h>
#include <stdlib.h>

int fact(int n);

int main(int argc, char const *argv[])
{
    int factorial = fact(4);

    printf("%d", factorial);

    return 0;
}

int fact(int n)
{
    if (n <= 1)
    {
        return 1;
    }
    else
    {
        return n * fact(n - 1);
    }
}
