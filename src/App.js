
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './navigation/NavigationBar';
import {Home} from './components'
import NewQuestionPage from './components/NewQuestionPage';
import Leaderboard from './components/Leaderboard';
import UserProfile from './components/UserProfile';
import LoginPage from './components/LoginPage';
import QuestionPoll from './components/QuestionPoll';
import questions from './data/questions';
import users from './data/users';
import {loadQuestions} from './actions/questionActions';
import {loadUsers} from './actions/userActions';
import { connect } from 'react-redux'


class App extends Component {

  componentDidMount = () => {
    const { dispatch } = this.props;
    // Load initial data
    dispatch(loadQuestions(questions));
    dispatch(loadUsers(users));
  }

  render() {
    console.log('App.js: ',this.props);
  return (
    <Router basename='/projects/would-you-rather-project'>
      <Fragment>
        <div className='container' style={{marginBottom: 200}}>
          <NavigationBar/>
          <div>
                <Route path='/' exact component={Home} />
                <Route path='/new_question' component={NewQuestionPage} />
                <Route path='/poll/:id' component={QuestionPoll} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/userprofile' component={UserProfile} />
                <Route path='/login' component={LoginPage} />
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
