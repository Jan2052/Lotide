const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
  }
};


// keyarr = Object.keys(bestTVShowsByGenre)
// //keyarr = [sci_fi, comedy, drama]
// valuearr = Object.values(bestTVShowsByGenre)
// //Using .find()
// console.log(Object.keys(bestTVShowsByGenre).find(key => bestTVShowsByGenre[key] === value))

// // Using for...in
// for(let i in keyarr) {
//     console.log(i)
//     console.log(keyarr[i])
//     console.log(bestTVShowsByGenre[keyarr[i]])
//     if(bestTVShowsByGenre[keyarr[i]] === value) {
//         console.log(keyarr[i])
//         return keyarr[i]
//     }
// }

// // Using for...of
// for(let x of keyarr) {
//     if(bestTVShowsByGenre[x] === value) {
//         console.log(x)
//         return x
//     }
// }

const findKeyByValue = function (bestTVShowsByGenre, value) {
  for (const [genre, tvShow] of Object.entries(bestTVShowsByGenre)) {
    if (tvShow === value) {
      return genre
    }
  }
  return undefined
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

//object.keys()
