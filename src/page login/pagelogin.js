import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import COLORS from "../constants/colors.js"
import logo from "../images/logo.png"
import Forms from "./form.js"

export default function PageLogin () {
    const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {navigate("/home")}
    },[navigate])

    return (
        <Background>
            <Img src={logo} alt="logo"/>
            <Forms/>
            <Link to="/sign-up">
                <Texto>Primeira vez? Cadastre-se!</Texto>
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

    padding-top: 150px;
`
const Img = styled.img`
    display: block;
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