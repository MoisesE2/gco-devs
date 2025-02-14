import "swiper/css";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Team from "../../components/Team";
import ContactForm from "../../components/ContactForm";
import Reasons from "../../components/Reasons";
import Diferenciais from "../../components/Diferenciais";
import Banner from "../../components/Banner";
import Header from "../../components/Header";

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
    </div>
  );
};

export default HomePage;
