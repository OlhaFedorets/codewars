// DESCRIPTION:
// Create a function named divisors/Divisors that takes an integer n > 1 
//and returns an array with all of the integer's divisors(except for 1 and the number itself), 
//from smallest to largest. If the number is prime return the string '(integer) is prime' 

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"



//SOLUTION:

function divisors(integer) {
    let arr = [];
    for (let i = integer - 1; i > 1; i--) {
        if (integer % i == 0) {
            arr.push(integer / i)
        }
    }
    if (arr.length == 0) {
        return integer + " is prime"
    } return arr
};