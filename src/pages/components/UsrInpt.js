const UsrInpt = (props) => {
  return(
    <div className="w-auto h-auto">
      <div className="w-[20dvw] h-[30px]">
        <input 
          className="w-full h-full border-none outline-none focus:border-[1px] focus: border-[blue] focus: rounded-[7px]"
          type={props.Inpt}
          placeholder=" "
          id={props.InptId}
          
        />
        <label 
          className="cursor-pointer"
          htmlFor={props.InptId}
        >
          {props.LbVl}
        </label>
      </div>
    </div>
  );
}
export default UsrInpt; 