const SkillSection = () => {
    return (
      <section className="bg-[#111111] py-20 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white">What I Do</h1>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 justify-center">
          {[
            { skill: "HTML", percentage: "90%" },
            { skill: "CSS", percentage: "70%" },
            { skill: "JavaScript", percentage: "60%" },
            { skill: "Tailwind CSS", percentage: "70%" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <p className="text-6xl font-bold text-gray-300">{item.percentage}</p>
              <span className="block text-2xl text-[#27AE60] mt-3">{item.skill}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SkillSection;
  
