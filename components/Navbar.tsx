import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 bg-[#F5E8D4] text-slate-800 p-2">
      <Link href='/'>
        <a className="px-4"><Image src="/logo.png" alt="the logo" width="40px" height="40px" /></a>
      </Link>
      <div>
        <Link href="/about" className="">
          <a className="px-4 transition-all hover:text-slate-400">
            About
          </a>
        </Link>

        <Link href="/directory" className="">
          <a className="px-4 pr-8 transition-all hover:text-slate-400">
            Directory
          </a>
        </Link>
      </div>
    </nav>
  );
}
