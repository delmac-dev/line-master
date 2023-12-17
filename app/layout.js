import GameContextProvider from '@/components/GameContextProvider'
import './globals.css'

export const metadata = {
  title: 'Line Master',
  description: 'a very cool game made with next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GameContextProvider>
          {children}
        </GameContextProvider>
      </body>
    </html>
  )
}
