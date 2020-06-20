const getData = async () => {
    const response = await fetch('https://randomuser.me/api/0.4/?randomapi', {
        method: 'GET',
    });
    return await response.json();
};

export default {
    getData: getData,
}


/*import axios from 'axios';

const client = axios.create({
    baseURL: 'https://randomuser.me',
    timeout: 60000,
    responseType: 'json',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

const getData = async () => {
    return await client.get('/api/0.4/?randomapi',  {});
};


export default {
    getData: getData,
}*/
