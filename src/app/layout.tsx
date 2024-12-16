import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import Header from "@modules/account/components/layouts/Header"
import { sdk } from "@lib/config"
export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <Header/>
        uygiubu
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
