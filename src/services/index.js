export const getLastPosts = async () => {
  const response = await fetch("/posts");

  const json = await response.json();
  console.log(json);
  if (!response.ok) {
    throw new Error("no se ha podido realizar la peticion al servidor");
  }

  return json.data;
};

export const getUserProfile = async (userName) => {
  const response = await fetch(`/user/${userName}`);
  const json = await response.json();
  console.log("-----p", json);
  if (!response.ok) {
    throw new Error("no se ha podido realizar la peticion al servidor");
  }

  return json.data;
};
