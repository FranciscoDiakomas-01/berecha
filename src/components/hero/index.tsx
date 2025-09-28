"use client";
import Banner from "../Banner";
import { DotBackground } from "../ui/bg";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Rocket, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen  z-[40] w-full  flex items-center  flex-col p-3"
    >
      <DotBackground>
        <article className="min-h-screen  z-[40] w-full lg:pt-50 pt-20 flex items-center  flex-col gap-6 p-3">
          <Banner label="O futuro da sua empresa começa aqui" />
          <span className="lg:px-60">
            <motion.div className="relative mx-4 my-6 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
              <LayoutTextFlip
                text="Modernizando modelos de negócios em"
                words={["África", "Angola"]}
              />
            </motion.div>

            <p className="mt-7 lg:px-50 text-center  text-base text-black dark:text-neutral-400">
              Apresentamos propostas estratégicas para a modernização das
              infraestruturas empresariais em Angola, com foco na integração de
              soluções tecnológicas inovadoras.
            </p>

            <div className="grid lg:grid-cols-2 gap-4 w-full lg:w-[60%] pt-8 place-self-center items-center">
              <Button variant={"outline"} className="h-[50px]">
                <Users /> Seja parceiro
              </Button>
              <Button className="h-[50px]" asChild>
                <a href="#products">
                  <Rocket /> Conheça nossas soluções
                </a>
              </Button>
            </div>
          </span>
        </article>
      </DotBackground>
    </section>
  );
}
