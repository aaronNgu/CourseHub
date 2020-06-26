import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Box } from '@material-ui/core';
import "./HomePage.css"

const useStyles = makeStyles({
    rating: {
        padding: '0px 22px',
        marginBottom: '5px',
        backgroundColor: '#E5A0A0',
    },
})

function CourseItem(props) {
    const classes = useStyles();

    return <Box className='courseItemHorizontal courseItemMain content'>

        <Box className='courseItemHorizontal'>

            <Box className='courseItemVerticalSides'>
                <Typography variant='h6'>&nbsp;Rating</Typography>
                <Paper className={classes.rating}>
                    <Typography variant='h3'>{props.rating || 5}</Typography>
                </Paper>
            </Box>

            <Box className='courseItemVerticalSides courseItemVerticalMiddle'>
                <Typography variant='h5'>{props.courseNumber || 'CPSC110'} </Typography>
                <Typography variant='body2'>{props.review || 'It was an awesome course!'}</Typography>
            </Box>

        </Box>

        <Box className='courseItemVerticalSides courseItemVerticalMiddle'>
            <Typography variant='body2'>{props.date || '2/19/2020'}</Typography>
        </Box>

    </Box>;
}

export default CourseItem;
