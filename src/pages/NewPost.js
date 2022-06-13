import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createPost } from "../services";

export const NewPost = () => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const data = new FormData(e.target);
      console.log("lll");
      const postInfoReturned = await createPost(data, token);
      console.log("...", postInfoReturned);
      navigate(`/post/${postInfoReturned.postId}`);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section>
      <h1>New post</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </fieldset>
        <fieldset>
          <label htmlFor="place">Place</label>
          <input type="text" id="place" name="place" required />
        </fieldset>
        <fieldset>
          <label htmlFor="image">Select images</label>
          <input
            type="file"
            id="image"
            name="image"
            required
            multiple
            accept="image/*"
          />
        </fieldset>
        <button>Create</button>
        {sending ? <p>Set sending...</p> : <></>}
        {error ? <p>{error}</p> : <></>}
      </form>
    </section>
  );
};
