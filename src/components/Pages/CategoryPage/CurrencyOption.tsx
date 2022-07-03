import { useContext } from 'react';
import { Typography, Select, FormControl, MenuItem, InputLabel, Box, SelectChangeEvent } from '@mui/material';
import { RateContext } from '../../../App';
import { CurrencyContext } from "../../../App";

const traditional = ['eur','sgd','usd']
const crypto = ['doge','etc','ltc']

const traditionalOp = traditional.map((currency)=><MenuItem value={`${currency} $`}><Typography variant="body2" color="textSecondary">{currency}</Typography></MenuItem>)
const cryptoOp = crypto.map((currency)=><MenuItem value={`${currency} `}><Typography variant="body2" color="textSecondary">{currency}</Typography></MenuItem>)

async function currencyApi(currency:any){
    const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
    const data = await response.json()
    return data.usd[currency]
}

export default function CurrencyOption() {
    const [rate, setRate] = useContext(RateContext)
    const [currency, setCurrency]=useContext(CurrencyContext);
    
    async function handleChange(event: SelectChangeEvent){
        setCurrency(event.target.value);
        // assuming currencies have <=4 letters
        const currencyInput = event.target.value.substring(0,4)
        const getRate = await currencyApi(currencyInput.replace(/\s+/g, ''))
        setRate(getRate)
    };

    return (
            <Box sx={{ maxWidth: 200, marginBottom: 10, marginLeft:2 }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel><Typography variant="body2" color="textSecondary">Currency:</Typography></InputLabel>
                    <Select
                        value={currency}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em><Typography variant="body2" color="textSecondary">--TRADITIONAL--</Typography></em>
                        </MenuItem>
                        {traditionalOp}
                        <MenuItem value="">
                            <em><Typography variant="body2" color="textSecondary">--CRYPTO--</Typography></em>
                        </MenuItem>
                        {cryptoOp}
                    </Select>
                </FormControl>
            </Box>
    );
}