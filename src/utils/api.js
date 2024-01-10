import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyAt_0P7yNUPpOwBc7WNLNXpvbsmS_d-d54",
  cx: "c333ee9f9edc94fda",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
