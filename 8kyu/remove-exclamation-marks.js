//DESCRIPTION:
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//SOLUTION:
function removeExclamationMarks(s) {
    let word = Array.from(s);
      for (let i = 0; i < s.length; i++) {
      if (word[i] == '!') {
        word[i] = ''
      }
   } return word.join('');
  }