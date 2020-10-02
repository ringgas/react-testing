import styled from 'styled-components';

export const Buttoncomponent = styled.button`

background: ${props => props.primary ? "#bba399" : "white"};
color: ${props => props.primary ? "white" : "#bba399"};

font-size: 1em;

padding: 0.25em 1em;
border: 2px solid #bba399;
border-radius: 3px;
`;