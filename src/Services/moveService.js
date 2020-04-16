import axios from 'axios';

export const getAllMoves = () => {
    return axios.get("https://pokeapi.co/api/v2/move?offset=0&limit=1000");
}

export const getMove = name => {
    return axios.get(`https://pokeapi.co/api/v2/move/${name}`)
}