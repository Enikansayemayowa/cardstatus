import React from 'react';
import styled from "styled-components";

const GameScreen = () => {

    return (
        <Container>
            <Wrapper>
                <NameSection>mayowa game</NameSection>
                <GameSectiondiv>
                    <GameSection>
                    <BoxSection1>Box</BoxSection1>
                    <BoxSectionname>num</BoxSectionname>
                </GameSection>
                <GameSection>
                    <BoxSection1>Box</BoxSection1>
                    <BoxSectionname>num</BoxSectionname>
                </GameSection>
              
                </GameSectiondiv>
                <ResultSection>Result</ResultSection>
            </Wrapper>
        </Container>
    )
}

export default GameScreen;
const BoxSectionname = styled.div``;
const BoxSection1 = styled.div``;
const ResultSection = styled.div``;
const GameSection = styled.div``;
const GameSectiondiv = styled.div`
display: flex;
justify-content: space-around;
align-item: center;
`;
const NameSection = styled.div``;

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
flex: 100vh;
background-color: blach;


`;
const Container = styled.div`
width: 100%;
height: 100vh;
mid-height: 100vh;
padding-top:50px;
background-color: black;
color: white;
// height: 100%;
`;


