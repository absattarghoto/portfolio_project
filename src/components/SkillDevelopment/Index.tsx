const SkillDevelopment = () => {
    const cards = [
      { title: ["Software", "Development"] },
      { title: ["Web", "Development"] },
      { title: ["Web", "Design"] }
    ];
  
    return (
      <section className="my-12">
        <h1 className="text-5xl font-bold text-white text-center my-11">What i do</h1>
        
        <div className="flex flex-wrap justify-center gap-14">
          {cards.map((card, index) => (
            <div key={index} className="h-[241px] w-[350px] bg-[#212121] p-9 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img src="Images/Vector.png" alt="Skill icon" />
              <p className="text-[#535353] text-4xl font-medium py-8">
                {card.title[0]}<br/>{ card.title[1]}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SkillDevelopment;