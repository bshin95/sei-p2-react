import React, { Component } from "react"
import Axios from "axios"
import image from "../images/placeholder.jpeg"

import { Route } from "react-router-dom"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      politics: [],
      value: ""
    }

    this.fetchPolitics = this.fetchPolitics.bind(this)
  }
  componentDidMount() {
    this.fetchPolitics()
  }

  fetchPolitics = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=politics-news&api-key=${NY_TIMES}
        `
      )
      this.setState({
        politics: response.data.response.docs
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
    this.fetchPolitics(this.state.value)
  }

  render() {
    const { politics } = this.state

    const articles = politics.map((politic, index) => {
      return (
        <div key={index}>
          <div className="politics-container">
            <a href={politic.web_url}>
              <h3>{politic.abstract}</h3>
            </a>
            <p>{politic.snippet}</p>
            <img
              className="container-image"
              src={
                politic.multimedia.length
                  ? `https://static01.nyt.com/${politic.multimedia[0].url}`
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
          <Route exact path={"/Politics"}>
            <h1>Politics</h1>
            {articles}
          </Route>
        </div>
      </div>
    )
  }
}

export default Container
