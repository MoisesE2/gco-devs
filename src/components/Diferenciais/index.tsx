import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const Diferenciais = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
    const diferenciais = [
      {
        icon: <CurrencyDollarIcon className="h-12 w-12 text-blue-500" />,
        title: "Preços Justos",
        moreText:
          "Acreditamos que um site profissional não precisa custar uma fortuna, mas também não pode faltar com qualidade.",
      },
      {
        icon: <DevicePhoneMobileIcon className="h-12 w-12 text-blue-500" />,
        title: "Sites Responsivos",
        moreText:
          "Sites que se adaptam a todo tipo de dispositivo trazem maior conforto aos seus clientes e melhoram a experiência do usuário.",
      },
      {
        icon: <ComputerDesktopIcon className="h-12 w-12 text-blue-500" />,
        title: "Design Profissional",
        moreText:
          "Interfaces modernas e funcionais. Cada projeto recebe uma nova cara inteligente, combinando estética e funcionalidade para valorizar sua marca.",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center dark:text-gray-100">
            NOSSOS DIFERENCIAIS
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {diferenciais.map((diferencial, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white dark:bg-gray-700 rounded-xl shadow-sm transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{diferencial.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-gray-100">
                    {diferencial.title}
                  </h3>
  
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                    aria-expanded={expandedIndex === index}
                  >
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
  
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-600"
                    >
                      <p className="text-gray-600 dark:text-gray-300">
                        {diferencial.moreText}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
  
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 space-y-4"
          >
            <p>
              Nossa equipe especializada combina tecnologia de ponta com soluções
              criativas para entregar resultados que realmente fazem a diferença
              para o seu negócio.
            </p>
            <div className="inline-block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                "Sua presença online merece a excelência que só profissionais
                dedicados podem oferecer!"
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

export default Diferenciais;