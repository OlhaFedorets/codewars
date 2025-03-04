// DESCRIPTION:
// Functional closures can get overly attached. 
//Set them straight!

// Why doesn't greetAbe() actually greet Abe?



//SOLUTION:

const greetAbe = () => {
    let name = 'Abe'
    return 'Hello, ' + name + '!'
}

const greetBen = () => {
    const name = 'Ben'
    return 'Hello, ' + name + '!'
}