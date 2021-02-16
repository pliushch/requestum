import axios from "axios";

export const getDists = async () => {
  return await axios.get("https://api.github.com/gists/public");
};
