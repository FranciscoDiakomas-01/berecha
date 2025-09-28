"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import Banner from "../Banner";
import cover1 from "@/assets/card.jpeg";
import cover from "@/assets/visa.jpeg";
import tpa from "@/assets/tpa.jpeg";
import flor from "@/assets/florest.jpeg";
import ia from "@/assets/ia.jpeg";

export default function Products() {
  return (
    <section
      id="products"
      className="min-h-screen flex lg:pt-50 pt-32 items-center flex-col gap-5 px-4"
    >
      <Banner label="Nossos produtos" />
      <p className="text-neutral-500 text-center  dark:text-white">
        Soluções completas para o mercado angolano
      </p>
      <TracingBeam className="lg:px-6 px-2">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-primary  text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>{item.title}</p>

              <div className="prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg bg-neutral-400 mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}

const dummyContent = [
  {
    title: "Cartões de presentes de marcas , para pagamentos na internet",
    description: (
      <>
        <p>
          Nossos <b>cartões de presentes digitais</b> foram desenvolvidos para
          trazer praticidade, segurança e conveniência nas suas compras online.
          Com eles, você pode realizar pagamentos de forma rápida e confiável em
          diversos sites e plataformas, sem a necessidade de expor dados
          bancários ou cartões pessoais. Além de funcionarem como uma carteira
          digital segura, os cartões de oferta permitem maior controle dos seus
          gastos, sendo ideais tanto para uso próprio quanto para presentear
          amigos, familiares ou colaboradores.
        </p>
      </>
    ),
    badge: "Cartões",
    image: cover.src,
  },
  {
    title: "Terminais de pagamento automático modernos",
    description: (
      <>
        <p>
          Oferecemos <b>soluções TPA modernas e seguras</b>, desenvolvidas para
          simplificar o processo de pagamento presencial em estabelecimentos
          comerciais de todos os portes. Nossos terminais de pagamento
          automático permitem que os clientes realizem compras com cartão
          multicaixa, crédito, débito e até pagamentos por aproximação
          (contactless, NFC), garantindo rapidez, praticidade e segurança em
          cada transação. Além da confiabilidade, nossas soluções contam com
          suporte dedicado, integração com sistemas de gestão e relatórios
          detalhados para que o comerciante tenha total controle sobre as
          vendas. Seja em lojas físicas, restaurantes, mercados ou prestadores
          de serviço, nossas soluções TPA proporcionam uma experiência de
          pagamento eficiente, intuitiva e adaptada às necessidades do seu
          negócio.
        </p>
      </>
    ),
    badge: "Soluções TPA",
    image: tpa.src,
  },
  {
    title: "Infraestrutura completa para cartões Visa e Mastercard",
    description: (
      <>
        <p>
          Contamos com uma <b>infraestrutura robusta e certificada</b> que
          integra diretamente com as redes Visa e Mastercard, garantindo
          transações financeiras seguras, rápidas e confiáveis. Nossos sistemas
          são projetados para suportar alto volume de operações, oferecendo
          baixa latência, alta disponibilidade e total conformidade com padrões
          internacionais de segurança (PCI DSS). Essa base tecnológica permite
          processar pagamentos de forma transparente, seja em cartões físicos,
          digitais ou via carteiras eletrônicas, assegurando a melhor
          experiência tanto para comerciantes quanto para consumidores. Com a
          integração à infraestrutura Visa/Mastercard, proporcionamos uma
          solução globalmente reconhecida, que combina inovação, escalabilidade
          e segurança em cada transação.
        </p>
      </>
    ),
    badge: "Infraestrutura Visa/Mastercard",
    image: cover1.src,
  },
  {
    title:
      "Tecnologia inovadora para desenvolvimento do setor agrícola em Angola.",
    description: (
      <>
        <p>
          Nossas <b>soluções agrícolas foram desenvolvidas</b> para apoiar
          produtores rurais, cooperativas e empresas do setor a alcançarem maior
          produtividade, eficiência e sustentabilidade no campo. Através de
          tecnologias modernas e serviços especializados, oferecemos ferramentas
          que vão desde a gestão inteligente da produção e monitoramento em
          tempo real, até facilidades de crédito e meios de pagamento adaptados
          à realidade agrícola. Nosso objetivo é impulsionar o crescimento do
          agronegócio com soluções que otimizam recursos, reduzem custos e
          garantem mais controle sobre cada etapa do processo produtivo.
          Combinando inovação, confiança e proximidade com o produtor, nossas
          soluções agrícolas ajudam a transformar desafios em oportunidades de
          crescimento sustentável e rentável no campo.
        </p>
      </>
    ),
    badge: "Soluções Agrícolas",
    image: flor.src,
  },
  {
    title: "Soluções de Inteligência Artificial para Empresas",
    description: (
      <>
        <p>
          Nossas <b>soluções agrícolas foram desenvolvidas</b> para apoiar
          produtores rurais, cooperativas e empresas do setor a alcançarem maior
          produtividade, eficiência e sustentabilidade no campo. Através de
          tecnologias modernas e serviços especializados, oferecemos ferramentas
          que vão desde a gestão inteligente da produção e monitoramento em
          tempo real, até facilidades de crédito e meios de pagamento adaptados
          à realidade agrícola. Nosso objetivo é impulsionar o crescimento do
          agronegócio com soluções que otimizam recursos, reduzem custos e
          garantem mais controle sobre cada etapa do processo produtivo.
          Combinando inovação, confiança e proximidade com o produtor, nossas
          soluções agrícolas ajudam a transformar desafios em oportunidades de
          crescimento sustentável e rentável no campo.
        </p>
      </>
    ),
    badge: "soluções de inteligência artificial",
    image: ia.src,
  },
];
