import Link from "next/link";
import { useEffect } from "react";
import { useRouter, NextRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <div className="flex justify-center items-center h-[calc(100vh-136px)]">
      <div>
        <h1 className="py-2 text-3xl">Oops....</h1>
        <h2 className="py-2 text-xl">That page cannot be found.</h2>
        <p className="py-2">
          Go back to the{" "}
          <Link href="/">
            <a className="py-[2px] border-b-2 border-b-slate-400 hover:text-slate-500 hover:border-slate-300 transition-all">
              Homepage
            </a>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
