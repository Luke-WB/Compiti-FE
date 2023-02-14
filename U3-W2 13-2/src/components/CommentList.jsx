import ListGroup from "react-bootstrap/ListGroup";

function CommentsList(props) {
  return (
    <ListGroup>
      <ListGroup.Item className="text-center">Votazione: {props.comment.rate}</ListGroup.Item>
    </ListGroup>
  );
}

export default CommentsList;
