import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Form, Card, Container, Row, Col, Image, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import {handleUpdateQuestion} from '../actions/questionActions';

class AnswerQuestion extends Component {
  constructor(){
    super();
    this.state = {
        optionOneChecked: false,
        optionTwoChecked: false,
    }
  }

  componentDidMount = () => {
    // Check login state
    if (!this.props.authedUser) {
        this.props.history.push(`/login`)
    }
  }

  handleClick = (event) => {
    const target = event.target;
    var value = target.value;
    const name = target.name; 

    if (name === 'option_one_radio' && value === 'on') {
      this.setState({optionOneChecked: true});
      this.setState({optionTwoChecked: false});
    }
    else {
      this.setState({optionOneChecked: false});
      this.setState({optionTwoChecked: true});
    }
  }

  submit = () => {
    const { id, questions, authedUser } = this.props;
    const question = questions[id];
    const optionOneVotes = question.optionOne.votes.slice();
    const optionTwoVotes = question.optionTwo.votes.slice();

    if (this.state.optionOneChecked) {
      optionOneVotes.push(authedUser.id);
    }
    else {
      optionTwoVotes.push(authedUser.id);
    }

    const updatedQuestion = {...question, 
      optionOne: {...question.optionOne,votes: optionOneVotes},
      optionTwo: {...question.optionTwo,votes: optionTwoVotes}};
      
    const{dispatch} = this.props;  
    dispatch(handleUpdateQuestion(updatedQuestion));

    this.props.history.push(`/poll/${question.id}`)
  }

  render() {
    const { id, questions, users } = this.props;
    let question;
    let optionOneText = '';
    let optionTwoText = '';
    if (questions) {
      question = questions[id];
      optionOneText = question.optionOne.text + '?';
      optionTwoText = question.optionTwo.text + '?';
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
                        <h1>Would you rather...</h1>

                        <Form>
                            <Form.Check
                              type={'radio'}
                              label={optionOneText}
                              name="option_one_radio"
                              id={`option_one_radio`}
                              checked={this.state.optionOneChecked}
                              onClick={this.handleClick}
                            />
                            <b>OR</b>
                            <Form.Check
                              type={'radio'}
                              label={optionTwoText}
                              name="option_two_radio"
                              id={`option_two_radio`}
                              checked={this.state.optionTwoChecked}
                              onClick={this.handleClick}
                            />
                      </Form>
                        <Button className="mx-auto my-4" variant="primary" type="submit" onClick={()=>this.submit()}>Submit</Button>
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

export default connect(mapStateToProps)(AnswerQuestion)