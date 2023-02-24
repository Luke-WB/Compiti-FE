import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavCustom from "./components/NavCustom";
import Home from "./components/ArticleCard";
import DetailsCard from "./components/DetailsCard";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <NavCustom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<DetailsCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
