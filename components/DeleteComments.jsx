const DeleteComment = ({ apiKey, commentId }) => {
  const deleteComment = async () => {
    await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: apiKey,
          "Content-type": "application/json",
        },
      }
    );
    alert("The comment has been deleted");
    window.location.reload();
  };

  return <button onClick={() => deleteComment()}>delete comment</button>;
};

export default DeleteComment;
