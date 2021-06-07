import { Card } from "react-bootstrap";
import MyBadge from "./MyBadge";
import { Component } from "react";
import Comments from "./Comments";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  componentDidMount = async () => {
    console.log("SingleBook has been mounted");
  };
  render() {
    const mystyle = {
      position: "absolute",
      top: "20%",
      right: "0",
    };
    return (
      <>
        <Card
          className="h-100"
          style={{ transform: this.state.selected ? "scale(0.8)" : "none" }}
        >
          <Card.Img
            className="w-100"
            variant="top"
            src={this.props.book.img}
            style={{ height: "300px" }}
          />
          <MyBadge
            style={mystyle}
            text={this.props.book.price}
            color="warning"
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Comments book={this.props.book} />
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default SingleBook;
