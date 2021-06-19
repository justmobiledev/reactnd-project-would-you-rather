

import React, { Component } from 'react'
import {Card, Tabs, Tab} from 'react-bootstrap'

class HomePage extends Component {
    constructor(){
        super();
        this.state = {
            activeTab: 'unanswered_questions'
        }
    }


  render() {
    return (
      <div>
         <Card style={{ width: '40rem' }}>
         <Card.Body>
            <Tabs
                id="question-tabs"
                activeKey={this.state.activeTab}
                onSelect={(k) => this.setState({activeTab: k})}>
                <Tab eventKey="unanswered_questions" title="Unanswered Questions">
                </Tab>
                <Tab eventKey="answered_questions" title="Answered Questions">

                </Tab>
            </Tabs>
        </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HomePage


