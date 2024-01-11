import axios from "axios";

const API_URL = "/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const resetPasswordRequest = async (userEmail) => {
  const response = await axios.post(API_URL + "reset-request", userEmail);
  return response.data;
};

const resetPassword = async (password) => {
  console.log("service");
  console.log(password);
  const response = await axios.patch(
    API_URL + `reset/${password.token}/${password.user_id}`
  );
  return response.data;
};

const updateProfile = async ({ id, ...updatedUser }, token) => {
  if (!token) {
    throw new Error("token is required");
  }
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  //if id is not passed return error
  console.log("Updating profile");
  if (!id) {
    throw new Error("id is required");
  }
  const response = await axios.patch(
    `http://localhost:6001` + API_URL + `update/${id}`,
    updatedUser,
    config
  );
  return response.data;
};

// Get all users
const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getMe = async (id, token) => {
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  const response = await axios.get(API_URL + `${id}/me`, config);
  return response.data;
};

const logout = () => localStorage.removeItem("user");

const authService = {
  updateProfile,
  register,
  logout,
  login,
  resetPasswordRequest,
  resetPassword,
  getUsers,
  getMe,
};

export default authService;
