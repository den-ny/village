import axios from 'axios';

// let apiUrl;

// const apiUrls = {
//   development: "https://ga-hackathon-backend.herokuapp.com/",
//   production: "https://ga-hackathon-backend.herokuapp.com/",
// }

// if (window.location.hostname === "localhost") {
//   apiUrl = apiUrls.development
// } else {
//   apiUrl = apiUrls.production
// }

const api = axios.create({
  baseURL: "https://ga-hackathon-backend.herokuapp.com/"
});

export default api;