import "swiper/css";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Team from "../../components/Team";
import ContactForm from "../../components/ContactForm";
import Reasons from "../../components/Reasons";
import Diferenciais from "../../components/Diferenciais";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";

const HomePage = () => {
  return (
    <div className="scroll-smooth font-sans dark:bg-gray-900">
      <Header />
      <main className="overflow-x-hidden">
        {/* Banner em tela cheia em todas as resoluções */}
        <Banner />
        
        {/* Conteúdo principal com layout responsivo */}
        <div className="w-full">
          {/* Seções com largura controlada por breakpoint */}
          <div className="mx-auto px-4 sm:px-6 lg:px-0 lg:max-w-[85%] xl:max-w-[95%] 2xl:max-w-screen-2xl">
            <Diferenciais />
            <Reasons />
            <ContactForm />
            <Team />
          </div>
        </div>

        {/* Newsletter em largura total */}
        <Newsletter />
      </main>
      <Footer />

      {/* Botão do Chat - Prioridade máxima */}
      <motion.button
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-[9999]"
        aria-label="Abrir chat"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          {/* Indicador de notificação */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
          </span>
          <ChatBubbleOvalLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
        </div>
      </motion.button>
    </div>
  );
};

export default HomePage;