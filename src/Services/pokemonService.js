import axios from 'axios';

export const getAllPokemon = () => {
    return axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000");
}

export const getPokemon = id => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}