import { useState } from "react";

export const Search = () => {
  const [input, setInput] = useState("");
  const textInput = (e) => {
    setInput(e.target.value);
    return true;
  };

  return (
    <form>
      <input
        type="text"
        name="search_user"
        id="search_user"
        onChange={textInput}
      />
      <button>Search</button>
    </form>
  );
};
