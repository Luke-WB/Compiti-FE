import { Col, Card, Button, Row, Container } from "react-bootstrap";
import { useState, useEffect, FunctionComponent } from "react";
import { Details } from "../interface/Details";
import { Link } from "react-router-dom";

const DetailsCard: FunctionComponent<Details> = (props) => {
  const [details, setDetails] = useState<Details[]>([]);

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    try {
      const resp = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${props.id}`);
      if (resp.ok) {
        const data = await resp.json();
        console.log(data + "okokokokoko");
        setDetails(data);
      } else {
        console.log("error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      banana
      <Container>
        <Row>
          {details.map((elem, i) => {
            return (
              <Col xs={12} md={3}>
                <Card key={i} style={{ width: "18rem", height: "25rem" }} className="mb-5">
                  <Card.Img variant="top" src={elem.imageUrl} style={{ height: "200px" }} />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{elem.title}</Card.Title>
                    <Link to={"/details"}>
                      <Button variant="primary">Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default DetailsCard;
