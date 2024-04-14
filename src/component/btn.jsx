import useFrom from "../contextAmount/fromContext";
import useTo from "../contextAmount/toContext";

function Btn(props) {
  const { From, changeFrom } = useFrom();
  const { to, changeTo } = useTo();
  return (
    <div className="btn  -tracking-tighter uppercase bg-violet-900 font-bold w-full md:w-[29.6%] text-white hover:bg-violet-800  px-10 py-5 text-xl flex justify-center items-center transition-all duration-700  ">
      <button>
        convert {From} to {to}
      </button>
    </div>
  );
}
export default Btn;
