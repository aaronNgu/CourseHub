import React from 'react';
import CourseItem from './CourseItem';
import AddCourseFormDialog from './AddCourseFormDialog';
import {connect} from 'react-redux';
import {fetchCourses} from '../../actions';
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Filters from "./Filters";

class CourseItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            showFilters: false,
            yearLvFilter: ['100', '200', '300', '400', '500', '600'],
            ratingFilter: ['1', '2', '3', '4', '5', '-']
        };
        this.onFiltersUpdate = this.onFiltersUpdate.bind(this);
    }

    handleChange = (e) => {
        this.setState({searchString: e.target.value});
    }

    componentDidMount() {
        this.props.dispatch(fetchCourses());
    };

    toggleFilter() {
        this.setState({
            showFilters: !this.state.showFilters
        });
    }

    onFiltersUpdate(yearLvFilter, ratingFilter) {
        this.setState({...this.state, yearLvFilter, ratingFilter});
    }

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
                        <SearchIcon/>
                    </IconButton>
                </div>
                <div className="button">
                    <Button variant="outlined"
                            onClick={this.toggleFilter.bind(this)}
                    >Filter</Button>
                </div>
            </div>
            {this.state.showFilters ? (<Filters yearLvFilter={this.state.yearLvFilter}
                                                ratingFilter={this.state.ratingFilter}
                                                updateFilters={this.onFiltersUpdate}/>) : null}
            <div className="courseList">
                {
                    Object.values(this.props.courseList)
                        .filter(course => course._id.toString().toLowerCase().includes(this.state.searchString.toLowerCase()))
                        .filter(course => this.state.yearLvFilter.includes((course._id.toString().slice(4, 5) + '00'))
                            && this.state.ratingFilter.includes(course.overall_rating.toString()))
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
        searchString: state.searchString,
        showFilters: state.showFilters,
        yearLvFilter: state.yearLvFilter,
        ratingFilter: state.ratingFilter,
    };
}

export default connect(mapStateToProps)(CourseItemList);
