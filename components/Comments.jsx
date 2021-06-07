import { Component } from "react";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComments";
class Comments extends Component {
  state = {
    asin: this.props.book.asin,
    comments: [],
    apiKey: "",
    isLoading: true,
  };
  fetchComments = async () => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.state.asin}`,
      {
        headers: {
          Authorization: this.state.apiKey,
        },
      }
    );
    let comments = await response.json();
    this.setState({
      comments,
      isLoading: false,
    });
  };
  componentDidMount = async () => {
    let username = "mikelitoris34@icloud.com";
    let password = "bollocks69";
    let request = await fetch(
      `https://striveschool-api.herokuapp.com/api/account/login?username=${username}&password=${password}`,
      {
        method: "POST",
      }
    );
    let key = await request.json();
    this.setState({
      apiKey: "Bearer " + key.access_token,
    });

    this.fetchComments();
  };
  refresh = () => {
    this.setState({
      isLoading: true,
    });
  };
  componentDidUpdate = async (prevProp, prevState) => {
    // console.log("updated");
    // console.log(prevState.comments);
    // console.log(this.state.comments);
    if (prevState.isLoading !== this.state.isLoading) {
      this.fetchComments();
    }
  };
  render() {
    return (
      <div onClick={this.refresh}>
        {this.state.isLoading ? <p>Loading...</p> : ""}
        {this.state.comments.length === 0 && !this.state.isLoading ? (
          <p>No comments to display</p>
        ) : (
          ""
        )}
        {!this.state.isLoading &&
          this.state.comments.map((comment) => (
            <ul key={comment._id}>
              <div style={{ border: "1px solid black" }}>
                <div>
                  <DeleteComment
                    commentId={comment._id}
                    apiKey={this.props.apiKey}
                  />
                </div>
                <div>
                  <li className="my-2">
                    Book ID is: {comment.elementId} | {comment.comment} | I rate
                    it {comment.rate}
                  </li>
                </div>
              </div>
            </ul>
          ))}

        <AddComment apiKey={this.state.apiKey} asin={this.state.asin} />
      </div>
    );
  }
}

export default Comments;
