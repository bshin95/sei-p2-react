import React, { Component } from "react"
import Axios from "axios"
import Search from "./Search"
import image from "../images/placeholder.jpeg"
import { Route } from "react-router-dom"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: [],
      value: "",
      isLoading: true
    }

    this.fetchNews = this.fetchNews.bind(this)
  }
  componentDidMount() {
    this.fetchNews()
  }

  fetchNews = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
          this.state.value ? event : "U.S.-news"
        }&api-key=${NY_TIMES}
        `
      )
      this.setState({
        titles: response.data.response.docs,
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
    this.fetchNews(this.state.value)
  }

  render() {
    const { titles } = this.state
    const articles = titles.map((title, index) => {
      return (
        <div key={index}>
          <a href={title.web_url}>
            <h3>{title.abstract}</h3>
          </a>
          <p>{title.lead_paragraph}</p>
          <img
            className="container-image"
            src={
              title.multimedia.length
                ? `https://static01.nyt.com/${title.multimedia[0].url}`
                : image
            }
          />
        </div>
      )
    })

    return (
      <div>
        <div className="news">
          <Route exact path={"/"}>
            <h1>Your news</h1>
            <Search
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              value={this.state.value}
            />
            {articles}
          </Route>
        </div>
      </div>
    )
  }
}

export default Container

// `https://static01.nyt.com/${title.multimedia[0].url}`
//   ? `https://static01.nyt.com/${title.multimedia[0].url}`
//   : image
