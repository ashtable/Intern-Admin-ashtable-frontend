import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Home, Key, Building } from 'lucide-react'
import { login } from "@/app/actions"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
      {/* Real estate themed background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-white" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px'
        }} />
      </div>

      <Card className="w-full max-w-md z-10 shadow-xl bg-white">
        <form action={login}>
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-4">
              <Home className="h-12 w-12 text-gray-600" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight text-gray-800 text-center">Intern Admin</CardTitle>
            <CardDescription className="text-gray-500 text-center">
              Empowering Real Estate with AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    placeholder="name@yourcompany.com"
                    type="email"
                    required
                    className="pl-10 bg-gray-50 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  />
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="pl-10 bg-gray-50 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  />
                  <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white" type="submit">
              Login to Configure Your Team&apos;s AI
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}