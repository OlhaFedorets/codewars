// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.






// solutions:

function getCount(str) {
    let vow = ['a', 'e', 'i', 'o', 'u']
    let arr = str.split('')
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        count += vow.filter(el => el === arr[i]).length
    }
    return count
}




function getCount(str) {
    let arr=str.split('')
    let vow=['a', 'e', 'i', 'o', 'u']
    return vow.map(el=> arr.filter(v=>el===v).length).reduce((a,b)=>a+b,0)
}


function getCount(str) {
    return (str.match(/[aeiou]/gi) || []).length
}