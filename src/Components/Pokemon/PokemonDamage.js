import React, { useContext, useState } from 'react';
import BlockUi from 'react-block-ui';
import Loader from 'react-loaders';
import { PokemonContext } from '../../Context/PokemonContext';

const PokemonDamage = () => {
    const { relations, loading } = useContext(PokemonContext);
    

        //return <div></div>;
    //}

    return (
        <BlockUi blocking={loading} loader={<Loader type="ball-grid-pulse" />}>
            <div></div>
        </BlockUi>
    )
}

export default PokemonDamage;