import PropTypes from 'prop-types';

export default function SearchResults({movies, query, setSelectedMovie}) {
    return (
      <div className="bg-white">
        <div className="mx-auto  py-4 sm:px-0 sm:py-4 lg:max-w-7xl lg:px-0">
            {
                query && <h2 className="text-md tracking-tight text-gray-900">Search results for <strong>{query}</strong></h2>
            }
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {movies.map((movie) => (
              <div onClick={() => setSelectedMovie(movie) } key={movie.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-md font-bold text-gray-700">
                        {movie.original_title}
                    </h3>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
SearchResults.propTypes = {
    movies: PropTypes.any,
    query: PropTypes.string,
    setSelectedMovie: PropTypes.func
}