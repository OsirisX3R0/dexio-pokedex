import React, { useContext } from 'react';
import BlockUi from 'react-block-ui';
import Loader from 'react-loaders';
import { PokemonContext } from '../../Context/PokemonContext';

const PokemonDamage = () => {
    const { loading } = useContext(PokemonContext);

    return (
        <BlockUi blocking={loading} loader={<Loader type="ball-grid-pulse" />}>
            <div></div>
        </BlockUi>
    )
}

export default PokemonDamage;