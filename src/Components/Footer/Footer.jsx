import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">
            {new Date().toLocaleTimeString()},{" "}
            {isOpen ? "We are currently open!" : "Sorry, we're closed"}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
