import React, { Component } from "react"
import Axios from "axios"
const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Headlines extends Component {
  constructor() {
    super()
    this.state = {
      headliners: [],
      // summary: "",
      // image: ""
      isLoading: true
    }

    this.fetchHeadlines = this.fetchHeadlines.bind(this)

    console.log("inside the constructor")
  }
  componentDidMount() {
    this.fetchHeadlines()
    console.log("inside the component")
  }

  fetchHeadlines = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=BeRuaOQEdujRzst2S84XtZljABFOj9ru
        `
      )
      console.log(response.data.results)
      this.setState({
        headliners: response.data.results,
        // summary: response.data.docs.snippet,
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

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    const { headliners, isLoading } = this.state
    console.log(headliners)

    const headlines = headliners.map((headline, index) => {
      return (
        <div key={index}>
          <h3>{headline.title}</h3>
          <p>{headline.abstract}</p>
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
