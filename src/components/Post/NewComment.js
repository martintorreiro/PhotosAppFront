import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { sendCommentService } from "../../services";

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
          <label htmlFor="comment">Add a comment / Añade un comentario</label>
          <input type="text" name="comment" id="comment" required />
        </fieldset>
        <button>Comment / Comentario</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>Adding comment... / Añadiendo comentario...</p> : null}
      </form>
    </>
  );
};
