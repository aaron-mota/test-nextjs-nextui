import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { Providers } from './providers'
import { Navbar } from '@/components/navbar'
import { Link } from '@nextui-org/link'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

const cl = {
  light: {
    gradientBackground: 'light:bg-background',
  },
  dark: {
    gradientBackground:
      'dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 dark:to-black',
  },
  pink: {
    // TODO: not working yet -- need data-theme something ? (https://github.com/L-Blondy/tw-colors)
    gradientBackground:
      'pink:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] pink:from-indigo-200 pink:via-red-200 pink:to-yellow-100',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main
              className={`container mx-auto max-w-full px-6 flex-grow ${cl.light.gradientBackground} ${cl.pink.gradientBackground} ${cl.dark.gradientBackground}`}
            >
              {children}
            </main>
            {/* <footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600">Powered by</span>
								<p className="text-primary">NextUI</p>
							</Link>
						</footer> */}
          </div>
        </Providers>
      </body>
    </html>
  )
}
