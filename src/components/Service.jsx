import React, { useState } from "react";
import styled from "styled-components";
import dp from "../images/dp.jpg";
import { MiniCard } from "./MiniCard";
import play from "../images/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;
`;
const Left = styled.div`
  width: 50%;
  position: relative;
`;

const Right = styled.div`
  width: 50%;
`;
const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 80vh;
  margin-top: 50px;
  border-radius: 10px;
  margin-left: 100px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export const Service = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Left>
        <Image open={open} src={dp} />
        <Video
          open={open}
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          autoPlay
          loop
          controls
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple Process to start.</Title>
          <Desc>
            We provide digital experince services to startups and small business
            for a partner of their digital Media , design and development , lead
            generation and communications requirements . We work with you , not
            for you . Although we have a great resources.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={play} /> How it works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};
