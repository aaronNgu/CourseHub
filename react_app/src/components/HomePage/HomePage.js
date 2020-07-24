import React from 'react';
import CourseItemList from '../HomePage/CourseItemList';
import "./HomePage.css"
import Page from './Pagination';

const HomePage = () => {
    return (
        <div className="HomePage">
            <CourseItemList />
            <Page />
        </div>
    );
};

export default HomePage;
