import ConnectDB, { collectionNamesObj } from "@/Library/ConnectDB";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const servicesCollection = ConnectDB(collectionNamesObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(params.id) });

  return (
    <div>
      {/* Banner Section */}
      <section className="flex justify-center">
        <figure className="relative">
          <Image
            src="/assets/images/checkout/checkout.png"
            alt="banner"
            width={1137}
            height={300}
          />
          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white font-bold text-4xl">Service Details</h1>
          </div>
        </figure>
      </section>

      {/* Service Details Section */}
      <section className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-4">
            <Image src={data.image} alt={data.title} width={700} height={400} className="rounded-lg" />
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p>{data.description}</p>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-4">
              {data.highlights?.map((item, i) => (
                <div key={i} className="p-4 border rounded shadow-sm">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div>
              <h3 className="text-xl font-bold mb-4">3 Simple Steps to Process</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {data.steps?.map((step, i) => (
                  <div key={i} className="text-center">
                    <Image src={step.icon} alt={step.step} width={60} height={60} className="mx-auto mb-2" />
                    <h4 className="font-semibold">{step.step}</h4>
                    <p className="text-sm">{step.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded">
              <h4 className="font-semibold">Price</h4>
              <p className="text-xl font-bold text-red-600">${data.price}</p>
              <button className="btn btn-primary mt-2 w-full">Proceed Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
