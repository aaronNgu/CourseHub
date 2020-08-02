/* Helper to process inputs */
// removes non aplhanumerics and spaces 
const processSearchString = (string) => {
    // remove non alphanumeric 
    string = string.replace(/[^a-z0-9+]+/gi, '');
    string = string.toUpperCase();
    // remove space 
    string = string.replace(/\s/g, '')
    return string;
};

const processArray = (arrayString) => {
    try {
        let result = JSON.parse(arrayString);
        return Array.isArray(result) ? result : [];
    } catch (err) {
        return [];
    }
};

const processInput = (req) => {
    let result = {};
    if (req.query.searchString) {
        let string = processSearchString(req.query.searchString);
        if (string.length > 0) {
            result['searchString'] = string;
        }
    }
    if (req.query.years) {
        let years = processArray(req.query.years);
        result['years'] = years;
    }
    if (req.query.ratings) {
        let ratings = processArray(req.query.ratings);
        result['ratings'] = ratings;
    }
    return result;
};

/* Helper to generate aggregation conditions */
const generateRatingQueryArray = (input) => {
    let arrayOfRatingFilters = [];
    for (rating of input['ratings']) {
        let currentRating = {};
        currentRating['overall_rating'] = rating; 
        arrayOfRatingFilters.push(currentRating);
    }
    return arrayOfRatingFilters;
};

const generateRatingAndYearQuery = (input) => {
    let result = {};
    let ratingsArray = generateRatingQueryArray(input);
    if (ratingsArray.length !==  0) {
        result['$or'] = ratingsArray; 
    }
    return result;
};

const generateMatch = (input) => {
    let result =  { $match :  {}}
    if ('ratings' in input) {
        result['$match'] = generateRatingAndYearQuery(input);
        return result;
    }
    return result;
}; 

module.exports = {generateMatch, processInput};
