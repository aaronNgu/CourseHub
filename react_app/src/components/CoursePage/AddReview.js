import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core';
import AddRating from './AddRating';
import TextBox from './TextBox';
import { connect } from 'react-redux';
import { toggleAddReviewBox, addReview } from '../../actions';

const useStyles = makeStyles({
    button: {
        marginRight: '10px',
        marginBottom: '10px',
        padding: '5px 12px',
        '&:hover': {
            color: 'white',
            backgroundColor: '#A17070',
        }
    }
});

const AddReview = ({ review, rating, toggle, toggleAddReviewBox, addReview, id }) => {

    const classes = useStyles();

    const validateReview = (review, rating) => {
        if (review === '' || rating === null) {
            window.alert('Please do not leave the rating and review fields empty.')
            return false;
        }
        return true;
    }

    const handlePostReview = () => {
        if (validateReview(review, rating)) {
            addReview(review, rating, id);
        }
    }

    const handleClose = (props) => {
        toggleAddReviewBox(false);
    }

    return <Dialog open={toggle} onClose={handleClose}>
        <DialogTitle>Add your review</DialogTitle>
        <DialogContent>
            <AddRating />
            <TextBox />
        </DialogContent>
        <DialogActions>
            <Button className={classes.button} onClick={handlePostReview}> Post Review </Button>
        </DialogActions>
    </Dialog>;
}

const mapStateToProps = (state) => {
    return { toggle: state.toggleAddReviewBox, review: state.addReviewReview, rating: state.addReviewRating }
}

export default connect(mapStateToProps, { toggleAddReviewBox, addReview })(AddReview);
