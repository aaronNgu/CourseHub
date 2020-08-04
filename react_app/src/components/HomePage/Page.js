import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {connect} from 'react-redux';
import {change_page, executeSearch} from '../../actions';

class Page extends React.Component{

    handleChange = (event, value) => {
        this.props.change_page(value);
        this.props.executeSearch(value, 
            this.props.searchString, 
            this.props.yearFilter, 
            this.props.ratingFilter);
    }

    render() {
        return (<Pagination 
            shape='rounded'
            variant='outlined'
            count={this.props.count} 
            page={this.props.current}
            onChange={this.handleChange}/>);
    }
}

const mapStateToProps = (state) => {
    return  {
        count: state.countPage,
        current: state.currentPage,
        searchString: state.searchString, 
        yearFilter: state.filters.yearLvFilter, 
        ratingFilter: state.filters.ratingFilter, 
    }
}

export default connect(mapStateToProps,{change_page, executeSearch})(Page);
