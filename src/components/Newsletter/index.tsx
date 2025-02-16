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
            <div className="flex flex-col items-center justify-center px-4">
                <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-gray-100 mb-4 text-center">
                        Inscreva-se no nosso Newsletter
                    </h2>
                    <p className="text-gray-300 mb-6 text-center">
                        Inscreva-se para receber promoções e novidades.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <input
                            type="email"
                            placeholder="Adicione seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-600 text-gray-100 border-0 rounded-md p-3 mb-4
                                       focus:bg-gray-500 focus:outline-none focus:ring-2 
                                       focus:ring-blue-500 transition duration-150
                                       placeholder-gray-400"
                            required
                        />
                        
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white 
                                     font-bold py-3 px-6 rounded-md hover:from-indigo-600 
                                     hover:to-blue-600 transition duration-150
                                     transform hover:scale-105"
                        >
                            Inscrever-se
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;