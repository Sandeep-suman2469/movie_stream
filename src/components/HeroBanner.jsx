import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

const HeroBanner = () => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Stream Your Favorite Movies
          </h1>

          <p className="text-gray-300 text-sm md:text-lg mb-6">
            Discover trending, top-rated and upcoming movies from
            around the world.
          </p>

          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium">
              Watch Now
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-medium">
              More Info
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;