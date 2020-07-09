import React from 'react';
import "./CoursePage.css"
import { Typography, Box } from '@material-ui/core';
import Rating from './Rating';
import RateCourseButton from './RateCourseButton';
import {connect} from 'react-redux';

class CourseOverview extends React.Component {
    
    handleRateCourse = () => {
        const auth = this.props.auth.isAuthenticated;
        console.log(auth);
        if (auth) {
            console.log('open rate my course dialog');
        } else {
            window.location.replace('/login');
        }
    }

    render() {
        return <Box className='courseOverview content'>

            <Box className='courseOverviewHeader'>
                <Typography variant='h5'>{'CPSC110'} </Typography>
                <Typography variant='h5'>{'Computations, Programs, and Programming'}</Typography>
                <RateCourseButton handleRateCourse={this.handleRateCourse}/>
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
}

const mapStateToProps = (state) => {
    return {auth: state.auth};
}

export default connect(mapStateToProps)(CourseOverview);
