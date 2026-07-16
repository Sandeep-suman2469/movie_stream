import { Film, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <Film className="text-blue-500" />
          <h1 className="text-xl font-bold text-white">
            MovieStream
          </h1>
        </Link>

        <nav className="hidden gap-8 text-gray-300 md:flex">
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">Trending</a>
          <a href="#">Top Rated</a>
        </nav>

        <button>
          <Search className="text-white" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;