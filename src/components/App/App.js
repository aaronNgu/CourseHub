import React from 'react';
import Header from '../Header/Header';
import HomePage from "../HomePage/HomePage";
import CoursePage from "../CoursePage/CoursePage";
import ContactPage from "../Contact Us/ContactUs";
import AboutPage from "../AboutPage/AboutPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/homepage" />
                    </Route>
                    <Route path="/homepage">
                        <HomePage/>
                    </Route>
                    <Route path="/coursepage">
                        <CoursePage/>
                    </Route>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
};

export default App;
