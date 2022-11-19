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
                <>
                    {data.wallet.map((value) => <Line value={value}/>)}
                    <Balance money = {data.balance}/>
                </>
            : <p>deu ruim!</p>}
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
