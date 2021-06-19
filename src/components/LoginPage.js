import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, ProgressBar, Card, Container, Row, Col, Image, Button, Alert} from 'react-bootstrap';

class LoginPage extends Component {
  render() {
    //const { id, replies } = this.props

    return (
        <Card style={{ marginTop: 24, width: '50rem' }}>
         <Card.Header>
             Login
        </Card.Header>
        <Card.Body>
            <Card.Text>
            <Container>
                <Row>
                <Col>
                <Image style={{width: 200}} src={'https://github.com/justmobiledev/reactnd-project-would-you-rather/blob/main/images/would-you-rather.jpg'} roundedCircle />
                </Col>
              </Row>
              <Row>
                <Col>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Enter user name" />

                    <Button variant="primary">Login</Button>
                </Form.Group>
                </Form>
                </Col>
              </Row>
            </Container>
            </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

function mapStateToProps () {

  return {

  }
}

export default connect(mapStateToProps)(LoginPage)