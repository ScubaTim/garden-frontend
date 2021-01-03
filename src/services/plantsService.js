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

export const update = (newObject, id) => {
    const request = axios.put(`${baseURL}/${id}`, newObject)
    return request.then(response => response.data)
}

export const remove = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data)
}