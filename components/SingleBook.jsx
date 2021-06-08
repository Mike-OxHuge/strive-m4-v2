import { useState } from "react";
import { Card } from "react-bootstrap";
import MyBadge from "./MyBadge";
import Comments from "./Comments";

// class SingleBook extends Component {
//   state = {
//     selected: false,
//   };

//   componentDidMount = async () => {
//     console.log("SingleBook has been mounted");
//   };
//   render() {

//     return (

//     );
//   }
// }

// export default SingleBook;

const SingleBook = ({ book }) => {
  const mystyle = {
    position: "absolute",
    top: "20%",
    right: "0",
    backgroundColor: "#08080862",
  };
  const [selected, setSelected] = useState("false");
  return (
    <>
      <Card
        className="h-100"
        style={{ transform: selected ? "scale(0.8)" : "none" }}
      >
        <Card.Img
          className="w-100"
          variant="top"
          src={book.img}
          style={{ height: "300px" }}
        />
        <MyBadge style={mystyle} text={book.price} color="success" />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Comments book={book} />
        </Card.Footer>
      </Card>
    </>
  );
};

export default SingleBook;
