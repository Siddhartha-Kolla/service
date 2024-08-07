
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
 
const EditProfile = () => {
  const [dropValue, setdropsValue] = useState("")
  return (
    <div className="flex justify-center flex-col min-h-[100vh]">
      <Header/>
      <div className=" flex-grow flex justify-center items-center w">
        <Tabs defaultValue="picture" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="picture">Profilbild</TabsTrigger>
            <TabsTrigger value="email">E-Mail-Adresse</TabsTrigger>
          </TabsList>
          <TabsContent value="picture">
            <Card className="h-[30rem]">
              <CardHeader>
                <CardTitle>Profilbild ändern</CardTitle>
                <CardDescription>
                  Laden Sie eine Datei hoch, um Ihr Profilbild zu ändern
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
              <div className="grid gap-2">
              <Label>
              <p className="mb-2 mt-3">Profilbild hochladen</p>              
              <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Klicken Sie zum Hochladen</span></p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" value={dropValue} onChange={e => setdropsValue(e.target.value)}/>
                  </label>
              </div>
              {dropValue && (<p className="mt-4">{dropValue.split("\\")[2]}</p>)}
            </Label> 
              </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">Änderungen speichern</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="email">
            <Card className="h-[30rem] flex justify-center flex-col">
              <CardHeader className="">
                <CardTitle>E-Mail-Adresse speichern</CardTitle>
                <CardDescription>
                  Ändern sie hier Ihre Email-Adresse
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">aktuelle E-Mail-Adresse</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">neue E-Mail-Adresse</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">Änderungen speichern</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer/>
    </div>
  )
}

export default EditProfile





/* for drag and drop option: - https://dev.to/chandrapantachhetri/responsive-react-file-upload-component-with-drag-and-drop-4ef8
                             - https://medium.com/@dprincecoder/creating-a-drag-and-drop-file-upload-component-in-react-a-step-by-step-guide-4d93b6cc21e0 */ 


/* for replacing the old profilepicture with the new/uploaded one:
<!DOCTYPE html>
<html>
<head>
    <title>Image Replacement</title>
</head>
<body>
    <img id="myImage" src="default-image.jpg" alt="Default Image">
    <input type="file" id="imageInput">
    <button onclick="changeImage()">Change Image</button>

    <script>
        function changeImage() {
            const input = document.getElementById('imageInput');
            const image = document.getElementById('myImage');

            // Check if a file is selected
            if (input.files && input.files[0]) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    image.src = e.target.result;
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>
</body>
</html>
*/




/*const handleProfileImageChange = (event) => {
    setProfileImage(event.target.value);
  };

const EditProfile = () => {
  
  return (
    <div className=" flex flex-col justify-between items h-screen">
    <Card className="mx-auto max-w-sm my-28">
      <CardHeader>
        <CardTitle className="text-xl">Profil bearbeiten</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
          <Label>
          <u>Profilbild ändern</u>
          <p>    </p><br/>
          <input type="file" onChange={handleProfileImageChange} />
        </Label> 
          </div>
          <div className="grid gap-2">
          <Label>
          <u>E-Mail-Adresse ändern</u>
        </Label> 
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="new">alte E-Mail-Adresse</Label>
            </div>
            <Input id="new" type="new" />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
          <Label htmlFor="newagain">neue E-Mail-Adresse</Label>
            </div>
            <Input id="newagain" type="newagain" required />
          </div>
          <Button type="submit" className="w-full">
            Änderungen speichern
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
  );
}

export default EditProfile*/