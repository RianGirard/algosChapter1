 /*
 // Sigma
 function sigma(num) {
    var sum = 0;
    for(var i=1; i<=num; i+=1) {
        sum = sum + i;
        }
    return sum;
    }

var completedSum = sigma(1000);
console.log(completedSum);
*/
/* 
// Factorial
function factorial(num) {
    var product = 1;
    for (var i=1; i<=num; i+=1){
        product = product * i;
    }
    return product;
}

var completedProd = factorial(-5);
console.log(completedProd);
*/
/*
//Better Threes and Fives
function BetterThreesFives(start, end) {
    var sum = 0;
    for (var i=start; i<=end; i+=1) {
        if ((i % 3 == 0 || i % 5 == 0) && (i % 15 !== 0)) {
            sum = sum + i;
        }
    }
    return sum;
}
var finalSum = BetterThreesFives(100, 110);
console.log(finalSum);
*/
/*
// Generate Coin Change
function generateCoinChange(cents) {
    var moneyLeft = cents;

    var dollars = Math.floor(moneyLeft/100);
    console.log("Dollar coins: ", dollars);
    moneyLeft = moneyLeft - (dollars * 100);
    
    var halfDollars = Math.floor(moneyLeft/50);
    console.log("Half-Dollar coins: ", halfDollars);
    moneyLeft = moneyLeft - (halfDollars * 50);
    
    var quarters = Math.floor(moneyLeft/25);
    console.log("Quarters: ", quarters);
    moneyLeft = moneyLeft - (quarters * 25);
    
    var dimes = Math.floor(moneyLeft/10);
    console.log("Dimes: ", dimes);
    moneyLeft = moneyLeft - (dimes * 10);
    
    var nickels = Math.floor(moneyLeft/5);
    console.log("Nickels: ", nickels);
    moneyLeft = moneyLeft - (nickels * 5);
    
    var pennies = moneyLeft;
    console.log("Pennies: ", pennies);
    
    var sum = dollars + halfDollars + quarters + dimes + nickels + pennies;
    return sum;
}
var smallestNumber = generateCoinChange(99)
console.log("Smallest number of coins: ", smallestNumber);
*/

//Statistics to Doubles
/*function die() {
    var x = Math.floor(( Math.random() * 6) + 1);
    return x;
}
var sum = 0;
var min = 6;
var max = 1;
var avg = 0;
var numRolls = 0; 
for (var i = 1; i<1000; i += 1) {
    var die1 = die();
    console.log("First roll is: ", die1)
    var die2 = die();
    console.log("Second roll is: ", die2)
    numRolls = numRolls + 1;
    console.log("Roll No.: ", numRolls)
    sum = sum + die1 + die2;
    if (die1 < min) {
        min = die1;
    }
    if (die2 < min) {
        min = die2;
    };
    if (die1 > max) {
        max = die1;
    }
    if (die2 > max) {
        max = die2;
    };

    if (die1 == die2) {
        console.log("Doubles were rolled on roll number: ", numRolls);
        console.log("The min value rolled was: ", min);
        console.log("The max value rolled was: ", max);
        console.log("The average value rolled was: ", sum/2/numRolls)
        break;
    }
}
*/
/*
// Sum to One Digit (works as long as num == +integer)
function sumToOne(num) {
    var sum = 0;
    while (Math.floor(num) !== num){
        num = num * 10;
    } //while loop to change any decimals to an integer
    num = Math.abs(num); //change any negative number to a positive
    while (num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num/10);
    } // modulus 10 chops off the tail digit and adds it to the sum; num becomes reduced to drop the tail digit;
    return sum;
}
console.log(sumToOne(11.5));
*/
/*
// Fibonacci

function Fib(n) {
    var n1 = 99;
    var n2 = 99;
    var nexTerm = 99;
    if (n == 0) {    // initial Fib sequence number
        var sum = 0;        
    }
    else if (n == 1) {  // initial Fib sequence number
        var sum = 1;
    }
    else {
        n1 = 0;  // start loop, set initial sequence sums
        n2 = 1; 
        var sum = 1;
        for (var i = 2; i < n; i += 1) {  // continue loop so long as i < desired n value
            var nexTerm = n1 + n2;  // nexTerm will be the "next" iteration we add to the sum; the number 3 will be the first successful loop
            sum = nexTerm + n2; 
            n1 = n2;  // move the values forward one iteration and continue loop as appropriate
            n2 = nexTerm;
        }
    }
    console.log("n1, n2, nexterm: ", n1, n2, nexTerm)
    return sum;
}
var n = 49;  // desired sequence number
var Fibonacci = Fib(n);
console.log("Fibonacci sum for", n, "is: ", Fibonacci);
*/

// Last Digit of A to the B (a^b)
/*
function lastDigitAtoB(a,b) {
    var product = 1;
    for (var i = 0; i < b; i++){
        var product = product * a;
    }
    console.log("The number", a, "to the power of", b, "is", product);
    var lastDig = product % 10;
    return lastDig;
}
var answer = lastDigitAtoB(11,11);
console.log("...therefore the final digit is", answer);
*/

// Clock Hand Angles

function clockHandAngles(seconds) {  
    if (seconds > 86400){  // the time and angle calculations work past 24 hours, but the AM/PM assignments and hour == 12 assignments get a little trickier; 
        console.log(`Please enter a value less than 86,400 seconds, which means less than a full day.`);
        return;
    }
    let secs = (seconds % 60);
    console.log(`At ${seconds} seconds after midnight: \n\tThe second hand will be at ${secs} tics and ${secs * 6} degrees from 12AM on the clock.`);
    let mins = 0;
    mins = Math.floor((seconds / 60) % 60); 
    console.log(`\tThe minute hand will be at ${mins} tics and ${mins * 6} degrees from 12AM on the clock.`);
    let hors = 0;
    let horsFloor = Math.floor((seconds / 3600) % 12);
    let horsCeil = Math.ceil((seconds / 3600) % 12);
    let horsDegr = (horsFloor * 30) + (mins / 60 * 30); // (number of horsFloor * number of degress per hour) + (fraction of minutes to hour * number of degress per hour)
    var ampm = "AM";
    if (seconds/43199 > 1) {
        ampm = "PM";
        if (horsFloor == 0) {  // Deal with fact that horsFloor becomes equal to zero at noontime; just add 12 back when this is case. 
            horsFloor = horsFloor + 12;
        }
    }
    console.log(`\tThe hour hand will be between ${horsFloor} and ${horsCeil}, showing ${horsDegr} degrees from 12AM on the clock.`);
    console.log(`\t${horsFloor}:${mins}:${secs}${ampm}`)
}
clockHandAngles(65413);