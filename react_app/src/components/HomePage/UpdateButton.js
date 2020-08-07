import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/';
import { executeSearch, change_page, homepage_is_loading } from '../../actions';
import { connect } from 'react-redux';

const useStyles = makeStyles({
	root: {
		height: '35px',
		background: '#f1c5c5',
	},
});

const UpdateButton = ({
	executeSearch,
	searchString,
	yearFilter,
	ratingFilter,
	change_page,
	homepage_is_loading,
}) => {
	const classes = useStyles();

	const handleSearch = () => {
		homepage_is_loading(true);
		executeSearch(1, searchString, yearFilter, ratingFilter);
		change_page(1);
	};

	return (
		<Button className={classes.root} variant='contained' onClick={handleSearch}>
			Update
		</Button>
	);
};

const mapStateToProps = (state) => {
	return {
		searchString: state.searchString,
		yearFilter: state.filters.yearLvFilter,
		ratingFilter: state.filters.ratingFilter,
	};
};

export default connect(mapStateToProps, {
	executeSearch,
	change_page,
	homepage_is_loading,
})(UpdateButton);
