import { useState } from 'react'
import './App.css'
import Water from './pages/water'
import Juice from './pages/juice';
import Drink from './pages/drink';
import Warm from './pages/warm';
import Beer from './pages/beer';
import Wine from './pages/wine';
import HomePage from './pages/homepage';
import NotFound from './pages/NotFound';
import LoginForm from './pages/login';
import SingUpForm from './pages/signup';
import Sale from './pages/sale.jsx';
import AboutUs from './pages/aboutus.jsx';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { createContext } from 'react';

function App() {
  return (
    <div>
<<<<<<< Updated upstream
      <CartContext.Provider value={{items,setItems}}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/water" element={<Water/>}/>
            <Route exact path="/juice" element={<Juice/>}/>
            <Route exact path="/drink" element={<Drink/>}/>
            <Route exact path="/warm" element={<Warm/>}/>
            <Route exact path="/beer" element={<Beer/>}/>
            <Route exact path="/wine" element={<Wine/>}/>
            <Route exact path="/login" element={<LoginForm/>}/>
            <Route exact path="/signup" element={<SingUpForm/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </CartContext.Provider>
=======
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/water" element={<Water/>}/>
          <Route exact path="/juice" element={<Juice/>}/>
          <Route exact path="/drink" element={<Drink/>}/>
          <Route exact path="/warm" element={<Warm/>}/>
          <Route exact path="/beer" element={<Beer/>}/>
          <Route exact path="/wine" element={<Wine/>}/>
          <Route exact path="/login" element={<LoginForm/>}/>
          <Route exact path="/signup" element={<SingUpForm/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route exact path="/sale" element={<Sale/>}/>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </Router>
>>>>>>> Stashed changes
    </div>
  )
}

export default App;
