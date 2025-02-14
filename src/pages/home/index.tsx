import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useForm } from "react-hook-form";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
import "swiper/css";
import { FormData, TeamMember } from "../../types";


const HomePage = () => {
  return (
    <div className="scroll-smooth font-sans">
      <Header />
      <main>
        <Banner />
        <Reasons />
        <ContactForm />
        <Team />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", target: "banner" },
    { name: "Motivos", target: "reasons" },
    { name: "Contato", target: "contact" },
    { name: "Equipe", target: "team" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-blue-600">Logo</span>
          </motion.div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.target}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-blue-600 transition cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.target}
                smooth={true}
                duration={500}
                className="block text-gray-600 hover:text-blue-600 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
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

// Banner Component
const Banner = () => {
  return (
    <section id="banner" className="pt-32 pb-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Crie seu site profissional conosco
          </h1>
          <p className="text-gray-600 mb-8">
            Transforme sua presença online com nossos serviços de desenvolvimento
            web.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Reasons Component
const Reasons = () => {
  const reasons = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Motivo ${i + 1}`,
    description: `Descrição do motivo ${i + 1} para ter um site.`,
  }));

  return (
    <section id="reasons" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          10 Motivos para ter um site
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Contato</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-2">Nome</label>
            <input
              {...register("name")}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Mensagem</label>
            <textarea
              {...register("message")}
              className="w-full p-3 border rounded-lg"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

// Team Component
const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "João Silva",
      role: "Desenvolvedor Front-end",
      image: "https://via.placeholder.com/150",
      qualifications: ["React", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Nossa Equipe</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// Newsletter Component
const Newsletter = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">Newsletter</h2>
        <p className="text-gray-600 mb-8">
          Inscreva-se para receber promoções e novidades.
        </p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Seu email"
            className="flex-1 p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Inscrever
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <p>Email: contato@empresa.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Horário</h3>
          <p>Segunda a Sexta: 9h às 18h</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};