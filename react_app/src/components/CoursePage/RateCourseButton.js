import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
    button: {
        backgroundColor: '#A17070',
        fontSize: 'small',
        textTransform: 'none',
        color: '#FFFFFF'
    },
});

const RateCourseButton = (props) => {
    const classes = useStyles();
    return  <Button variant="contained"
                className={classes.button}
                endIcon={<Icon>star</Icon>}
                onClick={props.handleRateCourse}>Rate This Course</Button>
}

export default RateCourseButton;
