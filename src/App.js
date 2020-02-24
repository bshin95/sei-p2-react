import React from "react"
import "./App.css"
import Axios from "axios"
import Search from "./components/Search"
import Header from "./components/Header"
import Container from "./components/Container"
// import NewsContainer from "./components/NewsContainer"
// import Headlines from "./components/Headlines"

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Container />
      {/* <NewsContainer /> */}
      {/* <Headlines /> */}
    </div>
  )
}

export default App
