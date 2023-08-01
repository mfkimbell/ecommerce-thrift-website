import styled from "styled-components";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import clothes1 from "../components/images/clothes.png";

const Container2 = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${clothes1});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container2>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            style={{ marginTop: "20px" }}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            style={{ marginTop: "20px" }}
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            style={{ marginTop: "20px", backgroundColor: "#0D6EFD" }}
            onClick={handleClick}
            disabled={isFetching}
            class="btn btn-primary"
          >
            {" "}
            <b>LOGIN</b>{" "}
          </Button>
          {error && <Error>Something went wrong...</Error>}

          <p style={{ marginTop: "10px" }}>
            {" "}
            New to Sassys? <a href="/register"> Create an Account</a>
          </p>
        </Form>
      </Wrapper>
    </Container2>
  );
};

export default Login;
