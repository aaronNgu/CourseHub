import React from 'react';
import "./CoursePage.css"
import {makeStyles} from "@material-ui/core/styles";
import {Box, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    rating: {
        padding: '0px 22px',
        marginBottom: '5px',
        backgroundColor: '#E5A0A0',
    },
})

function ReviewItem(props) {
    const classes = useStyles();

    return <Box className='reviewItemHorizontal reviewItemMain content'>

        <Box className='reviewItemHorizontal'>

            <Box className='reviewItemVerticalSides'>
                <Typography variant='h6'>Rating</Typography>
                <Paper className={classes.rating}>
                    <Typography variant='h3'>{props.rating || 5}</Typography>
                </Paper>
            </Box>

            <Box className='text'>
                <Typography variant='body2'>{props.text}</Typography>
            </Box>

        </Box>

        <Box className='date'>
            <Typography variant='body2'>{props.date || '2/19/2020'}</Typography>
        </Box>

    </Box>;
}

export default ReviewItem;
