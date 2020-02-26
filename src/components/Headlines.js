import React, { Component } from "react"
import Axios from "axios"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Headlines extends Component {
  constructor() {
    super()
    this.state = {
      headliners: [],
      isLoading: true
    }

    this.fetchHeadlines = this.fetchHeadlines.bind(this)
  }
  componentDidMount() {
    this.fetchHeadlines()
  }

  fetchHeadlines = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=BeRuaOQEdujRzst2S84XtZljABFOj9ru
        `
      )
      // console.log(response.data.results)
      this.setState({
        headliners: response.data.results,
        isLoading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { headliners, isLoading } = this.state
    const headlines = headliners.map((headline, index) => {
      // console.log(headline.media)
      return (
        <div key={index}>
          <a href={headline.uri}>
            <h3>{headline.title}</h3>
          </a>
          <p>{headline.abstract}</p>
          <img src={headline.media["media-data"]} />
        </div>
      )
    })

    return (
      <div className="headline-news">
        <h1>Headline News</h1>
        {headlines}
      </div>
    )
  }
}

export default Headlines
