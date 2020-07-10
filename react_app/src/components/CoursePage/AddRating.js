import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const labels = {
    1: "Don't do it to yourself.",
    2: 'Maybe not.',
    3: 'Pretty good.',
    4: 'Would do it again.',
    5: 'You have to.'
}

const useStyles = makeStyles({
    root: {
        width: 300, 
        display: 'flex',
        alignItems: 'center',
    }
});

const AddRating = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();

    return  (<div className={classes.root}>
            <Rating 
            name="hover-feedback"
            value={value}
            precision={1}
            onChange={(event, newValue) => {setValue(newValue);}}
            onChangeActive={(event, newHover) => {setHover(newHover);}}/>
                {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover: value]}</Box>}
            </div>);
}

export default AddRating;
