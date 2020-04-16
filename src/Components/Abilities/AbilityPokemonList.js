import React, { useContext } from 'react';
import { ListTitle, List, ListItem, ListName } from '../../Styles/General';
import { AbilityContext } from '../../Context/AbilityContext';

const AbilityPokemonList = ({ hidden }) => {
    const { ability } = useContext(AbilityContext);

    const displayList = () => {
        if (!ability)
            return null
            
        let isHidden = hidden === true;
        let pokemon = ability.pokemon.filter(p => p.is_hidden === isHidden);

        return (
            <>
                <ListTitle>{isHidden ? "Hidden Ability" : "Normal Ability"} ({pokemon.length})</ListTitle>
                <List>
                    {pokemon.map((pokemon, index) => (
                        <ListItem key={index}>
                            <ListName to={"/pokemon/" + pokemon.pokemon.name}>{pokemon.pokemon.name}</ListName>
                        </ListItem> 
                    ))}
                </List>
            </>
        )
    }

    return displayList()
}

export default AbilityPokemonList;