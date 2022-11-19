import styled from "styled-components"

export default function Line ({value}) {

    return (
        <Container>
            <div>
                <Date>{value.date}</Date>
                <Info>{value.description}</Info>
            </div>
            <Money money={value.type}>{value.amount}</Money>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        gap: 10px;
    }
`
const Date = styled.div`
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #C6C6C6;
`
const Info = styled.div`
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
`
const Money = styled.p`
    display: block;

    font-family: Raleway;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: right;
    color: ${props => props.money === "entrance" ? "#03AC00" : "#C70000"};
`