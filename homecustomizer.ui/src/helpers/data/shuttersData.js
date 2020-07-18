import axios from 'axios';

const getAllShutters = () => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/shutters`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default { getAllShutters };