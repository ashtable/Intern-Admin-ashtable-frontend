import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Home, AlertTriangle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden p-4">
      {/* Real estate themed background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-white" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px'
        }} />
      </div>

      <Card className="w-full max-w-md z-10 shadow-xl bg-white">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Home className="h-12 w-12 text-gray-600" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-gray-800 text-center">Oops! Something went wrong</CardTitle>
          <CardDescription className="text-gray-500 text-center">
            We encountered an unexpected error
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <AlertTriangle className="h-16 w-16 text-red-500" />
          <p className="text-center text-gray-600">
            We&amp;re sorry, but it seems there was an issue processing your request. Our team has been notified and is working on resolving it.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button asChild className="w-full bg-gray-700 hover:bg-gray-800 text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
          <div className="text-sm text-gray-500 text-center">
            If the problem persists, please contact our support team at{' '}
            <a href="mailto:support@internadmin.com" className="text-gray-700 hover:underline">
              support@internadmin.com
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}