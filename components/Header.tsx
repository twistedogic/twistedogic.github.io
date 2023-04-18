import Link from "next/link";
import { FC, ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  href: string;
};

const NavLink: FC<LinkProps> = ({ children, href }) => (
  <Link
    href={href}
    className="block font-mono hover:underline hover:bg-black hover:text-white"
  >
    {children}
  </Link>
);

const Nav = () => {
  const items = [
    { title: "Home", href: "/" },
    { title: "Posts", href: "/posts" },
  ].map(({ title, href }) => (
    <li className="mx-8" key={title}>
      <NavLink href={href}>{title}</NavLink>
    </li>
  ));
  return (
    <nav className="mb-5">
      <ul className="flex flex-row justify-around items-center">{items}</ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center sticky top-0 bg-white">
      <h1 className="my-5 font-bold text-lg font-mono">
        <NavLink href="/">Jordan Li</NavLink>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
