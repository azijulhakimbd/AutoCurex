import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="w-[1150px] mx-auto py-20">
      <div className="flex justify-between gap-5 relative">
        {/* Photo Section */}
        <section className="relative w-[460px] h-[473px]">
          <div className="rounded-2xl overflow-hidden border-4 border-white">
            <Image
              src="/assets/images/about_us/person.jpg"
              width={460}
              height={473}
              alt="Person"
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="absolute top-40 left-40 w-[327px]  border-4 border-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/about_us/parts.jpg"
              width={327}
              height={333}
              alt="Parts"
              className="rounded-2xl object-cover"
            />
          </div>
        </section>

        {/* Text Section */}
        <section className="w-[550px] space-y-4">
          <h6 className="text-[#FF3811] font-bold text-lg">About Us</h6>
          <h1 className="text-4xl font-bold leading-snug">
            We are qualified & of experience in this field
          </h1>
          <p className="text-gray-700">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <p className="text-gray-700">
            The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
