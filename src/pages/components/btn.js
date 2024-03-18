import React from "react";
import { useNavigate } from "react-router-dom";
const Btn = (props) => {
  const navigate = useNavigate();
  const reqpg = () => {
    navigate(props.page);
  };
  return (
    <button className="w-[160px] h-[50px] rounded-[50px] bg-[#f4ce14] text-[white] font-medium"
            onClick={reqpg}>
      {props.txt}
    </button>
  );
}

export default Btn;
