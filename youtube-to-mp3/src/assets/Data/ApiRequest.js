import axios from "axios";

const requestOptions = {
    method: 'GET',
    url: 'https://youtube-mp36.p.rapidapi.com/dl',
    params: {},
    headers: {
        'X-RapidAPI-Key': '0a3b0c9a9dmsh6a71589c16246c4p14c712jsn61e6482c0db2',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
    }
};

const fetch = async (id) =>{
    requestOptions.params = {id};

    const response = await axios.request(requestOptions)
    return response;
}

export {fetch};