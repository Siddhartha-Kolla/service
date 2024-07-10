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
// import Checkout from './pages/checkout.jsx';
import Sale from './pages/sale.jsx';
import AboutUs from './pages/aboutus.jsx';
import ChangePassword from './pages/changepassword.jsx';
import EditProfile from './pages/profile.jsx';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>Loading ....</div>
    );
  }

  return (
    <div>
        {/* <Router> */}
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
            <Route exact path="/sale" element={<Sale/>}/>
            <Route exact path="/aboutus" element={<AboutUs/>}/>
            <Route exact path="/changepassword" element={<ChangePassword/>}/>
            <Route exact path="/editprofile" element={<EditProfile/>}/>
            {/* <Route exact path="/checkout" element={<Checkout/>}/> */}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        {/* </Router> */}
    </div>
  )
}

export default App;
