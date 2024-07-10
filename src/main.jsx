import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import { CartProvider } from './context/cartContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Auth0ProviderWithNavigate from './auth/auth0-provider-with-history.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Auth0ProviderWithNavigate>
    <CartProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Header/>
        <App/>
        <Footer/>
      </ThemeProvider>
    </CartProvider>
    </Auth0ProviderWithNavigate>
    </Router>
  </React.StrictMode>
)
