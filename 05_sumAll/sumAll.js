const sumAll = function(number1, number2) {
    let result = 0;

    if (isInvalid(number1,number2)){
        return 'ERROR';
    } else if (number1 > number2) {
        while (number1 >= number2){
            result += number2;
            number2++;
        }
    } else  while (number1 <= number2) {
        result += number1;
        number1++;
    }

    return result;

}

const isInvalid = function(number1,number2)
{
    if (number1 < 0 || number2 < 0){
        return true;
    } else  if (typeof number1 != "number" || typeof number2 != "number"){
        return true;
    }
    return false;
}
    


// Do not edit below this line
module.exports = sumAll;
