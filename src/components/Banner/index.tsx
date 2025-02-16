import { motion } from "framer-motion";

const Banner = () => {
  // Função de scroll suave com curva de easing
  const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 segundo
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <section
      id="banner"
      className="pt-32 pb-24 relative"
      style={{ backgroundColor: "#101828" }}
    >
      {/* Container do padrão geométrico modificado */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full"
          style={{
            background: `
              linear-gradient(135deg, #0000 18.75%, #2563EB 0 31.25%, #0000 0),
              linear-gradient(45deg, #0000 18.75%, #9333EA 0 31.25%, #0000 0),
              linear-gradient(135deg, #0000 18.75%, #2563EB 0 31.25%, #0000 0),
              linear-gradient(45deg, #0000 18.75%, #9333EA 0 31.25%, #0000 0)`,
            backgroundSize: "40px 40px",
            backgroundPosition: 
              "0 0, 0 0, 20px 20px, 20px 20px",
            animation: "slide 4s linear infinite"
          }}>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Crie seu site profissional conosco
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Transforme sua presença online com soluções web sob medida
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cssbuttons-io-button"
              onClick={() => smoothScroll('contact')}
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

      <style jsx global>{`
        @keyframes slide {
          to {
            background-position: 
              40px 0,
              40px 0,
              60px 20px,
              60px 20px;
          }
        }

        /* Suaviza todos os scrolls na página */
        html {
          scroll-behavior: smooth;
        }
        
        .cssbuttons-io-button {
          background: linear-gradient(45deg, #2563EB, #9333EA);
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
          box-shadow: inset 0 0 1.6em -0.6em #6b21a8;
          overflow: hidden;
          position: relative;
          height: 2.8em;
          padding-right: 3.3em;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .cssbuttons-io-button:hover {
          background: linear-gradient(45deg, #9333EA, #2563EB);
          box-shadow: inset 0 0 1.6em -0.6em #7e22ce;
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
          box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(147, 51, 234, 0.3);
          right: 0.3em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cssbuttons-io-button:hover .icon {
          width: calc(100% - 0.6em);
        }
        
        .cssbuttons-io-button .icon svg {
          width: 1.1em;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: #2563EB;
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