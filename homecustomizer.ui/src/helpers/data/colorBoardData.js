import axios from 'axios';

const getAllColorBoards = () => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/colorBoard`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getColorBoardById = (id) => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/colorBoard/colorBoardId/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getColorBoardsByAvailableHomesId = (id) => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/colorBoard/availableHomesId/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export default { getAllColorBoards, getColorBoardById, getColorBoardsByAvailableHomesId };