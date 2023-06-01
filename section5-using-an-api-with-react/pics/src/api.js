import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 096Px3K6H6LuL-baEncIepZrt4peuWdx3Rltj6xT6T8",
    },
    params: {
      query: term,
    },
  });

  return response.data?.results;
};

export default searchImages;
