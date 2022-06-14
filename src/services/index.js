export const getLastPosts = async (search, selectedFilter = "user") => {
  const response = await fetch(
    `/posts/?${selectedFilter !== "user" ? "search=" + search : ""}`
  );

  const json = await response.json();

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

export const getOwnprofile = async (token) => {
  const response = await fetch(`/user`, {
    headers: { Authorization: token },
  });
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
  console.log("comprobando los datos del get post", json);
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

export const editProfileService = async (token, userName, data) => {
  const response = await fetch(`/user/modify/${userName}/`, {
    method: "PUT",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};

export const sendCommentService = async (data, post_id, token) => {
  const response = await fetch(`/comment/?post_id=${post_id}`, {
    method: "POST",

    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const createPost = async (data, token) => {
  const response = await fetch(`/post`, {
    method: "POST",

    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};

export const toggleLike = async (postId, token) => {
  const response = await fetch(`/likes/${postId}`, {
    headers: { Authorization: token },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};
