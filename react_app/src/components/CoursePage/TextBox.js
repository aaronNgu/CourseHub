import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import {connect} from 'react-redux';
import {addReviewReview} from '../../actions';

const useStyles = makeStyles({
    root: {
        width: '400px',
        marginTop: '15px',
    }
});

const TextBox = ({review, addReviewReview}) => {
    const placeholderReview = "It was pretty fun course. No midterms. Awesome prof. However I wish there was less homework."
    const classes = useStyles();

    return <TextField 
                variant="outlined"
                className={classes.root}
                placeholder={placeholderReview}
                multiline
                rows={10}
                value={review}
                rowsMax={4}
                color='secondary'
                onChange={(event, newValue) => {addReviewReview(event.target.value)}}
                inputProps={{
                    style: {
                        height: '200px',
                    }                
                }}/>
}

const mapStateToProps = (state) => {
    return {review: state.addReviewReview};
}

export default connect(mapStateToProps, {addReviewReview})(TextBox);
