// import { Header } from 'antd/lib/layout/layout';
import React from 'react'
import styled from 'styled-components'

const Top = () => {
    return (
       <Container>
         < Logo src ={"desktop-icon.svg"} />
         <Logolink>
             <Link >Home</Link>
             <Link chr> About</Link>
             <Link chr>Contact</Link>

         </Logolink>
       
           
       </Container>
    )
}

export default Top;
const Link = styled.div`
font-weight: bold;
margin: 0 15px;
color: ${({chr}) => (chr ? "#7457BE" : "white") };


:hover{
    text-decoration: underline;
    cursor: pointer;
}
`;
const Logolink = styled.div`
display: flex;
`;
const Logo = styled.img`
height: 150px;
width: 150px;
border-radius: 50%;
margin-bottom : 10px;
object-fit: cover;
`;
const Container = styled.div`
width: 100%;
padding-top: 50px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
// background-color: red;
`;