import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Bridal Collection",
      image: "https://i.ibb.co/ZcBZ0hF/IMG-2693s-copya-3-1.png",
    },
    {
      id: 2,
      name: "New Arrivals",
      image: "https://i.ibb.co/0G36zSB/IMG-2744ss-copy-2-1.png",
    },
    {
      id: 3,
      name: "Casual Collection",
      image: "https://i.ibb.co/HdZgCgf/IMG-2767ss-copy-2-1.png",
    },
    {
      id: 4,
      name: "Diwali Collection",
      image: "https://i.ibb.co/rG2qhQC/IMG-2775ss-copy-2-1.png",
    },
    {
      id: 5,
      name: "Best Selling's",
      image: "https://i.ibb.co/ZcBZ0hF/IMG-2693s-copya-3-1.png",
    },
    {
      id: 6,
      name: "Featured Collection",
      image: "https://i.ibb.co/HdZgCgf/IMG-2767ss-copy-2-1.png",
    },
    {
      id: 7,
      name: "Casual Collection",
      image: "https://i.ibb.co/rG2qhQC/IMG-2775ss-copy-2-1.png",
    },
    {
      id: 8,
      name: "Diwali Collection",
      image: "https://i.ibb.co/HdZgCgf/IMG-2767ss-copy-2-1.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section - SALE Banner */}
      <div className="w-full md:w-1/3 relative mb-4 md:mb-0 top-5 left-1">
        <img
          src="https://i.ibb.co/TcxLrkh/Rectangle-302-1.png" // Replace with your actual image URL
          alt="Sale Banner"
          className="w-full h-auto object-cover  shadow-md" // Make it responsive
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://i.ibb.co/ZLxML0q/SALE-1.png"
            className="p-2"
            alt="Sale"
          />
        </div>
      </div>

      {/* Right Section - Product Grid */}
      <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-200 relative shadow-md overflow-hidden flex flex-col items-center p-4  top-7"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-28 object-cover mb-4" // Adjusted size for the product image
            />
            <h3 className="text-center text-sm font-medium">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
