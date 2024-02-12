import { Nunito } from 'next/font/google'
import './globals.css'
import config from "../jsconfig.json"
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

const nunito = Nunito({ subsets: ['latin'], weight: ['200', '400', '900'] })

export const metadata = {
  title: config.siteName,
  description: '...............................'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-slate-50`}>
        <NavBar />
        {children}
        <Footer />
        <script id="__webwhizSdk__" src="https://widget.webwhiz.ai/webwhiz-sdk.js" data-chatbot-id="65b6cc7a2e4bfd3b53f4f7af"></script>
      </body>
    </html>
  )
}
