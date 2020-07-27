import React from 'react';
import "./CoursePage.css"
import {Box, Typography} from '@material-ui/core';
import Rating from './Rating';
import RateCourseButton from './RateCourseButton';
import {connect} from 'react-redux';
import {fetchCourseInfo, toggleAddReviewBox} from '../../actions';

class CourseOverview extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchCourseInfo(this.props.id));
    };

    handleRateCourse = () => {
        const auth = this.props.auth.isAuthenticated;
        if (auth) {
            this.props.dispatch(toggleAddReviewBox(true));
        } else {
            window.location.replace('/login');
        }
    }

    render() {
        return <Box className='courseOverview content'>

            <Box className='courseOverviewHeader'>
                <Typography variant='h5'>{this.props.id} </Typography>
                <Typography variant='h5'>{this.props.courseInfo.description}</Typography>
                <RateCourseButton handleRateCourse={this.handleRateCourse}/>
            </Box>

            <Box className='courseOverviewHorizontal'>
                <Box className='courseOverviewVerticalLeft'>
                    <Typography variant='h6'
                                style={{whiteSpace: 'pre-line'}}>{'Overall \n Rating'}</Typography>
                    <Rating rating={this.props.courseInfo.overall_rating}/>
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
    return {
        auth: state.auth,
        courseInfo: state.courseInfo
    };
}

export default connect(mapStateToProps)(CourseOverview);
