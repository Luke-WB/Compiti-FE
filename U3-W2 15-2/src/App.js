import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavCustom from "./components/NavCustom";
import SecondNav from "./components/SecondNavCustom";
import FirstCard from "./components/FirstCard";
import SecondCard from "./components/SecondCard";
import ThirdCard from "./components/ThirdCard";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <NavCustom sorgente={logo} />
      <SecondNav />
      <Routes>
        <Route path="/TVShow" element={<SecondCard />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
      <FirstCard />
      <ThirdCard />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
