import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

function AllTheBooks() {
  return [...fantasy, ...history, ...horror, ...romance, ...scifi].map((libro) => (
    <Card className="libri" style={{ width: "18rem" }}>
      <Card.Img style={{ height: "400px" }} variant="top" src={libro.img} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{libro.title}</Card.Title>
        <Card.Text className="text-center">{libro.category.toUpperCase()}</Card.Text>
        <Button variant="primary">{libro.price}</Button>
      </Card.Body>
    </Card>
  ));
}

export default AllTheBooks;
