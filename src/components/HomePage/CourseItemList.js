import React from 'react';
import CourseItem from './CourseItem';
import {connect} from 'react-redux';
import {deleteMessage} from '../../actions';
import Button from "@material-ui/core/Button";

class CourseItemList extends React.Component {

    handleCancel = (course) => {
        this.props.deleteMessage(course);
    }

    handleEdit = (course) => {
        // TODO: edit course
        console.log('on handleEdit from course ' + course);
    }

    render() {
        return (<div className="reviewedCourses">
            <div className="courseListHeader">
                <p>Reviewed Courses</p>
                <div className="button">
                    <Button variant="outlined">Filter</Button>
                </div>
            </div>

            <div className="courseList">
                {
                    Object.keys(this.props.courseList).map((course, index) => {
                        return <CourseItem
                            key={index}
                            courseNumber={course}
                            rating={this.props.courseList[course]['summary']['rating']}
                            review={this.props.courseList[course]['reviews']['1']['comment']}
                            onEdit={this.handleEdit}
                            onCancel={this.handleCancel}
                        />;
                    })
                }
            </div>
        </div>);
    }

}

const mapStateToProps = (state) => {
    return {courseList: state.courseList};
}

export default connect(mapStateToProps, {deleteMessage})(CourseItemList);
