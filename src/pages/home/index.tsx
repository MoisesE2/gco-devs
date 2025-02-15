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
      <main>
        <Banner />
        <Diferenciais />
        <Reasons />
        <ContactForm />
        <Team />
        <Newsletter />
      </main>
      <Footer />

      {/* Botão do Chat */}
      <motion.button
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Abrir chat"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          // Adicionar lógica de abertura do chat aqui
          console.log("Abrir chat");
        }}
      >
        <ChatBubbleOvalLeftIcon className="h-8 w-8" />
      </motion.button>
    </div>
  );
};

export default HomePage;