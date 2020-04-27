import React from 'react';
import { RectShape, TextRow, TextBlock, RoundShape } from 'react-placeholder/lib/placeholders';
import { Container } from '../../Styles/Layout';
import { 
    PokemonDetailHeader,
    PokemonDetailInfo, 
    PokemonDetailName, 
    PokemonDetailNumber, 
    PokemonDetailSize,
    PokemonDetailAbilityList,
    PokemonTypes,
    Stats,
    StatName,
    StatValue,
    StatTotal,
    DamageTable, 
    DamageTableTitle, 
    DamageTableTypes,
    MoveTable,
    MoveTableHead,
    MoveTableRow,
    MoveTableTitle,
    MoveTableBody,
    MoveTableCell
} from '../../Styles/Pokemon';

const pokemonPlaceholder = (
    <Container>
        <PokemonDetailHeader>
            <RectShape color="gray" style={{width: 94, height: 94}} />
            <PokemonDetailInfo>
                <PokemonDetailName>
                    <TextRow color="gray" style={{ marginTop: 0 }} />
                </PokemonDetailName>
                <PokemonDetailNumber>
                    <TextRow color="gray" style={{ width: 35, marginTop: 5 }} />
                </PokemonDetailNumber>
                <PokemonDetailSize>
                    <TextRow color="gray" style={{ width: 75, marginTop: 5 }} />
                </PokemonDetailSize>
                <PokemonDetailAbilityList>
                    <TextBlock color="gray" rows={2} style={{ marginTop: 5, padding: 0 }} />
                </PokemonDetailAbilityList>
                <PokemonTypes>
                    <RoundShape color="gray" style={{width: 45, height: 25, display: 'inline-block'}} />
                    <RoundShape color="gray" style={{width: 45, height: 25, display: 'inline-block', marginLeft: '.5rem'}} />
                </PokemonTypes>
            </PokemonDetailInfo>
        </PokemonDetailHeader>
        <Stats>
            <StatName>
                <TextRow color="gray" style={{width: 97}} />
            </StatName>
            <StatValue>
                <TextRow color="gray" style={{width: 24}} />
            </StatValue>
            <TextRow color="gray" style={{width: '100%'}} />
            <StatName>
                <TextRow color="gray" style={{width: 97}} />
            </StatName>
            <StatValue>
                <TextRow color="gray" style={{width: 24}} />
            </StatValue>
            <TextRow color="gray" style={{width: '100%'}} />
            <StatName>
                <TextRow color="gray" style={{width: 97}} />
            </StatName>
            <StatValue>
                <TextRow color="gray" style={{width: 24}} />
            </StatValue>
            <TextRow color="gray" style={{width: '100%'}} />
            <StatName>
                <TextRow color="gray" style={{width: 97}} />
            </StatName>
            <StatValue>
                <TextRow color="gray" style={{width: 24}} />
            </StatValue>
            <TextRow color="gray" style={{width: '100%'}} />
            <StatName>
                <TextRow color="gray" style={{width: 97}} />
            </StatName>
            <StatValue>
                <TextRow color="gray" style={{width: 24}} />
            </StatValue>
            <TextRow color="gray" style={{width: '100%'}} />
            <StatName>
                <TextRow color="gray" style={{width: 97}} />
            </StatName>
            <StatValue>
                <TextRow color="gray" style={{width: 24}} />
            </StatValue>
            <TextRow color="gray" style={{width: '100%'}} />
            <StatName>
                <TextRow color="gray" style={{width: 97}} />
            </StatName>
            <StatTotal>
                <TextRow color="gray" style={{width: 24}} />
            </StatTotal>
        </Stats>
        <DamageTable>
            <DamageTableTitle>
                <TextRow color="gray" style={{width: '100%'}} />
            </DamageTableTitle>
            <DamageTableTypes>
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block'}} />
            </DamageTableTypes>
            <DamageTableTitle>
                <TextRow color="gray" style={{width: '100%'}} />
            </DamageTableTitle>
            <DamageTableTypes>            
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block'}} />
            </DamageTableTypes>
            <DamageTableTitle>
                <TextRow color="gray" style={{width: '100%'}} />
            </DamageTableTitle>
            <DamageTableTypes>            
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block'}} />
            </DamageTableTypes>
            <DamageTableTitle>
                <TextRow color="gray" style={{width: '100%'}} />
            </DamageTableTitle>
            <DamageTableTypes>            
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block', marginRight: '.25rem'}} />
                <RoundShape color="gray" style={{width: 50, height: 25, display: 'inline-block'}} />
            </DamageTableTypes>
        </DamageTable>
        <MoveTable>
            <MoveTableHead>
                <MoveTableRow>
                    <MoveTableTitle><TextRow color="gray" style={{ width: '100%' }} /></MoveTableTitle>
                    <MoveTableTitle><TextRow color="gray" style={{ width: '100%' }} /></MoveTableTitle>
                    <MoveTableTitle><TextRow color="gray" style={{ width: '100%' }} /></MoveTableTitle>
                    <MoveTableTitle><TextRow color="gray" style={{ width: '100%' }} /></MoveTableTitle>
                    <MoveTableTitle><TextRow color="gray" style={{ width: '100%' }} /></MoveTableTitle>
                    <MoveTableTitle><TextRow color="gray" style={{ width: '100%' }} /></MoveTableTitle>
                    <MoveTableTitle><TextRow color="gray" style={{ width: '100%' }} /></MoveTableTitle>
                </MoveTableRow>
            </MoveTableHead>
            <MoveTableBody>
                <MoveTableRow>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                </MoveTableRow>
                <MoveTableRow>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                </MoveTableRow>
                <MoveTableRow>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                </MoveTableRow>
                <MoveTableRow>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                    <MoveTableCell><TextRow color="gray" style={{ width: '100%' }} /></MoveTableCell>
                </MoveTableRow>
            </MoveTableBody>
        </MoveTable>
    </Container>
)

export default pokemonPlaceholder;