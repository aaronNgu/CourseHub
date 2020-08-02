import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {update_search, executeSearch} from '../../actions';

const useStyles = makeStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        }
    },
    input:  {
        height: '40px',
        background: 'white',
    }
});


const SearchBar = ({searchString, update_search, executeSearch, yearFilter, ratingFilter}) => {

    const classes = useStyles();

    return (<div className='searchBox content'>
        <div>
            <Typography variant="h5"> Find a course</ Typography>
            <TextField
                variant='outlined'
                className={classes.root}
                placeholder='ENGL112'
                value={searchString}
                onChange={(event, newValue) => {update_search(event.target.value)}}
                InputProps={{
                    className: classes.input,
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={(event, newValue) => {executeSearch(1, searchString, yearFilter, ratingFilter)}}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}></TextField>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        searchString : state.searchString,
        yearFilter: state.filters.yearLvFilter,
        ratingFilter: state.filters.ratingFilter,
    }
}

export default connect(mapStateToProps, {update_search, executeSearch})(SearchBar); 
