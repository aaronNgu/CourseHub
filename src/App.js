import React from 'react';
import './App.css';
import ReviewItemList from "./components/ReviewItemList";
import CourseItem from './components/CourseItem';
import Button from './components/Button';
import Header from './components/Header';
import CourseOverview from './components/courseOverview';
import CourseItemList from './components/CourseItemList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Button />
      <CourseItemList />
      <CourseOverview />
      <CourseItem />
      <ReviewItemList />
    </div>
  );
};

export default App;
