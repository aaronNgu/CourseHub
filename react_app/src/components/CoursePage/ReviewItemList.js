import React from 'react';
import ReviewItem from "./ReviewItem";
import { connect } from 'react-redux';
import { fetchReviews } from '../../actions';

class ReviewItemList extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchReviews(this.props.id));
    }

    render() {
        return (<div className="content">
            <div className="reviewListHeader">
                <p>Reviews</p>
            </div>
            <div id="reviewList">
                {
                    Object.values(this.props.reviewList)
                        .map((item) => {
                            return <ReviewItem key={item._id}
                                date={item.Date.substring(0, 10)}
                                rating={item.Rating}
                                text={item.Comments}
                                id={item.id} />;
                        })
                }
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { reviewList: state.reviewList };
}

export default connect(mapStateToProps)(ReviewItemList);
