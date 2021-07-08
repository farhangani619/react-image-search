export default {
  search(searchTerm) {
    const API_URL = `https://api.pexels.com/v1/search?query=${searchTerm}`;
    const url = `${API_URL}`;
    return fetch(url, {
      headers: {
        Authorization:
          "563492ad6f917000010000012c803b7ae20e49ee9388e8f2d2042ec4"
      }
    })
      .then((response) => response.json())
      .then((result) => {
        return result.photos;
      });
  }
};
