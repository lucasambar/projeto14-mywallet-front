import styled from "styled-components"
import COLORS from "../constants/colors"
import Header from "./Header"

export default function PageHome () {
    return (
        <Background>
            <Header/>
        </Background>
    )
}

const Background = styled.div`
    background-color: ${COLORS.background};
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`