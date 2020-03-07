import axios from "axios";

const API_BASIC_URL = "https://pixabay.com/api/";
const API_KEY = "14889783-61c61fb8f41b7c3ced9fa5b10";
const TYPE = "photo";
const ORIENTATION = "horizontal";
const PERPAGE = 12;

export const get = (text, page) => {
  return axios.get(
    `${API_BASIC_URL}?key=${API_KEY}&q=${text}&image_type=${TYPE}&page=${page}&orientation=${ORIENTATION}&per_page=${PERPAGE}`
  );
};

// заглушка:

export const ds = () => null;
