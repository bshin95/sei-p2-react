import React from "react"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container"
import Headlines from "./components/Headlines"
// import World from "./components/World"
// import US from "./components/US"
// import Politics from "./components/Politics"
// import Business from "./components/Business"
// import Economy from "./components/Economy"
// import Sports from "./components/Sports"
import MainArticle from "./components/MainArticle"

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="divider"></div> */}
      <div className="headline-container">
        <MainArticle />
      </div>
      <div className="divider"></div>

      <div className="home-page">
        <Container />
        <Headlines />
      </div>
      <Footer />
    </div>
  )
}

export default App
