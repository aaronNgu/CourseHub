import React from 'react';
import CourseItem from './CourseItem';
import {connect} from 'react-redux';
import {deleteMessage, deleteAllMessages, editMessage, editRating1, editRating2,
   editRating3, editRating4, editRating5, fetchCourses} from '../../actions';
import Button from "@material-ui/core/Button";

class CourseItemList extends React.Component {

  componentDidMount() {
          this.props.dispatch(fetchCourses());
      }

    handleCancel = (course) => {
        this.props.deleteMessage(course);
    }

    handleEdit = (course) => {
        this.props.editMessage(course);
    }

    handleDeleteAll = (courseList) => {
        this.props.deleteAllMessages(courseList);
    }

    handleRatingOne = (course) => {
        this.props.editRating1(course);
    }

    handleRatingTwo = (course) => {
        this.props.editRating2(course);
    }

    handleRatingThree = (course) => {
        this.props.editRating3(course);
    }

    handleRatingFour = (course) => {
        this.props.editRating4(course);
    }

    handleRatingFive = (course) => {
        this.props.editRating5(course);
    }

    render() {
        return (<div className="reviewedCourses">
            <div className="courseListHeader content">
                <p>Reviewed Courses</p>
                <div className="button">
                    <Button variant="outlined">Filter</Button>
                </div>
            </div>

            <div className="courseList">
                {
                    Object.values(this.props.courseList).map((course, index) => {
                        return <CourseItem
                            key={index}
                            courseNumber={course._id}
                            rating={course.overall_rating}
                            review={course.description}
                            onRatingOne={this.handleRatingOne}
                            onRatingTwo={this.handleRatingTwo}
                            onRatingThree={this.handleRatingThree}
                            onRatingFour={this.handleRatingFour}
                            onRatingFive={this.handleRatingFive}
                            onEdit={this.handleEdit}
                            onCancel={this.handleCancel}
                        />;
                    })
                }
                <Button variant="outlined" onClick={this.handleDeleteAll}>
                Delete all courses
                </Button>
            </div>
        </div>);
    }
}
const mapStateToProps = (state) => {
    return {courseList: state.courseList};
}

export default connect(mapStateToProps)(CourseItemList);
