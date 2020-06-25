import React from 'react';
import "./CoursePage.css"
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Paper, Box, Button} from '@material-ui/core';
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
    rating: {
        padding: '0px 22px',
        marginBottom: '5px',
        backgroundColor: '#E5A0A0',
    },
    button: {
        backgroundColor: '#A17070',
        fontSize: 'small',
        textTransform: 'none',
        color: '#FFFFFF'
    },
})

function CourseOverview() {
    const classes = useStyles();
    // TODO: add onclick -> rating input page
    return <Box className='courseOverview content'>

        <Box className='courseOverviewHeader'>
            <Typography variant='h5'>{'CPSC110'} </Typography>
            <Typography variant='h5'>{'Computations, Programs, and Programming'}</Typography>
            <Button variant="contained"
                    className={classes.button}
                    endIcon={<Icon>star</Icon>}>{'Rate This Course'}</Button>
        </Box>

        <Box className='courseOverviewHorizontal'>
            <Box className='courseOverviewVerticalLeft'>
                <Typography variant='h6'
                            style={{whiteSpace: 'pre-line'}}>{'Overall \n Rating'}</Typography>
                <Paper className={classes.rating}>
                    <Typography variant='h3'>{5}</Typography>
                </Paper>
            </Box>

            <Box className='courseOverviewVerticalRight'>
                <Typography variant='h6'>{'Top Review'} </Typography>
                <Typography variant='body2'>{'It was an awesome course!'}</Typography>
            </Box>
        </Box>

    </Box>;
}

export default CourseOverview;
