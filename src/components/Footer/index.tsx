import { motion } from 'framer-motion'
import { 
  FiFacebook, 
  FiInstagram, 
  FiTwitter,
  FiLinkedin,
  FiClock,
  FiMail,
  FiPhoneCall,
  FiMapPin
} from 'react-icons/fi'
import { 
  BsCreditCard,
  BsCurrencyDollar,
  BsPaypal
} from 'react-icons/bs'
import { 
  MdReceipt,
  MdSecurity
} from 'react-icons/md'
import { 
  SiVisa,
  SiMastercard,
  SiWhatsapp
} from 'react-icons/si'

export default function Footer() {
  const container = {
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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-start mt-8"
        >
          {/* Coluna 1: Contatos */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FiMapPin className="text-2xl" /> Contato
            </h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <FiPhoneCall /> +55 (85) 98444-0203
              </p>
              <p className="flex items-center gap-2">
                <SiWhatsapp /> +55 (85) 99844-4203
              </p>
              <p className="flex items-center gap-2">
                <FiMail /> gcodevelopers@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Coluna 2: Horário */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FiClock /> Horário
            </h3>
            <div className="space-y-2">
              <p>Segunda - Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Domingo: Fechado</p>
            </div>
          </motion.div>

          {/* Coluna 3: Pagamento */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BsCurrencyDollar /> Pagamento
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <SiVisa className="text-3xl hover:text-blue-600" />
                <span className="text-sm mt-1">Visa</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMastercard className="text-3xl hover:text-red-600" />
                <span className="text-sm mt-1">Mastercard</span>
              </div>
              <div className="flex flex-col items-center">
                <BsPaypal className="text-3xl hover:text-blue-500" />
                <span className="text-sm mt-1">PayPal</span>
              </div>
              <div className="flex flex-col items-center">
                <MdReceipt className="text-3xl hover:text-green-500" />
                <span className="text-sm mt-1">Boleto</span>
              </div>
              <div className="flex flex-col items-center">
                <BsCreditCard className="text-3xl hover:text-purple-500" />
                <span className="text-sm mt-1">Crédito</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna 4: Redes Sociais */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FiInstagram /> Redes
            </h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 hover:text-pink-500">
                <FiInstagram /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600">
                <FiFacebook /> Facebook
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-400">
                <FiTwitter /> Twitter
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-700">
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Coluna 5: Segurança */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <MdSecurity /> Segurança
            </h3>
            <div className="space-y-2">
              <p>Site 100% seguro</p>
              <p>SSL Certificate</p>
              <p>Política de Privacidade</p>
              <p>Termos de Uso</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divisor e Copyright */}
      </div>
    </motion.footer>
  )
}