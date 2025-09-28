"use client";
import start from "@/assets/AI.png";
import Image from "next/image";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsmounted] = useState<boolean>(false);
  const [isOpen, setIsponen] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) return null;
  const navigation = [
    { name: "Inicio", href: "#" },
    { name: "Sobre", href: "#about" },
    { name: "Produtos", href: "#products" },
    { name: "Contacto", href: "#contact" },
  ];
  return (
    <div>
      <header className=" lg:flex hidden  z-[300] flex-col fixed top-0 left-0 w-full dark:bg-transparent dark:backdrop-blur-3xl bg-white  lg:px-20 py-3 gap-3">
        <span className="flex justify-between border-b pb-2">
          <a
            href="#"
            className="flex  items-center font-semibold lg:text-2xl space-x-1"
          >
            <h1>Berecha </h1>
            <Image src={start} alt="Start" />
          </a>

          <nav>
            <ul className="flex space-x-8">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className=" hover:text-blue-500 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span className="grid grid-cols-2 gap-2">
            <Button
              className="h-[40px] text-primary border-primary/30"
              variant={"outline"}
            >
              Saiba mais
            </Button>
            <Button className="h-[40px]">Fale Connosco</Button>
          </span>
        </span>
      </header>

      <header className="flex lg:hidden justify-between z-[300]  fixed top-0 left-0 w-full dark:bg-transparent dark:backdrop-blur-3xl bg-white p-4 gap-3">
        <a
          href="#"
          className="flex  items-center font-semibold lg:text-2xl space-x-1"
        >
          <h1>Berecha </h1>
          <Image src={start} alt="Start" />
        </a>

        <Dialog open={isOpen}>
          <DialogTrigger
            onClick={() => {
              setIsponen(true);
            }}
          >
            <Menu />
          </DialogTrigger>
          <DialogContent
            onClick={() => {
              setIsponen(false);
            }}
          >
            <DialogTitle></DialogTitle>
            <nav className="mt-5">
              <ul className="grid grid-cols-3 gap-4 my-4">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className=" hover:text-blue-500 transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <a
                  href=""
                  className=" hover:text-blue-500 transition-colors duration-300"
                >
                  Suporte
                </a>
                <a href="" className=" hover:text-blue-500 transition-colors duration-300">
                  Blog
                </a>
              </ul>
            </nav>
            <span className="grid  gap-2">
              <Button
                className="h-[40px] text-primary border-primary/30"
                variant={"outline"}
              >
                Saiba mais
              </Button>
              <Button className="h-[40px]">Fale Connosco</Button>
            </span>
          </DialogContent>
        </Dialog>
      </header>
    </div>
  );
}
