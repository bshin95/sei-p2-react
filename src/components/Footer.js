import React from "react"
import Sports from "./Sports"
import Business from "./Business"
import World from "./World"
import US from "./US"
import Politics from "./Politics"
import Economy from "./Economy"
import Technology from "./Technology"
import Health from "./Health"
import { Link, Route, Switch } from "react-router-dom"

const Footer = () => (
  <header>
    <div className="divider"></div>
    <div className="footer-container">
      <div className="tabs">
        <nav className="sections">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/World">World</Link>
          </li>
          <li>
            <Link to="/US">US</Link>
          </li>
          <li>
            <Link to="/Politics">Politics</Link>
          </li>
          <li>
            <Link to="/Economy">Economy</Link>
          </li>
          <li>
            <Link to="/Business">Business</Link>
          </li>
          <li>
            <Link to="/Sports">Sports</Link>
          </li>
        </nav>
      </div>
    </div>
    <h1 className="footer-title"> ©2020 The Times</h1>
    <main>
      <Switch>
        <Route path="/World">
          <World />
        </Route>
        <Route path="/US">
          <US />
        </Route>
        <Route path="/Business">
          <Business />
        </Route>
        <Route path="/Politics">
          <Politics />
        </Route>
        <Route path="/Economy">
          <Economy />
        </Route>
        <Route path="/Sports">
          <Sports />
        </Route>
      </Switch>
    </main>
  </header>
)

export default Footer
