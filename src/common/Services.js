const axios = require('axios').default;

const urlBackend = process.env.REACT_APP_URL_BACKEND;

const Services = {
    get: ({path,handleAccept,handleError=(error) => console.log(error)}) => {
        axios.get(`${urlBackend}${path}`)
        .then((response) => handleAccept(response))
        .catch((error)=>handleError(error))
    }
    
}

export default Services;