import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {/* <main className="pt-20">
        <section className="min-h-[80vh] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Welcome to StreamFlix
          </h1>
        </section>
      </main> */}
    </>
  );
};

export default Home;