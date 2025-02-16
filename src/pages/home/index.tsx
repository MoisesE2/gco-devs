import { useState, useEffect, useRef } from "react";
import "swiper/css";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Team from "../../components/Team";
import ContactForm from "../../components/ContactForm";
import Reasons from "../../components/Reasons";
import Diferenciais from "../../components/Diferenciais";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import { Send, X, MessageCircle } from "lucide-react";

const HomePage = () => {
  const [messages, setMessages] = useState([
    { text: "Olá, Como Posso te Ajudar Hoje?", sender: "GCO" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Estou aqui por você meu parça!", sender: "CGO" }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="scroll-smooth font-sans dark:bg-gray-900 text-white">
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

      {/* Chatbot Button */}
      {!chatOpen && (
        <button
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-[99999]"
          onClick={() => setChatOpen(true)}
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chatbot */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-[calc(100%-2rem)] max-w-80 bg-gray-800 shadow-xl rounded-lg overflow-hidden z-[99999]">
          <div className="flex flex-col h-[400px]">
            {/* Cabeçalho */}
            <div className="px-4 py-3 border-b border-gray-600 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">ChatBot GCO</h2>
              <button onClick={() => setChatOpen(false)} className="text-white hover:text-gray-400">
                <X size={20} />
              </button>
            </div>

            {/* Área de Mensagens */}
            <div
              ref={chatRef}
              className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2 scrollbar-dark"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] min-w-[20%] rounded-lg px-3 py-1.5 text-sm text-white break-words ${
                    msg.sender === "user"
                      ? "self-end bg-blue-500 ml-4"
                      : "self-start bg-purple-500 mr-4"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && <div className="text-gray-400 text-sm">Typing...</div>}
            </div>

            {/* Input Area */}
            <div className="px-3 py-2 border-t border-gray-600 flex gap-2">
              <input
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white placeholder-white/70 border-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
                onClick={sendMessage}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;