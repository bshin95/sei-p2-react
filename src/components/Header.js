import React from "react"
import { Link, Route } from "react-router-dom"

const Header = () => (
  <header>
    <h1>NY Times App</h1>
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
      </nav>
    </div>
  </header>
)

export default Header
