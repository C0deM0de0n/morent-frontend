import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Header } from '@/widgets/header/ui'
import { Providers } from '@/shared/providers'
import "@/shared/styles/globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: process.env.NEXT_PROJECT_NAME,
  description: process.env.NEXT_PROJECT_DESCRIPTION
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body
        className={plusJakartaSans.className}
      >
        <Providers>
            <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
