

import React, { Component } from 'react'

class HomePage extends Component {
  render() {
    //const { id, replies } = this.props

    return (
      <div>
          <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Unanswered Questions</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Answered Questions</a>
            </li>
            </ul>
      </div>
    )
  }
}

export default HomePage


