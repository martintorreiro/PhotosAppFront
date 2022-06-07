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
    <div>
      <form>
        <fieldset>
          <legend>Seleccione el tipo de busqueda</legend>

          <label>
            user
            <input
              type="radio"
              name="search"
              value="user"
              onChange={() => setSelectedFilter("user")}
              checked={selectedFilter === "user"}
            />
          </label>
          <label>
            title
            <input
              type="radio"
              name="search"
              value="title"
              onChange={() => setSelectedFilter("title")}
              checked={selectedFilter === "title"}
            />
          </label>
          <label>
            place
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
          <input
            type="text"
            name="search_user"
            id="search_user"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </fieldset>
      </form>

      {result ? (
        <section>
          <img
            src={result.image ? result.image : defaultImage}
            alt="avatar"
            height="30px"
          />
          <p>
            <Link to={`/user/${result.name} `} element={<UserProfile />}>
              {result.name} {result.surname}
            </Link>
          </p>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};
