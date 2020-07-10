import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import {connect} from 'react-redux';
import {addReviewRating} from '../../actions';

const labels = {
    100: "Select a rating",
    1: "Don't do it to yourself.",
    2: 'Maybe not.',
    3: 'Pretty good.',
    4: 'Would do it again.',
    5: 'You have to.'
}

const useStyles = makeStyles({
    root: {
        width: 300, 
        display: 'flex',
        alignItems: 'center',
    }
});

const AddRating = ({rating, addReviewRating}) => {
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();

    return  (<div className={classes.root}>
            <Rating 
            name="hover-feedback"
            value={rating}
            precision={1}
            onChange={(event, newValue) => {addReviewRating(newValue)}}
            onChangeActive={(event, newHover) => {setHover(newHover);}}/>
                {<Box ml={2}>{labels[rating === null ? 100 : (hover !== -1 ? hover: rating)] }</Box>}
            </div>);
}

const mapStateToProps = (state) => {
    return {rating: state.addReviewRating};
}

export default connect(mapStateToProps,{addReviewRating})(AddRating);
