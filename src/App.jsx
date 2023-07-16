import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import MovieInfo from "./pages/MovieInfo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/movie-info" element={<MovieInfo />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
