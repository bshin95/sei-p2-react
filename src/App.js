import React from "react"
import "./App.css"
import Axios from "axios"
import Header from "./components/Header"
import Container from "./components/Container"
// import NewsContainer from "./components/NewsContainer"
import Headlines from "./components/Headlines"

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Headlines />
      {/* <NewsContainer /> */}
      {/* <Headlines /> */}
    </div>
  )
}

export default App
