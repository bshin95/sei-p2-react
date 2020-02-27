import React, { Component } from "react"
import Axios from "axios"
import image from "../images/placeholder.jpeg"
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
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${NY_TIMES}
        `
      )
      this.setState(
        {
          headliners: response.data.results
        },
        () => this.setState({ isLoading: false })
      )
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
    const { headliners } = this.state
    const headlines = headliners.map((headline, index) => {
      return (
        <>
          {!this.state.isLoading ? (
            <>
              <div key={index}>
                <a href={headline.uri}>
                  <h3>{headline.title}</h3>
                </a>
                <p>{headline.abstract}</p>
                <img
                  className="headline-image"
                  src={
                    headline.media.length
                      ? headline.media[0]["media-metadata"][2].url
                      : image
                  }
                />
              </div>
              <div className="splitter"></div>
            </>
          ) : null}
        </>
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
