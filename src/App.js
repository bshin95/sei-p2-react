import React from "react"
import "./App.css"
import Axios from "axios"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container"
// import NewsContainer from "./components/NewsContainer"
import Headlines from "./components/Headlines"
import World from "./components/World"
import US from "./components/US"
import Politics from "./components/Politics"
import Business from "./components/Business"
import Economy from "./components/Economy"
import Sports from "./components/Sports"

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="divider"></div> */}
      <div className="home-page">
        <Container />
        <Headlines />
      </div>
      <div className="grid-sheet">
        <div className="grid-one">
          <World />
          <US />
        </div>
        <div className="grid-two">
          <Politics />
          <Business />
        </div>
        <div className="grid-three">
          <Economy />
          <Sports />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
