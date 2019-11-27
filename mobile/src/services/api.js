import axios from "axios";

const api = axios.create({
  baseURL: "http://codeen.herokuapp.com/",
});

export default api;
