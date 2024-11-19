'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Home, Globe, Loader2, Check, X } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function WebContentCrawlerPage() {
  const [url, setUrl] = useState('')
  const [crawlStatus, setCrawlStatus] = useState<'idle' | 'crawling' | 'success' | 'error'>('idle')
  const [crawlResult, setCrawlResult] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setCrawlStatus('crawling')
    // Simulating API call to crawl web content
    try {
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Successfully crawled: ${url}\n\nContent summary:\n- Main topic: Real Estate Market Trends\n- Key points: Housing prices, Interest rates, Urban development\n- Word count: 1500\n\nContent added to intern's knowledgebase.`)
        }, 3000)
      })
      setCrawlResult(result as string)
      setCrawlStatus('success')
    } catch (error) {
      setCrawlResult('Error: Unable to crawl the specified URL. Please check the URL and try again.')
      setCrawlStatus('error')
    }
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
          <CardTitle className="text-2xl font-bold tracking-tight text-gray-800 text-center">Web Content Crawler</CardTitle>
          <CardDescription className="text-gray-500 text-center">
            Add web content to your team&apos;s AI knowledgebase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="url" className="text-gray-700">Website URL</Label>
                <div className="relative">
                  <Input
                    id="url"
                    placeholder="https://example.com/real-estate-article"
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    className="pl-10 bg-gray-50 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  />
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              <Button 
                className="w-full bg-gray-700 hover:bg-gray-800 text-white" 
                type="submit"
                disabled={crawlStatus === 'crawling'}
              >
                {crawlStatus === 'crawling' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Crawling...
                  </>
                ) : (
                  'Crawl Content'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          {crawlStatus !== 'idle' && (
            <Alert variant={crawlStatus === 'error' ? 'destructive' : 'default'}>
              {crawlStatus === 'success' && <Check className="h-4 w-4" />}
              {crawlStatus === 'error' && <X className="h-4 w-4" />}
              <AlertTitle>
                {crawlStatus === 'crawling' && 'Crawling in progress...'}
                {crawlStatus === 'success' && 'Crawl Successful'}
                {crawlStatus === 'error' && 'Crawl Failed'}
              </AlertTitle>
              <AlertDescription>
                {crawlStatus === 'crawling' && 'Please wait while we process the web content.'}
                {crawlStatus === 'success' && 'The content has been added to your AI intern\'s knowledgebase.'}
                {crawlStatus === 'error' && 'An error occurred while crawling the specified URL.'}
              </AlertDescription>
            </Alert>
          )}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Crawl Result:</h3>
            <ScrollArea className="h-[200px] w-full rounded border border-gray-200 bg-gray-50 p-4">
              <pre className="text-sm text-gray-600 whitespace-pre-wrap">{crawlResult}</pre>
            </ScrollArea>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}