import axios from 'axios';

const ClientAxios =  axios.create({
    baseURL : 'http://localhost:4000'
});
export default ClientAxios;
