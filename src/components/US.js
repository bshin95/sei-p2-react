import React, { Component } from "react"
import Axios from "axios"
import image from "../images/placeholder.jpeg"

import { Route } from "react-router-dom"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usNews: [],
      value: ""
    }

    this.fetchUS = this.fetchUS.bind(this)
  }
  componentDidMount() {
    this.fetchUS()
  }

  fetchUS = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=US-news&api-key=${NY_TIMES}
        `
      )
      this.setState({
        usNews: response.data.response.docs
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
    this.fetchUS(this.state.value)
  }

  render() {
    const { usNews } = this.state

    const articles = usNews.map((usNew, index) => {
      return (
        <div key={index}>
          <div className="us-container">
            <a href="usNew.web_url">
              <h3>{usNew.abstract}</h3>
            </a>
            <p>{usNew.snippet}</p>
            <img
              className="container-image"
              src={
                usNew.multimedia.length
                  ? `https://static01.nyt.com/${usNew.multimedia[0].url}`
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
          <Route exact path={"/US"}>
            <h1>U.S.</h1>
            {articles}
          </Route>
        </div>
      </div>
    )
  }
}

export default Container
