import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { sendCommentService } from "../../services";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

export const NewComment = ({ addComment, post }) => {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const response = await sendCommentService(data, post.postId, token);

      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <fieldset>
          <img src={defaultAvatar} alt="avatar" height="30px" />
          <label htmlFor="comment">Add a comment</label>
          <input type="text" name="comment" id="comment" required />
        </fieldset>
        <button>Comment</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>Adding comment...</p> : null}
      </form>
    </>
  );
};
