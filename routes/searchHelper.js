/* Helper to process inputs */
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
    if(req.query.page) {
        result['page'] = req.query.page;
    }
    return result;
};

/* Helper to generate aggregation conditions */
const generateRatingQueryArray = (input) => {
    let arrayOfRatingFilters = [];
    if ('ratings' in input) {
        for (rating of input['ratings']) {
            let currentRating = {};
            currentRating['overall_rating'] = rating; 
            arrayOfRatingFilters.push(currentRating);
        }
    }
    return arrayOfRatingFilters;
};

const generateYearQueryArray = (input) => {
    let arrayOfYearFilters = [];
    if ('years' in input) {
        for(year of input['years']) {
            let currentYear = {};
            currentYear['year'] = year;
            arrayOfYearFilters.push(currentYear);
        }
    }
    return arrayOfYearFilters;
};

const generateRatingAndYearQuery = (input) => {
    let result = {};
    let ratingsArray = generateRatingQueryArray(input);
    let yearsArray = generateYearQueryArray(input);
    let ratingsQuery = {};
    if (ratingsArray.length !==  0) {
        ratingsQuery['$or'] = ratingsArray; 
    }

    let yearsQuery = {};
    if (yearsArray.length !== 0) {
        yearsQuery['$or'] = yearsArray;
    }

    if (yearsArray.length !== 0 && ratingsArray.length !== 0) {
        result['$and'] = [yearsQuery, ratingsQuery];
        return result;
    }
    return yearsArray.length !== 0 ? yearsQuery : ratingsQuery;
};

const generateMatch = (input) => {
    let result =  { $match :  {}}
    result['$match'] = generateRatingAndYearQuery(input);
    return result;
}; 

/* Helper to handle pagination */
const getNumberOfPages = (array) => {
    let count = array.length;
    return count % 10 === 0 ?  Math.floor(count/10):  Math.floor(count/10) + 1;
};

/* returns 10 elements that are 'page'*10 away from the start of array*/
const get10NthFromStart = (array , page) => {
    // return the first tenth element if page is more then length 
    if (array.length / 10 < page) {return array.splice(0, 10)};
    return array.splice(page * 10, 10);
};

/* Helper to generate projection */
const generateCourseProjections = () => {
    return {'$project': {'overall_rating': 1, 'description': 1, 'num_reviews': 1}};
};

/* Helper to generate searchString conditions */
const generateSearchQuery = (input) => {
    let result = {};
    if ('searchString' in input) {
        result['_id'] = input ['searchString'];
    }
    return result; 
};

const generateSearchStringMatch = (input) => {
    let result = {};
    result['$match'] = generateSearchQuery(input);
    return result;
};

module.exports = {generateMatch, 
    processInput, 
    getNumberOfPages, 
    get10NthFromStart,
    generateCourseProjections,
    generateSearchStringMatch,
};
