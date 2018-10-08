import axios from 'axios';

const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL:'https://demo.reflecx.io/server',
    responseType: 'json'
});

export default client;