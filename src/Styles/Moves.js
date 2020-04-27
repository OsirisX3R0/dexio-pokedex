import styled from 'styled-components';
import { DetailName, Type, Class } from './General';
import { border } from './Variables';

export const MoveDetailContainer = styled.div`
    display: grid;
    grid-template-columns: 65px 1fr;
    grid-gap: .5rem;
`;

export const MoveDetailLeft = styled.div``;

export const MoveDetailRight = styled.div``;

export const MoveDetailType = styled(Type)`
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const MoveDetailClass = styled(Class)`
    margin-top: .25rem;
    display: block;
`;

export const MoveDetailName = styled(DetailName)`
    // display: inline-block;
`;

export const MoveDetailGen = styled.h5`
    text-transform: capitalize;
    // margin-left: .25rem;
    // display: inline-block;
`;

export const MoveDetailNum = styled.span`
    text-transform: uppercase;
`;

export const MoveDetailDescription = styled.h4`
    // margin: .25rem 0;
`;

export const MoveDetailFlavor = styled.div`
    font-style: italic;
    margin: .5rem 0;
`;

export const MoveDetailFlavorWithQuotes = styled(MoveDetailFlavor)`
    &:before, &:after {
        content: '"';
    }
`;

export const MoveStatTable = styled.div`
    border-top: ${border};
    // border-bottom: ${border};
    margin-top: 1rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: .2rem;
`;

export const MoveStatTitle = styled.div`
    color: cyan;
    font-weight: bold;
`;

export const MoveStatValue = styled.div`
    
`;