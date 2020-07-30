import React from 'react';
import { Typography, Paper, Box, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import "./HomePage.css"
import { deleteCourse } from "../../actions";
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
class CourseItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseNumber: this.props.courseNumber
        };
    }

    handleRemove() {
        let result = window.confirm("Are you sure you want to delete this course?");
        if (result) {
            console.log("Course: " + this.state.courseNumber + " is being deleted.");
            this.props.deleteCourse(this.props.courseNumber);
        }
    }

    render() {
        return <Box className='courseItemHorizontal courseItemMain content'>

            <Box className='courseItemHorizontal'>

                <Box className='courseItemVerticalSides'>
                    <Typography variant='h6'>&nbsp;Rating</Typography>
                    <Paper >
                        <Typography variant='h3'
                                    style={{padding: '0px 22px',
                                            border: '5px',
                                            backgroundColor: '#E5A0A0'}}
                        >{this.props.rating || '-'}</Typography>
                    </Paper>
                </Box>

                <Box className='courseItemVerticalSides courseItemVerticalMiddle'
                     style={{paddingTop: '5px'}}
                >
                    <Link to={'/coursepage/' + this.props.courseNumber.toString()}
                            style={{textDecoration: 'none', color: 'black'}}>
                        <Typography variant='h5'>{this.props.courseNumber || 'N/A'} </Typography>
                    </Link>
                    <Typography variant='body2'>{this.props.review || 'N/A'}</Typography>
                </Box>

            </Box>
            <div className='courseItemVerticalSides'>
            <Box className='courseItemVerticalSides courseItemVerticalMiddle'
                 style={{paddingTop: '5px'}}
            >
                <Typography variant='body2'>{this.props.date || 'N/A'}</Typography>
            </Box>
            <div>
                <IconButton aria-label="delete"
                            className='courseItemVerticalSides courseItemVerticalMiddle'
                            onClick={this.handleRemove.bind(this)}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
            </div>

        </Box>;
    }
}

export default connect(
    null,
    { deleteCourse }
)(CourseItem)
