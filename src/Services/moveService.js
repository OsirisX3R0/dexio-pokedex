import axios from 'axios';

export const getMove = name => {
    return axios.get(`https://pokeapi.co/api/v2/move/${name}`)
}