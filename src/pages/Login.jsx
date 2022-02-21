import React from 'react';
import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#f2f2f2, #A6B1AB);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #f2f2f2c1;
    border-radius: 10px;
    ${mobile({width: "75%"})}
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #A6B1AB;
    color: #FFF2F1;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover{
        background-color: #FFF2F1;
        color: #B18A85;
        border: 1px solid #A6B1AB;
    }
`;

const StyledLink = styled(Link)`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: black;
`;

const OptionLink = styled.a`
    margin: 5px 0px;
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" type="password" />
                <Button>LOGIN</Button>
                <OptionLink>Do not remember the password?</OptionLink>
                <OptionLink><StyledLink to="/register">Create a new account</StyledLink></OptionLink>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login