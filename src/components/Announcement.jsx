import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #A6B1AB;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>FREE SHIPPING on Orders Over $50</Container>
  )
}

export default Announcement