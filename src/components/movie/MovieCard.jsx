import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { POSTER_BASE_URL } from "../../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group block overflow-hidden rounded-xl bg-slate-900 transition-all duration-300 hover:scale-105"
    >
      {/* Poster */}
      <div className="relative overflow-hidden">
        <img
          src={`${POSTER_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="truncate text-sm font-semibold text-white md:text-base">
          {movie.title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={14} fill="currentColor" />
            <span className="text-sm">
              {movie.vote_average?.toFixed(1)}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            {movie.release_date?.split("-")[0]}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;