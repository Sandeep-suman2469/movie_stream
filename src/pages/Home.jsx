import Navbar from "../components/layout/Navbar";
import HeroBanner from "../components/movie/HeroBanner";
import MovieGrid from "../components/movie/MovieGrid";
import useMovies from "../hooks/useMovies";
import { getTrendingMovies } from "../services/movieService";

const Home = () => {
  const { movies, loading, error } =
    useMovies(getTrendingMovies);

  if (loading) {
    return (
      <h1 className="text-white p-10">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-red-500 p-10">
        {error}
      </h1>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />

      <HeroBanner movie={movies[0]} />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Trending Movies
        </h2>

        <MovieGrid movies={movies.slice(0, 18)} />
      </section>
    </div>
  );
};

export default Home;
