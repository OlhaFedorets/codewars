// Description:
// In Russia regular bus tickets usually consist of 6 digits. 
// The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. 
// Write a function to find out whether the ticket is lucky or not. 
// Return true if so, otherwise return false. Consider that input is always a string. 
// Watch examples below.

// isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
// isLucky('12341234') => false // Only six-digit numbers allowed :(
// isLucky('12a21a') => false // Letters are not allowed :(
// isLucky('100200') => false // :(
// isLucky('22') => false // :(
// isLucky('abcdef') => false // :(






//SOLUTION:

function isLucky(ticket) {
    if (isDigitsOnly = !/^\d+$/.test(ticket)) {
        return false
    } else if (ticket.length != 6) {
        return false
    } else {
        const arr = ticket.split('').map(Number)
        return arr[0] + arr[1] + arr[2] === arr[3] + arr[4] + arr[5] ? true : false
    }
}