import { useState } from "react";
import { getLastPosts, getUserProfile } from "../services";
import defaultImage from "../assets/images/defaultAvatar.png";
import { Link } from "react-router-dom";
import { UserProfile } from "./UserProfile";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("user");

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (selectedFilter === "user") {
      const res = await getUserProfile(search);

      setResult(res);
    } else {
      const res = await getLastPosts(search, selectedFilter);
      setResult(res);
    }
  };

  return (
    <section>
      <form>
        <h1>
          Select type of search <p>Seleccione el tipo de búsqueda</p>
        </h1>
        <fieldset>
          <label>
            By user / Por usuario
            <input
              type="radio"
              name="search"
              value="user"
              onChange={() => setSelectedFilter("user")}
              checked={selectedFilter === "user"}
            />
          </label>
          <label>
            By title / Por título
            <input
              type="radio"
              name="search"
              value="title"
              onChange={() => setSelectedFilter("title")}
              checked={selectedFilter === "title"}
            />
          </label>
          <label>
            By place / Por lugar
            <input
              type="radio"
              name="search"
              value="place"
              onChange={() => setSelectedFilter("place")}
              checked={selectedFilter === "place"}
            />
          </label>
        </fieldset>
      </form>

      <form onSubmit={handlerSubmit}>
        <fieldset>
          <label>
            Type your text / Escribe el texto
            <input
              type="text"
              name="search_user"
              id="search_user"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </fieldset>
        <button>Search / Buscar</button>
      </form>

      {result ? (
        <section>
          <img
            src={
              result.image
                ? `${process.env.REACT_APP_AVATAR_PATH}/${result.image}`
                : defaultImage
            }
            alt="avatar"
            height="30px"
          />
          <p>
            <Link to={`/user/${result.userName} `} element={<UserProfile />}>
              {result.userName}
            </Link>
          </p>
        </section>
      ) : (
        <></>
      )}
    </section>
  );
};
