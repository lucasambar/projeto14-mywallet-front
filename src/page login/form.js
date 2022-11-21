import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import COLORS from "../constants/colors"

export default function Forms () {
    const navigate = useNavigate()

    const [erro, setErro] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    
    function signIn (e) {
        e.preventDefault()

        const promisse = axios.post("http://localhost:5001/sign-in", user)
        promisse.then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data))
            navigate("/home")})
        promisse.catch(erro => setErro(erro.response.data))        
    }

    return (
        <Form onSubmit={signIn}>
            <Input type="email" placeholder="E-mail" value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}/>

            <Input type="password" placeholder="Senha"value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}/>

            <Error>{erro}</Error>
            <Button type="submit"><p>Entrar</p></Button>
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