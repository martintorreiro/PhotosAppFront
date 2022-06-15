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
      <form onSubmit={handlerSubmit}>
        <h1>Edit user profile / Edita el perfil de usuario</h1>
        <fieldset>
          <label htmlFor="name">Name / Nombre</label>
          <input type="text" id="name" name="name" />
        </fieldset>
        <fieldset>
          <label htmlFor="surname">Surname / Apellido</label>
          <input type="text" id="surname" name="surname" />
        </fieldset>
        <fieldset>
          <label htmlFor="intro">Intro / Intro</label>
          <input type="text" id="intro" name="intro" />
        </fieldset>
        <fieldset>
          <label htmlFor="newUserName">User name / Nombre usuario</label>
          <input type="text" id="newUserName" name="newUserName" />
        </fieldset>
        <fieldset>
          <label htmlFor="image">Avatar image / Imagen de avatar</label>
          <input type="file" id="image" name="image" accept="image/*" />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email / Correo electrónico</label>
          <input type="email" id="email" name="email" />
        </fieldset>
        <button>Update / Actualizar</button>
        {sending ? <p></p> : <></>}
        {error ? <p>{error}</p> : <></>}
      </form>
    </section>
  );
};
