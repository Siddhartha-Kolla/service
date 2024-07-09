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
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { createContext } from 'react';

export const CartContext = createContext({items: [], setItems: () => {}})

function App() {
  const [items, setItems] = useState([{name: "Adelholzener Mineralwasser Naturell",ppl: 1.66, volume: 0.75, first: 6, second: 12, third: 30, plastic: 0.25, glass: 0.5, image: "min_was_adel_nat_point_sevenfive.png",category:"water",capacity: 20, quantity: 6}])

  return (
    <div>
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
    </div>
  )
}

export default App;
