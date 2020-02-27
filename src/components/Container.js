import React, { Component } from "react"
import Axios from "axios"
import Search from "./Search"
import image from "../images/photo-1504711434969-e33886168f5c.jpeg"

import { Route, Link } from "react-router-dom"
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
        }&api-key=BeRuaOQEdujRzst2S84XtZljABFOj9ru
        `
      )
      console.log(response.data.response.docs)
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
    const { titles, isLoading } = this.state

    // https://static01.nyt.com/images/2020/02/24/world/24ambriefing-us-virus01/merlin_169382601_91267b11-e3ef-49f7-957b-8fe343a15ff3-superJumbo.jpg?quality=90&auto=webp

    // "https://static01.nyt.com/images/2020/02/24/world/24ambriefing-us01-AMCORE/merlin_169382601_91267b11-e3ef-49f7-957b-8fe343a15ff3-articleLarge.jpg"

    const articles = titles.map((title, index) => {
      return (
        <div key={index}>
          <a href={title.web_url}>
            <h3>{title.abstract}</h3>
          </a>
          <p>{title.lead_paragraph}</p>
          <img
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
