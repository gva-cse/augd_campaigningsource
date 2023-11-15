import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NextNProgress color="#29D" height={3} />
      <Component {...pageProps} />
      <Analytics />
    </SessionProvider>
  )
}
