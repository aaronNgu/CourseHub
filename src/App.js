import React from 'react';
import './App.css';
import ReviewItemList from "./components/ReviewItemList";
import CourseItem from './components/CourseItem';

const App = () => {
  return (
    <div className="App">
      <ReviewItemList />
      <CourseItem />
    </div>
  );
};

export default App;
