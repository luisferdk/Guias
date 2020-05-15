import styled, { css } from 'styled-components';


export const Title = styled.h1`
  color:peru;
  border: ${props => props.border ? "2px solid palevioletred" : ""};
  &:hover{
    color: palevioletred;
  }

  ${props => props.primary && css`
    background: palevioletred;
    color:white;
  `}
`;