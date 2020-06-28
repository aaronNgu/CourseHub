import React from 'react';
import ReviewItem from "./ReviewItem";
import {connect} from 'react-redux';
import Button from "@material-ui/core/Button";

// hardcoded for now
const reviewItems = [
    {id: 0, date: "2020-06-04", rating: 4, text: "I love this course!! I love suffering"},
    {id: 1, date: "2020-06-05", rating: 3, text: "It was just ok. Kinda boring."},
    {id: 2, date: "2020-06-06", rating: 5, text: "Very good :))))"}
];

class ReviewItemList extends React.Component {

    render() {
        return (<div>
                <div className="reviewListHeader content">
                    <p>Reviews</p>
                    <div className="button">
                        <Button variant="outlined">Sort</Button>
                    </div>
                </div>
                <div id="reviewList">
                    {reviewItems.map((item) => {
                        return (<ReviewItem key={item.id} date={item.date} rating={item.rating} text={item.text}
                                            id={item.id}/>);
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {courseList: state.courseList};
}

export default connect(mapStateToProps)(ReviewItemList);
