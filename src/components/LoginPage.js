import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginPage extends Component {
  render() {
    //const { id, replies } = this.props

    return (
      <div>
          Login Page
      </div>
    )
  }
}

function mapStateToProps () {

  return {

  }
}

export default connect(mapStateToProps)(LoginPage)