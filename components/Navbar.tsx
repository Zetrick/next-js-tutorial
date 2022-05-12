import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 bg-red-400 text-slate-800">
      <Link href='/'>
        <a className="px-8 transition-all hover:text-red-200">Home</a>
      </Link>
      <div>
        <Link href="/about" className="">
          <a className="px-4 transition-all hover:text-red-200">
            About
          </a>
        </Link>

        <Link href="/directory" className="">
          <a className="px-4 pr-8 transition-all hover:text-red-200">
            Directory
          </a>
        </Link>
      </div>
    </nav>
  );
}
