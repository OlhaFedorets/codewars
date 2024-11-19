// Description:
// Create a parser to interpret and execute the Deadfish language.

// Deadfish operates on a single value in memory, which is initially set to 0.

// It uses four single-character commands:

// i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.

// Examples
// Program "iiisdoso" should return numbers [8, 64].
// Program "iiisdosodddddiso" should return numbers [8, 64, 3600].





//SOLUTION:

function parse(data) {
    let arr = []
    let acc = 0
    data.split('')
        .map((val) => val == 'i' ? acc += 1
            : val == 'd' ? acc -= 1
                : val == 's' ? acc = acc * acc
                    : val == 'o' ? arr.push(acc)
                        : acc = acc)
    return arr
} 