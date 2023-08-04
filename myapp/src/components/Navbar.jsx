import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userSlice";
import { clearCartUponLogout } from "../redux/cartSlice";


const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  color: black;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 600;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const handleClick = () => {
    dispatch(logout());
    dispatch(clearCartUponLogout());
  };
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center>
          <Logo>SASSY'S VINTAGE</Logo>
        </Center>
        <Right>
          {user ? (<Link style={{ textDecoration: "none" }} to="" onClick={handleClick}> <MenuItem>LOGOUT</MenuItem> </Link>) : null}
          <Link style={{ textDecoration: "none" }} to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
