"use client";
import bg from "@/assets/Screen.png";
import Image from "next/image";
import Banner from "../Banner";
import { Button } from "../ui/button";

export default function Patterns() {
  const patterns = [
    {
      logo: "https://d64gsuwffb70l.cloudfront.net/68d2ae5ce4dfe32fc6aa4de5_1758637724331_95f63403.webp",
      title: "AYIN Tecnologia",
      description:
        "Parceiro estratégico em soluções tecnológicas avançadas e inovação digital.",
    },
    {
      logo: "https://d64gsuwffb70l.cloudfront.net/68d2ae5ce4dfe32fc6aa4de5_1758637725052_b22a02eb.webp",
      title: "Lupos Pagamentos",
      description:
        "Especialista em soluções de pagamentos e processamento de transações financeiras.",
    },
  ];
  return (
    <article className="relative my-20 place-self-center w-[98%] lg:w-[80%] lg:h-[500px] overflow-hidden rounded-md">
      <Image className="absolute w-full h-full " src={bg} alt="bg" />

      <span className="z-40 bg-black/20 lg:flex-row flex-col gap-5  backdrop-blur-[10px] justify-between relative p-3 w-full h-full flex">
        <div className=" lg:W-[30%] flex flex-col items-center gap-5 pt-20">
          <Banner label="Parceiros da Berecha" />
          <h1 className="lg:text-6xl text-3xl  text-white text-center font-bold ">
            Alguns dos Nossos Parceiros
          </h1>
          <p className="text-center text-white">
            Trabalhamos com os melhores para oferecer soluções de excelência
          </p>
          <Button className="h-[50px] w-full">Torne-se nosso parceiro</Button>
        </div>

        <div className="flex flex-col items-center gap-5 pt-20">
          {patterns.map((item, index) => (
            <span
              key={index}
              className="border  text-white gap-4 flex lg:flex-row flex-col w-full p-4 rounded-sm border-white/50"
            >
              <div>
                <img
                  className="lg:h-20 lg:w-20 h-30 object-cover rounded-md"
                  src={item.logo}
                  alt="Pattern logo"
                />
              </div>
              <div className="font-semibold">
                <h1 className="lg:text-2xl">{item.title}</h1>
                <small>{item.description}</small>
              </div>
            </span>
          ))}
        </div>
      </span>
    </article>
  );
}
