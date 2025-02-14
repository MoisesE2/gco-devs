import {  motion } from "framer-motion";

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

export default Banner;