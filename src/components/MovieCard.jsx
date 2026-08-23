import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard(props) {

    return (
        <Link to={`/movie/${props.movie.imdbID}`}>

            <div className="movie-card">

                <img
                    className="movie-poster"
                    src={props.movie.Poster}
                    alt={props.movie.Title}
                />

            </div>

        </Link>
    );
}

export default MovieCard;