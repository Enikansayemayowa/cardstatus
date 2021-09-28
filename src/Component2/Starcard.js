import React from 'react'
import styled from 'styled-components'
import { FolderOpenFilled } from '@ant-design/icons';
import img from './img/stars-5.svg'

const Secondslide = () => {
    return (
        <Container>
            <Wrapper>
                <Text>A complete <b>freelance marketplace</b> solution</Text>
                <Card>
                    <Cards>
                        <Icons>
                            <FolderOpenFilled />
                        </Icons>
<p>                    Our freelancer marketplace theme is packed with monetisation tools. Charge a listing fee, featured fee, commission fee out of each sale. Even charge a monthly subscription membership
</p>  
<Star src={img}></Star>
                  </Cards>
                    <Cards>

                    </Cards>
                    <Cards>

                    </Cards>
                    <Cards>

                    </Cards>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default Secondslide;
const Star = styled.img``;
const Icons = styled.div``;
const Card = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 50px;
flex-wrap: wrap;


`;
const Cards = styled.div`
width: 250px;
border-radius: 10px;
background-color: white;
margin: 20px;
padding: 20px 10px;
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid;
margin-button: 30px;
justify-content: center;
-webkit-tap-highlight-color: transparent;
`;
const Container = styled.div`
min-height: 100vh;
width: 100%;
height: 650px;
background-color: white;
`;
const Wrapper = styled.div`
width: 100%;
// display: flex;
height: 600px;
// justify-content: center;
`;
const Text = styled.div`
width:100%;
display: flex;
align-items:center;
justify-content:center;
padding-top: 30px;
font-size:100px;
`;
