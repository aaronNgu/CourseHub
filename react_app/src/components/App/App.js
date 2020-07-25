import React from 'react';
import Header from '../Header/Header';
import HomePage from "../HomePage/HomePage";
import CoursePage from "../CoursePage/CoursePage";
import ContactPage from "../ContactUs/ContactUs";
import AboutPage from "../AboutPage/AboutPage";
import LoginPage from "../LoginPage/LoginPage";
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
                    <Route path="/courses/:id"
                    render={(props) => <CoursePage id={props.match.params.id}/>}>
                    </Route>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
};

export default App;
