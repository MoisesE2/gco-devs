import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const items = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={items}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Fale conosco</h3>
            <div className="space-y-2">
              <p>+55 (85) 98444-0203</p>
              <p>+55 (85) 99844-4203</p>
              <p>goodevelopers@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <FiFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
                <FiInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
                <FiLinkedin className="text-2xl hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Pagamento</h3>
            <p>Cartões de crédito/débito</p>
            <p>PIX</p>
            <p>Boleto bancário</p>
            <p className="mt-4">Horário: Segunda a Sexta - 8h às 18h</p>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 cursor-pointer">Home</li>
              <li className="hover:text-blue-400 cursor-pointer">Portfólio</li>
              <li className="hover:text-blue-400 cursor-pointer">Orçamento</li>
              <li className="hover:text-blue-400 cursor-pointer">Contato</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="border-t mt-8 pt-8 text-center"
        >
          <p>© {new Date().getFullYear()} GCO Developers. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}