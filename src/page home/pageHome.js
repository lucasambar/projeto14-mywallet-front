import styled from "styled-components"
import COLORS from "../constants/colors"
import Buttons from "./Buttons"
import Header from "./Header"
import WalletBox from "./WalletBox"

export default function PageHome () {
    return (
        <Background>
            <Header/>
            <WalletBox/>
            <Buttons/>
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