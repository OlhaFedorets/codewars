// DESCRIPTION:
// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, 
// purchases of 4 or more litres get a discount of 10 cents per litre, a
// nd so on every two litres, up to a maximum discount of 25 cents per litre. 
// But total discount per litre cannot be more than 25 cents. 
// Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents




//SOLUTION:

function fuelPrice(litres, pricePerLitre) {
    let cost = pricePerLitre * litres
     if (litres >= 10) {
      return parseFloat((litres * (pricePerLitre - 0.25)).toFixed(2))
    } else if (litres >= 8) {
      return parseFloat((litres * (pricePerLitre - 0.20)).toFixed(2))
    } else if (litres >= 6) {
      return parseFloat((litres * (pricePerLitre - 0.15)).toFixed(2))
    } else if (litres >= 4) {
      return parseFloat((litres * (pricePerLitre - 0.1)).toFixed(2))
    } else if (litres >= 2) {
      return parseFloat((litres * (pricePerLitre - 0.05)).toFixed(2))
    }
  }