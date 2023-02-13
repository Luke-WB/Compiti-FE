import { Component } from "react";
import CommentsList from "./CommentList";
import SingleComment from "./SingleComment";

class CommentArea extends Component {
  state = {
    selected: false,
    comment: [],
  };
  componentDidMount = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MTBiYmEyNDc4ZDAwMTNhMDU4NGIiLCJpYXQiOjE2NzYyNzc4MjksImV4cCI6MTY3NzQ4NzQyOX0.3PUpiEVh2RXdymWuOHlfpOQjusrnTlpGCKxATlqamqU",
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({
          comment: data,
        });
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <>
        Commenti: {this.state.comment.map((elem) => elem.comment)}
        {this.state.comment.map((elem) => (
          <CommentsList comment={elem} />
        ))}
        {this.state.comment.map((elem) => (
          <SingleComment single={elem} />
        ))}
      </>
    );
  }
}

export default CommentArea;
