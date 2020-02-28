import React, { Component } from "react"
import Axios from "axios"

import { Route } from "react-router-dom"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: [],
      value: ""
    }

    this.fetchBusiness = this.fetchBusiness.bind(this)
  }
  componentDidMount() {
    this.fetchBusiness()
  }

  fetchBusiness = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=health&api-key=${NY_TIMES}
        `
      )
      this.setState({
        businesses: response.data.response.docs
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
    this.fetchBusiness(this.state.value)
  }

  render() {
    const { businesses } = this.state

    const articles = businesses.map((business, index) => {
      return (
        <div key={index}>
          <a href={business.web_url}>
            <h3>{business.abstract}</h3>
          </a>
          <p>{business.snippet}</p>
          <img src={business.multimedia.url} />
        </div>
      )
    })

    return (
      <div>
        <div className="news">
          <Route exact path={"/Business"}>
            <h1>Business</h1>
            {articles}
          </Route>
        </div>
      </div>
    )
  }
}

export default Container
