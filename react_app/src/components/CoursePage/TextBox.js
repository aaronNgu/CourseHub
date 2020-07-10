import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '400px',
        margin: '15px 0px',
    }
});

const TextBox = () => {
    const placeholderReview = "It was pretty fun course. No midterms. Awesome prof. However I wish there was less homewor."
    const classes = useStyles();

    return <TextField 
                variant="outlined"
                className={classes.root}
                placeholder={placeholderReview}
                multiline
                rows={50}
                rowsMax={4}
                inputProps={{
                    style: {
                        height: '200px'
                    }
                }}/>
}

export default TextBox;
