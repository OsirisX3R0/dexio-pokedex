import axios from 'axios';

export const getAllTypes = () => {
    return axios.get('https://pokeapi.co/api/v2/type')
}

export const getType = name => {
    return axios.get(`https://pokeapi.co/api/v2/type/${name}`);
}