import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComments";
import styles from "../styles/Comments.module.css";

const Comments = ({ book }) => {
  const [asin, setAsin] = useState(book.asin);
  const [comments, setComments] = useState([]);
  const [apiKey, setKey] = useState(
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNDI5OWNlYWY0ODAwMTVjOTE4NzUiLCJpYXQiOjE2MjMxNjE5MTksImV4cCI6MTYyNDM3MTUxOX0.1ckyFzQt0Oxb2kSPda1KLklnb1sVlfSrCXa6_v66828"
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = async () => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    let comments = await response.json();
    setComments(comments);
    setIsLoading(false);
  };

  //mounted:
  useEffect(() => {
    const keyRequest = async () => {
      let username = "mikelitoris34@icloud.com";
      let password = "bollocks69";
      let request = await fetch(
        `https://striveschool-api.herokuapp.com/api/account/login?username=${username}&password=${password}`,
        {
          method: "POST",
        }
      );
      let key = await request.json();
      setKey("Bearer " + key.access_token);
    };
    keyRequest();
    fetchComments();
  }, []);

  useEffect(() => {
    if (isLoading) {
      fetchComments();
    }
  });
  return (
    <div className={styles.container}>
      <button onClick={() => setIsLoading(true)}>Refresh comments</button>
      {isLoading ? <p>Loading...</p> : ""}
      {comments.length === 0 && !isLoading ? <p>No comments to display</p> : ""}
      {!isLoading &&
        comments.map((comment) => (
          <ul key={comment._id}>
            <div style={{ border: "1px solid black" }}>
              <div>
                <DeleteComment commentId={comment._id} apiKey={apiKey} />
              </div>
              <div className={styles.single}>
                <li className="my-2">
                  Book ID is: {comment.elementId} | {comment.comment} | I rate
                  it {comment.rate}
                </li>
              </div>
            </div>
          </ul>
        ))}

      <AddComment apiKey={apiKey} asin={asin} />
    </div>
  );
};

export default Comments;
