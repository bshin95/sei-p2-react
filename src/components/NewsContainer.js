import React from "react"

// import { Link } from "react-router-dom"

const NewsContainer = ({ news }) =>
  news.map((news, index) => {
    return (
      // <Link to={`/StockDetails/${stock.symbol}`}>
      <div className="news" key={index}>
        <h4 className="title">{response.data.docs.abstract}</h4>
        <div className="summary">
          <p className="snippet">{response.data.docs.snippet}</p>
        </div>
      </div>
      // </Link>
    )
  })

export default NewsContainer
