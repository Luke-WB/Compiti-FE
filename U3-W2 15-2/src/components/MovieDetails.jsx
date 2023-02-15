import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  const componentDidMount = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=fa8d42b&i=" + params.movieId);
      if (response.ok) {
        const data = await response.json();
        setMovie({ movie: data.Search });
        console.log(movie);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    componentDidMount();
  });
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieDetails;
