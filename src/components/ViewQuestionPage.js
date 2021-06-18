import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, Button, Form} from 'react-bootstrap';

class ViewQuestionPage extends Component {

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
    const { id, optionOne, optionTwo } = this.props;
    const optionOneText = optionOne.text;
    const optionTwoText = optionTwo.text;

    const type = 'radio 1';
    return (
      <div>
          <Card style={{ width: '40rem' }}>
          <Card.Header><h2>Create New Question:</h2></Card.Header>
            <Card.Body>
                <Card.Title><b>Would You Rather...</b></Card.Title>
                <Card.Text>
                    <Form>
                        <div>
                        <Form.Control type="option1" onChange={this.handleInputChange} placeholder="Enter first option here" />
                        <b>OR</b>
                        <Form.Control type="option2" onChange={this.handleInputChange} placeholder="Enter second option here" />
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

function mapStateToProps () {

  return {

  }
}

export default connect(mapStateToProps)(ViewQuestionPage)