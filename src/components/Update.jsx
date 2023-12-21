import { useEffect, useState } from 'react';
import '../styles/addmovie.css'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../styles/update.css'

const Update = () => {

    let yearsArray = [];
    for (let year = 1950; year <= 2023; year++) {
        yearsArray.push(year);
    }
    let navigate = useNavigate();

    let [movie, setmovie] = useState("");
    let [hero, setHero] = useState("");
    let [heroine, setHeroine] = useState("");
    let [director, setDirector] = useState("");
    let [pd, setPd] = useState("");
    let [budget, setBudget] = useState("");
    let [collection, setCollection] = useState("");
    let [rating, setRating] = useState(0);
    let [description, setDescription] = useState("");
    let [yor, setYor] = useState("");
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    // let[genre , setGenre] = useState([]);
    // let[languages , setLanguages] = useState([]);
    let [trailerLink, setTrailerLink] = useState("");
    let [poster, setPoster] = useState("");
    let [banner, setBanner] = useState("");

    let { id } = useParams();   

    useEffect(() => {
        fetch("http://localhost:3003/movies/" + id)
            .then((res) => { return res.json() })
            .then((prvData) => {
                setmovie(prvData.moviename);
                setHero(prvData.hero);
                setHeroine(prvData.heroine);
                setDirector(prvData.director);
                setDescription(prvData.description);
                setCollection(prvData.collection);
                setPd(prvData.productionHouse);
                setBudget(prvData.budget);
                setRating(prvData.rating);
                setTrailerLink(prvData.trailer_link);
                setBanner(prvData.banner);
                setPoster(prvData.poster)
            })
    })
    let handleUpdateMovie = (e) => {
        // stop the default actions done by subbmission event
        e.preventDefault();

        // prepare the data
        let updatedMovie = {
            "moviename": movie,
            "hero": hero,
            "heroine": heroine,
            "director": director,
            "productionHouse": pd,
            "budget": budget + "cr",
            "collection": collection + "cr",
            "genre": [],
            "release_date": yor,
            "rating": rating,
            "description": description,
            "duration": `${hours}hrs ${minutes}min`,
            "languages": [],
            "trailer_link": trailerLink,
            "banner": banner,
            "poster": poster
        }

        let goptions = document.getElementsByName("genre");
        for (let i = 0; i < goptions.length; i++) {
            if (goptions[i].checked) {
                updatedMovie.genre.push(goptions[i].value);
            }
        }

        let langOptions = document.getElementsByName("lang");
        for (let i = 0; i < langOptions.length; i++) {
            if (langOptions[i].checked) {
                updatedMovie.languages.push(langOptions[i].value);
            }
        }


        // post the data to db
        fetch("http://localhost:3003/movies" + id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Type": "application/json"
                },
                body: JSON.stringify(updatedMovie)
            })
            .then(() => {
                toast.success("Movie updated in DB successfuly");
                setTimeout(() => { navigate("/") }, 2000);
            })
    }



    return (
        <div className="addmovie-comp">
            <h1>Update Movie</h1>

            <form onSubmit={handleUpdateMovie}>
                <div className='cl1'>
                    <input type="text" placeholder="Movie Name" value={movie} onChange={(e) => { setmovie(e.target.value); }} />
                    <input type="text" placeholder="Hero Name" value={hero} onChange={(e) => { setHero(e.target.value); }} />
                    <input type="text" placeholder="Heroine Name" value={heroine} onChange={(e) => { setHeroine(e.target.value); }} />
                    <input type="text" placeholder="Director" value={director} onChange={(e) => { setDirector(e.target.value); }} />
                    <input type="text" placeholder="Production house" value={pd} onChange={(e) => { setPd(e.target.value); }} />
                    <input type="text" placeholder="Budget in crores" value={budget} onChange={(e) => { setBudget(e.target.value); }} />
                    <input type="text" placeholder="collection in crores" value={collection} onChange={(e) => { setCollection(e.target.value); }} />
                    <fieldset>
                        <legend align="center">Genre</legend>
                        <div>
                            <input type="checkbox" name="genre" id="ac" value="Action" /> <label htmlFor="ac">Action</label>
                            <input type="checkbox" name="genre" id="ad" value="Adventure" /> <label htmlFor="ad">Adventure</label>
                            <input type="checkbox" name="genre" id="cr" value="Crime" /> <label htmlFor="cr">Crime</label>
                            <input type="checkbox" name="genre" id="co" value="Comedy" /> <label htmlFor="co">Comedy</label>
                            <input type="checkbox" name="genre" id="ho" value="Horror" /> <label htmlFor="ho">Horror</label>
                            <input type="checkbox" name="genre" id="ro" value="Romantic" /> <label htmlFor="ro">Romantic</label>
                            <input type="checkbox" name="genre" id="th" value="Thriller" /> <label htmlFor="th">Thriller</label>
                            <input type="checkbox" name="genre" id="sf" value="Sci-fi" /> <label htmlFor="sf">Sci-fi</label>
                        </div>
                    </fieldset>
                </div>
                <div className="cl2">
                    <div className="yor">
                        <select onChange={(e) => { setYor(e.target.value); }}>
                            <option selected disabled>Released Year</option>
                            {
                                yearsArray.map((y) => { return (<option value={y}>{y}</option>) })
                            }
                        </select>
                    </div>
                    <input type="number" placeholder="Rating" min="1" max="10" step="0.1" value={rating} onChange={(e) => { setRating(e.target.value); }} />
                    <textarea placeholder="Movie Description" cols="90" rows="5" value={description} onChange={(e) => { setDescription(e.target.value); }}></textarea>
                    <div className="duration">
                        <select onChange={(e) => { setHours(e.target.value) }}>
                            <option selected disabled>Hours</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <select onChange={(e) => { setMinutes(e.target.value) }}>
                            <option selected disabled>Minutes</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>5</option>
                            <option>....</option>
                        </select>
                    </div>
                    <fieldset>
                        <legend align="center">Languages</legend>
                        <div>
                            <input type="checkbox" name="lang" id="eng" value="English" /> <label htmlFor="eng">English</label>
                            <input type="checkbox" name="lang" id="hin" value="Hindi" /> <label htmlFor="hin">Hindi</label>
                            <input type="checkbox" name="lang" id="kn" value="Kannada" /> <label htmlFor="kn">Kannada</label>
                            <input type="checkbox" name="lang" id="tn" value="Tamil" /> <label htmlFor="tn">Tamil</label>
                            <input type="checkbox" name="lang" id="tl" value="Telgu" /> <label htmlFor="tl">Telgu</label>
                            <input type="checkbox" name="lang" id="ml" value="Malayalam" /> <label htmlFor="ml">Malayalam</label>
                        </div>
                    </fieldset>
                    <input type="url" placeholder="trailer_link" value={trailerLink} onChange={(e) => { setTrailerLink(e.target.value) }} />
                    <input type="url" placeholder="banner" value={banner} onChange={(e) => { setBanner(e.target.value) }} />
                    <input type="url" placeholder="poster" value={poster} onChange={(e) => { setPoster(e.target.value) }} />

                    <input type="submit" value="Update movie" />
                </div>
            </form>

            <ToastContainer />
        </div>);
}
export default Update;