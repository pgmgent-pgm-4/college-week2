import React from 'react'
import styled from 'styled-components';

const RedBox = styled.article`
    padding: 1rem;
    border: 1px solid ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor}
`

const CardStyled = ({ children }) => {
    return (
        <RedBox>
            {children}
        </RedBox>
    )
}

export default CardStyled
