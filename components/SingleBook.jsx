import { Card } from "react-bootstrap";
import MyBadge from "./MyBadge";
import { Component } from "react";
import Comments from "./Comments";

class SingleBook extends Component {
  state = {
    selected: false,
    apiKey: "",
  };

  componentDidMount = async () => {
    let username = "mikelitoris34@icloud.com";
    let password = "bollocks69";
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/account/login?username=${username}&password=${password}`,
      {
        method: "POST",
      }
    );
    let key = await response.json();
    this.setState({
      apiKey: "Bearer " + key.access_token,
    });
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
