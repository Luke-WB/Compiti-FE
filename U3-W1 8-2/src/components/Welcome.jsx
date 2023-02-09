import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Welcome() {
  return (
    <Card className="my-5">
      <Card.Header as="h5">Welcome</Card.Header>
      <Card.Body>
        <Card.Title>LIBRACCIO</Card.Title>
        <Card.Text>Clicca sul bottone!</Card.Text>
        <Button variant="primary">Libro</Button>
      </Card.Body>
    </Card>
  );
}

export default Welcome;
