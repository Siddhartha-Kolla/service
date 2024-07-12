import './App.css'
import HomePage from './pages/homepage';
import NotFound from './pages/NotFound';
import LoginForm from './pages/login';
import SingUpForm from './pages/signup';
// import Checkout from './pages/checkout.jsx';
import Sale from './pages/sale.jsx';
import AboutUs from './pages/aboutus.jsx';
import ChangePassword from './pages/changepassword.jsx';
import EditProfile from './pages/profile.jsx';
import Checkout from './pages/checkout.jsx'
import {Routes , Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import CategoryComponentManager from './pages/categoryPage.jsx';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>Loading ....</div>
    );
  }

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>         
        <Route path='category' element={<CategoryComponentManager/>}>
          <Route path=':categorySort' element={<CategoryComponentManager/>}/>
        </Route>
        <Route exact path="/login" element={<LoginForm/>}/>
        <Route exact path="/signup" element={<SingUpForm/>}/>
        <Route exact path="/sale" element={<Sale/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>
        <Route exact path="/changepassword" element={<ChangePassword/>}/>
        <Route exact path="/editprofile" element={<EditProfile/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;
