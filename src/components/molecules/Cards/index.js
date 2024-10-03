import React from "react";

const Card = ({ children, cardClassName }) => {
  return (
    <>
      <div className={`border rounded-lg shadow-lg w-[300px]${cardClassName}`}>
        {children}
      </div>
    </>
  );
};

function Header({ name, desc }) {
  return (
    <div class="p-6">
      <h3 class="text-lg font-bold mb-2 text-gray-900">{name}</h3>
      <p class="text-gray-600">{desc}</p>
    </div>
  );
}

export default Card;
Card.Header = Header;
