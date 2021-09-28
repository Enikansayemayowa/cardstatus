import React from 'react';
import { BiGame } from 'react-icons/bi';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import {FaDev} from 'react-icons/fa';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import {VscGithubAlt} from 'react-icons/vsc'
import img2 from './img/logo.png'



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>{img2}</Logo>
                <Links>
                <NavLink to='/'>
                    <GoHome/>
                </NavLink>
                <NavLink to='/game'>
                    <BiGame/>
                </NavLink>
                <NavLink to='/github-desktop'>
                    <VscGithubAlt/>
                </NavLink>
                <NavLink to='/dailydev'>
                    <FaDev/>
                </NavLink>
                <NavLink to='/accordion'>
                    <FaAssistiveListeningSystems/>
                </NavLink>
                </Links>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
const Container = styled.div`
width:100%;
height: 60px;
color:white;
display: flex;
align-items: center;
`;
const Wrapper = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width:100%;
`;
const Logo = styled.div`
font-size: 25px;
font-family: cursive;
padding: 0 40px;
`;
const NavLink = styled(Link)`
margin: 0 20px;
text-transform: uppercase;
text-decoration: none;
color: white;
font-size: 30px;
transform: scale(1);
transition: all 350ms;
cursor: pointer;

:hover{
    transport: scale(1.5);
    color: grey;
}
`;
const Links = styled.div`
display: flex;
padding: 0 30px;
`;

