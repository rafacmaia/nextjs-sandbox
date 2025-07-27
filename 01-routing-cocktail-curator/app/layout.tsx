import { Montserrat_Alternates, Montserrat } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} ${montserrat_alt.className} antialiased`}
    >
      <body className="font-mont">
        <header className="bg-black text-white">HEADER PLACEHOLDER</header>
        {children}
      </body>
    </html>
  );
}
