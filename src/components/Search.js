import React from "react"

const Search = ({ onChange, onSubmit, value }) => {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
