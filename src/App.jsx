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
import { useEffect } from 'react';
import { useCart } from './context/cartContext.jsx';
import Header from './components/Header.jsx';
import Container from './components/ui/container.jsx';
import {Skeleton} from "@/components/ui/skeleton";

function App() {

  const { isLoading } = useAuth0();
  const {cartItems, addCartItem,removeFromCart,cartCount,cartTotal,doesItemExist,subtractCartItem,updateCartItemQuantity,data,isloaded} = useCart();
  
  useEffect(() => {
    console.log("Run something")
}, [])

  if (isLoading) {
    if (window.location.pathname != "/sale" && window.location.pathname != "/aboutus") {
      return (
        <Container>
          <div className="w-full h-full p-8">
            <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
            </div>
          </div>
        </Container>
      )

    }
    else {
      return (
        <div>Loading ....</div>
        // <Container>
        //   <div className="w-full h-full p-8">
        //     <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
        //     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        //       <Skeleton className="aspect-square rounded-xl" />
        //       <Skeleton className="aspect-square rounded-xl" />
        //       <Skeleton className="aspect-square rounded-xl" />
        //       <Skeleton className="aspect-square rounded-xl" />
        //       <Skeleton className="aspect-square rounded-xl" />
        //       <Skeleton className="aspect-square rounded-xl" />
        //     </div>
        //   </div>
        // </Container>
      );
    }
  }

  if (!isloaded) {
    // return (<div>Loading the data.....</div>)
    return (
      <Container>
        <div className="w-full h-full p-8">
          <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
          </div>
        </div>
      </Container>
    )
  }

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<><Header/><HomePage/></>}/>         
        <Route path='category' element={<><Header/><CategoryComponentManager/></>}>
          <Route path=':categorySort' element={<><Header/><CategoryComponentManager/></>}/>
        </Route>
        <Route exact path="/login" element={<><Header/><LoginForm/></>}/>
        <Route exact path="/signup" element={<><Header/><SingUpForm/></>}/>
        <Route exact path="/sale" element={<><Sale/></>}/>
        <Route exact path="/aboutus" element={<><Header/><AboutUs/></>}/>
        <Route exact path="/changepassword" element={<><Header/><ChangePassword/></>}/>
        <Route exact path="/editprofile" element={<><EditProfile/></>}/>
        <Route exact path="/checkout" element={<><Header/><Checkout/></>}/>
        <Route path="*" element={<><NotFound/></>}/>
      </Routes>
    </div>
  )
}

export default App;
