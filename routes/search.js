var express = require('express');
const { body, validationResult, trim } = require('express-validator');

var router = express.Router();

/* removes non aplhanumerics and spaces */
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

const executeSearch = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const input = processInput(req);
    //  input - {searchString: <course name all caps>, years: ["100", "200", "300"], ratings: ["1", "2"]}
    res.status(200).json('inside search');
}

router.get('/', [
    body('searchString').trim().escape(),
    body('years').trim().escape(),
    body('ratings').trim().escape(),
], executeSearch);

module.exports = router;