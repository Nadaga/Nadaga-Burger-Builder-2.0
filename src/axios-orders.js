import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-7dafe.firebaseio.com/",
});

export default instance;
