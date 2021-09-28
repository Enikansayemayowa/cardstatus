import React from 'react'
import styled from 'styled-components'
import img from './img/elimentor.png'

const Elimentor = () => {
    return (
        <Container>
            <Wrapper>
                <Elimentimg src={img}></Elimentimg>
                <Heading>Works with Elementor</Heading>
                <Text>Our theme works with Elementor page builder (and other page builders as well, like divi and visual composer) . In fact the page as you see now is done in elementor. It even works very good with the free version so you dont need to spend anything extra, unless you want to. Great compatibility and high speed in creating custom pages and building the website however you want to.</Text>
            </Wrapper>
        </Container>
    )
}

export default Elimentor
const Container = styled.div``;
const Wrapper = styled.div``;
const Elimentimg = styled.img``;
const Heading = styled.div``;
const Text = styled.div``;