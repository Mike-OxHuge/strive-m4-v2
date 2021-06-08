import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
// class AddComment extends Component {
//   state = {
//     comment: {
//       comment: "",
//       rate: 1,
//       elementId: this.props.asin,
//     },
//   };
//   submitComment = async (e) => {
//     e.preventDefault();

//     let response = await fetch(
//       `https://striveschool-api.herokuapp.com/api/comments/`,
//       {
//         method: "POST",
//         body: JSON.stringify(this.state.comment),
//         headers: {
//           Authorization: this.props.apiKey,
//           "Content-type": "application/json",
//         },
//       }
//     );
//     if (response.ok) {
//       alert("Comment added!");
//       this.setState({
//         comment: {
//           comment: "",
//           rate: null,
//           elementId: this.props.asin,
//         },
//       });
//       window.location.reload();
//     } else {

//       alert("Perhaps you forgot to type something");
//     }
//   };

//   inputChange = (e) => {
//     let id = e.target.id;
//     console.log(id + e.target.value);
//     this.setState({

//       comment: {
//         ...this.state.comment,

//         [id]: e.target.value,

//       },
//     });
//   };
//   render() {
//     return (

//     );
//   }
// }

// export default AddComment;

const AddComment = ({ apiKey, asin }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  const inputChange = (e) => {
    let id = e.target.id;
    setComment({
      ...comment,
      [id]: e.target.value,
    });
  };

  const submitComment = async (e) => {
    e.preventDefault();

    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          Authorization: apiKey,
          "Content-type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("Comment added!");
      setComment({
        comment: "",
        rate: 1,
        elementId: asin,
      });
      window.location.reload();
    } else {
      alert("Perhaps you forgot to type something");
    }
  };

  return (
    <>
      <Form onSubmit={(e) => submitComment(e)}>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter comment"
            id="comment"
            value={comment.comment}
            onChange={(e) => inputChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rate</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            id="rate"
            onChange={(e) => inputChange(e)}
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
};

export default AddComment;
