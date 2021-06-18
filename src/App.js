
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
import ViewQuestionPage from './components/ViewQuestionPage';
import questions from './data/questions';
import {loadQuestions} from './actions/questionActions';
import { connect } from 'react-redux'


class App extends Component {

  componentDidMount = () => {
    const { dispatch } = this.props;
    // Load initial data
    dispatch(loadQuestions(questions));
    //dispatch(loadQuestions(questions));
  }

  render() {
    console.log('App.js: ',this.props);
  return (
    <Router basename='/projects/would-you-rather-project'>
      <Fragment>
        <div className='container'>
          <NavigationBar/>
          <div>
                <h1>'Would You Rather' Game</h1>
                {
                  this.props.questions ? 
                  
                    <p>{JSON.stringify(this.props.questions, 2, null)}</p>
                  : null
                }

                <Route path='/' exact component={HomePage} />
                <Route path='/newquestion' component={NewQuestionPage} />
                <Route path='/viewquestion' component={ViewQuestionPage} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/userprofile' component={UserProfile} />
                <Route path='/loginpage' component={LoginPage} />


          </div>
          </div>
      </Fragment>
  </Router>
  );
  }
}

function mapStateToProps ({ authedUser, users, questionReducer }) {
  console.log('mapStateToProps, ',questionReducer.questions);
  return {
    questions: questionReducer.questions,
  }
}

export default connect(mapStateToProps)(App);
