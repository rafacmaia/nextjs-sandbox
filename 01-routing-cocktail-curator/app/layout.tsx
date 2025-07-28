import {
  Montserrat_Alternates,
  Montserrat,
  Italiana,
  Pacifico,
} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const montserrat_alt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} ${montserrat_alt.className} ${pacifico.className} ${italiana.className} h-full antialiased`}
    >
      <link href="bartender2-black.svg" rel="icon" type="image/svg+xml" />
      <body className="font-mont flex h-full flex-col">
        <header className="h-14 w-screen bg-black text-white">
          <nav className="flex h-full w-full items-center justify-between px-5 md:px-10">
            <div className="flex h-full items-center gap-3">
              <img
                className="h-1/2"
                src="./bartender.svg"
                alt="Bartender logo"
              />
              <h2 className="font-logo hidden text-[19px] font-medium md:block lg:text-[21px]">
                T Cocktails
              </h2>
            </div>
            <ul className="flex h-full list-none items-center justify-end gap-7 text-lg uppercase md:gap-10 md:text-base md:font-medium">
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
