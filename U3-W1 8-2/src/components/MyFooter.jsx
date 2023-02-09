import Card from "react-bootstrap/Card";

function MyFooter(props) {
  return (
    <Card style={{ position: props.bloccato, bottom: 0, width: props.larghezza }}>
      <Card.Header>Footer</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>FOOTERISSIMO</p>
          <footer className="blockquote-footer">
            FRUTTA <cite title="Source Title">POMPELMO</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default MyFooter;
