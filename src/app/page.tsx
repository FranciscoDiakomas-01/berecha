import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import Patterns from "@/components/Patterns";
import Products from "@/components/Product";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import start from "@/assets/AI.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <About />
      <Products />
      <Patterns />
      <footer className=" dark:text-gray-300 py-10 px-6">
        <div className=" lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <a
              href="#"
              className="flex  items-center font-semibold lg:text-2xl space-x-1"
            >
              <h1>Berecha </h1>
              <Image src={start} alt="Start" />
            </a>
            <p className="mt-3 text-sm text-gray-400">
              Transformando o futuro dos pagamentos em Angola através da
              inovação tecnológica.
            </p>
          </div>
          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold ">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold ">Contacto</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  info@berachatech.it.ao
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  +244 940 23 57 70
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  +244 940 23 57 70
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg  font-semibold ">Redes sociais</h3>
            <div className="flex text-white dark:text-black space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-blue-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-sky-500 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-pink-500 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-red-600 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Berecha Tech. Todos os direitos
          reservados.
        </div>
      </footer>
    </main>
  );
}
