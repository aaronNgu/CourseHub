import React from 'react';
import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from '@material-ui/core';
import {connect} from 'react-redux'
import "./HomePage.css"
import {update_filters} from '../../actions';

const yearLvList = ['100', '200', '300', '400', '500', '600'];
const ratingList = ['1', '2', '3', '4', '5', '-'];

class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yearLvFilter: this.props.yearLvFilter,
            ratingFilter: this.props.ratingFilter,
        };
    }

    handleYearLvChange = (e) => {
        let newState = this.state;
        if (this.state.yearLvFilter.includes(e.target.name)) {
            newState = {
                ...this.state, yearLvFilter: this.state.yearLvFilter.filter((year) => {
                    return year !== e.target.name
                })
            };
        } else {
            newState = {...this.state, yearLvFilter: [...this.state.yearLvFilter, e.target.name]};
        }
        this.setState(newState);
        this.handleFilterUpdate(newState);
    }

    handleRatingChange = (e) => {
        let newState = this.state;
        if (this.state.ratingFilter.includes(e.target.name)) {
            newState = {
                ...this.state, ratingFilter: this.state.ratingFilter.filter((rating) => {
                    return rating !== e.target.name
                })
            };
        } else {
            newState = {...this.state, ratingFilter: [...this.state.ratingFilter, e.target.name]};
        }
        this.setState(newState);
        this.handleFilterUpdate(newState);
    }

    handleFilterUpdate = (newState) => {
        this.props.update_filters(newState.yearLvFilter, newState.ratingFilter);
        this.props.updateFilters(newState.yearLvFilter, newState.ratingFilter);
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
                </div>
            </Box>
        );
    }
}

export default connect(
    null,
    {update_filters}
)(Filters);
