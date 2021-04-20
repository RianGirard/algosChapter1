var sum = 0;
for (var i = 0; i<256; i += 1) {
    sum = sum + i;
    // console.log(i, sum);
}

var number = 0;
function largest(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

number = largest([1, 3, 5, 7]);  // calls function to return the largest number in the array
// console.log(number);

var arr = [];
for (var i = 0; i < 256; i += 1) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
// console.log(arr);

function review (arr, Y) {
    var sum = 0;
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] > Y) {
            sum = sum + 1;
        }
    }
    return sum;
}
var example = review([1,3,5,7,9], 2);
// console.log(example);

// Get and Print Average
function getaverage(arr) {
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i +=1) {
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
var average = getaverage([-1, -3, -5, -7, 9101]);
// console.log(average);


// Square the Values
function squareValues(arr){
    for (var i = 0; i < arr.length; i += 1){
        var num = arr[i] * arr[i];
        arr[i] = num;
    }
    return arr;
}
// console.log(squareValues([-1,-3,-5,7,9, 1111]));


// Shift Array Values - given an array, move all values forward one index, dropping the first and put 0 value at end
function shiftValues(arr) {
    for (var i = 0; i < arr.length; i += 1){
        if (i == arr.length - 1){
            arr[i] = 0;
        }
        else arr[i] = arr[i + 1]; 
    }
    return arr;
}
// console.log(shiftValues([-1, 3, -5, 7, 9, 1343]));
