import React from 'react';
import './App.css';
import ReviewItemList from "./components/ReviewItemList";
import CourseItem from './components/CourseItem';
import CourseOverview from './components/CourseOverview';

const App = () => {
  return (
    <div className="App">
      <CourseOverview />
      <CourseItem />
      <ReviewItemList />
    </div>
  );
};

export default App;
