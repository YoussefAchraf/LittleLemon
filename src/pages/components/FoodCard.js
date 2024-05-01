import React, { useState } from "react";
import { useOrder } from "../context/OrderContext.js";

const FoodCard = (props) => {
  const { addOrderItem } = useOrder();
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShareClick = () => {
    setShowShareOptions(true);
  };

  const handleCancelClick = () => {
    setShowShareOptions(false);
  };

  const handleOrderClick = () => {
    addOrderItem({ title: props.foodTitle, price: props.foodPrice });
  };

  return (
    <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={props.img} alt={props.imgAlt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-700">{props.foodTitle}</div>
        <p className="text-gray-700 text-base">{props.foodDesc}</p>
        <p className="text-[#ee9972] text-xl mt-[1dvh] font-medium">{props.foodPrice}</p>
      </div>
      <div className="px-6 py-4">
        {showShareOptions ? (
          <div className="text-center">
            <p className="mb-2 font-bold text-gray-700">Share on :</p>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-1 rounded mx-1">
                Facebook
              </button>
              <button className="bg-pink-500 hover:bg-pink-700 text-white font-semibold py-1 px-1 rounded mx-1">
                Instagram
              </button>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-1 rounded mx-1">
                X(twitter)
              </button>
            </div>
            <p className="mt-2 cursor-pointer text-[#F4CE15] underline" onClick={handleCancelClick}>Cancel</p>
          </div>
        ) : (
          <div>
            <button onClick={handleShareClick} className="bg-[#495e57] text-white font-bold py-2 px-4 rounded mr-2">
              Share
            </button>
            <button onClick={handleOrderClick} className="bg-[#F4CE15] text-white font-bold py-2 px-4 rounded">
              Order now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
