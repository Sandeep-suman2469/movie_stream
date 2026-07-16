import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {

 console.log(import.meta.env.VITE_TMDB_TOKEN);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes> 
  );

};

export default AppRoutes;