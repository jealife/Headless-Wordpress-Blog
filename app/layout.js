import ApolloWrapper from '@/components/ApolloWrapper'; // Importe ton wrapper
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: 'Headless Wordpress Blog',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}