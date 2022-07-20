const assertArraysEqual = function (actual, expected) {
    if (eqArrays(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`)
    }
};

const eqArrays = (arrayOne, arrayTwo) => {
    if (arrayOne.length === arrayTwo.length) {
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] !== arrayTwo[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

