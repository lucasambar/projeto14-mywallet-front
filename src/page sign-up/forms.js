import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import COLORS from "../constants/colors"

export default function Forms () {
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmePassword: ""
    })

    function cadastrar (event) {
        event.preventDefault()

        const promisse = axios.post("http://localhost:5001/sign-up", user)
        promisse.then(() => navigate("/"))
        promisse.catch(erro => setError(erro.response.data))
    }

    return (
        <Form onSubmit={cadastrar}>
            <Input type="text" placeholder="Nome" value={user.name}
            onChange={(e) => {setUser({...user, name: e.target.value})}}/>

            <Input type="email" placeholder="E-mail" value={user.email}
            onChange={(e) => {setUser({...user, email: e.target.value})}}/>
            
            <Input type="password" placeholder="Senha" value={user.password}
            onChange={(e) => {setUser({...user, password: e.target.value})}}/>
            
            <Input type="password" placeholder="Cofirme a senha" value={user.confirmePassword}
            onChange={(e) => {setUser({...user, confirmePassword: e.target.value})}}/>
            
            <Error>{error}</Error>
            <Button onClick={cadastrar}><p>Cadastrar</p></Button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-top: 22px;
`
const Input = styled.input`
    height: 58px;
    width: 326px;
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
    border-radius: 5px;
    background-color: ${COLORS.buttons};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    p {
        font-family: Raleway;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: ${COLORS.branco};
    }

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