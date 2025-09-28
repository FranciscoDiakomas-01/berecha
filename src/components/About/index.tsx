"use client";

import { Goal, Lamp, Users2 } from "lucide-react";
import Banner from "../Banner";
import screen from "@/assets/Screen.png";
import Image from "next/image";
export default function About() {
  const cards = [
    {
      icon: <Goal />,
      title: "Missão",
      text: "Apresentar propostas estratégicas para a modernização das infraestruturas empresariais em Angola, com foco na integração de soluções tecnológicas inovadoras.",
    },
    {
      icon: <Users2 />,
      title: "Resumo",
      text: "Apoiamos Bancos, Fintechs, Operadoras móveis, Instituições financeiras e não financeiras no processo de transformação digital.",
    },
    {
      icon: <Lamp />,
      title: "Nosso Objetivo",
      text: "Conectar tecnologia e modelos de negócios estratégicos para impulsionar a inovação e criar novas experiências de utilizadores.",
    },
  ];

  const stats = [
    { id: 1, name: "Anos de Experiência", value: "+ 2 anos" },
    { id: 2, name: "Clientes Satisfeitos", value: "+ 50 " },
    { id: 3, name: "Taxa de Sucesso", value: "100%" },
    { id: 4, name: "Suporte Técnico", value: "24/7" },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex lg:pt-50 pt-22 px-4 items-center flex-col gap-5 "
    >
      <Banner label="Sobre Beracha Tech" />
      <h1 className="lg:text-5xl font-bold">Quem Somos</h1>
      <p className="text-neutral-500 text-center  dark:text-white">
        Beracha Tech é uma empresa de consultoria e desenvolvimento de novos
        negócios, especializada em tecnologia e inovação.
      </p>

      <span className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:px-50 mt-8">
        {cards.map((item, index) => (
          <figure
            key={index}
            className="border shadow-2xl shadow-black/10 gap-7 flex flex-col p-4 rounded-md transition-all hover:border-blue-700"
          >
            <span className="flex items-center  gap-4">
              {item.icon}
              <h1 className="text-2xl font-semibold">{item.title}</h1>
            </span>
            <p className="dark:text-neutral-500">{item.text}</p>
          </figure>
        ))}
      </span>

      <div className="lg:flex flex-col hidden w-full lg:w-[70%] py-24 sm:py-32">
        <div className="w-full px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base/7 text-gray-400">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight dark:text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <Image src={screen} alt="screen"  className="w-full mt-10"/>
      </div>
    </section>
  );
}
