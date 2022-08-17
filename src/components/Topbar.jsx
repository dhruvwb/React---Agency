import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white; ;
`;
const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopRight = styled.div``;

const TopLeft = styled.div``;

const Topbar = () => {
  return (
    <Container>
      <TopbarWrapper>
        <TopLeft>Left</TopLeft>
        <TopRight>Right</TopRight>
      </TopbarWrapper>
    </Container>
  );
};

export default Topbar;
