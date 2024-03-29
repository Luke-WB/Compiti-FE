import { Col, Card, Button, Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Article } from "../interface/Article";
import { Link } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const ArticleCard = () => {
  const [article, setArticle] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
        setArticle(data);
      } else {
        console.log("error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          {article.map((elem, i) => {
            return (
              <>
                <Col xs={12} md={3}>
                  <Card key={i} style={{ width: "18rem", height: "25rem" }} className="mb-5">
                    <Card.Img variant="top" src={elem.imageUrl} style={{ height: "200px" }} />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <Card.Title>{elem.title}</Card.Title>
                      <Card.Text>
                        <i>{elem.publishedAt.slice(0, 10)}</i>
                      </Card.Text>
                      <Link to={`/details/${elem.id}`}>
                        <Button variant="primary">Details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <DetailsCard id={elem.id} title={""} url={""} imageUrl={""} summary={""} publishedAt={""} />
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ArticleCard;
