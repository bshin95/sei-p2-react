import React, { Component } from "react"
import Axios from "axios"
import Search from "./Search"

import { Route, Link } from "react-router-dom"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      economies: [],
      value: "",
      isLoading: true
    }

    this.fetchEconomy = this.fetchEconomy.bind(this)
  }
  componentDidMount() {
    this.fetchEconomy()
  }

  fetchEconomy = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=economy-news&api-key=BeRuaOQEdujRzst2S84XtZljABFOj9ru
        `
      )
      this.setState({
        economies: response.data.response.docs,
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
    this.fetchEconomy(this.state.value)
  }

  render() {
    const { economies, isLoading } = this.state

    const articles = economies.map((economy, index) => {
      return (
        <div key={index}>
          <a href={economy.web_url}>
            <h3>{economy.abstract}</h3>
          </a>
          <p>{economy.snippet}</p>
          <img src={economy.multimedia.url} />
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
