import React, { Component } from 'react'
import { connect } from 'react-redux';
import {ProgressBar, Card, Container, Row, Col, Image, Button, Alert} from 'react-bootstrap';

class QuestionPoll extends Component {

  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;

    console.log('value: '+value);
    
    /* if(target.type === 'checkbox'){
        if(target.checked){
            this.state.hobbies[value] = value;   
        }else{
            this.state.hobbies.splice(value, 1);
        }
    }else{
        this.setState({
            [name]: value
        });
    }   */ 
    
}

  submit = () => {
    console.log('submit');
  }

  render() {
    const { id, questions, users } = this.props;
   // const question = questions[id];
   let question;
   let optionOneText = '';
   let optionTwoText = '';
   let totalVotes = 0;
   let optionOneCount = 0;
   let optionTwoCount = 0;
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
      <div style={{marginBottom: 200}}>
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

                          <ProgressBar style={{marginTop: 16}} now={(optionOneCount/totalVotes) * 100} />
                          <p style={{marginTop: 8}}><b>{optionOneCount} of {totalVotes}</b></p>
                        </Alert>

                        <Alert variant={optionTwoVariant}>
                          Would you rather {optionTwoText}?

                          <ProgressBar style={{marginTop: 16}} now={(optionTwoCount/totalVotes) * 100} />
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

function mapStateToProps ({userReducer, questionReducer}, props) {
  const { id } = props.match.params;

  return {
    id: id,
    questions: questionReducer.questions,
    users: userReducer.users,
  }
}

export default connect(mapStateToProps)(QuestionPoll)