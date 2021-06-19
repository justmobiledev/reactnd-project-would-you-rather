import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, Container, Row, Col, Image, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class Question extends Component {

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

onViewPoll = (questionId) => {
  this.props.history.push(`/poll/${questionId}`)
}

  submit = () => {
    console.log('submit');
  }

  render() {
    /* const { id, optionOne, optionTwo } = this.props;

    const optionOneText = optionOne ? optionOne.text : '';
    const optionTwoText = optionTwo ? optionTwo.text : '';*/
    console.log('here');
    const question = this.props.question;
    const users = this.props.users;
    const author = users[question.author];
    const authorName = author.name;
    console.log(question);
  
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
                      <p>{question.optionOne.text}?</p>
                      <p><b>OR</b></p>
                      <p>{question.optionTwo.text}?</p>
                      <Button style={{width: '100%'}}  variant="info" onClick={()=>this.onViewPoll(question.id)}>View Poll</Button>
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

export default withRouter(connect(mapStateToProps)(Question))

