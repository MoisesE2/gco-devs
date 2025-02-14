import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  qualifications: string[];
};

const Team = () => {
    const teamMembers: TeamMember[] = [
      {
        id: 1,
        name: "João Silva",
        role: "Desenvolvedor Front-end",
        image: "https://via.placeholder.com/150",
        qualifications: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        id: 2,
        name: "Maria Souza",
        role: "UI/UX Designer",
        image: "https://via.placeholder.com/150",
        qualifications: ["Figma", "Adobe XD", "Prototipagem"],
      },
      {
        id: 3,
        name: "Moisés Costa",
        role: "Full Stack Developer",
        image: "https://via.placeholder.com/150",
        qualifications: ["Node.js", "Python", "SQL"],
      },
    ];
  
    return (
      <section id="team" className="py-20 bg-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Nossa Equipe
          </h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            className="pb-12"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="p-8 text-center bg-gray-700 rounded-2xl dark:bg-gray-800 hover:transform hover:scale-105 transition-all duration-300 h-full">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-blue-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 mb-4 font-medium">{member.role}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.qualifications.map((qualification, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-600 dark:bg-gray-700 rounded-full text-sm text-gray-200"
                      >
                        {qualification}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };

export default Team;