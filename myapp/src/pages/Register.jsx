import styled from "styled-components";
import { signup } from "../redux/apiCalls";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import clothes1 from "../components/images/clothes.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${clothes1});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicky");
    signup(dispatch, { username, email, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form style={{ display: "flex", flexDirection: "row" }}>
          <Input
            style={{ minWidth: "15em" }}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            style={{ minWidth: "20em" }}
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            style={{ marginTop: "1em" }}
            onClick={handleClick}
            disabled={isFetching}
          >
            {" "}
            REGISTER{" "}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
