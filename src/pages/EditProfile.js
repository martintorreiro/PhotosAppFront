import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { editProfileService } from "../services";

export const EditProfile = () => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(true);

  const { token, user } = useContext(AuthContext);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target);

      const response = await editProfileService(token, user.userName, data);
      console.log(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };
  return (
    <section>
      <h1>Edit user profile</h1>
      <form onSubmit={handlerSubmit}>
        <fieldset>
          <label htmlFor="name">name</label>
          <input type="text" id="name" name="name" />
        </fieldset>
        <fieldset>
          <label htmlFor="surname">surname</label>
          <input type="text" id="surname" name="surname" />
        </fieldset>
        <fieldset>
          <label htmlFor="intro">Intro</label>
          <input type="text" id="intro" name="intro" />
        </fieldset>
        <fieldset>
          <label htmlFor="newUserName">user name</label>
          <input type="text" id="newUserName" name="newUserName" />
        </fieldset>
        <fieldset>
          <label htmlFor="image">Image avatar</label>
          <input type="file" id="image" name="image" accept="image/*" />
        </fieldset>
        <fieldset>
          <label htmlFor="email">email</label>
          <input type="email" id="email" name="email" />
        </fieldset>
        <button>Edit</button>
        {sending ? <p>Set sending...</p> : <></>}
        {error ? <p>{error}</p> : <></>}
      </form>
    </section>
  );
};
