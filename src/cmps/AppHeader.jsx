import React from 'react'
import { NavLink } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <header className="main-header">
      <nav className="header-nav container">
        <h1 className="logo">Toy's R Me</h1>
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/toy">
          Toys
        </NavLink>
        <NavLink className="header-link" to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className="header-link" to="/about">
          About
        </NavLink>
      </nav>
    </header>
  )
}
