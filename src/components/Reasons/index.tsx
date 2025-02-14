import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
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
                    className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                    aria-expanded={expandedId === reason.id}
                    aria-controls={`reason-${reason.id}-content`}
                  >
                    {expandedId === reason.id ? (
                      <MinusIcon className="h-6 w-6" />
                    ) : (
                      <PlusIcon className="h-6 w-6" />
                    )}
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
      </section>
    );
  };

export default Reasons;