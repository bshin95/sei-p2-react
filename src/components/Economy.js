import React, { Component } from "react"
import Axios from "axios"
import image from "../images/placeholder.jpeg"

import { Route } from "react-router-dom"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      economies: [],
      value: ""
    }

    this.fetchEconomy = this.fetchEconomy.bind(this)
  }
  componentDidMount() {
    this.fetchEconomy()
  }

  fetchEconomy = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=economy-news&api-key=${NY_TIMES}
        `
      )
      this.setState({
        economies: response.data.response.docs
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
    this.fetchEconomy(this.state.value)
  }

  render() {
    const { economies } = this.state

    const articles = economies.map((economy, index) => {
      return (
        <div key={index}>
          <div className="economy-container">
            <a href={economy.web_url}>
              <h3>{economy.abstract}</h3>
            </a>
            <p>{economy.snippet}</p>
            <img
              className="container-image"
              src={
                economy.multimedia.length
                  ? `https://static01.nyt.com/${economy.multimedia[0].url}`
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
          <Route exact path={"/Economy"}>
            <h1>Economy</h1>
            {articles}
          </Route>
        </div>
      </div>
    )
  }
}

export default Container
