import React, { Component } from "react"
import Axios from "axios"
import Search from "./Search"

import { Route, Link } from "react-router-dom"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      politics: [],
      value: "",
      isLoading: true
    }

    this.fetchPolitics = this.fetchPolitics.bind(this)
  }
  componentDidMount() {
    this.fetchPolitics()
  }

  fetchPolitics = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=politics-news&api-key=BeRuaOQEdujRzst2S84XtZljABFOj9ru
        `
      )
      this.setState({
        politics: response.data.response.docs,
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
    this.fetchPolitics(this.state.value)
  }

  render() {
    const { politics, isLoading } = this.state

    const articles = politics.map((politic, index) => {
      return (
        <div key={index}>
          <a href={politic.web_url}>
            <h3>{politic.abstract}</h3>
          </a>
          <p>{politic.snippet}</p>
          <img src={politic.multimedia.url} />
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
