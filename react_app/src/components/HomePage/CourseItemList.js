import React from 'react';
import CourseItem from './CourseItem';
import AddCourseFormDialog from './AddCourseFormDialog';
import {connect} from 'react-redux';
import {fetchCourses} from '../../actions';
import Button from "@material-ui/core/Button";

class CourseItemList extends React.Component {

  componentDidMount() {
          this.props.dispatch(fetchCourses());
      };

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
                        />;
                    })
                }
            </div>
            <div>
            <AddCourseFormDialog/>
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {courseList: state.courseList};
}

export default connect(mapStateToProps)(CourseItemList);
