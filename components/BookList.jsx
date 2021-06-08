import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="formGroupEmail">
            {/* <Form.Label>Search</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Search Book"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="my-5">
        {books
          .filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} key={book.asin} className="mb-4">
              <SingleBook book={book} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
