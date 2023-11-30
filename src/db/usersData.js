import axios from "axios";

const getAllUsers = async () => {
  const response = await axios.get("http://localhost:8800/api/users");
  return response.data;
};

const usersData = await getAllUsers();

export default usersData;
