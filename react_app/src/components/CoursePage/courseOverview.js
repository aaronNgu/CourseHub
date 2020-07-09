import React from 'react';
import "./CoursePage.css"
import { Typography, Box} from '@material-ui/core';
import Rating from './Rating';
import RateCourseButton from './RateCourseButton';

function CourseOverview() {
    // TODO: add onclick -> rating input page
    return <Box className='courseOverview content'>

        <Box className='courseOverviewHeader'>
            <Typography variant='h5'>{'CPSC110'} </Typography>
            <Typography variant='h5'>{'Computations, Programs, and Programming'}</Typography>
            <RateCourseButton/>
        </Box>

        <Box className='courseOverviewHorizontal'>
            <Box className='courseOverviewVerticalLeft'>
                <Typography variant='h6'
                    style={{ whiteSpace: 'pre-line' }}>{'Overall \n Rating'}</Typography>
                <Rating rating='5' />
            </Box>

            <Box className='courseOverviewVerticalRight'>
                <Typography variant='h6'>{'Top Review'} </Typography>
                <Typography variant='body2'>{'It was an awesome course!'}</Typography>
            </Box>
        </Box>

    </Box>;
}

export default CourseOverview;
