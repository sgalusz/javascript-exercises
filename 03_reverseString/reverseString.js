const reverseString = function(toReverse) {
    let result = ""

    for (let x = toReverse.length-1; x >= 0; x--) {
        result += toReverse.charAt(x);
    }

    return result;
}


// Do not edit below this line
module.exports = reverseString;
