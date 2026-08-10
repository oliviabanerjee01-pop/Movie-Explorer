function SearchBar({ search, setSearch, searchMovies }) {
    return (
        <section>
            <h2>Find your movie</h2>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Find your movie"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <button onClick={searchMovies}>
                    Search
                </button>
            </div>
        </section>
    );
}

export default SearchBar;