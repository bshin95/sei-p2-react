import React from "react"
import Container from "./Container"

const Search = ({ onChange, onSubmit, value }) => {
  return (
    <form onSubmit={event => onSubmit(event)}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
