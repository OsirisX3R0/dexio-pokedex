import React from 'react';
import { TextRow, TextBlock } from 'react-placeholder/lib/placeholders';
import { Container } from '../Styles/Layout';
import { DetailName, ListTitle, ListItem, ListName, List } from '../Styles/General';
import { 
    AbilityDetailName, 
    //AbilityDetailGen,
    AbilityDetailDescription,
    AbilityDetailFlavor
 } from '../Styles/Abilities';

const abilityPlaceholder = (
    <Container>
        <DetailName>
            <TextRow color="gray" style={{ marginTop: 0}} />
        </DetailName>
        {/* <AbilityDetailGen>
            <TextRow color="gray" />
        </AbilityDetailGen> */}
        <AbilityDetailFlavor>
            <TextBlock color="gray" rows={2} />
        </AbilityDetailFlavor>
        <AbilityDetailDescription>
            <TextBlock color="gray" rows={3} />
        </AbilityDetailDescription>
        <ListTitle>
            <TextRow color="gray" style={{ width: 150 }} />
        </ListTitle>
        <List>
            <ListItem>
                <ListName to="">
                    <TextRow color="gray" />
                </ListName>
            </ListItem>
            <ListItem>
                <ListName to="">
                    <TextRow color="gray" />
                </ListName>
            </ListItem>
            <ListItem>
                <ListName to="">
                    <TextRow color="gray" />
                </ListName>
            </ListItem>
            <ListItem>
                <ListName to="">
                    <TextRow color="gray" />
                </ListName>
            </ListItem>
            <ListItem>
                <ListName to="">
                    <TextRow color="gray" />
                </ListName>
            </ListItem>
            <ListItem>
                <ListName to="">
                    <TextRow color="gray" />
                </ListName>
            </ListItem>
            <ListItem>
                <ListName to="">
                    <TextRow color="gray" />
                </ListName>
            </ListItem>
            <ListItem>
                <ListName to="">
                    <TextRow color="gray" />
                </ListName>
            </ListItem>
            <ListItem>
                <ListName to="">
                    <TextRow color="gray" />
                </ListName>
            </ListItem>
            <ListItem>
                <ListName to="">
                    <TextRow color="gray" />
                </ListName>
            </ListItem>
        </List>
    </Container>
)

export default abilityPlaceholder;