import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, Button, Form} from 'react-bootstrap';
import {handleAddQuestion} from '../actions/questionActions';
import uuid from 'react-uuid';

class AddQuestion extends Component {
    constructor(){
        super();
        this.state = {
            optionOne: '',
            optionTwo: ''
        }
    }

    componentDidMount = () => {
        // Check login state
        if (!this.props.authedUser) {
            this.props.history.push(`/login`);
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const target = e.target;
        var value = target.value;
        const name = target.name;

        this.setState({[name]: value});  
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

      const id = uuid();
      const question = {id: uuid(), author: this.props.authedUser.id, timestamp: new Date().getTime(), optionOne: optionOne, optionTwo: optionTwo};
      
      // Add question
      const{dispatch} = this.props;
      dispatch(handleAddQuestion(question));

      // Redirect to home
      this.props.history.push(`/`);
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
    authedUser: authedUserReducer ? authedUserReducer.authedUser : undefined,
  }
}

export default connect(mapStateToProps)(AddQuestion);