import styled from "styled-components";
import React from "react";
import dp from "../images/dp.jpg";
import { AnimatedShapes } from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  ${"" /* border: 2px solid blue; */}
  display: flex;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Desc = styled.p`
  width: 60%;
  margin-top: 20px;
  font-size: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  ${"" /* border: 2px solid green; */}
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${"" /* border: 2px solid black; */}
`;

const Right = styled.div`
  width: 40%;
  ${"" /* border: 2px solid red; */}
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* border: 2px solid yellow; */}
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call us @ 98734789360</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={dp} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};
