

import React, { Component } from 'react'
import Question  from './Question'
import {connect} from 'react-redux'
import {isEmpty} from 'lodash/fp'

class QuestionList extends Component {
  render() {
      const questions = this.props.questions;
    
    return (
      <div>
          {
              !isEmpty(questions) ? 
              questions.map((question) => (
                    <Question key={question.id} question={question}/>
              )) : null
          }
      </div>
    )
  }
}

function mapStateToProps ({}) {

    return {
    }
  }
  
  export default connect(mapStateToProps)(QuestionList)
