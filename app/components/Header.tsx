import Link from "next/link";
import Image from "next/image";
import logo from "~/icons/logo-shaker-white.svg";

export default function Header() {
  return (
    <header className="bg-primary text-secondary h-14 w-screen">
      <nav className="flex h-full w-full items-center justify-between px-6 sm:px-10">
        <Link className="flex h-full items-center gap-4" href="/">
          <Image
            className="size-[70%] sm:size-1/2"
            src={logo}
            alt="Logo of a bottle crossed with a cocktail shaker making an X"
          />
          <h2 className="font-logo hidden text-[19px] font-medium text-nowrap sm:block lg:text-[21px]">
            T Cocktails
          </h2>
        </Link>
        <ul className="flex h-full list-none items-center justify-end gap-7 text-lg text-nowrap uppercase sm:gap-10 sm:text-base sm:font-medium">
          <li>
            <Link href="/drinks-library">Drinks Library</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
