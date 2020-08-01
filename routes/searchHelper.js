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
}

/* Helper to generate aggregation conditions */
const generateRatingQueryArray = (input) => {
    let result = {};
    let arrayOfRatingFilters = [];
    for (rating of input['ratings']) {
        let currentRating = {};
        currentRating['overall_rating'] = rating; 
        arrayOfRatingFilters.push(currentRating);
    }
    result['$or'] = arrayOfRatingFilters;
    return arrayOfRatingFilters.length === 0 ? {} : result;
}

const generateMatch = (input) => {
    let result =  { $match :  {}}
    if ('ratings' in input) {
        result['$match'] = generateRatingQueryArray(input);
        return result;
    }
    return result;
} 

module.exports = {generateMatch, processInput};
