
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './navigation/NavigationBar';
import {Home,AddQuestion,Leaderboard,LoginPage,QuestionPoll,AnswerQuestion} from './components';
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
  return (
    <Router basename='/projects/would-you-rather-project'>
      <Fragment>
        <div className='container' style={{marginBottom: 200}}>
          <NavigationBar/>
          <div>
                <Route path='/' exact component={Home} />
                <Route path='/add' component={AddQuestion} />
                <Route path='/answer/:id' component={AnswerQuestion} />
                <Route path='/poll/:id' component={QuestionPoll} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/login' component={LoginPage} />
          </div>
          </div>
      </Fragment>
  </Router>
  );
  }
}

function mapStateToProps ({ questionReducer }) {
  return {
    questions: questionReducer.questions,
  }
}

export default connect(mapStateToProps)(App);
