import axios from 'axios';

const getAllSiding = () => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/siding`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default { getAllSiding };