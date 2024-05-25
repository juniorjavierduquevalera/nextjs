import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "app/components/navbar";
import Form from "app/components/form";
import Contact from "app/components/contact";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Form />
        <Contact />
      </body>
    </html>
  );
}
