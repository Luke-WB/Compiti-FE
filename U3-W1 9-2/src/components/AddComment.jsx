import { Component } from "react";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  componentDidMount = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`, {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        alert("data saved successfully");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <strong>INSERISCI I COMMENTI QUA SOTTO</strong>
            </Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
        </Form>
        <h5>DAI UN VOTO</h5>
        <Form.Select aria-label="Default select example">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </>
    );
  }
}

export default AddComment;
