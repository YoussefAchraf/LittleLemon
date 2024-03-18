const ReviewCard = (props) => {
    return (
      <div className="max-w-xs mx-auto overflow-hidden shadow-lg bg-white rounded-xl my-[1dvh]">
        <img className="w-full h-48 object-cover" src={props.clientImg} alt={props.imgAlt} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-700">{props.clientName}</div>
          <p className="text-gray-700 text-base">{props.clientReviw}</p>
        </div>  
      </div>
  );
};
export default ReviewCard;