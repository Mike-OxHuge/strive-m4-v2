import { Component } from "react";
import { Form, Button } from "react-bootstrap";
class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };
  submitComment = async (e) => {
    e.preventDefault();
    // console.log(this.state.comment);
    // console.log(this.props.apiKey);
    // console.log(this.props.asin);
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          Authorization: this.props.apiKey,
          "Content-type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("Comment added!");
      this.setState({
        comment: {
          comment: "",
          rate: null,
          elementId: this.props.asin,
        },
      });
      window.location.reload();
    } else {
      // this is going to catch a server problem
      // i.e: server is down, db has a problem
      alert("Perhaps you forgot to type something");
    }
  };

  inputChange = (e) => {
    let id = e.target.id;
    console.log(id + e.target.value);
    this.setState({
      // onChange is going to always listen to my keystrokes
      comment: {
        ...this.state.comment,

        [id]: e.target.value,
        // name: e.target.value
        // e.target.value is holding the text I just keystroked
      },
    });
  };
  render() {
    return (
      <>
        <Form onSubmit={(e) => this.submitComment(e)}>
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter comment"
              id="comment"
              value={this.state.comment.comment}
              // with value I'm reflecting into the input what I have into the state
              onChange={(e) => this.inputChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Rate</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              id="rate"
              onChange={(e) => this.inputChange(e)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
