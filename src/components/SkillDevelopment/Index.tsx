const SkillDevelopment = () => {
  const cards = [
    { title: ["Software", "Development"] },
    { title: ["Web", "Development"] },
    { title: ["Web", "Design"] }
  ];

  return (
    <section className="my-8 md:my-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center my-8 sm:my-11">
        What i do
      </h1>
      
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-14">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="w-full sm:w-[calc(50%-20px)] md:w-[350px] h-[200px] md:h-[241px] 
                      bg-[#212121] p-6 md:p-9 transform transition-all duration-300 
                      hover:scale-105 hover:shadow-xl mx-2 sm:mx-0"
          >
            <img 
              src="Images/Vector.png" 
              alt="Skill icon" 
              className="w-12 md:w-auto"
            />
            <p className="text-[#535353] text-2xl md:text-3xl lg:text-4xl font-medium py-6 md:py-8">
              {card.title[0]}<br/>{card.title[1]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillDevelopment;