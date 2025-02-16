import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: "Home", target: "banner" },
    { name: "Motivos", target: "reasons" },
    { name: "Solicitar Orçamento", target: "contact" },
    { name: "Equipe", target: "team" },
  ];

  // Efeito de scroll para mudança de background e progresso
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animação dos itens do menu
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3 }
    })
  };

  // Animação do menu mobile
  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.1, when: "beforeChildren" }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  return (
    <header
      className={`fixed w-full z-50 ${
        isScrolled ? "bg-gray-800/95 backdrop-blur-sm" : "bg-transparent"
      } transition-all duration-300`}
      style={{
        boxShadow: isScrolled
          ? "0 4px 10px rgba(0,0,0,0.5), 0 0 20px #162238, inset 0 0 10px #162238"
          : "0 0 20px #162238, inset 0 0 10px #162238"
      }}
    >
      {/* Barra de progresso de scroll */}
      <motion.div 
        className="h-1 bg-blue-400"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        transition={{ duration: 0.3 }}
      />

      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <span className="text-2xl font-bold text-blue-400">Logo</span>
          </motion.div>

          <button
            className="md:hidden text-gray-100 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.div>
          </button>

          <div className="hidden md:flex gap-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial="hidden"
                animate="visible"
                custom={i}
                variants={navVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.target}
                  smooth={true}
                  duration={500}
                  className="relative text-gray-300 hover:text-blue-400 transition-colors cursor-pointer group"
                  spy={true}
                  offset={-80}
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <motion.div className="mt-4 space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                  >
                    <Link
                      to={item.target}
                      smooth={true}
                      duration={500}
                      className="block p-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
                      onClick={() => setIsOpen(false)}
                      spy={true}
                      offset={-80}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
