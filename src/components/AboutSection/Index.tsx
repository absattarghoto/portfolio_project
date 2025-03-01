import { SiNamecheap } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitterSquare, FaPhoneSquareAlt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-[#111111] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#FFFFFF] mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Name Card */}
          <div className="group text-center w-full max-w-[200px]">
            <div className="h-20 w-20 bg-[#212121] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl transition-all duration-300 group-hover:bg-[#333] group-hover:scale-105">
              <SiNamecheap className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-1">Full Name</h3>
            <p className="text-gray-400 transition-colors group-hover:text-white">Abdul Sattar</p>
          </div>

          {/* Email Card */}
          <div className="group text-center w-full max-w-[200px]">
            <div className="h-20 w-20 bg-[#212121] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl transition-all duration-300 group-hover:bg-[#333] group-hover:scale-105">
              <MdOutlineEmail className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-1">Email Address</h3>
            <p className="text-gray-400 transition-colors group-hover:text-white">abdulsattarghoto321@gmail.com</p>
          </div>

          {/* Twitter Card */}
          <div className="group text-center w-full max-w-[200px]">
            <div className="h-20 w-20 bg-[#212121] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl transition-all duration-300 group-hover:bg-[#333] group-hover:scale-105">
              <FaTwitterSquare className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-1">Twitter</h3>
            <p className="text-gray-400 transition-colors group-hover:text-white">@yourhandle</p>
          </div>

          {/* Phone Card */}
          <div className="group text-center w-full max-w-[200px]">
            <div className="h-20 w-20 bg-[#212121] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl transition-all duration-300 group-hover:bg-[#333] group-hover:scale-105">
              <FaPhoneSquareAlt className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-1">Phone</h3>
            <p className="text-gray-400 transition-colors group-hover:text-white">+92 3103252121</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;