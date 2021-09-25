import React from 'react';
import styled from 'styled-components';
import img from "./img/mainscreen.png";

const Firstbackground = () => {
    return (
        <Container>
            <Wrapper >
               <Wrapper1>
               <Boldtext>
                    <Text1>Best WP Project Bidding Theme – Freelance Marketplace 2021</Text1>
                    <Text2>The most complete freelancer marketplace theme in the world. Build your freelancer website with the best template. Finest written code and awesome customer support! </Text2>
                {/* <Text3></Text3> */}
                </Boldtext>
                <Button>
                    <Buttons>VIEW DEMO</Buttons>
                    <Buttons>PURCHASE THEME</Buttons>
                </Button>
                <Text2>Latest Update Released on 19 August 2021</Text2>
                <Text2>Works with WordPress v5.8</Text2>
               </Wrapper1>
               <Wrapper2 >
                   <Image src={img}></Image> 
                   <Buttons>SEE FAQ</Buttons>
               </Wrapper2>
               
            </Wrapper>
        </Container>
    )
}

export default Firstbackground;
const Buttons = styled.div`
font-weight:500;
color:white;
white-space: nowrap;
vertical-align: middle;
padding: 0 25px;
margin: 25px;
font-size:16px;
cursor: pointer;
border-radius:8px;
line-height: 48px;
background: #475bec;
background-size: 200%;
`;
const Button = styled.div`
// align-items: center;
text-align:center;
color: #212529;
font-weight:400;
line-height: 1.5;
font:normal 125%/1.4 "Open Sans","Helvetica Neue Light","Helvetica Neue","Helvetica","Arial",sans-serif;
// margin-block-start: 10em;
// margin-block-end:1em;
// display:block;
display: flex;
// justify-content:space-around;

`;
const Text1 = styled.div`
color: #fff;
font-size: 40px;
margin-bottom: 12px;
font-weight: 700;
letter-spacing: -1px;
`;
const Text2 = styled.div`
color: #dadada;
font-size: 10px;
text-align: center;
margin-bottom:45px;
line-height: 1.2;
font:normal 125%/1.4 "Open Sans","Helvetica Neue Light","Helvetica Neue","Helvetica","Arial",sans-serif;
`;
const Boldtext = styled.div`

width:100%;
padding-top:15px;
marging-top: 10px;
text-align: center;
`;
const Wrapper1 = styled.div`
width:45%;
`;
const Wrapper2 = styled.div`
width: 45%;
display:flex;
flex-direction: column;

`;
const Image = styled.img`
background-size: contain;
width:80%;
`;
const Wrapper = styled.div`
height: 1000px;
width:100%;
display:flex;
background-image: url("landing.jpeg");
background-repeat:no-repeat:
background-size: cover;
background-position: top center;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;
const Container = styled.div``;
