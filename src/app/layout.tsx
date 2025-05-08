
import "./globals.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ErrandGo",
  description: "Simplify your errands with ErrandGo",
  viewport: "width=device-width, initial-scale=1.0",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
