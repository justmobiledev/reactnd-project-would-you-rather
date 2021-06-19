import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavigatinBar () {
  return (
    <Navbar>
      <Nav>
        <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
        <Nav.Link as={NavLink} to='/new_question'>New Question</Nav.Link>
        <Nav.Link as={NavLink} to='/leaderboard'>Leader Board</Nav.Link>
        <Nav.Link as={NavLink} to='/login'>Logout</Nav.Link>
      </Nav>
    </Navbar>
  )
}
