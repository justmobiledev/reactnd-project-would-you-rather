

import React, { Component } from 'react'
import {Card, Tabs, Tab} from 'react-bootstrap'
import {connect} from 'react-redux'
import QuestionList from './QuestionList'

class HomePage extends Component {
  constructor(){
      super();
      this.state = {
          activeTab: 'unanswered_questions'
      }
  }

  componentDidMount = () => {
    // Check login state
    if (!this.props.authedUser) {
      this.props.history.push(`/login`)
    }
  }

  render() {
    const authedUser = this.props.authedUser;
    let answers = {};

    if (authedUser) {
      answers = authedUser.answers;
    }

    const questions = this.props.questions;
    let unansweredQuestions = [];
    let answeredQuestions = [];
    if (questions) {
      for (const id in questions) {
        const question = questions[id];
        if (answers[question.id]) {
          answeredQuestions.push(question);
        }
        else {
          unansweredQuestions.push(question);
        }
      }
    }

    // Sort by created date
    unansweredQuestions.sort(function(a, b) {
      return b.timestamp - a.timestamp;
    });

    answeredQuestions.sort(function(a, b) {
      return b.timestamp - a.timestamp;
    });

    return (
      <div>
         <h1>'Would You Rather' Game</h1>
         <Card style={{ marginTop: 24, width: '40rem' }}>
         <Card.Body>
            <Tabs
                id="question-tabs"
                activeKey={this.state.activeTab}
                onSelect={(k) => this.setState({activeTab: k})}>
                <Tab eventKey="unanswered_questions" title="Unanswered Questions">
                  <QuestionList questions={unansweredQuestions}/>
                </Tab>
                <Tab eventKey="answered_questions" title="Answered Questions">
                  <QuestionList questions={answeredQuestions}/>
                </Tab>
            </Tabs>
        </Card.Body>
        </Card>
      </div>
    )
  }
}

function mapStateToProps ({authedUserReducer, questionReducer}) {
  return {
      authedUser: authedUserReducer.authedUser,
      questions: questionReducer.questions
  }
}

export default connect(mapStateToProps)(HomePage);


