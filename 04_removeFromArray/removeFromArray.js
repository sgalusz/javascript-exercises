const removeFromArray = function(input,toRemove1,toRemove2 = []) {
    let result =[];
    if (toRemove2 === "")
    {
        for (let x = 0; x < input.length; x++){
        if (!(input[x] === toRemove1)){
            result.push(input[x]);
        }
        }
    } else {
        for (let x = 0; x < input.length; x++){
            if (!(input[x] === toRemove1 || input[x] === toRemove2)){
                result.push(input[x]);
            }
            }
    }

    return result;
}

// Do not edit below this line
module.exports = removeFromArray;
