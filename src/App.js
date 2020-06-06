import React from 'react';
import './App.css';
import ReviewItemList from "./components/ReviewItemList";
import CourseItem from './components/CourseItem';
import Button from './components/Button';
import Header from './components/Header';
import CourseOverview from './components/CourseOverview';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Button />
      <ReviewItemList />
      <CourseOverview />
      <CourseItem />
      <ReviewItemList />
    </div>
  );
};

export default App;
