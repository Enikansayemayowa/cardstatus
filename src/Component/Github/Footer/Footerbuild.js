import React from 'react'
import styled from 'styled-components';

const Footerbuild = () => {
    return (
        <Container>
            <Wrapper>
               <Footerimg src =""/>
               <Footertext>Expanded image diff support</Footertext>
               <Footerpara>Easily compare changed images. See the before and after, swipe or fade between the two, or look at just the changed parts.</Footerpara>
            </Wrapper>
        </Container>
    )
}

export default Footerbuild;
const Footerimg = styled.div``;
const Footertext = styled.div``;
const Footerpara = styled.div``;
const Container = styled.div`
 width: 100%;
 height: 400px;
 justify-content: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 `;

 const Wrapper = styled.div`
 width: 950px;
 background-color: red;
 height:100%;
 display:flex;
 justify-content: center;
 `;