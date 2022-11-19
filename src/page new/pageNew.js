import { useParams } from "react-router-dom"
import styled from "styled-components"
import COLORS from "../constants/colors"
import Forms from "./Forms";

export default function PageNew () {
    const {type} = useParams("type")
    
    let text;
    switch (type) {
        case ("exit") :
            text = "saída"
            break
        case ("entrance") :
            text = "entrada"
            break
        default: 
            text = ""
            break
    }

    return (
        <Background>
            <Text>Nova {text}</Text>
            <Forms type={type} text={text}/>
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
const Text = styled.p`
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: ${COLORS.branco};

    display: block;
    width: 100%;
    padding: 25px 25px;
`