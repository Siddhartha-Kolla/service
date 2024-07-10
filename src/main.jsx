import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import { CartProvider } from './context/cartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        {/* <Header/> */}
        {window.location.pathname != "/editprofile" && (<Header/>)}
        <App/>
        {window.location.pathname != "/editprofile" && (<Footer/>)}
      </ThemeProvider>
    </CartProvider>
  </React.StrictMode>
)
