import { motion } from "framer-motion";
import {
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: <CurrencyDollarIcon className="h-12 w-12 text-current" />, 
      title: "Preços Justos", 
      moreText:
        "Acreditamos que um site profissional não precisa custar uma fortuna, mas também não pode faltar com qualidade.",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-12 w-12 text-current" />, 
      title: "Sites Responsivos", 
      moreText:
        "Sites que se adaptam a todo tipo de dispositivo trazem maior conforto aos seus clientes e melhoram a experiência do usuário.",
    },
    {
      icon: <ComputerDesktopIcon className="h-12 w-12 text-current" />, 
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
              className="card relative p-8 bg-white dark:bg-gray-700 rounded-xl shadow-sm cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="content relative z-10">
                <div className="mb-6 icon-container">
                  <span className="moving-gradient-icon">
                    {diferencial.icon}
                  </span>
                </div>
                <h3 className="title text-2xl font-bold mb-3 dark:text-gray-100 transition-opacity">
                  {diferencial.title}
                </h3>
                <p className="description absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-gray-600 dark:text-gray-300 opacity-0 transition-opacity">
                  {diferencial.moreText}
                </p>
              </div>
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
            <p className="moving-gradient font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
              "Sua presença online merece a excelência que só profissionais
              dedicados podem oferecer!"
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .card::before,
        .card::after {
          position: absolute;
          content: "";
          width: 20%;
          height: 20%;
          background: rgba(147, 51, 234, 0.1); /* Cor roxo-600 com 10% de opacidade */
          transition: all 0.5s;
        }

        .card::before {
          top: 0;
          right: 0;
          border-radius: 0 15px 0 100%;
        }

        .card::after {
          bottom: 0;
          left: 0;
          border-radius: 0 100% 0 15px;
        }

        .card:hover::before,
        .card:hover::after {
          width: 100%;
          height: 100%;
          border-radius: 15px;
          background: rgba(147, 51, 234, 0.1);
        }

        .card:hover .icon-container,
        .card:hover .title {
          opacity: 0;
        }

        .card:hover .description {
          opacity: 1;
        }

        .moving-gradient-icon svg {
          fill: url(#gradient);
        }

        @keyframes gradientMove {
          0% {
            stop-color: #2563eb; /* Azul-600 */
          }
          100% {
            stop-color: #9333ea; /* Roxo-600 */
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 3s infinite alternate;
        }
      `}</style>

      <svg width="0" height="0" aria-hidden="true">
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#2563eb"> {/* Azul-600 */}
            <animate attributeName="stop-color" values="#2563eb;#9333ea;#2563eb" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#9333ea"> {/* Roxo-600 */}
            <animate attributeName="stop-color" values="#9333ea;#2563eb;#9333ea" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </svg>
    </section>
  );
};

export default Diferenciais;