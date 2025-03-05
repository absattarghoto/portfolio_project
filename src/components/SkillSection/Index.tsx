const SkillSection = () => {
  return (
    <section className="bg-[#111111] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-20">
      <div className="text-center mb-8 sm:mb-12 md:mb-14">
        <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold text-white">
          What I Do
        </h1>
      </div>
      
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-14 max-w-7xl mx-auto">
        {[
          { skill: "HTML", percentage: "90%" },
          { skill: "CSS", percentage: "70%" },
          { skill: "JavaScript", percentage: "60%" },
          { skill: "Tailwind CSS", percentage: "70%" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#212121] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl 
                     shadow-lg text-center transform transition-all duration-300 
                     hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl
                     min-w-[160px] mx-auto w-full"
          >
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300">
              {item.percentage}
            </p>
            <span className="block text-lg sm:text-xl md:text-2xl text-[#27AE60] mt-2 sm:mt-3">
              {item.skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;