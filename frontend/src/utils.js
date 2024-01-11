export function extractErrorMessage(error) {
  return error.response?.data?.message || error.message || error.toString();
}

export const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  return token || null;
};

export const savePost = (id) => {
  const posts = JSON.parse(localStorage.getItem("SAVE_POSTS")) || [];
  const alreadySaved = posts.find((post) => post == id);
  if (alreadySaved) {
    const filteredPosts = posts.filter((p) => p != id);
    localStorage.setItem("SAVE_POSTS", JSON.stringify(filteredPosts));
    return "Item unsaved";
  } else {
    posts.push(id);
    localStorage.setItem("SAVE_POSTS", JSON.stringify(posts));
    return "Item saved";
  }
};

export const isPostSaved = (id) => {
  const posts = JSON.parse(localStorage.getItem("SAVE_POSTS")) || [];
  const isSaved = !!posts.find((post) => post == id);
  return isSaved;
};
