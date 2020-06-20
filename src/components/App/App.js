import React from 'react';
import Header from '../Header/Header';
import HomePage from "../HomePage/HomePage";
import CoursePage from "../CoursePage/CoursePage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage/>
      <CoursePage/>
    </div>
  );
};

export default App;
