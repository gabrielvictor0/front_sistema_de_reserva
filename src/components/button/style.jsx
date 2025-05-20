import styled from "styled-components";

export const ButtonLoginRegister = styled.button`
    width:100%;
    height: 40px;
    border: 1px solid red;
    border-radius: 8px;
    margin:${props => props.margin || "0px"};
    cursor: pointer;
`

export const GenericButton = styled.button`
    width:200px;
    height: 40px;
    border: 1px solid black;
    background-color: white;
    border-radius: 8px;
    margin:${props => props.margin || "0px"};
    cursor: pointer;
`