import React from 'react';
import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from '@material-ui/core';
import {connect} from 'react-redux'
import "./HomePage.css"
import {update_filters} from '../../actions';
import UpdateButton from './UpdateButton';

const yearLvList = ['100', '200', '300', '400', '500', '600'];
const ratingList = ['1', '2', '3', '4', '5', '-'];

class Filters extends React.Component {

    handleYearLvChange = (e) => {
        let newYearFilter = this.props.yearFilter.includes(e.target.name) ?
                this.props.yearFilter.filter((year) => {return year !== e.target.name}) :
                [...this.props.yearFilter, e.target.name];

        this.props.update_filters(newYearFilter, this.props.ratingFilter);
    }

    handleRatingChange = (e) => {
        let newRatingFilter = this.props.ratingFilter.includes(e.target.name) ?
                this.props.ratingFilter.filter((rating) => {return rating !== e.target.name}) :
                [...this.props.ratingFilter, e.target.name];

        this.props.update_filters(this.props.yearFilter, newRatingFilter);
    }

    render() {
        return (
            <Box className="filterContainer">
                <div className="filterCategories">
                    <FormControl className="yearLevelFilter">
                        <FormLabel>Year Level:</FormLabel>
                        <FormGroup row>
                            {
                                yearLvList.map((year) => {
                                    return <FormControlLabel
                                        control={<Checkbox defaultChecked
                                                           style={{color: '#E5A0A0',}}
                                                           onChange={this.handleYearLvChange}
                                                           name={year}/>}
                                        label={year}
                                    />
                                })
                            }
                        </FormGroup>
                    </FormControl>
                    <FormControl className="ratingFilter">
                        <FormLabel>Rating:</FormLabel>
                        <FormGroup row>
                            {
                                ratingList.map((rating) => {
                                    return <FormControlLabel
                                        control={<Checkbox defaultChecked
                                                           style={{color: '#E5A0A0',}}
                                                           onChange={this.handleRatingChange}
                                                           name={rating}/>}
                                        label={rating}
                                    />
                                })
                            }
                        </FormGroup>
                    </FormControl>
                    <UpdateButton/>
                </div>
            </Box>
        );
    }
}

const mapStateTopProps = (state) => {
    return {
        filters: state.filters,
        yearFilter: state.filters.yearLvFilter,
        ratingFilter: state.filters.ratingFilter,
    }
}

export default connect(mapStateTopProps, {update_filters})(Filters);
