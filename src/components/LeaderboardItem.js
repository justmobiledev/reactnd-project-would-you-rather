

import React, { Component } from 'react'
import {Button, Badge, Card, Container, Row, Col, Image,} from 'react-bootstrap';

class LeaderboardItem extends Component {
  render() {
      const {item} = this.props;

    return (

        <Card style={{ marginTop: 24, width: '50rem' }}>
            <Card.Body>
                <Card.Text>
                <Container>
                  <Row>
                    <Col>
                      <Image style={{width: 160}} src={item.avatarURL} roundedCircle />
                    </Col>
                    <Col xs={6}>
                        <h1>{item.name}</h1>
                      <p>
                        <b>Answered Questions: {item.answerCount}</b><br/>
                        <b>Submitted Questions: {item.questionCount}</b>
                      </p>
                    </Col>
                    <Col>
                      <Button variant="primary"  style={{marginTop: 48, height: 48}}>
                        Score: <Badge variant="light">{item.score}</Badge>
                        </Button>
                    </Col>
                  </Row>
                </Container>
                </Card.Text>
            </Card.Body>
          </Card>

    )
  }
}

export default LeaderboardItem;