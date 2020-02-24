import React, { Component } from "react"
import Axios from "axios"
import Search from "./Search"
// import { Switch, Route, Link } from "react-router-dom"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Container extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      summary: "",
      // image: ""
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
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=BeRuaOQEdujRzst2S84XtZljABFOj9ru
        `
      )
      console.log(response)
      this.setState({
        // title: response.data.docs.abstract,
        // summary: response.data.docs.snippet
      })
      // this.setState({
      //   title: response.data
      //   // summary: response.data.docs.snippet,
      //   // isLoading: false
      //   // image: response.data.docs.multimedia
      // })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log("inside the render")
    return (
      <div>
        <h2>Hello</h2>
      </div>
    )
  }
}

export default Container
