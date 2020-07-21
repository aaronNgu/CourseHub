import React from 'react';
import "./CoursePage.css"
import CourseOverview from "./courseOverview";
import ReviewItemList from "./ReviewItemList";
import AddReview from "./AddReview";

const CoursePage = () => {
    return (
        <div className="CoursePage">
            <CourseOverview/>
            <ReviewItemList/>
            <AddReview/>
        </div>
    );
};

export default CoursePage;