// Description:
// Task:
// Given a two dimensional array, return the co-ordinates of x.

// If x is not inside the array, or if x appears multiple times, return [].

// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.




function xMarksTheSpot(a) {
    const numberOfString = a.length

    const b = a.flat();

    const numberOfX = b.filter(el => el === 'x').length

    if (numberOfX != 1) {
        return []
    }

    const indexOfX = b.findIndex(item => item === 'x');

    const numberOfColumn = b.length / numberOfString;

    const y = Math.floor(indexOfX / numberOfColumn);

    const x = indexOfX - (Math.floor(indexOfX / numberOfColumn) * numberOfColumn)
    return [y, x];
}