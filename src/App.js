import React from 'react';
import './App.css';
import ReviewItemList from "./components/ReviewItemList";
import CourseItem from './components/CourseItem';
import CourseOverview from './components/courseOverview';

const App = () => {
  return (
    <div className="App">
      <ReviewItemList />
      <CourseItem />
      <CourseOverview />
    </div>
  );
};

export default App;
