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
      name: "Melqui Morais",
      role: "Designer",
      image: "/images/Melqui.jpg",
      qualifications: ["Photoshop", "Illustrator", "Premiere", "After Effects"],
    },
    {
      id: 2,
      name: "Moisés Costa",
      role: "Full Stack Developer",
      image: "/images/Moises.jpeg",
      qualifications: ["Figma", "React.Js", "Typescript", "Tailwind CSS"],
    },
    {
      id: 3,
      name: "Francisco Oliveira",
      role: "Full Stack Developer",
      image: "https://via.placeholder.com/150",
      qualifications: ["Node.js", "Javascript", "Java", "Python"],
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-800 dark:bg-gray-900 relative">
      {/* Padrão geométrico de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full"
          style={{
            background: `
              linear-gradient(135deg, #0000 18.75%, #3B82F6 0 31.25%, #0000 0),
              linear-gradient(45deg, #0000 18.75%, #8B5CF6 0 31.25%, #0000 0),
              linear-gradient(135deg, #0000 18.75%, #3B82F6 0 31.25%, #0000 0),
              linear-gradient(45deg, #0000 18.75%, #8B5CF6 0 31.25%, #0000 0)`,
            backgroundSize: "40px 40px",
            backgroundPosition: 
              "0 0, 0 0, 20px 20px, 20px 20px",
            animation: "slide 4s linear infinite"
          }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
          loop={teamMembers.length > 3} // Só ativa loop se tiver mais que 3 membros
          className="pb-12"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="p-8 text-center bg-gray-700 rounded-2xl dark:bg-gray-800 hover:transform hover:scale-105 transition-all duration-300 h-full mx-4">
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

      <style jsx global>{`
        @keyframes slide {
          to {
            background-position: 
              40px 0,
              40px 0,
              60px 20px,
              60px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;