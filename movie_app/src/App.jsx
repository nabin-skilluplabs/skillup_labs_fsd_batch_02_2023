import { useEffect, useState } from "react"
import { useCookies } from 'react-cookie';


import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"
import MovieDetails from "./components/MovieDetails";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [cookies, setCookie] = useCookies(['favouriteMovies']);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState();
  const [favouriteMovies, setFavouriteMovies] = useState(cookies.favouriteMovies || [])

  useEffect(() => {
    setCookie('favouriteMovies', favouriteMovies)
  }, [favouriteMovies, setCookie])
  return (
    <div className="flex justify-center p-8">
      <div className="w-10/12">
        <h2 className=" text-3xl font-bold">Movie App</h2>
        <SearchForm setQuery={setQuery} setMovies={setMovies} />
        {
                query && <h2 className="text-2xl font-bold mt-4 tracking-tight text-gray-900">Search results for <strong>{query}</strong></h2>
            }
        <SearchResults setSelectedMovie={setSelectedMovie} query={query} movies={movies} />
        {
          (favouriteMovies.length > 0) && <h3 className="text-xl font-bold my-4">Favourite Movies ({favouriteMovies.length})</h3>
        }
        <SearchResults setSelectedMovie={setSelectedMovie} query={query} movies={favouriteMovies} />
        {
          selectedMovie && <MovieDetails selectedMovie={selectedMovie}  setFavouriteMovies={setFavouriteMovies} setSelectedMovie={setSelectedMovie} />
        }
        
      </div>
    </div>
  )
}

export default App
