import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, Button, Form} from 'react-bootstrap';
import {addQuestion} from '../actions/questionActions';
import uuid from 'react-uuid';

class NewQuestionPage extends Component {
    constructor(){
        super();
        this.state = {
            optionOne: '',
            optionTwo: ''
        }
    }

    handleInputChange = (e) => {
        e.preventDefault()
        const target = e.target;
        var value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    
        //console.log('name: '+name+', value: '+value);
        
    }
    
      submit = () => {
        const optionOne = {
            votes: [],
            text: this.state.optionOne,
          };
  
          const optionTwo = {
            votes: [],
            text: this.state.optionTwo,
          };

        const question = {id: uuid(), author: this.props.authedUser, timestamp: new Date().getTime(), optionOne: optionOne, optionTwo: optionTwo};
        // dispatch add question
        const {dispatch} = this.props;
        dispatch(addQuestion(question));
      }

  render() {
    return (
      <div style={{ marginTop: 24, marginBottom: 200}}>
          <Card style={{ width: '40rem' }}>
          <Card.Header><h2>Create New Question:</h2></Card.Header>
            <Card.Body>
                Complete the question:
                <Card.Title><b>Would You Rather...</b></Card.Title>
                <Card.Text>
                    <Form>
                        <div>
                        <Form.Control name="optionOne" type="optionOne" placeholder="Enter first option here" onChange={this.handleInputChange} />
                        <b>OR</b>
                        <Form.Control name="optionTwo" type="optionTwo" placeholder="Enter second option here" onChange={this.handleInputChange} />
                        </div>
                    </Form>
                </Card.Text>
                <Button variant="primary" type="submit" onClick={()=>this.submit()}>Submit</Button>
            </Card.Body>
            </Card>
      </div>
    )
  }
}

function mapStateToProps ({authedUserReducer}) {

  return {
      authedUser: authedUserReducer.authedUser
  }
}

export default connect(mapStateToProps)(NewQuestionPage)