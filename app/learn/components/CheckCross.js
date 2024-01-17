import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const CheckCross = (info) => {

  return (
    <>
      {info.data ? (
        <div className="flex flex-row justify-center items-center gap-x-1.5 text-deep-green">
        <FaCheck /> <p>{info.text}</p> 
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center gap-x-1.5 text-deep-green">
          <ImCross /> <p>{info.text}</p> 
        </div>
      )}
    </>
  );
};

export default CheckCross;
