import React, { Component } from 'react'
import { connect } from 'react-redux';
import {ProgressBar, Card, Container, Row, Col, Image, Button, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class QuestionPoll extends Component {

  componentDidMount = () => {
    // Check login state
    if (!this.props.authedUser) {
        this.props.history.push(`/login`)
    }
  }

  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name; 
    
  }

  submit = () => {
    console.log('submit');
  }

  render() {
    // Check login state
    if (!this.props.authedUser) {
      return <Redirect to="/login" />;
    }


    const { id, questions, users } = this.props;
   // const question = questions[id];
   let question;
   let optionOneText = '';
   let optionTwoText = '';
   let totalVotes = 0;
   let optionOneCount = 0;
   let optionTwoCount = 0;
   let optionOnePercent = 0;
   let optionTwoPercent = 0;
   let optionOneVariant = 'light';
   let optionTwoVariant = 'light';
   if (questions) {
    question = questions[id];
    optionOneText = question.optionOne.text;
    optionTwoText = question.optionTwo.text;

    // Calculate poll info
    optionOneCount = question.optionOne.votes.length;
    optionTwoCount = question.optionTwo.votes.length;
    totalVotes = optionOneCount + optionTwoCount;

    optionOnePercent = totalVotes > 0 ? optionOneCount/totalVotes * 100 : 0;
    optionTwoPercent = totalVotes > 0 ? optionTwoCount/totalVotes * 100 : 0;

    if (optionOneCount > optionTwoCount) {
      optionOneVariant = 'success';
    }
    if (optionTwoCount > optionOneCount) {
      optionTwoVariant = 'success';
    }
   }

   let authorName = '';
   let avatarURL = '';
   if (users && question) {
     // Get author info
    const author = users[question.author];
    authorName = author.name;
    avatarURL = author.avatarURL;
   }


    return (
      <div style={{marginTop: 24, marginBottom: 200}}>
          <Card style={{ width: '38rem' }}>
            <Card.Header><h3>{authorName} asks:</h3></Card.Header>
              <Card.Body>
                  <Card.Text>
                  <Container>
                    <Row>
                      <Col>
                        <Image style={{width: 160}} src={avatarURL} roundedCircle />
                      </Col>
                      <Col>
                        <h3>Results:</h3>
                        <Alert variant={optionOneVariant}>
                          Would you rather {optionOneText}?

                          <ProgressBar style={{marginTop: 16}} now={optionOnePercent} label={`${optionOnePercent}%`}/>
                          <p style={{marginTop: 8}}><b>{optionOneCount} of {totalVotes}</b></p>
                        </Alert>

                        <Alert variant={optionTwoVariant}>
                          Would you rather {optionTwoText}?

                          <ProgressBar style={{marginTop: 16}} now={optionTwoPercent} label={`${optionTwoPercent}%`}/>
                          <p style={{marginTop: 8}}><b>{optionTwoCount} of {totalVotes}</b></p>
                        </Alert>
                      </Col>
                    </Row>
                  </Container>
                  </Card.Text>
              </Card.Body>
            </Card>
      </div>
    )
  }
}

function mapStateToProps ({authedUserReducer, userReducer, questionReducer}, props) {
  const { id } = props.match.params;

  return {
    id: id,
    authedUser: authedUserReducer.authedUser,
    questions: questionReducer.questions,
    users: userReducer.users,
  }
}

export default connect(mapStateToProps)(QuestionPoll)