// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' 
// and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



// SOLUTIONS:

function fakeBin(x){
    return [...x].map(a => a < 5 ? a = 0 : a = 1).join('')
}


function fakeBin(x) {
    return x.replace(/\d/g, a => a < 5 ? 0 : 1)
    }