import { Link } from "react-router-dom"
import styled from "styled-components"
import COLORS from "../constants/colors"
import logo from "../images/logo.png"
import Forms from "./forms"

export default function PageSignUp () {
    return (
        <Background>
            <img src={logo} alt="logo"/>
            <Forms/>
            <Link to="/">
                <Texto>Já tem uma conta? Entre agora!</Texto>
            </Link>  
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

    padding-top: 95px;
`
const Texto = styled.p`
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: ${COLORS.branco};

    display: block;
    margin-top: 36px;

    cursor: pointer;
`