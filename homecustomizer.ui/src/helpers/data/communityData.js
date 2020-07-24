import axios from 'axios';

const getAllCommunities = () => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/community`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default { getAllCommunities };