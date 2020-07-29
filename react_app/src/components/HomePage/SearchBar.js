import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

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

const SearchBar = () => {

    const classes = useStyles();

    return (<div className='searchBox content'>
        <div>
            <Typography variant="h5"> Find a course</ Typography>
            <TextField
                variant='outlined'
                className={classes.root}
                placeholder='ENGL112'
                InputProps={{
                    className: classes.input,
                    endAdornment: (
                        <InputAdornment>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}></TextField>
        </div>
    </div>);
}

export default SearchBar; 
