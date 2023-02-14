import { Component } from "react";
import { Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuaery: "",
  };

  filterBookList = (e) => {
    this.setState({ searchQuaery: e.target.value });
  };

  render() {
    return (
      <>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Carca un libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Signore degli anelli, Lo Hobbit..."
              value={this.state.searchQuaery}
              onChange={this.filterBookList}
            />
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-center flex-wrap gap-5 my-5 pb-5">
          {this.props.libri
            .filter((libro) => libro.title.toLowerCase().includes(this.state.searchQuaery.toLocaleLowerCase()))
            .map((libro) => (
              <SingleBook key={libro.asin} libro={libro} />
            ))}
        </div>
      </>
    );
  }
}

export default BookList;
