const FormSection = () => {
  return (
    <section>
      <div className="text-center my-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white">What I Do</h1>
      </div>
      <div>
      <form className="max-w-3xl mx-auto space-y-6">
      {/* First Row: First Name and Last Name */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-[#4C4C4C] appearance-none focus:outline-none focus:ring-0 focus:border-[#27ae60] peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-[#4C4C4C] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
            First Name
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-[#4C4C4C] appearance-none focus:outline-none focus:ring-0 focus:border-[#27ae60] peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-[#4C4C4C] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
            Last Name
          </label>
        </div>
      </div>

      {/* Second Row: Email and Phone Number */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-[#4C4C4C] appearance-none focus:outline-none focus:ring-0 focus:border-[#27ae60] peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-[#4C4C4C] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
            Email
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="tel"
            name="phone"
            id="phone"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-[#4C4C4C] appearance-none focus:outline-none focus:ring-0 focus:border-[#27ae60] peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-[#4C4C4C] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
            Phone Number
          </label>
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-[#4C4C4C] bg-[#17171700] rounded-lg border border-[#4C4C4C] appearance-none focus:outline-none focus:ring-0 focus:border-[#27ae60] peer"
          placeholder="Leave a message..."
          required
        ></textarea>
      </div>

      {/* Submit Button Centered */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-8 py-3.5 bg-emerald-500 w-[143px] text-white rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
      </div>
    </section>
  );
};

export default FormSection;
