import { FacebookOutlined, Instagram, MailOutline, Phone, Pinterest, Room, YouTube } from "@mui/icons-material";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    font-weight: 500;
    font-family: 'Romanesco', cursive;
    font-size: 50px;
    color: #B18A85;
    cursor: pointer;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: #A6B1AB;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#eee"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;


const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>mean girls</Logo>
            <Desc>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sunt exercitationem porro debitis quia. Nihil officiis tenetur libero necessitatibus unde officia magnam dicta placeat eligendi dolorem odit, vero, et earum.
            </Desc>
            <SocialContainer>
                <SocialIcon>
                    <FacebookOutlined />
                </SocialIcon>
                <SocialIcon>
                    <Instagram />
                </SocialIcon>
                <SocialIcon>
                    <YouTube />
                </SocialIcon>
                <SocialIcon>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Top</ListItem>
                <ListItem>Bottom</ListItem>
                <ListItem>Dress</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}} /> 622 Dixie Path, South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}} /> +1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> contact@meangirls.com
            </ContactItem>
            <Payment src="/img/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer