import React from "react";
import styled from "styled-components";
import search from "../images/search.png";

const Contanier = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  align-items: center;
`;

const Image = styled.img`
  width: 20px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
`;

export const MiniCard = () => {
  return (
    <Contanier>
      <Image src={search} />
      <Text>Lorem is the Writing part of the body.</Text>
    </Contanier>
  );
};
