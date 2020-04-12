import { typeColors, statColors } from '../Styles/Variables';
export const getTypeColor = type => {
    //debugger;
    if (!type) {
        return "#000";
    }
    let pokemonType = typeColors.filter(t => t.name === type)[0];
    return pokemonType.color;
}

export const getStatColor = stat => {
    if (!stat) {
        return "#bbb";
    }

    let pokemonStat = statColors.filter(s => s.name === stat)[0];
    return pokemonStat.color;
}

export const getStatBorderColor = stat => {
    if (!stat) {
        return "#bbb";
    }

    let pokemonStat = statColors.filter(s => s.name === stat)[0];
    return pokemonStat.border;
}