import { motion } from "framer-motion";

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
              className="cssbuttons-io-button"
            >
              Solicitar Orçamento
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .cssbuttons-io-button {
          background: #4f46e5; /* Cor indigo-600 */
          color: white;
          padding: 0.35em;
          padding-left: 1.2em;
          font-size: 17px;
          font-weight: 500;
          border-radius: 0.9em;
          border: none;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          box-shadow: inset 0 0 1.6em -0.6em #4338ca; /* Cor indigo-700 */
          overflow: hidden;
          position: relative;
          height: 2.8em;
          padding-right: 3.3em;
          cursor: pointer;
        }

        .cssbuttons-io-button .icon {
          background: white;
          margin-left: 1em;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          width: 2.2em;
          border-radius: 0.7em;
          box-shadow: 0.1em 0.1em 0.6em 0.2em #4338ca; /* Cor indigo-700 */
          right: 0.3em;
          transition: all 0.3s;
        }

        .cssbuttons-io-button:hover .icon {
          width: calc(100% - 0.6em);
        }

        .cssbuttons-io-button .icon svg {
          width: 1.1em;
          transition: transform 0.3s;
          color: #4f46e5; /* Cor indigo-600 */
        }

        .cssbuttons-io-button:hover .icon svg {
          transform: translateX(0.1em);
        }

        .cssbuttons-io-button:active .icon {
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
};

export default Banner;