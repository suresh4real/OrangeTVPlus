import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import '../styles/description.css'
import Movielist from './Movielist'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Description = () => {

  let { id } = useParams();
  console.log("Fetching movie data for ID:", id); 
  let [movie, setMovie] = useState(null);
  let [movies, setMovies] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3003/movies/${id}`)  
    // fetch(`http://localhost:3003/movies/${id.toString()}`)

      .then(res => res.json())
      .then((data) => {
        console.log("Fetched Movie Data:", data); // ✅ Add this here
        setMovie(data)
        console.log(data);
      })

    fetch(`http://localhost:3003/movies`)
      .then(res => res.json())
      .then((data) => {
        setMovies(data)
        console.log(data);
      })
  }, [])

  let handleDelete = () => {
    if (window.confirm("Are you sure to Delete?")) {
      fetch(`http://localhost:3003/movies/${id}`, {
        // fetch("http://localhost:3003/movies/"+id, {
        method: "DELETE"
      })
        .then(() => {
          toast("Movie is deleted from database");
          setTimeout(() => { navigate("/") }, 2000);
        })
    }
  }

  return (<div className="description-comp">
    {console.log("Movie Data: ", movie)}  {/* Debugging line */} 
    {movie &&
      <>
        <div className="movie-description" style={{ background: `url(${movie.banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className="container">
            <img src={movie.poster} alt="" />
            <div className="details">
              <h1>{movie.moviename}</h1>
              <span>{movie.languages.join("  ,  ")}</span>
              <span>{movie.genre}</span>
              <span>{movie.rating} 🌟🌟🌟🌟</span>
              <p>{movie.description}</p>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="delete-button" onClick={handleDelete}>Delete Movie</button>

          <Link to={`/update/${id}`} className="btn-udt">

            <button className="update-button">Update Movie</button>

          </Link>
        </div>
        <div className="trailer">
          <iframe className="trailer-box" style={{ marginRight: "200px" }} width="960" height="415" src={movie.trailer_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="similar-movies">
          {movies && <Movielist movies={movies.filter((m, i, a) => { return m.genre[0].includes(movie.genre[0]) })} title="Similar Movies" />}
        </div>
      </>
    }

  </div>);
}

export default Description;










// ---------------------------------------------------------------------------------
// // import { useEffect, useState } from "react";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import Movielist from "./Movielist";
// // import { toast } from "react-toastify";



// // const Description = () => {
// //   let { id } = useParams();
// //   let [movie, setMovie] = useState(null)
// //   let [movies, setMovies] = useState(null)
// //   let navigate = useNavigate()

// //   let handleDeleteMovie = (() => {
// //     if (window.confirm("Are you sure")) {
// //       fetch("http://localhost:3003/movies" + id, { method: "DELETE" })
// //         .then(() => {
// //           toast("movie is deleted from database", {
// //             position: "button-right",
// //             autoClose: 5000
// //           });
// //           navigate("/")
// //         })
// //     }
// //   })




// //   useEffect(() => {
// //     fetch("http://localhost:3003/movies/" + id)
// //       .then((res) => { return res.json() })
// //       .then((data) => {
// //         return setMovie(data)
// //         console.log(data)
// //       })
// //     fetch("http://localhost:3003/movies")
// //       .then((res) => { return res.jon })
// //       .then((data) => {
// //         return setMovie(data)
// //       })
// //   }, [])
// //   return (<div className="description-comp">
// //     {movie == null && <h1>Loading.....</h1>}
// //     {movie &&
// //       <>
// //         <div className="movie-description" style={{ background: `url(${ movie.banner })`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
// //           <div className="container">
// //             <img src={movie.poster} alt="" />
// //             <div className="details">
// //               <h1>{movie.moviename}</h1>
// //               <span>{movie.languages.join("  ,  ")}</span>
// //               <span>{movie.genre}</span>
// //               <span>{movie.rating} 🌟  </span>
// //               <button onClick={handleDeleteMovie}>Delete</button>
// //               <p>{movie.description}</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="trailer">
// //           <iframe width="560" height="315" src={movie.trailer_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// //         </div>
// //         <Link to={`/update/${id}`} className="btn-udt">

// //         <button>Update Movie</button>

// //       </Link>
// //     {movies && <Movielist movies={movies.filter((m) => { return m.genre.includes(movie.genre) })} title="Similar Movies" />}

// //   </>}
// //     </div >);
// // }

// // export default Description;


// ---------------------------------------------------------------------------------
// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// // import ScaleLoader from 'react-spinners/ScaleLoader'
// import '../styles/description.css'
// import Movielist from "./Movielist";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Description = () => {

//     let { id } = useParams();
//     let [movie, setMovie] = useState(null);
//     let [movies, setMovies] = useState(null);
//     let navigate = useNavigate();

//     useEffect(() => {
//         fetch("http://localhost:3003/movies/" + id)
//             .then(res => res.json())
//             .then((data) => {
//                 setMovie(data)
//                 console.log(data);
//             })

//         fetch("http://localhost:3003/movies")
//             .then(res => res.json())
//             .then((data) => {
//                 setMovies(data)
//                 console.log(data);
//             })
//     }, [])

//     let handleDeleteMovie = () => {
//         if (window.confirm("Are you sure ?")) {
//             fetch("http://localhost:3003/movies/" + id, { method: "DELETE" })
//                 .then(() => {
//                     toast("Movie is deleted from database", {
//                         position: "bottom-right",
//                         autoClose: 5000
//                     });
//                     navigate("/")
//                 })
//         }
//     }


//     return (<div className="description-comp">

//         {movie == null }

//         {movie &&
//             <>
//                 <div className="movie-description" style={{ background: `url(${movie.banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
//                     <div className="container">
//                         <img src={movie.poster} alt="" />
//                         <div className="details">
//                             <h1>{movie.moviename}</h1>
//                             <span>{movie.languages.join("  ,  ")}</span>
//                             <span>{movie.genre}</span>
//                             <span>{movie.rating} 🌟  </span>
//                             <p>{movie.description}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="trailer">
//                     <iframe width="560" height="315" src={movie.trailer_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//                 </div>

//                 <button className="del-btn" onClick={handleDeleteMovie}> Delete Movie </button>

//                 <Link to={`/update/${id}`} className="upd-btn">
//                     <button> Update movie </button>
//                 </Link>

//                 {movies && <Movielist movies={movies.filter((m) => { return m.genre.includes(movie.genre[0]) })} title="Similar Movies" />}
//             </>
//         }

//         <ToastContainer />

//     </div>);
// }

// export default Description;