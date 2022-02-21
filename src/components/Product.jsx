import { FavoriteBorder, ShoppingBag } from "@mui/icons-material";
import Search from "@mui/icons-material/Search";
import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #b18a8563;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A6B1AB;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #f2f2f2;
    position: absolute;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover{
        background-color: #A6B1AB;
        transform: scale(1.2);
        color: #f2f2f2;
    }
`;


const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingBag />
            </Icon>
            <Icon>
                <Search />
            </Icon>
            <Icon>
                <FavoriteBorder />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product