import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

const API_KEY = "23017101-47ea80d7a3291cc2e4e342e52";

export async function getPictures(query, page) {
  const resp = await axios.get(
    `/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
  );
  return resp.data.hits;
}
