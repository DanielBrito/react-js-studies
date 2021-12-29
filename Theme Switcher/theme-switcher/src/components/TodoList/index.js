import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-family: sans-serif;
    font-size: 18px;

    li{
        line-height: 36px;
    }
`;

const TodoList = () => (
    <List>
        <li>Fazer café</li>
        <li>Estudar ReactJS</li>
        <li>Estudar Styled Components</li>
    </List>
)

export default TodoList
