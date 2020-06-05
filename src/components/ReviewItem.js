import React from 'react';

class ReviewItem extends React.Component {

    render() {
        return (
            <div className="reviewItem">
                <div className="ratingSummary">
                    <div>
                        <h3 className="rating">Rating: {this.props.rating}/5</h3>
                    </div>
                    <div className="thumbButtons">
                        <button><i class="material-icons">thumb_up</i></button>
                        <button><i class="material-icons">thumb_down</i></button>
                    </div>
                </div>
                <div className="review">
                    <p className="reviewText">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default ReviewItem;
