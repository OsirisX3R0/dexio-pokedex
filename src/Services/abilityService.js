import axios from 'axios';

export const getAllAbilities = () => {
    return axios.get("https://pokeapi.co/api/v2/ability?offset=0&limit=1000");
}

export const getAbility = name => {
    return axios.get(`https://pokeapi.co/api/v2/ability/${name}`);
}