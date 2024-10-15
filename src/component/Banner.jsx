import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-5 md:p-20 relative overflow-hidden">
      <div className="max-w-md z-10">
        <h2 className="text-yellow-600 font-bold text-2xl md:text-3xl mb-2">
          Step into Style:
        </h2>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Wholesale Wonderland for Women's Footwear!
        </h1>
        <p className="text-gray-500 mb-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium
        </p>
        <button className="bg-gray-700 text-white px-6 py-2 hover:bg-yellow-500">
          Shop Now
        </button>
      </div>
      {/* Image positioned to the right */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <img
          src="https://i.ibb.co/fn7WMTW/IMG-2792ss-copy-2-1.png"
          alt="Women's Footwear"
          className="w-64 h-36 md:w-96 md:h-48 object-cover"
        />
      </div>

      {/* Background SALE images */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="https://i.ibb.co/R7fLJNz/SALE.png"
          alt="Sale Background"
          className="absolute top-6 right-72 w-40 h-60 md:w-56 md:h-80"
        />
        <img
          src="https://i.ibb.co/R7fLJNz/SALE.png"
          alt="Sale Background"
          className="absolute bottom-16 right-10 w-40 h-60 md:w-56 md:h-80"
        />
      </div>
    </div>
  );
};

export default Banner;
