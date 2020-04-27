import styled from 'styled-components';
import { DetailName } from './General';

export const AbilityDetailName = styled(DetailName)`
    display: inline-block;
`;

export const AbilityDetailGen = styled.h5`
    text-transform: capitalize;
    margin-left: .25rem;
    display: inline-block;
`;

export const AbilityDetailNum = styled.span`
    text-transform: uppercase;
`;

export const AbilityDetailDescription = styled.h4`
    // margin: .25rem 0;
`;

export const AbilityDetailFlavor = styled.div`
    font-style: italic;
    margin: .5rem 0;
`;

export const AbilityDetailFlavorWithQuotes = styled(AbilityDetailFlavor)`
    &:before, &:after {
        content: '"';
    }
`;