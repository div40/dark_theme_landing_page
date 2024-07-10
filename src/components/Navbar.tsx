import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "..//assets/icons/menu.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className=" bg-black items-center">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] w-full top-2 bottom-0 blur-md"></div>
            <Image src={logoImage} alt="logo" className="h-12 w-12 relative" />
          </div>
          <div className="text-white border border-white/30 rounded-lg h-10 w-10 inline-flex items-center justify-center sm:hidden">
            <MenuIcon />
          </div>
          <nav className="sm:flex gap-6 items-center hidden">
            <Link
              href={"#"}
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              About
            </Link>
            <Link
              href={"#"}
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Features
            </Link>
            <Link
              href={"#"}
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Updates
            </Link>
            <Link
              href={"#"}
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Help
            </Link>
            <Link
              href={"#"}
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Customers
            </Link>
            <button className="bg-white text-black py-2 px-4 rounded-lg hover:scale-105 transition">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
