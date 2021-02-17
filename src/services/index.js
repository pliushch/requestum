import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const searchUserInfo = async (value) => {
  return await instance.get(`${value}/subscriptions`);
};
