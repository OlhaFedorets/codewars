// DESCRIPTION:
// A triangle is called an equable triangle if its area equals its perimeter. 
//Return true, if it is an equable triangle, else return false. 
//You will be provided with the length of sides of the triangle. 
//Happy Coding!




//SOLUTION:

function equableTriangle(a, b, c) {
    let p = a + b + c;
    let s = Math.sqrt(p / 2 * (p / 2 - a) * (p / 2 - b) * (p / 2 - c))
    return p === s
}