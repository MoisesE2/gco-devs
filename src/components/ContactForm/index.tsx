import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  services?: string[];
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [messageContent, setMessageContent] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://api.boloko.cloud/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("E-mail enviado com sucesso!");
        reset();
        setMessageContent("");
      } else {
        alert("Erro ao enviar o e-mail.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar o formulário.");
    }
  };

  const handleMessageInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageContent(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  // Componente de ícone de erro
  const ErrorIcon = () => (
    <div
      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
      role="alert"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    </div>
  );

  const inputClass =
    "peer text-white dark:text-white pl-2 h-[40px] min-h-[40px] pr-[40px] leading-normal appearance-none resize-none box-border text-base w-full text-inherit block text-left border border-solid bg-zinc-800 dark:bg-zinc-800 rounded-[10px] m-0 p-0 outline-0 focus-visible:outline-0 focus-visible:border-teal-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#71717a2e] dark:focus-visible:ring-[#14b8a61a] peer-invalid:border-red-500";
  const labelClass =
    "cursor-text text-white dark:text-white inline-block z-0 text-sm mb-px font-normal text-start select-none absolute duration-300 transform origin-[0] translate-x-[32px] peer-focus-visible:text-teal-500 peer-focus-visible:translate-x-[8px] peer-[:not(:placeholder-shown)]:translate-x-[8px] peer-focus-visible:translate-y-[-30px] peer-[:not(:placeholder-shown)]:translate-y-[-40px]";
  const iconClass =
    "pointer-events-none absolute z-[1] left-0 top-0 bottom-0 flex items-center justify-center size-[40px] text-white dark:text-white peer-focus-visible:hidden peer-[:not(:placeholder-shown)]:hidden";
  const messageLabelClass =
    "cursor-text text-white dark:text-white inline-block z-0 text-sm mb-px font-normal text-start select-none absolute duration-300 transform origin-[0] translate-x-[32px] peer-focus-visible:text-teal-500 peer-focus-visible:translate-x-[8px] peer-[:not(:placeholder-shown)]:translate-x-[8px] peer-focus-visible:translate-y-[-75px] peer-[:not(:placeholder-shown)]:translate-y-[-48px]";

  return (
    <section id="contact" className="py-20 bg-gray-800 dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray dark:text-white">
          Faça Seu Orçamento Conosco
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {/* Campo Nome */}
              <div className="[--clr:#ffffff] dark:[--clr:#ffffff] relative flex flex-row items-center">
                <input
                  {...register("name", { required: true })}
                  id="name"
                  type="text"
                  placeholder=" "
                  className={inputClass}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                <label htmlFor="name" className={labelClass}>
                  Seu nome
                </label>
                <span className={iconClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                  </svg>
                </span>
                {errors.name && <ErrorIcon />}
              </div>

              {/* Campo Empresa */}
              <div className="[--clr:#000000] dark:[--clr:#ffffff] relative flex flex-row items-center">
                <input
                  {...register("company")}
                  id="company"
                  type="text"
                  placeholder=" "
                  className={inputClass}
                />
                <label htmlFor="company" className={labelClass}>
                  Empresa
                </label>
                <span className={iconClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0H3m14 0h2m-2 0h2M9 7h2m-2 4h2m4-4h2m-2 4h2M9 15h2m4 0h2" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Campo Email */}
              <div className="[--clr:#ffffff] dark:[--clr:#ffffff] relative flex flex-row items-center">
                <input
                  {...register("email", { required: true })}
                  id="email"
                  type="email"
                  placeholder=" "
                  className={inputClass}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <label htmlFor="email" className={labelClass}>
                  Seu email
                </label>
                <span className={iconClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                {errors.email && <ErrorIcon />}
              </div>

              {/* Campo Telefone */}
              <div className="[--clr:#ffffff] dark:[--clr:#ffffff] relative flex flex-row items-center">
                <input
                  {...register("phone")}
                  id="phone"
                  type="tel"
                  placeholder=" "
                  className={inputClass}
                />
                <label htmlFor="phone" className={labelClass}>
                  Seu telefone
                </label>
                <span className={iconClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Serviços de Interesse */}
          <div className="pt-4">
            <label className="block mb-4 text-gray dark:text-white">
              Serviços de interesse
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Sistemas / Aplicativos",
                "Identidade Visual",
                "Criar/Reformular Site",
                "Marketing Digital",
              ].map((service) => (
                <label
                  key={service}
                  className="relative flex items-center p-3 cursor-pointer rounded-lg border-2 border-white transition-all has-[:checked]:border-[#435dd8] has-[:checked]:bg-[#2d3750] hover:border-[#435dd8] hover:bg-[#2d3750]"
                >
                  <input
                    type="checkbox"
                    value={service}
                    {...register("services")}
                    className="sr-only peer"
                  />
                  <span className="text-white peer-checked:text-white transition-colors">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </div>
        
          {/* Campo Mensagem */}
          <div className="[--clr:#ffffff] dark:[--clr:#ffffff] relative flex flex-row items-center">
            <textarea
              {...register("message", { required: true })}
              id="message"
              placeholder=" "
              className={`${inputClass} min-h-[120px] !pr-[40px] !pt-4 overflow-hidden peer`}
              value={messageContent}
              onInput={handleMessageInput}
              style={{ height: "auto" }}
              aria-invalid={errors.message ? "true" : "false"}
            />
            <label htmlFor="message" className={messageLabelClass}>
              Mensagem
            </label>
            {errors.message && <ErrorIcon />}
          </div>

          <button type="submit" className="cssbuttons-io-button w-full mt-8">
            <span>Enviar</span>
            <span className="icon">
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
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
