

function fibonacci (n, returnList) {

    const arr = [1,1]

    for (i = 2; i < n; i++) {

        let newNum = arr[i-1] + arr[i-2];
        arr.push(newNum);
    };

    if (returnList) {

        return arr;

    } else if (!returnList) {

        return arr[n-1];

    };
};



function fibonacciRecursive (n) {

    if (n === 1 || n === 2) return 1;

    return fibonacci(n - 2) + fibonacci(n - 1);
};


