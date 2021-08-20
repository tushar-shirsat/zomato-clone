import axios from 'axios';

const instant = axios.create({
    baseURL: "http://localhost:5001/zomato-clone-dbd74/us-central1/api"
})

export default instant;