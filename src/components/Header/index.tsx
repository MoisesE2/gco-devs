import { useState } from "react";
import {  motion } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

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

export default Header;