import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth0 } from '@auth0/auth0-react'

const ProfileButton = () => {
  const { logout, user } = useAuth0();
  const { name, picture, email } = user;
  return (
    <DropdownMenu className="select-none">
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={picture} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mein Konto</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer"><a href="/editprofile">Profil bearbeiten</a></DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer"><a href="/changepassword">Passwort ändern</a></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => logout({returnTo: window.location.origin,})}>Abmelden</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileButton