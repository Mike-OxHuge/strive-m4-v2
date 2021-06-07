import { Component } from "react";
class DeleteComponent extends Component {
  componentDidMount = () => {
    console.log(this.props.commentId);
  };
  state = {};
  deleteComment = async () => {
    await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.commentId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: this.props.apiKey,
          "Content-type": "application/json",
        },
      }
    );
    alert("The comment has been deleted");
    window.location.reload();
  };
  render() {
    return <button onClick={() => this.deleteComment()}>delete comment</button>;
  }
}

export default DeleteComponent;
