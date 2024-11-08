#include <stdio.h>
#include <stdlib.h>

int fib(int n);

int main(int argc, char const *argv[])
{

    printf("%d", fib(5));

    return 0;
}

int fib(int n)
{
    if (n >= 3)
    {
        return fib(n-1) + fib(n-2);
    }

    else
    {
        return 1;
    }
}
