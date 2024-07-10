import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import ProfileButton from './ui/ProfileButton';
import  {Button} from "@/components/ui/button";
import { LuUserCircle } from "react-icons/lu";
const ProfileOnLogout = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button variant="ghost" size="icon" className="mr-1" aria-label="Search" onClick={() => loginWithRedirect()}>
      <LuUserCircle className='h-6 w-6'/>
      <span className=' sr-only'>Suche</span>
    </Button>
  )
}


const ProfileOnLogin = () => {
  return <ProfileButton/>
}

const Profile = () => {
  const {isAuthenticated} = useAuth0();
  return isAuthenticated ? <ProfileOnLogin /> : <ProfileOnLogout />;
}

export default Profile