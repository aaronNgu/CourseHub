import React from 'react';
import ReviewItemList from "./ReviewItemList";
import CourseItem from './CourseItem';
import Button from './Button';
import Header from './Header';
import CourseOverview from './courseOverview';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Button />
      <CourseOverview />
      <CourseItem />
      <ReviewItemList />
    </div>
  );
};

export default App;
