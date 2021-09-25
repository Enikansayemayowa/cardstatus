import React from 'react'
import styled from 'styled-components';
import img from './Githubimg/github-desktop-screenshot-windows1.png';

const TopBottom = () => {
    return (
        <Container>
            <Wrapper src={img} />


        </Container>
    )
}

export default TopBottom

const Wrapper = styled.img`
width: 950px;
background-color: red;
height:100%;
// justify-content: center;
display: flex;
align-items:center;
0bject-fit:contain;
margin: 0 30px;
`;
const Container = styled.div`
height: 700px;
display: flex;
width: 100%;
justify-content: center;
// align-items:center;
`;