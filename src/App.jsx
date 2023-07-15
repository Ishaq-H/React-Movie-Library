import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Nav />
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
