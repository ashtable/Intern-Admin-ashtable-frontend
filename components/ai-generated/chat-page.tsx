'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Home, Send, Loader2 } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"

export default function AIInternCommandPage() {
  const [command, setCommand] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulating API call to AI service
    try {
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Command received: "${command}"\nAction: Added new lead "John Doe" to CRM and intern's todo list.`)
        }, 1500)
      })
      setResponse(result as string)
    } catch (error) {
      setResponse('Error: Unable to process command. Please try again.')
    } finally {
      setIsLoading(false)
    }
    setCommand('')
  }

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

      <Card className="w-full max-w-2xl z-10 shadow-xl bg-white">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Home className="h-12 w-12 text-gray-600" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-gray-800 text-center">Your Team&apos;s AI Command Center</CardTitle>
          <CardDescription className="text-gray-500 text-center">
            Use natural language to configure your team&apos;s AI 
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Textarea
                  placeholder="Enter your command here (e.g., 'Add Task XYZ in the CRM for members of my team following first contact with all leads')"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  required
                  className="min-h-[100px] bg-gray-50 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                />
              </div>
              <Button 
                className="w-full bg-gray-700 hover:bg-gray-800 text-white" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Command
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Response:</h3>
            <ScrollArea className="h-[150px] w-full rounded border border-gray-200 bg-gray-50 p-4">
              <pre className="text-sm text-gray-600 whitespace-pre-wrap">{response}</pre>
            </ScrollArea>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}