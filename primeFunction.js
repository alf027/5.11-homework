var test = 54;

var prime = function(input) {
    var testArr = [];
   

    for (var i = 2; i <= (input /2 ); i++) {
        testArr[i] = i;
    }
    
    for (var r = 2; r < testArr.length; r++) {
        if (input % testArr[r] == 0) {
            return 'not prime';
        }
    }
    return 'prime'

}

console.log(prime(test));

