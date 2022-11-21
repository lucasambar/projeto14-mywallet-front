import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import COLORS from "../constants/colors"

export default function Forms ({type, text}) {
    const [error, setError] = useState("")
    const [info, setInfo] = useState({
        type,
        amount: "",
        description: ""
    })

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function saveNew (event) {
        event.preventDefault()

        const promisse = axios.post("http://localhost:5001/wallet", info, config)
        promisse.then(() => navigate("/home"))
        promisse.catch(erro => erro(erro.response.data))
    }

    return (
        <Form onSubmit={saveNew}>
            <Input placeholder="Valor" type="text" value={info.amount}
            onChange={(e) => setInfo({...info, amount: e.target.value})}/>
            
            <Input placeholder="Descrição" type="text" value={info.description}
            onChange={(e) => setInfo({...info, description: e.target.value})}/>

            <Error>{error}</Error>
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
const Error = styled.p`
    font-family: Raleway;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #C70000;
`