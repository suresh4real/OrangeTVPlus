import React, { useEffect, useState } from 'react'
import '../styles/search.css'
import Movielist from './Movielist';
const Search = () => {
    let [searchword, setSearchword] = useState("");
    let [movies, setMovies] = useState(null);

    useEffect(() => {
      fetch("http://localhost:3003/movies")
        .then((res) => { return res.json() })
        .then((data) => { setMovies(data) })
    }, [])

    return (
      <div className='search-comp'>
        <input className='specificity' type="text" placeholder='Search Movies,show and more'
          value={searchword} onChange={(e) => {
            setSearchword(e.target.value)
          }} />
        {movies && searchword == "" && <Movielist movies={movies} title="Popular Searches" />}
        {movies && searchword != "" &&
          <Movielist
            movies={movies.filter((m) => { return m.moviename.toUpperCase().includes(searchword.toUpperCase()) })} title="Search Result" />}
      </div>
    )
  }

export default Search