import "./MovieCard.css";
function MovieCard(props) {
    console.log(props.movie);
    return (
        <div className="movie-card">
            <img
                className="movie-poster"
                src={props.movie.Poster}
                alt={props.movie.Title}
            />

            <div className="movie-info">
                <h2>{props.movie.Title}</h2>

                <div className="movie-details">
                    
                    <span>{props.movie.year}</span>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;