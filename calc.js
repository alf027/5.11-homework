var calculate = {
    sum: function(arr) {
        var result = 0;
        var length = arr.length;

        for (var i = 0; i < length; i++) {
            result += arr[i];
        }
        return result;
    },

    median: function(arr) {
        var result = 0;
        var average = 0;
        var index = 0;
        var firstMedian = 0;
        var secondMedian = 0;
        var reverse = [];
        length = arr.length;


        if (length % 2 == 0) {
            index = (length / 2) - 1
            firstMedian = arr[index];
            reverse = arr.reverse();   
            secondMedian = reverse[index];

            result = (firstMedian + secondMedian) / 2;
            return result;         
        } else {
            index = ((length / 2) + .5) -1 ;
            result = arr[index];
            return result;
        }

    },

    average: function(arr) {
        var result = 0;
        var length = arr.length;
        for (var i = 0; i < length; i++) {
                result += arr[i];
            }
        result = result / length;
        return result;
    },

    logAll: function(arr) {
        var result = "";
        for (var i = 0; i < arr.length; i++) {
        result = result +  arr[i] + ' ';

        }
        return result;
    },

    subtract: function(arr) {
        var result = 0;
        var length = arr.length;

        for (var i = 0; i < length; i++) {
            result -= arr[i];
        }
        return result;
    },

    largest: function(arr) {
        var largest = 0
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
        return largest;

    },

    smallest: function(arr) {
        var smallest = arr[0]
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        }
        return smallest;

    }


   

}


console.log(calculate.smallest([5,6,9,11,4,7,13]) + ' smallest');
console.log(calculate.average([5,6,9,11,4,7,13]) + ' average');
console.log(calculate.largest([5,6,9,11,4,7,13]) + ' largest');
console.log(calculate.subtract([5,6,9,11,4,7,13]) + ' subtract');
console.log(calculate.median([5,6,9,11,4,7,13]) + ' median');
console.log(calculate.logAll([5,6,9,11,4,7,13]) + ' logAll');
console.log(calculate.sum([5,6,9,11,4,7,13]) + ' sum');

