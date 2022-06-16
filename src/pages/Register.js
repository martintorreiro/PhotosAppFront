import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services";

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (pass1 !== pass2) {
      setError("Las contraseñas no son iguales / Passwords do not match");
      return;
    }

    try {
      await registerUserService({ email, password: pass1, userName: userName });

      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <form onSubmit={handleForm}>
        <h1>Register / Registrate</h1>
        <fieldset>
          <label htmlFor="email">Email / Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass1">Password / Contraseña</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass2">Repeat Password / Repite la contraseña</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="userName">Username / Nombre de usuario</label>
          <input
            type="text"
            id="userName"
            name="userName"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </fieldset>
        <button>Register / Registrate</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
