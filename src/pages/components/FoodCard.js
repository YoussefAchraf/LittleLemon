const FoodCard = (props) => {
  return (
    <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={props.img} alt={props.imgAlt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-700">{props.foodTitle}</div>
        <p className="text-gray-700 text-base">{props.foodDesc}</p>
        <p className="text-[#ee9972] text-xl mt-[1dvh] font-medium">{props.foodPrice}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-[#495e57] text-white font-bold py-2 px-4 rounded mr-2">
          Share
        </button>
        <button className="bg-[#F4CE15] text-white font-bold py-2 px-4 rounded">
          Order now
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
