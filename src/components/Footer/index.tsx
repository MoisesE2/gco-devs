import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { BsCreditCard, BsCurrencyDollar } from 'react-icons/bs'
import { MdReceipt } from 'react-icons/md'

export default function Footer() {
  const items = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container mx-auto px-6">
        {/* Linha decorativa no topo (mantida) */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="border-t mt-8 pt-8 text-center"
        />
        
        {/* Grid principal do rodapé */}
        <motion.div
          variants={items}
          initial="hidden"
          whileInView="show"
          // 3 colunas para alinhar "Fale Conosco", "Horário" e "Pagamento"
          className="grid md:grid-cols-3 gap-8 justify-items-center mt-8"
        >
          {/* Coluna 1: Fale conosco */}
          <motion.div variants={item} className="space-y-4 text-center">
            <h3 className="text-xl font-bold mb-4">Fale conosco</h3>
            <div className="space-y-2">
              <p>+55 (85) 98444-0203</p>
              <p>+55 (85) 99844-4203</p>
              <p>gcodevelopers@gmail.com</p>
              <div className="flex justify-center space-x-4 mt-4">
                <FiFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
                <FiInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
              </div>
            </div>
          </motion.div>

          {/* Coluna 2 (central): Horário de funcionamento */}
          <motion.div variants={item} className="text-center">
            <p className="font-semibold">
              Horário: Segunda a Sexta - 8h às 18h
            </p>
          </motion.div>

          {/* Coluna 3: Pagamento */}
          <motion.div variants={item} className="space-y-4 text-center">
            <h3 className="text-xl font-bold mb-4">Pagamento</h3>
            <div className="flex justify-center space-x-6">
              <div className="flex flex-col items-center">
                <BsCreditCard className="text-3xl hover:text-blue-500 cursor-pointer" />
                <span className="mt-2 text-sm">Cartão</span>
              </div>
              <div className="flex flex-col items-center">
                <BsCurrencyDollar className="text-3xl hover:text-green-500 cursor-pointer" />
                <span className="mt-2 text-sm">PIX</span>
              </div>
              <div className="flex flex-col items-center">
                <MdReceipt className="text-3xl hover:text-yellow-500 cursor-pointer" />
                <span className="mt-2 text-sm">Boleto</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
