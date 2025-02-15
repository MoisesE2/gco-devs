import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";

const Reasons = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const reasons = [
    {
      id: 1,
      title: "Presença Digital 24h",
      summary: "Seu negócio sempre disponível",
      details:
        "Um site funciona 24 horas por dia, 7 dias por semana, permitindo que clientes encontrem suas informações e realizem compras a qualquer momento.",
    },
    {
      id: 2,
      title: "Credibilidade Profissional",
      summary: "Aumente a confiança no seu negócio",
      details:
        "Um site bem elaborado transmite profissionalismo e estabelece credibilidade junto aos seus clientes.",
    },
    {
      id: 3,
      title: "Marketing Eficiente",
      summary: "Divulgue seus produtos/serviços",
      details:
        "Sua vitrine virtual permanente para mostrar seus principais produtos e serviços de forma organizada e atraente.",
    },
    {
      id: 4,
      title: "Atendimento Ampliado",
      summary: "Atenda mais clientes simultaneamente",
      details:
        "Reduza a necessidade de atendimento telefônico com informações disponíveis 24h no site.",
    },
    {
      id: 5,
      title: "Vendas Online",
      summary: "Expanda suas formas de vender",
      details:
        "Possibilidade de implementar loja virtual e receber pedidos diretamente pelo site.",
    },
    {
      id: 6,
      title: "Diferencial Competitivo",
      summary: "Esteja à frente da concorrência",
      details:
        "Ter um site profissional coloca seu negócio em posição de destaque no mercado.",
    },
    {
      id: 7,
      title: "Informações Atualizadas",
      summary: "Compartilhe novidades instantaneamente",
      details:
        "Atualize promoções, produtos e notícias em tempo real para seus clientes.",
    },
    {
      id: 8,
      title: "Redução de Custos",
      summary: "Economize em divulgação",
      details:
        "Custo-benefício muito melhor que formas tradicionais de publicidade.",
    },
    {
      id: 9,
      title: "Análise de Dados",
      summary: "Entenda melhor seus clientes",
      details:
        "Ferramentas de analytics permitem entender o comportamento e preferências dos visitantes.",
    },
    {
      id: 10,
      title: "Integração Digital",
      summary: "Conecte-se com outras plataformas",
      details:
        "Integração com redes sociais, marketplaces e ferramentas de marketing digital.",
    },
  ];

  return (
    <section id="reasons" className="py-20 bg-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
          10 Motivos para ter um site
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              className="p-6 bg-gray-700 rounded-lg shadow-sm dark:bg-gray-800"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-100">
                  {reason.title}
                </h3>
                <button
                  onClick={() =>
                    setExpandedId(expandedId === reason.id ? null : reason.id)
                  }
                  className="learn-more"
                  aria-expanded={expandedId === reason.id}
                  aria-controls={`reason-${reason.id}-content`}
                >
                  <span className="circle">
                    <span className="icon arrow" />
                  </span>
                  <span className="button-text">
                    {expandedId === reason.id ? "Ler Menos" : "Ler Mais"}
                  </span>
                </button>
              </div>

              <AnimatePresence>
                {expandedId === reason.id && (
                  <motion.div
                    id={`reason-${reason.id}-content`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 text-gray-300"
                  >
                    <p className="font-medium mb-2">{reason.summary}</p>
                    <p>{reason.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        button.learn-more {
          position: relative;
          display: inline-block;
          cursor: pointer;
          outline: none;
          border: 0;
          vertical-align: middle;
          text-decoration: none;
          background: transparent;
          padding: 0;
          font-size: inherit;
          font-family: inherit;
          width: 10rem;
          height: auto;
        }

        button.learn-more .circle {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          box-shadow: 0 0 5px 1px white;
          position: relative;
          display: block;
          margin: 0;
          width: 2.5rem;
          height: 2.5rem;
          background: #282936;
          border-radius: 1.625rem;
        }

        button.learn-more .circle .icon {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          background: #fff;
        }

        button.learn-more .circle .icon.arrow {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          left: 0.625rem;
          width: 1.125rem;
          height: 0.125rem;
          background: none;
        }

        button.learn-more .circle .icon.arrow::before {
          position: absolute;
          content: "";
          top: -0.29rem;
          right: 0.0625rem;
          width: 0.625rem;
          height: 0.625rem;
          border-top: 0.125rem solid #fff;
          border-right: 0.125rem solid #fff;
          transform: rotate(45deg);
        }

        button.learn-more .button-text {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0.65rem 0;
          margin: 0 0 0 1.5rem;
          color: rgba(255, 255, 255, 0.493);
          font-weight: 700;
          line-height: 1.4;
          text-align: center;
          text-transform: uppercase;
          font-size: 0.875rem;
        }

        button.learn-more:hover .circle {
          width: 100%;
          box-shadow: 0 0 10px 2px white;
        }

        button.learn-more:hover .button-text {
          transform: translate(-1.2rem, 0);
          color: #fff;
        }

        button.learn-more:hover .circle .icon.arrow {
          background: #fff;
          transform: translate(7.5rem, 0);
        }

        button.learn-more:active .circle .icon.arrow {
          transform: translate(8.2rem, 0);
          transition: all 0.3s;
        }

        button.learn-more:active .circle {
          transform: scale(0.9);
          transition: all 0.3s;
          box-shadow: 0 0 5px 0.5px white;
        }

        button.learn-more:active .button-text {
          color: rgba(255, 255, 255, 0.459);
        }
      `}</style>
    </section>
  );
};

export default Reasons;