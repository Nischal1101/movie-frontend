import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Addmovie from "./components/Addmovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Signup from "./components/Signup";
import Login from "./components/Login";
import TokenState from "./context/tokenState";
import "./App.css";
// import Cards from "./components/Cards";
function App() {
  return (
    <>
      {/* <Cards /> */}
      <TokenState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/addmovie" element={<Addmovie />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Router>
      </TokenState>
    </>
  );
}

export default App;
