import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const LoginForm = () => {
  return (
    <Card className="mx-auto max-w-sm my-28">
      <CardHeader>
        <CardTitle className="text-2xl">Anmelden</CardTitle>
        <CardDescription>
          Geben Sie unten Ihre E-Mail-Adresse an, um sich bei Ihrem Konto anzumelden
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="maxmustermann@beispiel.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Passwort</Label>
              <a href="#" className="ml-auto inline-block text-sm underline">
                Passwort vergessen?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Anmelden
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Noch kein Konto?{" "}
          <a href="/signup" className="underline">
            Registrieren
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

export default LoginForm;