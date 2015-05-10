var input = 63

var fibonacci = function(input) {
    var fib = [1,1]
    var nextNum = 0;

    while (nextNum < input) {
        var indexOne = fib.length - 2;
        var indexTwo = fib.length - 1;

        nextNum = fib[indexOne] + fib[indexTwo];

        if (nextNum < input) {
            fib[fib.length] = nextNum;
        };
    };
    return fib;

};

console.log(fibonacci(input));