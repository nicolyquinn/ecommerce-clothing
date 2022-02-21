import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import Search from '@mui/icons-material/Search';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import {mobile} from "../responsive";
import { Link } from "react-router-dom";

 
const Container = styled.div`
    height: 60px;
    background-color: white;
    ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
    flex: 1;
`;

const SearchContainer = styled.div`
    background-color: #FFF2F1;
    display: flex;
    margin-left: 25px;
    padding: 10px;
    border-radius: 10px;
`;

const Input = styled.input`
    border: none;
    background-color: transparent;
    width: 100%;
    ${mobile({width: "50%"})}
`;

const Center = styled.div`
    flex: 1; 
    text-align: center;
    margin-top: -10px;
`;

const Logo = styled.span`
    font-weight: 500;
    font-family: 'Romanesco', cursive;
    font-size: 50px;
    color: #B18A85;
    cursor: pointer;
    ${mobile({fontSize: "30px"})}
`;

const Right = styled.div`
    flex: 1;
    align-content: center;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-right: 10px;
    ${mobile({flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: #B18A85;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
    
`;

const StyledLink = styled(Link)`
   text-decoration: none;
`;

const StyledLogo = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    font-family: 'Romanesco', cursive;
    font-size: 50px;
    color: #B18A85;
    cursor: pointer;
    ${mobile({fontSize: "30px"})}
`;

const StyledCart = styled(Link)`
   text-decoration: none;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color: "#B18A85"}}/>
                </SearchContainer>  
            </Left>
            <Center>
                <Logo><StyledLogo to="/">mean girls</StyledLogo></Logo>
            </Center>
            <Right>
                <MenuItem><StyledLink to=""> WISHLIST </StyledLink></MenuItem>
                <MenuItem><StyledLink to="/sign-in"> SIGN IN </StyledLink></MenuItem>
                <MenuItem>
                    <StyledCart to="/cart">
                    <Badge badgeContent={4} color="primary">
                        <ShoppingBag style={{color: "#B18A85" }} color="action" />
                    </Badge>  
                    </StyledCart>  
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar