const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
  }
};



const countLetters = function (sentence) {
  const results = {}
  
  for (const letters of sentence) {
    if (results[letters]) {          
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
    
    
  } return results
} 

console.log(countLetters("Hello"))

// const countLetters = function (sentence) {
//   let results = {};

//   for (const characters of sentence) {
//       if (results[characters]) {
//           results[characters] += 1;
//       } else {
//           results[characters] = 1;
//       }
//       //console.log(characters);
//   }
//   return results;
// }




// const countOnly = function(allItems, itemsToCount) {
//   const results = {};

//   for (const item of allItems) {   
//     if (itemsToCount[item]) { 
//       if (results[item]) {
//         results[item] += 1;
//       } else {
//         results[item] = 1;
//       }
//     }
//     console.log(item);
//   }

//   return results;
// }