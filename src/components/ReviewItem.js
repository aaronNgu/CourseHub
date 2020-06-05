import React from 'react';

class ReviewItem extends React.Component {

    render() {
        return (
            <div className="reviewItem">
                <div className="ratingSummary">
                    <div className="rating">
                        <h3 className="dates">Rating: {this.props.rating}/5</h3>
                    </div>
                    <div className="thumbButtons">
                        <button><i class="material-icons md-24">thumb_up</i></button>
                        <button><i class="material-icons md-24">thumb_down</i></button>
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
