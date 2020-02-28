import React, { Component } from "react"
import Axios from "axios"
import image from "../images/placeholder.jpeg"

import { Route } from "react-router-dom"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sports: [],
      value: ""
    }

    this.fetchSports = this.fetchSports.bind(this)
  }
  componentDidMount() {
    this.fetchSports()
  }

  fetchSports = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=${NY_TIMES}
        `
      )
      this.setState({
        sports: response.data.response.docs
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
    this.fetchSports(this.state.value)
  }

  render() {
    const { sports } = this.state

    const articles = sports.map((sport, index) => {
      return (
        <div key={index}>
          <div className="sports-container">
            <a href={sport.web_url}>
              <h3>{sport.abstract}</h3>
            </a>
            <p>{sport.snippet}</p>
            <img
              className="container-image"
              src={
                sport.multimedia.length
                  ? `https://static01.nyt.com/${sport.multimedia[0].url}`
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
          <Route exact path={"/Sports"}>
            <h1>Sports</h1>
            {articles}
          </Route>
        </div>
      </div>
    )
  }
}

export default Container
