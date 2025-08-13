import { Montserrat_Alternates, Montserrat, Pacifico } from "next/font/google";
import { RootLayoutProps } from "@/app/types";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const montserrat_alt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat-alternates",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-pacifico",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>T Cocktails</title>
      </head>
      <body
        className={`${montserrat.variable} ${montserrat_alt.variable} ${pacifico.variable} font-body bg-secondary text-primary flex min-h-dvh min-w-80 flex-col antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
