import axios from 'axios'


const getPlants = () => {
    const request = axios.get('/plants')
    return request.then(response => response.data).catch(err => console.log('error in plantsService', err))
}

export default getPlants