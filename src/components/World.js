import React, { Component } from "react"
import Axios from "axios"
import image from "../images/placeholder.jpeg"
// import Search from "./Search"
// import { fetchWorld } from "./api-helper"

import { Route } from "react-router-dom"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      worlds: [],
      value: ""
    }

    this.fetchWorlds = this.fetchWorlds.bind(this)
  }
  componentDidMount() {
    this.fetchWorlds()
  }

  fetchWorlds = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=world-news&api-key=${NY_TIMES}
        `
      )
      this.setState({
        worlds: response.data.response.docs,
        isLoading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchWorlds(this.state.value)
  }

  render() {
    const { worlds } = this.state

    const worldNews = worlds.map((world, index) => {
      return (
        <div key={index}>
          <div className="world-container">
            <a href={world.web_url}>
              <h3>{world.abstract}</h3>
            </a>
            <p>{world.snippet}</p>
            <img
              className="container-image"
              src={
                world.multimedia.length
                  ? `https://static01.nyt.com/${world.multimedia[0].url}`
                  : image
              }
            />
          </div>
        </div>
      )
    })

    return (
      <div>
        <div className="news">
          <Route exact path={"/World"}>
            <h1>World</h1>
            {worldNews}
          </Route>
        </div>
      </div>
    )
  }
}

export default Container
