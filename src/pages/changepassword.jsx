import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from 'react';

const ChangePassword = () => {
    return (
         <div className=" flex flex-col justify-between items h-screen">
              <Card className="mx-auto max-w-sm my-28">
                <CardHeader>
                  <CardTitle className="text-xl">Passwort ändern</CardTitle>
                  <CardDescription>
                    Geben Sie unten Ihr aktuelles Passwort an, um dieses anschließend zu ändern                  
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="old">altes Passwort</Label>
                      <Input id="old" type="old" required />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="new">neues Passwort</Label>
                      </div>
                      <Input id="new" type="new" required />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                    <Label htmlFor="newagain">neues Passwort wiederholen</Label>
                      </div>
                      <Input id="newagain" type="newagain" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Passwort ändern
                    </Button>
                    {/* <Button variant="outline" className="w-full">
                      Login with Google
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </div>
    )
}
 
export default ChangePassword