import React from "react";
import { pizzaData } from "../../data";
const Pizza = () => {
  console.log(pizzaData);

  return (
    <div className="container mx-auto">
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {pizzaData.map((pizza, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-bold">{pizza.name}</h2>
            <p className="text-gray-700">{pizza.ingredients}</p>
            <p className="text-lg font-semibold">Price: ${pizza.price}</p>
            <img
              src={`/pizzas/${index + 1}.jpg`}
              alt={pizza.name}
              className="w-full h-48 object-cover rounded-lg mt-4"
            />
            <p
              className={`mt-2 ${
                pizza.soldOut ? "text-red-500" : "text-green-500"
              }`}
            >
              {pizza.soldOut ? "Sold Out" : "Available"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
