import axios from 'axios';

const ClientAxios =  axios.create({
    baseURL : process.env.REACT_APP_API_URL || '/api'
});
export default ClientAxios;
