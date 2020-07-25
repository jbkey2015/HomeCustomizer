import axios from 'axios';

const getAvailableHomesById = (id) => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/availableHomes/availableHomesId/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export default { getAvailableHomesById }