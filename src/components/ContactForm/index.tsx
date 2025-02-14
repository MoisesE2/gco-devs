import React from 'react';
import { useForm } from 'react-hook-form';

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
      formState: { errors },
    } = useForm<FormData>();
  
    const onSubmit = (data: FormData) => {
      console.log(data);
    };
  
    return (
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-gray-100">
            Faça Seu Orçamento Conosco
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-600 dark:text-gray-300">
                    Seu nome *
                  </label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1">Campo obrigatório</p>
                  )}
                </div>
  
                <div>
                  <label className="block mb-2 text-gray-600 dark:text-gray-300">
                    Empresa
                  </label>
                  <input
                    {...register("company")}
                    className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  />
                </div>
              </div>
  
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-600 dark:text-gray-300">
                    Seu email *
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">Campo obrigatório</p>
                  )}
                </div>
  
                <div>
                  <label className="block mb-2 text-gray-600 dark:text-gray-300">
                    Seu telefone
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  />
                </div>
              </div>
            </div>
  
            <div className="pt-4">
              <label className="block mb-4 text-gray-600 dark:text-gray-300">
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
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={service}
                      {...register("services")}
                      className="h-5 w-5 text-blue-600 rounded border-gray-300 dark:bg-gray-700"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>
  
            <div>
              <label className="block mb-2 text-gray-600 dark:text-gray-300">
                Mensagem *
              </label>
              <textarea
                {...register("message", { required: true })}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 mt-1">Campo obrigatório</p>
              )}
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition dark:bg-blue-700 dark:hover:bg-blue-800 font-medium"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    );
  };

export default ContactForm;