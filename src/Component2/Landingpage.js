  
import React from "react";
import styled from "styled-components";
import Img from "./img/mainscreen.png";
import Button from "./Button";

const Landingpage = () => {
  return (
    <Container>
      <Wrapper >
        <BoxText>
          <Title>
            Best WP Project Bidding Theme – Freelance Marketplace 2021
          </Title>
          <SubTitle>
            The most complete freelancer marketplace theme in the world. Build
            your freelancer website with the best template. Finest written code
            and awesome customer support!
          </SubTitle>
          <Sub>
            Starting from{" "}
            <span>
              <sup>$</sup>149
            </span>{" "}
            <Button text="See Pricing" bg clr Wd Pd />
          </Sub>
          <ButtonContainer>
            <Button text="VIEW DEMO" />
            <Button text="PURCHASE THEME" />
          </ButtonContainer>
          <BottomText>
            Latest Update Released on 19 August 2021 Works with WordPress v5.8
          </BottomText>
        </BoxText>
        <ImageContainer>
          <BoxImage src={Img} />
          <Button text="FAQ" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Landingpage;

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 80px;
`;

const BoxText = styled.div`
  width: 500px;
  min-width: 320px;
  height: 500px;
  background: ;
  margin: 10px;
  padding: 40px 0;
`;

const BoxImage = styled.img`
  width: 500px;
  min-width: 320px;
  height: 500px;
  margin: 10px;
`;

const Title = styled.h1`
  color: white;
  font-family: lato, sans-serif;
`;

const SubTitle = styled.p`
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: -10px;
  margin-top: 40px;
`;

const Sub = styled.h2`
  color: white;
  display: flex;
  align-items: center;
  span {
    margin-left: 3px;
    color: #69ff69;
  }
`;

const BottomText = styled.div`
  color: white;
  font-weight: 500;
  width: 350px;
  line-height: 1.5;
  padding-top: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;