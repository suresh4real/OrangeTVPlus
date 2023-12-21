import { Link } from 'react-router-dom'
const Movielist = ({ movies, title }) => {
    return (<>
        <h1 className="title-header">{title}</h1>
        <div className="all-movies">
            {
                movies.map((movie) => {
                    return (
                        <Link to={`/description/${movie.id}`}>
                            <div className='movie' style={{ background: `url(${movie.poster})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                <div className='name-container'>
                                    <h1 className='name-date'>{movie.moviename}</h1>
                                    <h3 className='name-date'>{movie.release_date}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </>);
}
export default Movielist;