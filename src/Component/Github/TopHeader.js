import React from 'react'
import styled from 'styled-components';
import Top from './Top';
// import img from "./Githubimg/https://desktop.github.com/images/star-bg.svg"

const TopHeader = () => {
    return (
      <Container>
       <Wrapper>
       <Top />
       </Wrapper>
 </Container>
    )
}

export default TopHeader

const Wrapper = styled.div``;

const Container = styled.div`
width: 100%;
height: 80vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: url("https://desktop.github.com/images/star-bg.svg")
`;
