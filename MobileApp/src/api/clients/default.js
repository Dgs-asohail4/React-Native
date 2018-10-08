import axios from 'axios';

const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL:'http://192.168.10.10:53904/api/v1/',
    responseType: 'json'
});

export default client;