import ConnectDB from "@/Library/ConnectDB";
import React from "react";
import { GrLinkNext } from "react-icons/gr";


const Services = async() => {
    const serviceCollection= ConnectDB('Services')
  const data = await serviceCollection.find({}).toArray()

  return (
    <div className="mx-24 py-10">
      <h6 className="text-[#FF3811] font-bold text-center">Service</h6>
      <h1 className="text-4xl font-bold text-center">Our Service Area</h1>
      <p className="text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {data.map((item) => (
          <div
            className="bg-white shadow-md p-6 rounded-xl overflow-hidden border border-[#efefef] hover:shadow-xl transition-all duration-300"
            key={item._id}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-90 rounded-2xl object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {item.title}
              </h2>
              
              <p className="font-bold text-[#FF3811] mb-3">Price:${item.price}</p>

            

            <div className="justify-end flex ">
                  <button className="text-[#FF3811]">
                <GrLinkNext size={25}/>
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
