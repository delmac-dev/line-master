import './globals.css'

export const metadata = {
  title: 'Line Master',
  description: 'a very cool game made with next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
