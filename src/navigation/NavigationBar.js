import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUserActions'
import { connect } from 'react-redux'

class NavigationBar extends Component {
  onLogout = () => {
    const{dispatch} = this.props;
    dispatch(setAuthedUser(undefined));

    this.props.history.push('/login');
  }

  render() {
    return (
      <Navbar>
        <Nav>
          <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/new_question'>New Question</Nav.Link>
          <Nav.Link as={NavLink} to='/leaderboard'>Leader Board</Nav.Link>
          <Nav.Link onClick={() => this.onLogout()}>Logout</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

function mapStateToProps ({}) {

  return {
  }
}

export default withRouter(connect(mapStateToProps)(NavigationBar))