// import { Header } from 'antd/lib/layout/layout';
import React from 'react'
import styled from 'styled-components';
// import img1 from '../Githubimg/co-authoring.png'

const GithubCenter = ({chn, text, img, paragraph}) => {
    return (
        <Container>
            <Wrapper chn={chn}>
                <WrapperImage src={img} />
                    <WrapperContent>
                        <Header>{paragraph}</Header>
                        <Para> {text} </Para>
                        </WrapperContent >  

            </Wrapper>
            

        </Container>
    )
}

export default GithubCenter;
const WrapperContent = styled.div`

width:400px;
align-items: center;
padding-left: 50px
`;
const Header = styled.div`
font-weight: bold;
font-size: 15px;
magin-bottom: 20px;
`;
const Para = styled.div``;
const WrapperImage = styled.img`
width: 500px;
height: 300px;
object-fit: contain;
`;
const Wrapper = styled.div`
width: 950px;
display: flex;
justify-content: space-between;
flex-direction: ${({chn}) => (chn ? "row-reverse" : "row")};
align-items: center;
flex-wrap: wrap;
padding-bottom: 80px;
`;
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
color: white;
`;
