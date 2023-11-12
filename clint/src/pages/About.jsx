import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate()




  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-brand-blue font-oswald uppercase pb-4  ">About Us</h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-brand-blue font-oswald uppercase pb-4">Our Story</h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
              <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
              <p className="font-medium text-xl leading-5 text-brand-blue font-oswald uppercase mt-4">Alexa</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
              <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
              <p className="font-medium text-xl leading-5 text-brand-blue font-oswald uppercase mt-4">Olivia</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
              <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
              <p className="font-medium text-xl leading-5 text-brand-blue font-oswald uppercase mt-4">Liam</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
              <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
              <p className="font-medium text-xl leading-5 text-brand-blue font-oswald uppercase mt-4">Elijah</p>
            </div>
          </div>
        </div>
      </div>


      <div className="btn_container flex items-center justify-center mt-10">
        <button
          className="group relative inline-flex items-center overflow-hidden rounded bg-brand-blue px-8 py-3 text-white "
          onClick={() => navigate('/search')}
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all  group-hover:me-4">
            Get Started With Us
          </span>
        </button>
      </div>
    </div>
  );
};

export default About;
