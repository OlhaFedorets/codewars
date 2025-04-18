//DESCRIPTION:

// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


//SOLUTION:

function XO(str) {
    const o = str.match(/o/gi,'o') || 0
    const x = str.match(/x/gi,'x') || 0
    
    return o.length === x.length
}