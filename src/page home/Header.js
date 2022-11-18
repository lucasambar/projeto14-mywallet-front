import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import COLORS from "../constants/colors"
import exit from "../images/exit.png"

export default function Header () {
    const user = JSON.parse(localStorage.getItem("user"))

    const navigate = useNavigate()

    function logout () {
        localStorage.removeItem("user")
        navigate("/")
    }

    return (
        <Head>
            <Texto>Olá, {user.name}</Texto>
            <img src={exit} alt="exit icon" onClick={logout}/>
        </Head>
    )
}

const Head = styled.header`
    width: 100vw;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 22px;

    img {
        cursor: pointer;
    }
`
const Texto = styled.p`
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: ${COLORS.branco};
`