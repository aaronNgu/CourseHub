import React from 'react';
import CourseItem from './CourseItem';
import AddCourseFormDialog from './AddCourseFormDialog';
import {connect} from 'react-redux';
import {deleteMessage, deleteAllMessages, editMessage, editRating1, editRating2,
   editRating3, editRating4, editRating5, fetchCourses} from '../../actions';
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';

class CourseItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchString: ''};
    }

    handleChange = (e) => {
        this.setState({searchString: e.target.value});
    }

  componentDidMount() {
          this.props.dispatch(fetchCourses());
      };

    render() {

        return (<div className="reviewedCourses">
            <div className="courseListHeader content">
                <p>Reviewed Courses</p>
                <div className="searchBar">
                        <InputBase
                            placeholder="Search"
                            onChange={this.handleChange}
                        />
                        <IconButton type="submit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                </div>
                <div className="button">
                    <Button variant="outlined">Filter</Button>
                </div>
            </div>
            <div className="courseList">
                {
                    Object.values(this.props.courseList)
                        .filter(course => course._id.toString().toLowerCase().includes(this.state.searchString.toLowerCase()))
                        .map((course, index) => {
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
    return {
        courseList: state.courseList,
        searchString: state.searchString
    };
}

export default connect(mapStateToProps)(CourseItemList);
