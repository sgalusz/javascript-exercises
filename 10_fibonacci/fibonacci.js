const fibonacci = function(input) {
    if (input < 0){
        return "OOPS"
    }

    let result = 1;
    let previous = 0;
    let temp = 0;
    
    for (let x = 1; x < input; x++) {
        temp = result;
        result += previous;
        previous = temp;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
