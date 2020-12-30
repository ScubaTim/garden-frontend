import axios from 'axios'
const baseURL = '/plants'

export const getPlants = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

export const create = (newObject) => {
    const request = axios.post(baseURL, newObject)
    return request.then(response => response.data)
}
