import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, Container, Row, Col, Image, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class Question extends Component {
  onAnswerQuestion = (questionId) => {
    this.props.history.push(`/answer/${questionId}`)
  }

  render() {
    const question = this.props.question;
    const users = this.props.users;
    let author = '';
    let authorName = '';
    let optionOneText = '';
    let optionTwoText = '';

    if (question && users) {
      optionOneText = question.optionOne.text;
      optionTwoText = question.optionTwo.text;

      author = users[question.author];
      authorName = author.name;
    }
  
    return (
      <div style={{marginTop: 24}}>
          <Card style={{ width: '38rem' }}>
            <Card.Header><h3>{authorName} asks:</h3></Card.Header>
              <Card.Body>
                  <Card.Text>
                    <Container>
                      <Row>
                        <Col>
                          <Image style={{width: 160}} src={author.avatarURL} roundedCircle />
                        </Col>
                        <Col>
                          <h3>Would you rather...</h3>
                          {optionOneText}?<br/>
                          <b>OR</b><br/>
                          {optionTwoText}?
                          <Button style={{width: '100%'}}  variant="info" onClick={()=>this.onAnswerQuestion(question.id)}>Answer Question</Button>
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

function mapStateToProps ({userReducer}) {
  return {
    users: userReducer.users
  }
}

export default withRouter(connect(mapStateToProps)(Question));