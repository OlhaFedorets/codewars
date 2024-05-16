// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "




//SOLUTIONS:

function doubleChar(str) {
    let arr = str.split('')
    let newStr = [];
    for (let i = 0; i < arr.length; i++) {
        newStr.push(arr[i] + arr[i])
    }
    return newStr.join('')
}


function doubleChar(str) {
    return str.split('').map((i) => i + i).join('')
}