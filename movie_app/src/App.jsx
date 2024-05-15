import { useState } from "react"
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState();
  return (
    <div className="flex justify-center p-8">
      <div className="w-10/12">
        <h2 className=" text-3xl font-bold">Movie App</h2>
        <SearchForm setQuery={setQuery} setMovies={setMovies} />
        <SearchResults setSelectedMovie={setSelectedMovie} query={query} movies={movies} />
        <MovieDetails selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      </div>
    </div>
  )
}

export default App
