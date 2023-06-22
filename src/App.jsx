import { useEffect, useReducer, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Content from './Content/Content'
import Context from './Context'
import reducer from './reducer'

function App() {
  const [title, setTitle] = useState('Home')
  // const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'EUR')

  const [context, dispatch] = useReducer(reducer, {
      user: null,
      theme: 'light',
      language: 'en',
      currency: 'EUR',
      exchangeRate: null,
      authHash: null,
      shoppingCart: []
  })

  // useEffect(() => {
  //   localStorage.setItem('currency', currency)
  // }, [currency])
 

  return (
    <BrowserRouter>
      <Context.Provider value = { {context, dispatch} }>
          <div className="app">
              <Header setTitle={setTitle} />
              <Content title={title}/>
              <Footer />
          </div>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App
