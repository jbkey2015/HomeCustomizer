import axios from 'axios';

const getCustomHomeByColorBoardId = (id) => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/customHome/colorBoardId/${id}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default { getCustomHomeByColorBoardId }