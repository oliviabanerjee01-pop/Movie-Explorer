import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  async function searchMovies() {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${search}`
        );

        const data = await response.json();

        setMovies(data.Search || []);
    }
    return (
        <div className="app">
            <Header />

            <main>
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    searchMovies={searchMovies}
                />

                <div className="movie-section">
                    <button
        className="carousel-button"
        onClick={() => {
            document.querySelector(".movie-grid").scrollBy({
                left: -500,
                behavior: "smooth"
            });
        }}
    >
        ‹
    </button>

    <div className="movie-grid">
        {movies.map((movie) => (
            <MovieCard
                key={movie.imdbID}
                movie={movie}
            />
        ))}
    </div>

    <button
        className="carousel-button"
        onClick={() => {
            document.querySelector(".movie-grid").scrollBy({
                left: 500,
                behavior: "smooth"
            });
        }}
    >
        ›
    </button>
  
                </div>
            </main>
            
        </div>
    );
}

export default App;