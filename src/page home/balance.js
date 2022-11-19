import styled from "styled-components"

export default function Balance () {
    const money = 2849.96
    
    return (
        <Container>
            <Text>SALDO</Text>
            <Money money={money}>{money}</Money>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 15px 15px;
    
    display: flex;
    justify-content: space-between;

    position: absolute;
    bottom: 0;
    left: 0;
`
const Text = styled.p`
    display: block;

    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
`
const Money = styled.p`
    display: block;

    font-family: Raleway;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: right;
    color: ${props => props.money >= 0 ? "#03AC00" : "#C70000"}
`