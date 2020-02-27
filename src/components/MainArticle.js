import React, { Component } from "react"
import Axios from "axios"
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
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=BeRuaOQEdujRzst2S84XtZljABFOj9ru
        `
      )
      // console.log(response.data)
      // console.log(response.data.results)
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
    // console.log(mainHeadliners[0])
    const mainHeadlines = mainHeadliners.map((main, index) => {
      // console.log(mainHeadliners[0])
      return (
        <div key={index}>
          <a href={main.uri}>
            <h3>{main.title}</h3>
          </a>
          <p>{main.abstract}</p>
          <img src={main.media["media-data"]} />
        </div>
      )
    })

    // const { mainHeadliners } = this.state
    // console.log(mainHeadliners[0])
    // const mainHeadlines = mainHeadliners[0]
    // return (
    //   <div>
    //     <a href={mainHeadlines.uri}>
    //       <h3>{mainHeadlines.title}</h3>
    //     </a>
    //     <p>{mainHeadlines.abstract}</p>
    //     <img src={mainHeadlines.media["media-data"]} />
    //   </div>

    return (
      <div className="main-news">
        <h1>Headline News</h1>
        {mainHeadlines}
      </div>
    )
  }
}

export default Headlines
