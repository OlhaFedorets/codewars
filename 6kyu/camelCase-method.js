// Description:
// Write a method (or function, depending on the language) that converts a string to camelCase, 
//that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"




// SOLUTIONS: 

String.prototype.camelCase = function () {
    let arr = this.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/^[a-z]/, u => u.toUpperCase())
    }
    return arr.join('')
}


String.prototype.camelCase = function () {
    return this.split(' ')
        .map(el => el.charAt(0).toUpperCase() + el.slice(1))
        .join('')
}