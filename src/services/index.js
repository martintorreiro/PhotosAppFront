export const getLastPosts = async (search, selectedFilter = "user") => {
  console.log(selectedFilter);
  const response = await fetch(
    `/posts/?${selectedFilter !== "user" ? "search=" + search : ""}`
  );

  const json = await response.json();
  console.log("--", json);
  if (!response.ok) {
    throw new Error("no se ha podido realizar la peticion al servidor");
  }

  return json.data;
};

export const getUserProfile = async (userName) => {
  const response = await fetch(`/user/${userName}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("no se ha podido realizar la peticion al servidor");
  }

  return json.data;
};

export const getPost = async (postId) => {
  const response = await fetch(`/post/${postId}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("no se ha podido realizar la peticion al servidor");
  }

  return json.data;
};

export const getPostComments = async (postId) => {
  const response = await fetch(`/comments/${postId}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("no se ha podido realizar la peticion al servidor");
  }

  return json.data;
};

export const getPostLikes = async (postId) => {
  const response = await fetch(`/post-likes/${postId}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("no se ha podido realizar la peticion al servidor");
  }

  return json.message;
};

export const registerUserService = async ({ email, password, userName }) => {
  const response = await fetch(`/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, userName }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const loginUserService = async ({ email, password, userName }) => {
  const response = await fetch(`/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, userName }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
