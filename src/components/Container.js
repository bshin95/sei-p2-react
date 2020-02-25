import React, { Component } from "react"
import Axios from "axios"
import Search from "./Search"

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

    console.log("inside the constructor")
  }
  componentDidMount() {
    this.fetchNews()
    console.log("inside the component")
  }

  fetchNews = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${event}&api-key=BeRuaOQEdujRzst2S84XtZljABFOj9ru
        `
      )
      // console.log(response.data.response.docs)
      this.setState({
        titles: response.data.response.docs,
        isLoading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    console.log("working change")
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("working submit")
    this.fetchNews(this.state.value)
  }

  render() {
    const { titles, isLoading } = this.state
    // console.log(titles)

    const articles = titles.map((title, index) => {
      return (
        <div key={index}>
          <h3>{title.abstract}</h3>
          <p>{title.snippet}</p>
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
//wrap each component in a div and set a class to target each of them

export default Container
