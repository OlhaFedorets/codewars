// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]





//SOLUTION:

function maps(x) {
    let newNum = [];
    for (let i = 0; i < x.length; i++) {
        newNum[i] = x[i] * 2
    } return newNum
}