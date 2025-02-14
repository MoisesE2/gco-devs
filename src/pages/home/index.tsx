import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Bars3Icon,
  XMarkIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ChevronDownIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
import "swiper/css";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Team from "../../components/Team";

type FormData = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  services?: string[];
  message: string;
};



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", target: "banner" },
    { name: "Motivos", target: "reasons" },
    { name: "Contato", target: "contact" },
    { name: "Equipe", target: "team" },
  ];

  return (
    <header className="fixed w-full bg-gray-800 shadow-sm z-50 dark:bg-gray-900">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-blue-400">Logo</span>
          </motion.div>

          <button
            className="md:hidden text-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.target}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-blue-400 transition cursor-pointer"
                spy={true}
                offset={-80}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.target}
                smooth={true}
                duration={500}
                className="block text-gray-300 hover:text-blue-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
                spy={true}
                offset={-80}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

const Banner = () => {
  return (
    <section id="banner" className="pt-32 pb-24 bg-indigo-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Crie seu site profissional conosco
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Transforme sua presença online com soluções web sob medida
          </p>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all text-md font-medium shadow-sm"
            >
              Solicitar Orçamento
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-gray-100">
          Faça Seu Orçamento Conosco
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-600 dark:text-gray-300">
                  Seu nome *
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
                {errors.name && (
                  <p className="text-red-500 mt-1">Campo obrigatório</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-gray-600 dark:text-gray-300">
                  Empresa
                </label>
                <input
                  {...register("company")}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-600 dark:text-gray-300">
                  Seu email *
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
                {errors.email && (
                  <p className="text-red-500 mt-1">Campo obrigatório</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-gray-600 dark:text-gray-300">
                  Seu telefone
                </label>
                <input
                  {...register("phone")}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <label className="block mb-4 text-gray-600 dark:text-gray-300">
              Serviços de interesse
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Sistemas / Aplicativos",
                "Identidade Visual",
                "Criar/Reformular Site",
                "Marketing Digital",
              ].map((service) => (
                <label
                  key={service}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={service}
                    {...register("services")}
                    className="h-5 w-5 text-blue-600 rounded border-gray-300 dark:bg-gray-700"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-600 dark:text-gray-300">
              Mensagem *
            </label>
            <textarea
              {...register("message", { required: true })}
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 mt-1">Campo obrigatório</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition dark:bg-blue-700 dark:hover:bg-blue-800 font-medium"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};






const HomePage = () => {
  return (
    <div className="scroll-smooth font-sans dark:bg-gray-900">
      <Header />
      <main>
        <Banner />
        <Diferenciais />
        <Reasons />
        <ContactForm />
        <Team />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
