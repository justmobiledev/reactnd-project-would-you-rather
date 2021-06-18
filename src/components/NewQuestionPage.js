import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card, Button, Form} from 'react-bootstrap';

class NewQuestionPage extends Component {
  render() {
    //const { id, replies } = this.props
    const type = 'radio 1';
    return (
      <div>
          <Card style={{ width: '18rem' }}>
          <Card.Header><h2>User asks:</h2></Card.Header>
            <Card.Body>
                <Card.Title><b>Would You Rather...</b></Card.Title>
                <Card.Text>
                    <Form>
                            <Form.Check
                            type={'radio'}
                            label={`option 1 ${type}`}
                            id={`disabled-default-${type}`}
                        />

                        <Form.Check
                            type={'radio'}
                            label={`option2 ${type}`}
                            id={`disabled-default-${type}`}
                        />
                </Form>
                </Card.Text>
                <Button variant="primary">Submit</Button>
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

export default connect(mapStateToProps)(NewQuestionPage)