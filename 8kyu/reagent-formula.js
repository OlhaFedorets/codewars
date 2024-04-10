// DESCRIPTION:
// Now we will confect a reagent. 
//There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)


//SOLUTION:
function isValid (formula) {
    if(formula.includes(1) && formula.includes(2)){
      return false
    }
    if(formula.includes(3) && formula.includes(4)){
      return false
    }
    if((formula.includes(5) && !formula.includes(6)) || 
    (!formula.includes(5) && formula.includes(6))){
      return false
    }
    if(!formula.includes(7) && !formula.includes(8)){
      return false
    }
    return true
  }