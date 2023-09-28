const palindromes = function (toTest) {
    let x = 0;
    let y = toTest.length - 1;
    toTest = toTest.toLowerCase();

    while (x <= y){
        toTest = toTest.toLowerCase();

        while (!((toTest.charCodeAt(x) > 47 && toTest.charCodeAt(x) < 58) || (toTest.charCodeAt(x) > 96 && toTest.charCodeAt(x) < 123))) {
            x++;
        } 
        while (!((toTest.charCodeAt(y) > 47 && toTest.charCodeAt(y) < 58) || (toTest.charCodeAt(y) > 96 && toTest.charCodeAt(y) < 123))){
            y--;
        }
      
        if (toTest[x] != toTest[y]){
            return false;
        }
        x++;
        y--;
    }

    return true;
 
}


// Do not edit below this line
module.exports = palindromes;
