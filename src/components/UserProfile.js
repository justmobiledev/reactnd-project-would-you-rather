import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserProfile extends Component {
  render() {
    //const { id, replies } = this.props

    return (
      <div>
          UserProfile
      </div>
    )
  }
}

function mapStateToProps () {

  return {

  }
}

export default connect(mapStateToProps)(UserProfile)