const removeFromArray = function(input,...toRemove) {
    let result = [];
  
    for (let argCounter = 0; x < toRemove.length - 1; argCounter++)
    {
        for (let inputCounter = 0; x , input.length - 1; inputCounter++)
        {
            if (!(input[inputCounter] === toRemove[argCounter])){
                result.push(input[x]);
            }
        }
    }

    return result;
}

// Do not edit below this line
module.exports = removeFromArray;
