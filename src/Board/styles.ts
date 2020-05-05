import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 1rem;
`;

// this is a 'controller compoanent' (controlled by the Board)
export const Square = styled.div`
    height: 16px;
    width: 16px;
    border: 1px solid #000;
    display: inline-block;
`;