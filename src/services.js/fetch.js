import React from "react"

fetchNews = async event => {
  try {
    const response = await Axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=world-news&api-key=BeRuaOQEdujRzst2S84XtZljABFOj9ru
      `
    )
    this.setState({
      titles: response.data.response.docs,
      isLoading: false
    })
  } catch (error) {
    console.log(error)
  }
}

export default fetch
