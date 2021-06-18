import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavigatinBar () {
  return (
    <Navbar>
      <Nav>
        <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
        <Nav.Link as={NavLink} to='/newquestion'>New Question</Nav.Link>
        <Nav.Link as={NavLink} to='/leaderboard'>Leader Board</Nav.Link>
        <Nav.Link as={NavLink} to='/userprofile'>User profile</Nav.Link>
        <Nav.Link as={NavLink} to='/loginpage'>Logout</Nav.Link>
      </Nav>
    </Navbar>
  )
}
