import React from 'react';
import "./CoursePage.css"
import CourseOverview from "./courseOverview";
import ReviewItemList from "./ReviewItemList";

const CoursePage = () => {
    return (
        <div className="CoursePage">
            <CourseOverview/>
            <ReviewItemList/>
        </div>
    );
};

export default CoursePage;