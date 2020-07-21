import axios from 'axios';

const getAllColorBoards = () => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/colorBoard`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default { getAllColorBoards };