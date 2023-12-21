import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import Movielist from './Movielist';
import { Sliderify } from "react-sliderify";

const Home = () => {

  let [movies, setMovies] = useState(null);
  let [sliderMovies, setsliderMovies] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3003/movies")
      .then(res => res.json())
      .then((data) => {
        setMovies(data);
        setsliderMovies(data.slice(0, 5))
      })
  }, [])


  return (<div className="home-comp">

    {/* <div className="home-page">
      <Sliderify rounded={true} showSlideStatus={true} slideDurationInSecs={1}>
        <div
          style={{ height: "500px", backgroundColor: "red", color: "white" }}
        >
          Slide 1
        </div>
        <div
          style={{ height: "500px", backgroundColor: "green", color: "white" }}
        >
          Slide 2
        </div>
        <div
          style={{ height: "500px", backgroundColor: "blue", color: "white" }}
        >
          Slide 3
        </div>
        <div
          style={{ height: "500px", backgroundColor: "lightblue", color: "white" }}
        >
          Slide 4
        </div>
      </Sliderify>
    </div> */}

  {/* ----------------------------------------------------------------------------------- */}
    {sliderMovies &&
      <Sliderify slideDurationInSecs={2} showSpot={false}>
        {
          sliderMovies.map((m) => {
            return (
              <div style={{ height: "500px", background: `url(${m.banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
              </div>
            )
          })
        }
      </Sliderify>}
    {movies && <Movielist movies={movies} title="All movies" />}

    {movies && <Movielist movies={movies.filter((v) => { return v.release_date < 2000 })} title="90's movies" />}

    {movies && <Movielist movies={movies.filter((m) => { return m.languages.includes("English") })} title="Hollywood movies" />}

    {movies && <Movielist movies={movies.filter((m) => { return m.rating >= 9 })} title="Top rated movies" />}


  </div>);
}

export default Home