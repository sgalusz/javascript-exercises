const repeatString = function(toRepeat,repeatAmount) {
    let output ="";
    if(repeatAmount < 0){
        return 'ERROR'
    }
    else for (let x = 1; x <= repeatAmount; x++){
        output += toRepeat;
    }
    return output;

}
// Do not edit below this line
module.exports = repeatString;
