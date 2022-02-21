import React from 'react';
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#FFF2F1, #A6B1AB);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #f2f2f2c1;
    border-radius: 10px;
    ${mobile({width: "75%"})}
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #A6B1AB;
    color: #FFF2F1;
    border-radius: 15px;
    cursor: pointer;

    &:hover{
        background-color: #FFF2F1;
        color: #B18A85;
        border: 1px solid #A6B1AB;
    }
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="email" type="email" />
                <Input placeholder="username" />
                <Input placeholder="password" type="password"/>
                <Input placeholder="confirm password" type="password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register