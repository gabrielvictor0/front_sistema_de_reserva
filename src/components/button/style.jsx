import styled from "styled-components";

export const ButtonLoginRegister = styled.button`
    width:100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 8px;
    margin:${props => props.margin || "0px"};
`