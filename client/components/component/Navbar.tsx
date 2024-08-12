import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <BoxIcon className="h-8 w-8" />
        <span className="text-xl font-bold">MorningBox</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium hover:underline"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/catalog"
          className="text-sm font-medium hover:underline"
          prefetch={false}
        >
          Products
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:underline"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <Button variant="outline" className="hidden md:inline-flex text-gray-600">
        Sign In
      </Button>
    </header>
  );
};

export default Navbar;

function BoxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
