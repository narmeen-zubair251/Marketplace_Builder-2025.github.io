import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoSearch } from "react-icons/io5";
import { LuUserPlus } from "react-icons/lu";
import { TbShoppingCart } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default" className="absolute lg:hidden">
            <RxHamburgerMenu />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-black">
          <SheetHeader>
            <SheetTitle className="text-center font-inter text-2xl text-[#FF9F0D]">
              Food tuck
            </SheetTitle>
          </SheetHeader>

          <ul className="py-5 text-center text-white">
            <li className="font-inter mb-3">
              <Link href="/" className="hover:text-[#FF9F0D]">
                Home
              </Link>
            </li>
            <li className="font-inter mb-3">
              <Link href="/menu" className="hover:text-[#FF9F0D]">
                Menu
              </Link>
            </li>
            <li className="font-inter  mb-3">
              <Link href="/blog" className="hover:text-[#FF9F0D]">
                Blog
              </Link>
            </li>
            <li className="font-inter mb-3">
              <Link href="/pages" className="hover:text-[#FF9F0D]">
                Pages
              </Link>
            </li>
            <li className=" font-inter mb-3">
              <Link href="/about" className="hover:text-[#FF9F0D]">
                About
              </Link>
            </li>
            <li className="font-inter mb-3">
              <Link href="/shop" className="hover:text-[#FF9F0D]">
                Shop
              </Link>
            </li>
            <li className="font-inter mb-3">
              <Link href="/contact" className="hover:text-[#FF9F0D]">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-5 text-white">
            <IoSearch className="w-[30px] h-[30px] hover:text-[#FF9F0D] " />
            <LuUserPlus className="w-[30px] h-[30px] hover:text-[#FF9F0D]" />
            <TbShoppingCart className="w-[30px] h-[30px] hover:text-[#FF9F0D]" />
          </div>

          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
