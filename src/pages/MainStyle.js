import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.25fr 2.5fr;
    grid-template-areas: 
        "LeftContainer RightContainer"
    ;
    grid-gap: 15px;
    padding: 10px 10%;
    padding-bottom: 15px;
    background-color: #f2f2f2;
`