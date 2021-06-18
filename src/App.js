
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './navigation/NavigationBar';
import {HomePage} from './components'
import NewQuestionPage from './components/NewQuestionPage';
import Leaderboard from './components/Leaderboard';
import UserProfile from './components/UserProfile';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router basename='/projects/would-you-rather-project'>
      <Fragment>
        <div className='container'>
          <NavigationBar/>
          <div>
                <h1>'Would You Rather' Game</h1>
                <Route path='/' exact component={HomePage} />
                <Route path='/newquestion' component={NewQuestionPage} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/userprofile' component={UserProfile} />
                <Route path='/loginpage' component={LoginPage} />
          </div>
          </div>
      </Fragment>
  </Router>
  );
}

export default App;
