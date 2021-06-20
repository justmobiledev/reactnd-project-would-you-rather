import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, Card, Container, Row, Col, Image, Button, Alert} from 'react-bootstrap';
import {setAuthedUser} from '../actions/authedUserActions'
import {withRouter} from 'react-router-dom';

class LoginPage extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            invalidLogin: false
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const userName = target.value;

        this.setState({userName: userName});
        this.setState({invalidLogin: false});
    }

    submit = () => {
        // Check user name
        const users = this.props.users;
        const user = users[this.state.userName];
        if (!user) {
            this.setState({invalidLogin: true});
        }
        else {

            const { dispatch } = this.props;
            // Load initial data
            dispatch(setAuthedUser(user));

            // Show Home page
            this.props.history.push(`/`)
        }
      }

  render() {
    const invalidLogin = this.state.invalidLogin;

    return (
        <Card style={{ marginTop: 24, width: '30rem' }}>
         <Card.Header>
             Login
        </Card.Header>
        <Card.Body>
            <Card.Text>
            <Container>
                <Row>
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <Image style={{width: 200}} src={'https://github.com/justmobiledev/reactnd-project-would-you-rather/blob/main/images/would-you-rather.jpg?raw=true'} roundedCircle />
                </Col>
              </Row>
              <Row>
                <Col>
                    <Form className="mx-auto my-4">
                    <Form.Group controlId="formLogin">
                        <Form.Control type="text" placeholder="Enter user name" onChange={this.handleInputChange}/>
                    </Form.Group>
                    {
                      invalidLogin && (
                        <Alert variant={'danger'} className="mx-auto my-2" >
                            The user name is invalid. Please try again.
                        </Alert>
                      )
                  }
                    <Button className="mx-auto my-4" style={{width: '100%'}} variant="primary" onClick={()=>this.submit()}>Login</Button>
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

function mapStateToProps ({userReducer}) {

  return {
    users: userReducer.users,
  }
}

export default withRouter(connect(mapStateToProps)(LoginPage))