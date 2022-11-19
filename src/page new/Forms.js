import { useState } from "react"
import styled from "styled-components"
import COLORS from "../constants/colors"

export default function Forms ({type, text}) {
    const [info, setInfo] = useState({
        type,
        amount: "",
        description: ""
    })

    function saveValue (event) {
        event.preventDefault()
    }

    return (
        <Form onSubmit={saveValue}>
            <Input placeholder="Valor" type="text" value={info.amount}
            onChange={(e) => setInfo({...info, amount: e.target.value})}/>
            
            <Input placeholder="Descrição" type="text" value={info.description}
            onChange={(e) => setInfo({...info, description: e.target.value})}/>

            <Button type="submit">
                <p>Salvar {text}</p>
            </Button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 13px;

    margin-top: 40px;
`
const Input = styled.input`
    height: 58px;
    width: 326px;
    left: 25px;
    top: 96px;
    border-radius: 5px;
    border: none;
    padding-left: 15px;

    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: ${COLORS.textos};

    &&::placeholder{
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: ${COLORS.textos};
    }
`
const Button = styled.button`
    height: 46px;
    width: 326px;
    left: 25px;
    top: 238px;
    border-radius: 5px;
    border: none;
    background-color: ${COLORS.buttons};

    font-family: Raleway;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: ${COLORS.branco};

    display: flex;
    justify-content: center;
    align-items:center;

    cursor: pointer;

    p {display:block;}
`