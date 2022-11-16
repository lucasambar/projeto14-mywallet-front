import styled from "styled-components"
import COLORS from "../constants/colors"

export default function Forms () {
    return (
        <Form>
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Senha"/>
            <Button><p>Entrar</p></Button>
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