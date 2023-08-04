import styled from "styled-components";
import { signup } from "../redux/userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
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
  border: 3px;
  borderradius: BorderRadius.circular(20);

  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
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
            style={{ minWidth: "20em" }}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            style={{ minWidth: "20em", marginTop: "10px" }}
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            style={{ minWidth: "20em", marginTop: "10px" }}
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            style={{ marginTop: "10px", backgroundColor: "#0D6EFD" }}
            onClick={handleClick}
            disabled={isFetching}
            class="btn btn-primary"
          >
            {" "}
            <b>REGISTER</b>{" "}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
