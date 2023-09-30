const getTheTitles = function(books) {
    let results = [];

    for (let x = 0; x < books.length; x++){
        results.push(books[x].title);
    }

    return results

}

// Do not edit below this line
module.exports = getTheTitles;
