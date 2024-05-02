// DESCRIPTION:
// Each number should be formatted that it is rounded to two decimal places. 
// You don't need to check whether the input is a valid number because only valid numbers are used in the tests.




//SOLUTION:

function twoDecimalPlaces(n) {
    return +n.toFixed(2)
}



function twoDecimalPlaces(n) {
    return +(Math.round(n * 100) / 100).toFixed(2);
}