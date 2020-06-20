import React from 'react';
import Button from '../HomePage/Button';
import CourseItemList from '../HomePage/CourseItemList';
import "./HomePage.css"

const HomePage = () => {
    return (
        <div className="HomePage">
            <Button/>
            <CourseItemList />
        </div>
    );
};

export default HomePage;