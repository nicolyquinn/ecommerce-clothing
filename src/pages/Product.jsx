import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";


const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection:"column"})}
`;

const ImgContainer = styled.div`
    flex: 1;
`;


const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    border-radius: 30px;
    border: 4px solid #B18A85;
    ${mobile({height: "40vh"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 200;

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 40%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "95%"})}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;

`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "95%"})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #A6B1AB;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 1px solid #A6B1AB;
    background-color: #FFF2F1;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color: #B18A85;
        color: #F2f2f2;
        transform: scale(1.1);
    }
`;



const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
            <Image src="/img/top1/img1.webp"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Pink Top</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At veniam cumque magni atque ullam, minus, adipisci officia harum culpa qui praesentium, aliquid eligendi consectetur repellendus dolorem totam eum laudantium. Neque.</Desc>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="pink"/>
                        <FilterColor color="lightblue"/>
                        <FilterColor color="lightgreen"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
        
    </Container>
  )
}

export default Product