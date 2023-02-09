import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList libri={fantasy} />
      <footer className="py-5">
        <MyFooter bloccato="fixed" larghezza="100%" />
      </footer>
    </>
  );
}

export default App;
