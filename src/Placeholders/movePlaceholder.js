import React from 'react';
import { RoundShape, TextRow, TextBlock } from 'react-placeholder/lib/placeholders';
import { Container } from '../Styles/Layout';
import { 
    MoveDetailContainer,
    MoveDetailLeft,
    MoveDetailRight,
    MoveDetailName, 
    MoveDetailDescription,
    MoveDetailFlavor,
    MoveStatTable, 
    MoveStatTitle, 
    MoveStatValue
 } from '../Styles/Moves';

const movePlaceholder = (
    <Container>
        <MoveDetailContainer>
            <MoveDetailLeft>
                <RoundShape color="gray" style={{ width: 61, height: 25}} />
                <RoundShape color="gray" style={{ width: 61, height: 25}} />
            </MoveDetailLeft>
            <MoveDetailRight>
                <MoveDetailName>
                    <TextRow color="gray" />
                </MoveDetailName>
            </MoveDetailRight>
        </MoveDetailContainer>   
        <MoveDetailFlavor>
            <TextBlock color="gray" rows={2} />
        </MoveDetailFlavor>
        <MoveDetailDescription>
            <TextBlock color="gray" rows={2} />
        </MoveDetailDescription>
        <MoveStatTable>
            <MoveStatTitle>
                <TextRow color="gray" />
            </MoveStatTitle>
            <MoveStatValue>
                <TextRow color="gray" />
            </MoveStatValue>
            <MoveStatTitle>
                <TextRow color="gray" />
            </MoveStatTitle>
            <MoveStatValue>
                <TextRow color="gray" />
            </MoveStatValue>
            <MoveStatTitle>
                <TextRow color="gray" />
            </MoveStatTitle>
            <MoveStatValue>
                <TextRow color="gray" />
            </MoveStatValue>
            <MoveStatTitle>
                <TextRow color="gray" />
            </MoveStatTitle>
            <MoveStatValue>
                <TextRow color="gray" />
            </MoveStatValue>
        </MoveStatTable>
    </Container>
)

export default movePlaceholder;