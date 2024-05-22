import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MovieDetails({
  setSelectedMovie,
  selectedMovie,
  setFavouriteMovies,
}) {
  const open = Boolean(selectedMovie);
  console.log("setSelectedMovie");
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => setSelectedMovie(null)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setSelectedMovie(null)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                          alt={selectedMovie.original_title}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {selectedMovie.original_title}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-3"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">
                          {selectedMovie.release_date}
                        </p>

                        {/* Reviews */}
                        <div className="mt-3">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    parseInt(selectedMovie.vote_average / 2) >
                                      rating
                                      ? "text-gray-400"
                                      : "text-gray-200",
                                    "h-5 w-5 flex-shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p>
                              {parseInt(selectedMovie.vote_average / 2)} out of
                              5 stars
                            </p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4>Overview</h4>

                          <p className="text-sm text-gray-700">
                            {selectedMovie.overview}
                          </p>
                        </div>
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-6"
                      >
                        <div className="mt-6">
                          <button
                            type="submit"
                            onClick={() =>
                              setFavouriteMovies((oldFavouriteMovies) => [
                                selectedMovie,
                                ...oldFavouriteMovies,
                              ])
                            }
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                          >
                            Add to Favourites
                          </button>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
MovieDetails.propTypes = {
  setSelectedMovie: PropTypes.func,
  selectedMovie: PropTypes.object,
  setFavouriteMovies: PropTypes.func,
};
