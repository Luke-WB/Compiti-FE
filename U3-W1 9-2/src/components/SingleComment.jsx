import ListGroup from "react-bootstrap/ListGroup";

function SingleComment(props) {
  return (
    <ListGroup>
      <ListGroup.Item className="text-center">Singolo Commento: {props.single.comment}</ListGroup.Item>
    </ListGroup>
  );
}

export default SingleComment;
