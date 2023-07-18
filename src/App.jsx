import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import MovieInfo from "./pages/MovieInfo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/movies/:imdbID" element={<MovieInfo />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
