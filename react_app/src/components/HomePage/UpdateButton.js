import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/';
import {executeSearch} from '../../actions';
import {connect} from 'react-redux';

const useStyles = makeStyles({
    root: {
        height: '35px',
        background: '#f1c5c5',
    }
});

const UpdateButton = ({executeSearch, searchString, yearFilter, ratingFilter}) => {
    const classes = useStyles();

    const handleSearch = () => {
        executeSearch(searchString, yearFilter, ratingFilter)
    }
    
    return <Button 
            className={classes.root} 
            variant='contained'
            onClick={handleSearch}>Update Search</Button>
};

const mapStateToProps = (state) => {
    return {
        searchString: state.searchString, 
        yearFilter: state.filters.yearLvFilter, 
        ratingFilter: state.filters.ratingFilter, 
    }
};

export default connect(mapStateToProps, {executeSearch})(UpdateButton);
