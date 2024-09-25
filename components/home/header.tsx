import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import  logo  from "../../app/icon.ico";
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="transition-colors duration-200 text-gray-600 hover:text-purple-600 font-medium px-4 py-2" // Added padding here
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <nav className="container flex items-center justify-between px-6 py-5 mx-auto border-b border-gray-200 shadow-sm bg-white">
      {/* Logo and Brand Name */}
      <div className="flex items-center lg:flex-1">
        <NavLink href="/">
          <span className="flex items-center gap-4">
            <Image
              src={logo}
              alt="SpeakEasy logo"
              width={40}
              height={40}
              className="hover:rotate-12 transform transition duration-200 ease-in-out"
            />
            <span className="font-extrabold text-2xl text-gray-800">Blogu</span>
          </span>
        </NavLink>
      </div>

      <div className="hidden lg:flex lg:justify-center items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>

        <NavLink href="/posts">Your Posts</NavLink>
        </SignedIn>

      </div>

      <div className="flex items-center gap-8">
      <SignedIn>

        <NavLink href="/dashboard">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-indigo-600 hover:to-purple-600 transition duration-300">
            Upload a Video
          </span>
        </NavLink>
        <UserButton />

        </SignedIn>


        <SignedOut>
          <SignInButton>
            <NavLink href="/sign-in">Sign In</NavLink>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
