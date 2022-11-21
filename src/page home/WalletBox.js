import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import COLORS from "../constants/colors"
import Balance from "./balance"
import Line from "./line"

export default function WalletBox () {
    const [data, setData] = useState(undefined)
    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }

        const promisse = axios.get("http://localhost:5001/wallet", config)
        promisse.then(response => setData(response.data))
        promisse.catch(erro => console.log(erro.response.data))        
    },[user])

    return (
        <Box>
            {data ? 
                data.wallet.length !== 0 ?
                <>
                    {data.wallet.map((value, index) => <Line value={value} key={index}/>)}
                    <Balance money = {data.balance}/>
                </> :
                <Text>Não há registros de
                entrada ou saída</Text>
            : <Text>Ops, algo deu de errado, tente mais tarde :/</Text>}
        </Box>
    )
}

const Box = styled.div`
    height: 446px;
    width: 326px;
    border-radius: 5px;
    background-color: ${COLORS.branco};
    padding: 15px 15px;

    position: relative;
`
const Text = styled.p`
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #868686;

    display: block;
    height: 46px;
    width: 180px;

    position: absolute;
    height: 46px;
    left: 73px;
    top: 200px;
`