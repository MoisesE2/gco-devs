import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-100">
          10 Motivos para ter um site
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              className="relative bg-gray-700 rounded-xl shadow-lg overflow-hidden dark:bg-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative z-10 p-6 h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-100">
                      {reason.title}
                    </h3>
                    <AnimatePresence>
                      {expandedId === reason.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-gray-300 space-y-2"
                        >
                          <p className="font-medium">{reason.summary}</p>
                          <p className="text-sm">{reason.details}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() =>
                      setExpandedId(expandedId === reason.id ? null : reason.id)
                    }
                    className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg w-fit"
                  >
                    {expandedId === reason.id ? "Ler Menos" : "Ler Mais"}
                  </button>
                </div>
              </div>

              {/* Gradiente animado */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute right-0 bottom-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"
                  animate={{
                    width: expandedId === reason.id ? "100%" : "4px",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;