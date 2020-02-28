import React from "react"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container"
import Headlines from "./components/Headlines"
import MainArticle from "./components/MainArticle"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="headline-container">
        <MainArticle />
      </div>
      {/* <div className="divider"></div> */}
      <div className="home-page">
        <Container />
        <div className="divider"></div>
        <Headlines />
      </div>
      <Footer />
    </div>
  )
}

export default App
