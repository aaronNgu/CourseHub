import React from 'react';
import ReviewItem from "./ReviewItem";
import {connect} from 'react-redux';
import Button from "@material-ui/core/Button";
import {fetchReviews} from '../../actions';

// hardcoded for now
const couresId = "CPSC110"

class ReviewItemList extends React.Component {

  componentDidMount() {
        this.props.dispatch(fetchReviews(couresId));
    }

    render() {
        return (<div>
                <div className="reviewListHeader content">
                    <p>Reviews</p>
                    <div className="button">
                        <Button variant="outlined">Sort</Button>
                    </div>
                </div>
                <div id="reviewList">
                {Object.values(this.props.reviewList)
                  .map((item) => {
                    return <ReviewItem key={item.id}
                                       date={item.Date.substring(0,10)}
                                       rating={item.Rating}
                                       text={item.Comments}
        					                     id={item.id}
                                />;
                   })
                 }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {reviewList: state.reviewList};
}

export default connect(mapStateToProps)(ReviewItemList);
