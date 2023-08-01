import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { item } from "../data";
import woman1 from "./images/woman1.png";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Poster = () => {
  return (
    <Container>
      <Wrapper>
        
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={woman1} />
            </ImgContainer>
            <InfoContainer>
              <Title>DON'T WAIT</Title>
              <Desc>CHECK OUT OUR INVENTORY TODAY!</Desc>
            </InfoContainer>
          </Slide>
       
      </Wrapper>
    </Container>
  );
};

export default Poster;
