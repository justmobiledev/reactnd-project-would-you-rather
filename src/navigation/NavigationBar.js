import React, {Component, Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Image } from 'react-bootstrap'
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
    const authedUser = this.props.authedUser;
    let name = '';
    let avatarURL = '';
    if (authedUser) {
      name = authedUser.name;
      avatarURL = authedUser.avatarURL;
    }

    return (
      <Navbar>
        <Nav>
          <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/add'>Add Question</Nav.Link>
          <Nav.Link as={NavLink} to='/leaderboard'>Leader Board</Nav.Link>
          <Nav.Link onClick={() => this.onLogout()}>Logout</Nav.Link>
          {
            name && (
              <Fragment>
                <Image style={{width: 40}} src={avatarURL} roundedCircle />
                <Nav.Link><b>Welcome {name}</b></Nav.Link>
              </Fragment>
            )
          }
        </Nav>
      </Navbar>
    )
  }
}

function mapStateToProps ({authedUserReducer}) {

  return {
    authedUser: authedUserReducer.authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(NavigationBar))