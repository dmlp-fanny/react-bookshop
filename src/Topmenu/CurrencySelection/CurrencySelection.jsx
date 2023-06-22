import { useContext, useEffect, useState } from "react"
import CurrencyContext from './CurrencyContext'
import Context from '../../Context'

export default function CurrencySelection () {
    const { context: {currency, exchangeRate}, dispatch } = useContext(Context)

    const handleSelect = (event) => {
        dispatch({
            type: 'currency/set',
            payload: event.target.value
        })
    }

    const loadExchangeRates = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rates.php')
        const data = await response.json()

        const { rate } = data.find(item => item.currency === currency)
        dispatch({
            type: 'exchangeRate/set',
            payload: rate
        });
    }
    

    useEffect(() => {
        loadExchangeRates()
    }, [currency])

    return (
        <div className="exchange">
            {
                exchangeRate !== null ? '1 EUR = ' + ' ' + exchangeRate.toFixed(2) + currency : ''
            }
            <i className="fa-solid fa-globe"></i>
            <select name="currency" value={ currency } onChange={ handleSelect }>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CZK">CZK</option>
            </select>

        </div>
    )
}