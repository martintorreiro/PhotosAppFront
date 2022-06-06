import { useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <form>
        <fieldset>
          <legend>Seleccione el tipo de busqueda</legend>

          <label>
            user
            <input type="radio" name="search" value="user" defaultChecked />
          </label>
          <label>
            title
            <input type="radio" name="search" value="title" />
          </label>
          <label>
            place
            <input type="radio" name="search" value="place" />
          </label>
        </fieldset>
      </form>

      <form>
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
    </div>
  );
};
