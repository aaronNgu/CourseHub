import React from 'react';
import "./CoursePage.css"
import { Box, Typography } from '@material-ui/core';
import Rating from './Rating';
import RateCourseButton from './RateCourseButton';
import LoadingRating from './LoadingRating';
import { connect } from 'react-redux';
import { fetchCourseOverview, toggleAddReviewBox, coursepage_is_loading, courseoverview_is_loading } from '../../actions';

class CourseOverview extends React.Component {

    componentDidMount() {
        this.props.dispatch(coursepage_is_loading(true));
        this.props.dispatch(courseoverview_is_loading(true));
        this.props.dispatch(fetchCourseOverview(this.props.id));
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
                <Typography variant='h4'>{this.props.id} </Typography>
                <Typography variant='h5'>{this.props.overviewLoading ? "Title" : this.props.courseInfo.description}</Typography>
                <RateCourseButton handleRateCourse={this.handleRateCourse} />
            </Box>

            <Box className='courseOverviewHorizontal'>
                <Box className='courseOverviewVerticalLeft'>
                    <Typography variant='h6'
                        style={{ whiteSpace: 'pre-line' }}>{'Overall \n Rating'}</Typography>
                    {
                        this.props.overviewLoading ? 
                        <LoadingRating /> :
                        <Rating rating={this.props.overviewLoading ? '9' :this.props.courseInfo.overall_rating} />
                    }
                </Box>

                <Box className='courseOverviewVerticalRight'>
                    <Typography variant='h6'>{'Most Recent Review:'} </Typography>
                    <Typography variant='body2'>
                        {
                            this.props.reviewLoading ? <p> Loading... </p> :
                                (this.props.reviewList.length > 0 ? 
                                    this.props.reviewList[this.props.reviewList.length - 1].Comments : 
                                    'No reviews yet!')
                        }
                    </Typography>
                </Box>
            </Box>

        </Box>;
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        courseInfo: state.courseInfo,
        reviewList: state.reviewList,
        reviewLoading: state.courseLoading,
        overviewLoading: state.overviewLoading,
    };
}

export default connect(mapStateToProps)(CourseOverview);
