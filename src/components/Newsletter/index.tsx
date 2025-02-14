import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Email inscrito:", email);
      setEmail("");
    };
  
    return (
      <section className="py-20 bg-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Inscreva-se para receber promoções e novidades.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-3 border rounded-lg bg-gray-700 border-gray-600 text-gray-100"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Inscrever
            </button>
          </form>
        </div>
      </section>
    );
  };

export default Newsletter;