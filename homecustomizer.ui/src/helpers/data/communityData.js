import axios from 'axios';

const getAllCommunities = () => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/community`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getCommunityById = (id) => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/community/communityId/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getAvailableHomesByCommunityId = (id) => new Promise((resolve, reject) => {
  axios.get(`https://localhost:44334/api/community/communitiesAvailableHomes/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export default { getAllCommunities, getAvailableHomesByCommunityId, getCommunityById };