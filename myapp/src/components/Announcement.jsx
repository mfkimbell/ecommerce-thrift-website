import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: #654321;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  font-weight: 800;
  margin-top: 20px;
`;

const Announcement = () => {
  return <Container>A stylish up-cycling business in the Birmingham area</Container>;
};

export default Announcement;
