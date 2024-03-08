"use client"

import Button from "./button";
import {useRouter} from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const handleClick = () => {
    fetch("/clear-cookie").then(() => {
      router.push("/google-ad")
      setTimeout(function(){
        location.reload();
      }, 500);
    });
  }

  return (
    <footer className="w-full h-[100px] gap-4 bg-white flex justify-center items-center">
      <Button href="/google-ad" white>Google Ad</Button>
      <Button href="/google-organic" white>Google Organic</Button>
      <Button href="/facebook-ad" white>Facebook Ad</Button>
      <Button white onClick={handleClick}>Reset Cookies</Button>
    </footer>
  )
}
