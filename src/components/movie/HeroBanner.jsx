import { BACKDROP_BASE_URL } from "../../utils/constants";

const HeroBanner = ({ movie }) => {
  if (!movie) return null;

  return (
    <section className="relative h-[90vh] w-full">
      {/* Background */}
      <img
        src={`${BACKDROP_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-2xl px-6 md:px-12">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            {movie.title}
          </h1>

          <p className="mb-6 line-clamp-4 text-gray-300">
            {movie.overview}
          </p>

          <div className="flex gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Watch Now
            </button>

            <button className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;