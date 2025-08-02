import { Montserrat_Alternates, Montserrat, Pacifico } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link href="bartender2-black.svg" rel="icon" type="image/svg+xml" />
        <title>T Cocktails</title>
      </head>
      <body
        className={`${montserrat.variable} ${montserrat_alt.variable} ${pacifico.variable} font-body bg-secondary text-primary flex h-full min-w-80 flex-col antialiased`}
      >
        <header className="bg-primary text-secondary h-14 w-screen">
          <nav className="flex h-full w-full items-center justify-between px-5 sm:px-10">
            <div className="flex h-full items-center gap-3">
              <img
                className="h-1/2"
                src="./bartender.svg"
                alt="Bartender logo"
              />
              <h2 className="font-logo hidden text-[19px] font-medium sm:block lg:text-[21px]">
                T Cocktails
              </h2>
            </div>
            <ul className="flex h-full list-none items-center justify-end gap-7 text-lg uppercase sm:gap-10 sm:text-base sm:font-medium">
              <li>Drinks Library</li>
              <li>About</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
