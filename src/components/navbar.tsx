"use client";
import Logo from "./svgs/logo";
import Button from "./button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const handleClick = () => {
    router.refresh();
    router.push("/");
  };
  //
  // useEffect(() => {
  //   router.refresh();
  // }, [])

  return (
    <nav className="w-full font-dm-sans bg-blue-100 h-[72px] flex justify-center items-center border-b-[1px] border-b-neutral-200">
      <div className="flex justify-between w-full max-w-8xl px-[78px] items-center">
        <a onClick={handleClick} className="hover:cursor-pointer">
          <Logo />
        </a>

        <div className="flex justify-end items-center gap-x-12 text-text-main text-base text-center">
          <Link href="/catalog">Find a car</Link>
          <Link href="#">About Acme</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contacts</Link>

          <Button white>Calculator</Button>
        </div>
      </div>
    </nav>
  );
}
