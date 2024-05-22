import { useState } from "react";
// import { useCookies } from "react-cookie";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import MovieDetails from "./components/MovieDetails";

function App() {
  // const [cookies, setCookie] = useCookies(["favouriteMovies"]);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState();
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  console.log(selectedMovie);
  return (
    <div className="flex justify-center p-8">
      <div className="w-10/12">
        <h2 className=" text-3xl font-bold">Movie App</h2>
        <SearchForm setQuery={setQuery} setMovies={setMovies} />

        <SearchResults
          setSelectedMovie={setSelectedMovie}
          query={query}
          movies={movies}
        />
        <h3>Favourite movies</h3>
        <SearchResults
          setSelectedMovie={setSelectedMovie}
          query={query}
          movies={favouriteMovies}
        />
        {selectedMovie && (
          <MovieDetails
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            setCookie={setFavouriteMovies}
          />
        )}
      </div>
    </div>
  );
}

export default App;
