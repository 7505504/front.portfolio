import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Caio Andrade | Senior Backend Software Engineer', description: 'Backend software engineer specializing in .NET, payments, API integrations and distributed systems.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}