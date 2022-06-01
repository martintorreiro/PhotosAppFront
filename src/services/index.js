export const getLastPosts = async () => {
  const response = await fetch("http://localhost:3100/posts");

  const json = await response.json();

  if (!response.ok) {
    throw new Error("no se ha podido realizar la peticion al servidor");
  }

  return json;
};

export const getUserProfile = async (userName) => {
  const response = await fetch(`http://localhost:3100/user/${userName}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("no se ha podido realizar la peticion al servidor");
  }

  return json.message;
};
