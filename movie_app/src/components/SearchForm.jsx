import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from 'prop-types';


const API_KEY = 'd41d8bb0db419dbf25b142defe21dabb';
const schema = yup.object({
    query: yup.string().required('Type something to search')
});
export default function SearchForm({setMovies, setQuery}) {
    const {
        register,
        handleSubmit, 
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema)
      });

    async function onSubmit(data) {
        setQuery(data.query);
        const apiEndpoint = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${data.query}&api_key=${API_KEY}`;
        const response =  await fetch(apiEndpoint);
        const movies = await response.json();
        setMovies(movies.results)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="flex gap-x-4">  
            <input
              {...register("query")}
              id="query"
              type="search"
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search movie..."
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </div>
          {errors.query && <span className="text-red-500 text-sm">{errors.query.message}</span>}
        </form>
    );
}

SearchForm.propTypes = {
    setMovies: PropTypes.func,
    setQuery: PropTypes.func
}