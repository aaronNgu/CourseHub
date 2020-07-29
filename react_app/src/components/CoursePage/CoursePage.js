import React from 'react';
import "./CoursePage.css"
import CourseOverview from "./CourseOverview";
import ReviewItemList from "./ReviewItemList";
import AddReview from "./AddReview";

class CoursePage extends React.Component {

    render() {
        return (
            <div className="CoursePage">
                <CourseOverview id={this.props.id}/>
                <ReviewItemList id={this.props.id}/>
                <AddReview id={this.props.id}/>
            </div>
        );
    }
}

export default CoursePage;
