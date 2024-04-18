// DESCRIPTION:
// Given a logarithm base X and two values A and B, 
//return a sum of logratihms with the base X: 
// log log x A+log x B

//SOLUTION:

function logs(x, a, b) {
    return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x)
}