import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
import AddComment from "./components/AddComment";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AddComment />
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <BookList libri={fantasy} />
        </Col>
        <Col xs={12} md={6}>
          <CommentArea />
        </Col>
      </Row>
      <MyFooter larghezza="100%" />
    </>
  );
}

export default App;
