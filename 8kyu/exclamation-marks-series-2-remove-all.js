// DESCRIPTION:
// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"





//SOLUTION:

function remove (string) {
    let newStr = string.split('')
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[newStr.length-1] == "!") {
        newStr.pop()
      }
    } 
    return newStr.join('');
  }