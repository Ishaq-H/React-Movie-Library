import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import MovieInfo from "./pages/MovieInfo";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  return (
    <BrowserRouter>
      <div className="main">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Landing movies={movies} setMovies={setMovies} />}
          />
          <Route
            path="/movies/:imdbID"
            element={<MovieInfo movies={movies} />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
