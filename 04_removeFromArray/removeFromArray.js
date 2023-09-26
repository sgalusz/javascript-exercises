const removeFromArray = function(input,...toRemove) {
    let result = input;
   
    for (let argCounter = 0; argCounter < toRemove.length; argCounter++)
    {
       result = result.filter((check) => check !== toRemove[argCounter]);
    }
 
    return result;
}

// Do not edit below this line
module.exports = removeFromArray;
