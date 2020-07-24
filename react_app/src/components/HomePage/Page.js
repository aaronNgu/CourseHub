import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {connect} from 'react-redux';
import {change_page, fetchCourses} from '../../actions';

class Page extends React.Component{

    handleChange = (event, value) => {
        this.props.change_page(value);
        this.props.fetchCourses(value);
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
        current: state.currentPage
    }
}
export default connect(mapStateToProps,{change_page, fetchCourses})(Page);
