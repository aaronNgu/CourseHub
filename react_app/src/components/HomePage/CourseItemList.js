import React from 'react';
import CourseItem from './CourseItem';
import AddCourseFormDialog from './AddCourseFormDialog';
import { connect } from 'react-redux';
import {
	fetchCourses,
	change_page_count,
	homepage_is_loading,
} from '../../actions';
import Button from '@material-ui/core/Button';
import Filters from './Filters';

class CourseItemList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showFilters: false,
		};
	}

	componentDidMount() {
		this.props.dispatch(homepage_is_loading(true));
		this.props.dispatch(fetchCourses());
		this.props.dispatch(change_page_count(0));
	}

	toggleFilter() {
		this.setState({
			showFilters: !this.state.showFilters,
		});
	}

	render() {
		return (
			<div className='reviewedCourses content'>
				<div className='courseListHeader'>
					<p>Reviewed Courses</p>
					<div className='button'>
						<Button variant='outlined' onClick={this.toggleFilter.bind(this)}>
							Filter
						</Button>
					</div>
				</div>
				{this.state.showFilters ? (
					<Filters
						yearLvFilter={this.props.yearFilter}
						ratingFilter={this.props.ratingFilter}
						updateFilters={this.onFiltersUpdate}
					/>
				) : null}
				<div className='courseList'>
					{this.props.isLoading ? (
						<p> Loading ... </p>
					) : Object.keys(this.props.courseList).length === 0 ? (
						<p> No results. :&#40;</p>
					) : (
						Object.values(this.props.courseList).map((course, index) => {
							return (
								<CourseItem
									key={index}
									courseNumber={course._id}
									rating={course.overall_rating}
									review={course.description}
								/>
							);
						})
					)}
				</div>
				<div>
					<AddCourseFormDialog />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		courseList: state.courseList,
		searchString: state.searchString,
		yearFilter: state.filters.yearLvFilter,
		ratingFilter: state.filters.ratingFilter,
		isLoading: state.homeLoading,
	};
};

export default connect(mapStateToProps)(CourseItemList);
