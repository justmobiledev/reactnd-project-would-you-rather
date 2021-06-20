

import React, { Component } from 'react'
import Question  from './Question'
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
  
export default QuestionList
