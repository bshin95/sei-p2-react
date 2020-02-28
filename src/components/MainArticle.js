import React, { Component } from "react"
import Axios from "axios"
import image from "../images/placeholder.jpeg"
import World from "./World"

const NY_TIMES = process.env.REACT_APP_NY_TIMES_TOKEN

class Headlines extends Component {
  constructor() {
    super()
    this.state = {
      mainHeadliners: [],
      isLoading: true
    }

    this.fetchMainHeadline = this.fetchMainHeadline.bind(this)
  }
  componentDidMount() {
    this.fetchMainHeadline()
  }

  fetchMainHeadline = async event => {
    try {
      const response = await Axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${NY_TIMES}
        `
      )
      console.log(response.data.results)
      this.setState({
        mainHeadliners: response.data.results,
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
    const { mainHeadliners } = this.state
    mainHeadliners.length = 1
    const mainHeadlines = mainHeadliners.map((main, index) => {
      return (
        <>
          {!this.state.isLoading ? (
            <>
              <div key={index}>
                <div className="main-container">
                  <div className="inner-container">
                    <img
                      className="main-image"
                      src={
                        main.media.length
                          ? main.media[0]["media-metadata"][1].url
                          : image
                      }
                    />
                  </div>
                  <div className="main-info">
                    <a href={main.uri}>
                      <h3>{main.title}</h3>
                    </a>
                    <p>{main.abstract}</p>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      )
    })
    return (
      <div className="main-news">
        <h1>Top Trending News</h1>
        {mainHeadlines}
      </div>
    )
  }
}

export default Headlines
