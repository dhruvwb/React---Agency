import React from "react";
import styled from "styled-components";
import map from "../images/map.png";
import { AnimatedShapes } from "./AnimatedShapes";

const Contanier = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
`;

const Title = styled.span`
  font-size: 70px;
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

export const Feature = () => {
  return (
    <Contanier>
      <Left>
        <Image src={map} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <SubTitle>We Know that Good design means good business lorwem</SubTitle>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eius
          ipsam dolor optio at nostrum libero provident, suscipit eaque possimus
          voluptate dicta. Sequi sapiente veritatis vitae accusamus unde impedit
          reprehenderit.
        </Desc>

        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eius
          ipsam dolor optio at nostrum libero provident, suscipit eaque possimus
          voluptate dicta. Sequi sapiente veritatis vitae accusamus unde impedit
          reprehenderit.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Contanier>
  );
};
