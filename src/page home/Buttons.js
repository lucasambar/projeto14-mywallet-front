import styled from "styled-components"
import COLORS from "../constants/colors"
import minus from "../images/minus.png"
import plus from "../images/plus.png"

export default function Buttons () {
    return (
        <Container>
            <Button>
                <div>
                    <img src={plus} alt="plus icon"/>
                    <Text>Nova Entrada</Text>
                </div>
            </Button>

            <Button>
                <div>
                    <img src={minus} alt="minus icon"/>
                    <Text>Nova Saída</Text>
                </div>
            </Button>
        </Container>
    )
}

const Container = styled.div`
    height: 114px;
    width: 100vw;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 15px;

    margin-top: 13px;
    margin-bottom: 15px;
`
const Button = styled.div`
    height: 114px;
    width: 155px;
    border-radius: 5px;
    background-color: ${COLORS.buttons};

    cursor: pointer;

    div {
        width: 50%;
        padding: 10px 10px;
    }
`
const Text = styled.p`
    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${COLORS.branco};

    display: block;
    margin-top: 26px;
`